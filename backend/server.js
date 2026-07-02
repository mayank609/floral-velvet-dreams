import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient } from "mongodb";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB_NAME = process.env.MONGODB_DB_NAME || "floral_velvet_dreams";

if (!MONGODB_URI) {
  console.error("MONGODB_URI is not set. Add it to backend/.env before starting the server.");
  process.exit(1);
}

const app = express();

app.use(cors());
app.use(express.json());

// UPLOAD_DIR lets deploy targets point uploads at a persistent disk
// (local disk in a container is wiped on every redeploy/restart).
const uploadDir = process.env.UPLOAD_DIR
  ? path.resolve(process.env.UPLOAD_DIR)
  : path.join(__dirname, "public", "uploads");
const legacyDbPath = path.join(__dirname, "data", "products.json");

const client = new MongoClient(MONGODB_URI);
let products;

async function connectDb() {
  await client.connect();
  const db = client.db(MONGODB_DB_NAME);
  products = db.collection("products");
  await products.createIndex({ id: 1 }, { unique: true });
  console.log(`Connected to MongoDB database "${MONGODB_DB_NAME}"`);
  await seedFromLegacyFile();
}

// One-time migration: if the products collection is empty and the old
// JSON file from the file-based storage era exists, import it so no
// existing catalog data is lost when switching to MongoDB.
async function seedFromLegacyFile() {
  const count = await products.countDocuments();
  if (count > 0) return;

  try {
    const content = await fs.readFile(legacyDbPath, "utf-8");
    const legacyProducts = JSON.parse(content);
    if (Array.isArray(legacyProducts) && legacyProducts.length > 0) {
      await products.insertMany(legacyProducts.map(({ _id, ...p }) => p));
      console.log(`Migrated ${legacyProducts.length} products from products.json into MongoDB`);
    }
  } catch (err) {
    if (err.code !== "ENOENT") {
      console.error("Failed to migrate legacy products.json:", err);
    }
  }
}

// Serve statically uploaded files
app.use("/uploads", express.static(uploadDir));

// Multer Upload Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname) || ".jpg";
    const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}${ext}`;
    cb(null, filename);
  }
});
const upload = multer({ storage });

// API Endpoints

// Health check for the deploy platform
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

// 1. Get all products
app.get("/api/products", async (req, res) => {
  try {
    const list = await products.find({}, { projection: { _id: 0 } }).toArray();
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: "Failed to read database" });
  }
});

// 2. Save or update product
app.post("/api/products", async (req, res) => {
  const product = req.body;

  if (!product || !product.id || !product.name || !product.price || !product.category || !product.image) {
    return res.status(400).json({ error: "Missing required product fields" });
  }

  try {
    await products.updateOne(
      { id: product.id },
      { $set: product },
      { upsert: true }
    );
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ error: "Failed to save product" });
  }
});

// 3. Delete product by ID
app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const result = await products.deleteOne({ id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete product" });
  }
});

// 4. Verify password
app.post("/api/verify-password", (req, res) => {
  const { password } = req.body;
  if (password === ADMIN_PASSWORD) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});

// 5. Image upload handler
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No image file provided" });
  }
  res.json({ path: `/uploads/${req.file.filename}` });
});

// Start Server
async function start() {
  await fs.mkdir(uploadDir, { recursive: true });
  await connectDb();
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend server running on port ${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
