import { createServerFn } from "@tanstack/react-start";
import { type Product } from "./products";

const BACKEND_API_URL = process.env.BACKEND_API_URL || "http://localhost:3001";

export const getProductsServer = createServerFn({ method: "GET" })
  .handler(async () => {
    const url = `${BACKEND_API_URL}/api/products`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(`Failed to fetch products: ${res.status} ${res.statusText} — ${body.slice(0, 300)}`);
      }
      return (await res.json()) as Product[];
    } catch (err) {
      console.error(`Failed to fetch products from backend at ${url}:`, err);
      return [];
    }
  });

export const saveProductServer = createServerFn({ method: "POST" })
  .validator((data: { product: Product }) => data)
  .handler(async ({ data }) => {
    const { product } = data;
    try {
      const res = await fetch(`${BACKEND_API_URL}/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      if (!res.ok) throw new Error("Failed to save product");
      return (await res.json()) as { success: boolean; product: Product };
    } catch (err) {
      console.error("Failed to save product in backend:", err);
      throw new Error("Backend save failed");
    }
  });

export const deleteProductServer = createServerFn({ method: "POST" })
  .validator((id: string) => id)
  .handler(async ({ data: id }) => {
    try {
      const res = await fetch(`${BACKEND_API_URL}/api/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete product");
      return (await res.json()) as { success: boolean };
    } catch (err) {
      console.error("Failed to delete product in backend:", err);
      throw new Error("Backend delete failed");
    }
  });

export const verifyPasswordServer = createServerFn({ method: "POST" })
  .validator((pw: string) => pw)
  .handler(async ({ data: pw }) => {
    try {
      const res = await fetch(`${BACKEND_API_URL}/api/verify-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pw }),
      });
      if (!res.ok) throw new Error("Failed to verify password");
      const body = (await res.json()) as { valid: boolean };
      return body.valid;
    } catch (err) {
      console.error("Failed to verify password with backend:", err);
      return false;
    }
  });

export const uploadImageServer = createServerFn({ method: "POST" })
  .handler(async ({ request }) => {
    try {
      const formData = await request.formData();
      const res = await fetch(`${BACKEND_API_URL}/api/upload`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Failed to upload image");
      const body = (await res.json()) as { path: string };
      return body.path;
    } catch (err: any) {
      console.error("Failed to upload image to backend:", err);
      throw new Error(err.message || "Backend image upload failed");
    }
  });
