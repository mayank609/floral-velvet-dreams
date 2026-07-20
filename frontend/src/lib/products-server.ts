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

export const getCategoriesServer = createServerFn({ method: "GET" })
  .handler(async () => {
    const url = `${BACKEND_API_URL}/api/categories`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        const body = await res.text().catch(() => "");
        throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText} — ${body.slice(0, 300)}`);
      }
      return (await res.json()) as string[];
    } catch (err) {
      console.error(`Failed to fetch categories from backend at ${url}:`, err);
      return [];
    }
  });

export const addCategoryServer = createServerFn({ method: "POST" })
  .validator((name: string) => name)
  .handler(async ({ data: name }) => {
    const res = await fetch(`${BACKEND_API_URL}/api/categories`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    const body = await res.json().catch(() => ({}) as { error?: string; name?: string });
    if (!res.ok) throw new Error(body.error || "Failed to add category");
    return body as { success: boolean; name: string };
  });

export const deleteCategoryServer = createServerFn({ method: "POST" })
  .validator((name: string) => name)
  .handler(async ({ data: name }) => {
    const res = await fetch(`${BACKEND_API_URL}/api/categories/${encodeURIComponent(name)}`, {
      method: "DELETE",
    });
    const body = await res.json().catch(() => ({}) as { error?: string });
    if (!res.ok) throw new Error(body.error || "Failed to delete category");
    return body as { success: boolean };
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
  .validator((data: FormData) => {
    if (!(data instanceof FormData)) {
      throw new Error("Invalid request data: Expected FormData");
    }
    return data;
  })
  .handler(async ({ data }) => {
    try {
      const file = data.get("image") as File | null;
      if (!file) {
        throw new Error("No image file provided in form data");
      }

      const formData = new FormData();
      formData.append("image", file, file.name);

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
