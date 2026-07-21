import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import resin from "@/assets/cat-resin.jpg";
import clay from "@/assets/cat-clay.jpg";
import jewel from "@/assets/cat-jewellery.jpg";

// Categories are managed dynamically by admins (see /api/categories) rather
// than fixed at compile time, so this is a plain string rather than a union.
export type Category = string;

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  /** Overrides the plain `inr(price)` display when the price is a range or "onwards"/"varies" text. */
  priceLabel?: string;
  category: Category;
  image: string;
  tag?: string;
  description?: string;
};

export const products: Product[] = [
  { id: "r-01", name: "Aurelia Bloom Pendant", price: 1490, category: "Kanha Ji Jhula", image: p1, tag: "New" },
  { id: "c-01", name: "Rosa Painted Bangle", price: 1290, category: "Resin Photo Frames", image: p2 },
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

// /uploads/... and /images/:id paths are proxied same-origin through
// src/routes/uploads/$.ts and src/routes/images/$id.ts, so they're used
// as-is — no client-side knowledge of the backend's URL is needed.
export const getProductImageUrl = (imagePath: string) => {
  if (!imagePath) return "";
  return imagePath;
};

