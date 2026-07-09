import { useState, useEffect } from "react";
import { createFileRoute, useRouter } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import {
  getProductsServer,
  saveProductServer,
  deleteProductServer,
  uploadImageServer,
  verifyPasswordServer,
} from "@/lib/products-server";
import { type Product, type Category, inr, getProductImageUrl } from "@/lib/products";

const CATEGORIES: Category[] = [
  "Kanha Ji Jhula",
  "Palki",
  "Pooja Thali",
  "Resin Photo Frames",
  "Keychains",
  "Varmala Preservation",
  "Resin Home Decor",
  "Clay Decor",
  "Gift Hampers",
  "Resin",
  "Clay",
  "Jewellery",
  "Wedding Preservation",
  "Ring Holders",
  "Resin Trays",
  "Coasters",
  "Boards",
  "Table Tops",
  "Lazy Susan",
  "Divine Collection",
  "Royal Pedestal",
  "Desk Decor",
  "Timepiece",
  "Entrance Decor",
  "Festive Decor",
  "Home Decor",
  "Serveware",
  "Furniture",
  "Name Plates",
  "Frames",
  "Table Decor",
];
import {
  Plus,
  Edit2,
  Trash2,
  LogOut,
  Key,
  Upload,
  Image as ImageIcon,
  Sparkles,
  Lock,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin Portal — Manivi Creation" },
      { name: "description", content: "Management console for products showcase." },
    ],
  }),
  loader: async () => {
    const products = await getProductsServer();
    return { products };
  },
  component: AdminPage,
});

