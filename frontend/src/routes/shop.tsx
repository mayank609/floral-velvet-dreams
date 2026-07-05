import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { ProductModal } from "@/components/site/ProductModal";
import { getProductsServer } from "@/lib/products-server";
import type { Product } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Manivi Creation" },
      { name: "description", content: "Shop handmade resin, clay and floral jewellery from Manivi Creation." },
    ],
  }),
  loader: async () => {
    const products = await getProductsServer();
    return { products };
  },
  component: Shop,
});

const categories = [
  "All",
  "Kanha Ji Jhula",
  "Palki",
  "Pooja Thali",
  "Resin Photo Frames",
  "Keychains",
  "Varmala Preservation",
  "Resin Home Decor",
  "Clay Decor",
  "Gift Hampers",
] as const;

function Shop() {
  const { products } = Route.useLoaderData();
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const list = cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <Layout>
      <section 
        className="bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(rgba(245, 230, 227, 0.8), rgba(245, 230, 227, 0.95)), url("https://images.unsplash.com/photo-1647203622246-e14df0d0c3a2?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
      >
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-10 md:py-28">
          <p className="eyebrow">The Collection</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">
            Every piece, <span className="font-hand text-rose">a functional artwork.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-ink/70">
            Browse our latest handmade drops — custom ocean clocks, trays, geode coasters, and wedding flower preservation blocks.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.25em] transition-colors ${
                cat === c
                  ? "border-rose bg-rose text-cream"
                  : "border-ink/20 text-ink/70 hover:border-rose hover:text-rose"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p) => (
            <ProductCard key={p.id} p={p} onClick={() => setSelectedProduct(p)} />
          ))}
        </div>

        <div className="mt-16 text-center text-xs text-ink/50 italic max-w-2xl mx-auto">
          *Note: Because our creations are individually hand-crafted and utilize natural materials (such as pressed flowers), final products may vary slightly in design or appearance and are subject to material availability.
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </Layout>
  );
}

