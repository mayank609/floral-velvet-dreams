import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { MongoClient, ObjectId } from "mongodb";
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

// Only the pre-existing, git-committed sample images live here — served
// statically, never written to at runtime (Render's free tier has no
// persistent disk, so anything written to local disk is lost on redeploy).
const uploadDir = path.join(__dirname, "public", "uploads");
const legacyDbPath = path.join(__dirname, "data", "products.json");

const client = new MongoClient(MONGODB_URI);
let products;
let images;

async function connectDb() {
  await client.connect();
  const db = client.db(MONGODB_DB_NAME);
  products = db.collection("products");
  images = db.collection("images");
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

// Uploaded images are held in memory just long enough to write them into
// MongoDB (see /api/upload) — nothing touches local disk at runtime.
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 8 * 1024 * 1024 } });

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

// 5. Image upload handler — uploads to ImgBB/Imgur if credentials exist, otherwise falls back to storing in MongoDB.
app.post("/api/upload", upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No image file provided" });
  }

  // 1. Try ImgBB if key is present
  if (process.env.IMGBB_API_KEY) {
    try {
      console.log("Uploading image to ImgBB...");
      const base64Image = req.file.buffer.toString("base64");
      const params = new URLSearchParams();
      params.append("image", base64Image);

      const response = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`ImgBB API responded with ${response.status}: ${errorText}`);
      }

      const body = await response.json();
      if (body && body.success && body.data && body.data.url) {
        console.log("Uploaded successfully to ImgBB:", body.data.url);
        return res.json({ path: body.data.url });
      } else {
        throw new Error("ImgBB API response did not indicate success or missing URL");
      }
    } catch (err) {
      console.error("ImgBB upload failed, falling back to other methods:", err);
    }
  }

  // 2. Try Imgur if client ID is present
  if (process.env.IMGUR_CLIENT_ID) {
    try {
      console.log("Uploading image to Imgur...");
      const base64Image = req.file.buffer.toString("base64");
      
      const formData = new FormData();
      formData.append("image", base64Image);
      formData.append("type", "base64");

      const response = await fetch("https://api.imgur.com/3/image", {
        method: "POST",
        headers: {
          Authorization: `Client-ID ${process.env.IMGUR_CLIENT_ID}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Imgur API responded with ${response.status}: ${errorText}`);
      }

      const body = await response.json();
      if (body && body.success && body.data && body.data.link) {
        console.log("Uploaded successfully to Imgur:", body.data.link);
        return res.json({ path: body.data.link });
      } else {
        throw new Error("Imgur API response did not indicate success or missing link");
      }
    } catch (err) {
      console.error("Imgur upload failed, falling back to other methods:", err);
    }
  }

  // 3. Fallback: Store in MongoDB
  try {
    console.log("No external upload credentials provided or upload failed. Storing image in MongoDB...");
    const result = await images.insertOne({
      contentType: req.file.mimetype,
      data: req.file.buffer,
      createdAt: new Date(),
    });
    res.json({ path: `/images/${result.insertedId}` });
  } catch (err) {
    console.error("Failed to store image in MongoDB:", err);
    res.status(500).json({ error: "Failed to store image" });
  }
});

// 6. Serve an uploaded image stored in MongoDB
app.get("/images/:id", async (req, res) => {
  let objectId;
  try {
    objectId = new ObjectId(req.params.id);
  } catch {
    return res.status(400).end();
  }

  try {
    const doc = await images.findOne({ _id: objectId });
    if (!doc) return res.status(404).end();
    res.set("Content-Type", doc.contentType);
    res.set("Cache-Control", "public, max-age=31536000, immutable");
    res.send(doc.data.buffer ? Buffer.from(doc.data.buffer) : doc.data);
  } catch (err) {
    res.status(500).end();
  }
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