function AdminPage() {
  const { products } = Route.useLoaderData();
  const router = useRouter();

  // Authentication State
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [authError, setAuthError] = useState("");

  // Dashboard & Form State
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  // Form fields
  const [name, setName] = useState("");
  const [price, setPrice] = useState(1000);
  const [priceLabel, setPriceLabel] = useState("");
  const [category, setCategory] = useState<Category>("Kanha Ji Jhula");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Check login on load
  useEffect(() => {
    const token = localStorage.getItem("manivi_admin_session");
    if (token === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    try {
      const isValid = await verifyPasswordServer({ data: password });
      if (isValid) {
        setIsLoggedIn(true);
        localStorage.setItem("manivi_admin_session", "true");
      } else {
        setAuthError("Invalid password. Please try again.");
      }
    } catch (err) {
      setAuthError("Failed to verify password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("manivi_admin_session");
  };

  // Open Form for Adding
  const openAddForm = () => {
    setEditingProduct(null);
    setName("");
    setPrice(1000);
    setPriceLabel("");
    setCategory("Kanha Ji Jhula");
    setTag("");
    setDescription("");
    setImageFile(null);
    setImageUrl("");
    setIsFormOpen(true);
  };

  // Open Form for Editing
  const openEditForm = (p: Product) => {
    setEditingProduct(p);
    setName(p.name);
    setPrice(p.price);
    setPriceLabel(p.priceLabel || "");
    setCategory(p.category);
    setTag(p.tag || "");
    setDescription(p.description || "");
    setImageFile(null);
    setImageUrl(p.image);
    setIsFormOpen(true);
  };

  // Handle Image Selection and Upload
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("image", file);
      
      const uploadedPath = await uploadImageServer({ data: formData });
      setImageUrl(uploadedPath);
    } catch (err: any) {
      console.error(err);
      alert(`Image upload failed: ${err?.message || "Unknown error"}. Please make sure your backend server is running and configured correctly.`);
    } finally {
      setUploading(false);
    }
  };

  // Handle Form Submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageUrl) {
      alert("Please upload an image first.");
      return;
    }

    setSubmitting(true);
    try {
      const newProduct: Product = {
        id: editingProduct?.id || `${category[0].toLowerCase()}-${Date.now()}`,
        name,
        price: Number(price),
        priceLabel: priceLabel || undefined,
        category,
        image: imageUrl,
        tag: tag || undefined,
        description: description || undefined,
      };

      await saveProductServer({ data: { product: newProduct } });
      
      // Close form and refresh data reactively
      setIsFormOpen(false);
      await router.invalidate();
    } catch (err) {
      alert("Failed to save product.");
    } finally {
      setSubmitting(false);
    }
  };

  // Handle Delete Product
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      await deleteProductServer({ data: id });
      await router.invalidate();
    } catch (err) {
      alert("Failed to delete product.");
    }
  };

  // Categories count for stats
  const stats = {
    total: products.length,
    resin: products.filter(p => p.category === "Resin").length,
    clay: products.filter(p => p.category === "Clay").length,
    jewellery: products.filter(p => p.category === "Jewellery").length,
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <section className="flex min-h-[80vh] items-center justify-center bg-gradient-blush px-4">
          <div className="w-full max-w-md rounded-sm bg-cream p-8 shadow-luxe border border-gold-soft/30">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blush-soft text-rose">
                <Lock className="h-5 w-5" />
              </div>
              <h2 className="mt-5 font-display text-3xl text-ink">Admin Login</h2>
              <p className="mt-2 text-xs uppercase tracking-widest text-ink/50">Manivi Creation Control Panel</p>
            </div>

            <form onSubmit={handleLogin} className="mt-8 space-y-6">
              <div>
                <label className="eyebrow block !text-ink/65 mb-2">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full border-b border-ink/30 bg-transparent py-2.5 pl-3 pr-10 text-sm outline-none focus:border-rose transition-colors"
                  />
                  <Key className="absolute right-3 top-3 h-4 w-4 text-ink/40" />
                </div>
                {authError && <p className="mt-2 text-xs text-rose">{authError}</p>}
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-ink py-4 text-[11px] uppercase tracking-[0.3em] text-cream transition-colors hover:bg-rose flex items-center justify-center gap-2 group"
              >
                Access Control Panel
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="bg-gradient-blush border-b border-gold-soft/40">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="eyebrow">Studio Management</p>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl text-ink">
              Product <span className="font-hand text-rose">Dashboard</span>
            </h1>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-[10px] uppercase tracking-widest text-ink/70 hover:border-rose hover:text-rose transition-colors"
          >
            <LogOut className="h-3.5 w-3.5" />
            Logout
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-10">
        {/* STATS CARDS */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { label: "Total Products", value: stats.total, color: "text-ink" },
            { label: "Resin Art", value: stats.resin, color: "text-rose" },
            { label: "Clay Florals", value: stats.clay, color: "text-gold" },
            { label: "Jewellery Pieces", value: stats.jewellery, color: "text-ink/80" },
          ].map((stat, i) => (
            <div key={i} className="rounded-sm bg-cream p-5 shadow-sm border border-gold-soft/20 text-center">
              <p className="text-[10px] uppercase tracking-wider text-ink/50">{stat.label}</p>
              <p className={`mt-2 font-display text-4xl ${stat.color} font-medium`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* CONTROLS */}
        <div className="mt-12 flex items-center justify-between">
          <h2 className="font-display text-2xl text-ink">Showcase Items</h2>
          <button
            onClick={openAddForm}
            className="flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-cream hover:bg-rose transition-all duration-300 shadow-md hover:-translate-y-0.5"
          >
            <Plus className="h-4 w-4" /> Add Product
          </button>
        </div>

        {/* PRODUCTS TABLE */}
        <div className="mt-6 overflow-hidden rounded-sm bg-cream shadow-sm border border-gold-soft/20">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gold-soft/30 bg-blush-soft/20 text-[10px] uppercase tracking-widest text-ink/55">
                  <th className="px-6 py-4">Image</th>
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Category</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Tag</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gold-soft/20 text-sm text-ink/80">
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-ink/40 font-display text-lg">
                      No products added yet. Click "Add Product" to start showcasing!
                    </td>
                  </tr>
                ) : (
                  products.map((p) => (
                    <tr key={p.id} className="hover:bg-blush-soft/10 transition-colors">
                      <td className="px-6 py-4">
                        <div className="h-12 w-12 overflow-hidden rounded bg-blush-soft/30">
                          <img src={getProductImageUrl(p.image)} alt={p.name} className="h-full w-full object-cover" />
                        </div>
                      </td>
                      <td className="px-6 py-4 font-display text-base font-medium text-ink">{p.name}</td>
                      <td className="px-6 py-4">
                        <span className="rounded-full bg-blush-soft px-3 py-1 text-xs text-rose">{p.category}</span>
                      </td>
                      <td className="px-6 py-4 font-medium text-rose">{p.priceLabel || inr(p.price)}</td>
                      <td className="px-6 py-4">
                        {p.tag ? (
                          <span className="rounded-full bg-gold-soft/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-ink/70">
                            {p.tag}
                          </span>
                        ) : (
                          <span className="text-ink/30">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => openEditForm(p)}
                            className="rounded-full p-2 text-ink/60 hover:bg-blush-soft hover:text-rose transition-colors"
                            title="Edit Product"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(p.id)}
                            className="rounded-full p-2 text-ink/60 hover:bg-rose/10 hover:text-rose transition-colors"
                            title="Delete Product"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FORM MODAL */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm animate-fade-in">
          <div className="absolute inset-0" onClick={() => setIsFormOpen(false)} />
          <div className="relative w-full max-w-lg rounded-sm bg-cream p-6 sm:p-8 shadow-2xl animate-zoom-in border border-gold-soft/30 max-h-[90vh] overflow-y-auto">
            <h3 className="font-display text-2xl text-ink mb-6">
              {editingProduct ? "Edit Product" : "Add New Showcase Product"}
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="eyebrow block !text-ink/60">Product Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Aurelia Bloom Pendant"
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-sm outline-none focus:border-rose"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="eyebrow block !text-ink/60">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as Category)}
                    className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-sm outline-none focus:border-rose"
                  >
                    {CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="eyebrow block !text-ink/60">Price (INR)</label>
                  <input
                    type="number"
                    required
                    min={0}
                    value={price}
                    onChange={(e) => setPrice(Number(e.target.value))}
                    placeholder="e.g. 1490"
                    className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-sm outline-none focus:border-rose"
                  />
                </div>
              </div>

              <div>
                <label className="eyebrow block !text-ink/60">Price Label (Optional)</label>
                <input
                  type="text"
                  value={priceLabel}
                  onChange={(e) => setPriceLabel(e.target.value)}
                  placeholder="e.g. ₹2,499 – ₹4,999 or ₹999 onwards — shown instead of the plain price above"
                  className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-sm outline-none focus:border-rose"
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="eyebrow block !text-ink/60">Tag (Optional)</label>
                  <input
                    type="text"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    placeholder="e.g. New, Bestseller, Limited"
                    className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-sm outline-none focus:border-rose"
                  />
                </div>

                <div>
                  <label className="eyebrow block !text-ink/60">Product Image</label>
                  <div className="mt-2 flex items-center gap-3">
                    <label className="flex cursor-pointer items-center justify-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-[10px] uppercase tracking-wider text-ink/75 hover:bg-blush-soft transition-colors">
                      <Upload className="h-3.5 w-3.5" />
                      Browse
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                    {uploading && <span className="text-xs text-ink/50">Uploading...</span>}
                    {imageUrl && (
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 overflow-hidden rounded border border-gold-soft">
                          <img src={getProductImageUrl(imageUrl)} alt="preview" className="h-full w-full object-cover" />
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setImageUrl("");
                            setImageFile(null);
                          }}
                          className="rounded-full p-1.5 text-ink/60 hover:bg-rose/10 hover:text-rose transition-colors"
                          title="Remove Image"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <label className="eyebrow block !text-ink/60">Description (Optional)</label>
                <textarea
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe details, materials used, size etc..."
                  className="mt-2 w-full border border-ink/20 rounded bg-transparent p-3 text-sm outline-none focus:border-rose"
                />
              </div>

              <div className="mt-8 flex justify-end gap-3 border-t border-gold-soft/30 pt-5">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="rounded-full border border-ink/20 px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-ink/70 hover:bg-blush-soft transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={uploading || submitting}
                  className="rounded-full bg-ink px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-cream hover:bg-rose disabled:opacity-50 transition-colors"
                >
                  {submitting ? "Saving..." : "Save Product"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
}
