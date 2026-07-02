import express from "express";
import cors from "cors";
import multer from "multer";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin123";

const app = express();

app.use(cors());
app.use(express.json());

const dbDir = path.join(__dirname, "data");
const dbPath = path.join(dbDir, "products.json");
const uploadDir = path.join(__dirname, "public", "uploads");

// Helper to ensure database and default uploads exist
async function ensureDb() {
  try {
    await fs.mkdir(dbDir, { recursive: true });
    await fs.mkdir(uploadDir, { recursive: true });
  } catch (err) {
    console.error("Failed to create directories in backend:", err);
  }

  try {
    await fs.access(dbPath);
  } catch {
    const initialProducts = [
      { id: "kp-01", name: "Handcrafted Floral Kanha Ji Jhula", price: 2890, category: "Kanha Ji Jhula", image: "https://www.zwende.com/cdn/shop/files/1_32bc60e9-eb4c-49f8-9ddc-bc0aa1cbe4cc.jpg?v=1727520894", tag: "New", description: "A beautiful wooden Jhula embellished with intricate hand-painted details, pearl hangings, and velvet cushioning for Kanha Ji." },
      { id: "kp-02", name: "Royal Decorative Kanha Palki", price: 3490, category: "Palki", image: "https://i0.wp.com/decorsutrablog.com/wp-content/uploads/2020/05/Decorsutra_Palki-Bridal-Entry_fairytale-Weddings.jpg?fit=1072%2C1171&ssl=1", description: "Exquisite royal design palki adorned with gold accents, floral patterns, and comfortable seating cushion." },
      { id: "kp-03", name: "Premium Floral Pooja Thali Set", price: 1490, category: "Pooja Thali", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HX8DoI___GHvFbjwoZp2Jq00_pov_Xcku8UVn4teZJFoKCpRLZ6TEmRW&s=10", description: "Stunning Pooja Thali set featuring decorative floral borders, complete with gold bowls and standard diwali accessories." },
      { id: "rf-01", name: "Custom Keepsake Resin Photo Frame", price: 2490, category: "Resin Photo Frames", image: "https://images.unsplash.com/photo-1609811692040-35b06faddb8d?q=80&w=1674&auto=format&fit=crop&w=800&q=80", tag: "Bestseller", description: "A heavy-duty crystal clear resin frame cast with real dried petals and gold leaf detailing to hold your favorite memory." },
      { id: "rf-02", name: "Custom Alphabet Resin Keychain", price: 390, category: "Keychains", image: "https://images.unsplash.com/photo-1687363714985-990685339050?q=80&w=987&auto=format&fit=crop&w=800&q=80", description: "Personalised letter keychain containing real gold flakes, dried baby breath flowers, and premium alloy ring." },
      { id: "rf-03", name: "Preserved Bridal Bouquet Photo Frame", price: 4590, category: "Resin Photo Frames", image: "https://images.unsplash.com/photo-1609811692040-35b06faddb8d?q=80&w=1674&auto=format&fit=crop&w=800&q=80", tag: "Limited", description: "A custom 3D resin block frame built to display your favorite wedding photograph surrounded by real preserved bridal roses." }
    ];

    try {
      await fs.writeFile(dbPath, JSON.stringify(initialProducts, null, 2), "utf-8");
      console.log("Database initialized successfully at backend/data/products.json");
    } catch (err) {
      console.error("Failed to write initial products JSON file:", err);
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

// 1. Get all products
app.get("/api/products", async (req, res) => {
  await ensureDb();
  try {
    const content = await fs.readFile(dbPath, "utf-8");
    res.json(JSON.parse(content));
  } catch (err) {
    res.status(500).json({ error: "Failed to read database" });
  }
});

// 2. Save or update product
app.post("/api/products", async (req, res) => {
  await ensureDb();
  const product = req.body;
  
  if (!product || !product.id || !product.name || !product.price || !product.category || !product.image) {
    return res.status(400).json({ error: "Missing required product fields" });
  }

  try {
    const content = await fs.readFile(dbPath, "utf-8");
    const list = JSON.parse(content);

    const index = list.findIndex(p => p.id === product.id);
    if (index > -1) {
      list[index] = product;
    } else {
      list.push(product);
    }

    await fs.writeFile(dbPath, JSON.stringify(list, null, 2), "utf-8");
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ error: "Failed to save product" });
  }
});

// 3. Delete product by ID
app.delete("/api/products/:id", async (req, res) => {
  await ensureDb();
  const { id } = req.params;

  try {
    const content = await fs.readFile(dbPath, "utf-8");
    let list = JSON.parse(content);
    
    const originalLength = list.length;
    list = list.filter(p => p.id !== id);

    if (list.length === originalLength) {
      return res.status(404).json({ error: "Product not found" });
    }

    await fs.writeFile(dbPath, JSON.stringify(list, null, 2), "utf-8");
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
app.listen(PORT, async () => {
  await ensureDb();
  console.log(`Backend server running on http://localhost:${PORT}`);
});
