import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";
import resin from "@/assets/cat-resin.jpg";
import clay from "@/assets/cat-clay.jpg";
import jewel from "@/assets/cat-jewellery.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Resin" | "Clay" | "Jewellery";
  image: string;
  tag?: string;
};

export const products: Product[] = [
  { id: "r-01", name: "Aurelia Bloom Pendant", price: 1490, category: "Resin", image: p1, tag: "New" },
  { id: "c-01", name: "Rosa Painted Bangle", price: 1290, category: "Clay", image: p2 },
  { id: "j-01", name: "Petal Pearl Drops", price: 1690, category: "Jewellery", image: p3, tag: "Bestseller" },
  { id: "c-02", name: "Blush Blossom Locket", price: 1390, category: "Clay", image: p4 },
  { id: "r-02", name: "Meadow Resin Charm", price: 1190, category: "Resin", image: resin },
  { id: "c-03", name: "Pastel Petal Earrings", price: 990, category: "Clay", image: clay, tag: "Limited" },
  { id: "j-02", name: "Pearl Garden Bracelet", price: 1990, category: "Jewellery", image: jewel },
  { id: "r-03", name: "Wildflower Ring", price: 890, category: "Resin", image: p1 },
];

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
