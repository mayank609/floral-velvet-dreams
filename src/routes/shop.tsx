import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Manivi Creation" },
      { name: "description", content: "Shop handmade resin, clay and floral jewellery from Manivi Creation." },
    ],
  }),
  component: Shop,
});

const categories = ["All", "Resin", "Clay", "Jewellery"] as const;

function Shop() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list = cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <Layout>
      <section className="bg-gradient-blush">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center sm:px-10 md:py-28">
          <p className="eyebrow">The Collection</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">
            Every piece, <span className="font-hand text-rose">a little poem.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-ink/70">
            Browse our latest handmade drops — resin locked with real petals,
            clay sculpted with love, jewellery finished in gold and pearl.
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
          {list.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>
    </Layout>
  );
}
