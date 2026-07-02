import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { ProductModal } from "@/components/site/ProductModal";
import { Reveal } from "@/components/site/Reveal";
import { getProductsServer } from "@/lib/products-server";
import { type Product } from "@/lib/products";
import { ArrowRight, Sparkles, Leaf, HandHeart, Star } from "lucide-react";
const heroBgImage = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1600&q=80";
const heroProductImage = "https://images.unsplash.com/photo-1665410023235-c6bc38ee0f85?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const craft = "https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80";

export const Route = createFileRoute("/")({
  loader: async () => {
    const products = await getProductsServer();
    return { products };
  },
  component: Home,
});

function Home() {
  const { products } = Route.useLoaderData();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const featured = products.slice(0, 4);
  return (
    <Layout>
      {/* HERO */}
      <section 
        className="relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(245, 230, 227, 0.75), rgba(245, 230, 227, 0.95)), url("${heroBgImage}")` }}
      >
        {/* floating decorative blobs */}
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush/50 blur-3xl animate-blob" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-gold-soft/40 blur-3xl animate-blob [animation-delay:-6s]" />

        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 md:grid-cols-2 md:py-24">
          <div className="relative z-10">
            <p className="eyebrow animate-fade-up [animation-delay:100ms]">Manivi Creation · Est. 2024</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl">
              <span className="inline-block animate-fade-up [animation-delay:200ms]">Handcrafted</span>
              <br />
              <span className="inline-block animate-fade-up font-hand text-6xl text-rose [animation-delay:400ms] sm:text-7xl md:text-8xl">resin & decor</span>
              <br />
              <span className="inline-block animate-fade-up [animation-delay:600ms]">creations.</span>
            </h1>
            <p className="mt-6 max-w-md text-base text-ink/70 animate-fade-up [animation-delay:800ms]">
              Slow-made, premium home accents — custom ocean clocks, trays,
              geode coaster sets, wedding flower preservation blocks, and hand-sculpted decor.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:1000ms]">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.3em] text-cream transition-all duration-500 hover:bg-rose hover:shadow-luxe hover:-translate-y-0.5"
              >
                Shop Collection
                <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="link-underline text-[11px] uppercase tracking-[0.3em] text-ink/70 hover:text-rose"
              >
                Our Story
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 text-xs text-ink/60 animate-fade-up [animation-delay:1200ms]">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <span className="font-semibold text-rose">5+ Years in Business · 200+ Happy Customers</span>
            </div>
          </div>

          <div className="relative animate-zoom-in [animation-delay:200ms]">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-gold-soft/70 animate-spin-slow" />
            <div className="absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-blush/40 blur-3xl" />
            <img
              src={heroProductImage}
              alt="Handcrafted luxury resin serving tray"
              width={1600}
              height={1200}
              className="relative aspect-[4/5] w-full rounded-sm object-cover shadow-luxe"
            />
            <img
              src="/logo.png"
              alt=""
              className="absolute -bottom-8 -left-8 hidden h-32 w-32 rounded-full ring-4 ring-cream animate-float md:block"
            />
          </div>
        </div>
      </section>

      {/* MARQUEE / VALUES */}
      <section className="border-y border-gold-soft/40 bg-cream overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-3 sm:px-10">
          {[
            { icon: HandHeart, t: "Handmade to order", s: "Individually poured and crafted by Ruchi." },
            { icon: Sparkles, t: "Premium quality resins", s: "Non-toxic, high-gloss, crystal clear." },
            { icon: Star, t: "Bespoke commissions", s: "Custom preservation blocks and custom sizes." },
          ].map(({ icon: Icon, t, s }, i) => (
            <Reveal key={t} delay={i * 120} className="flex items-center gap-4">
              <Icon className="h-5 w-5 shrink-0 text-rose transition-transform duration-500 hover:rotate-12 hover:scale-110" />
              <div className="min-w-0">
                <p className="font-display text-lg">{t}</p>
                <p className="text-xs text-ink/60">{s}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <Reveal className="mb-14 text-center">
          <p className="eyebrow">Our Collections</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Curated with intention</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink/60">
            Three quiet worlds of craft — each one born from petals, patience and a little bit of magic.
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Kanha Ji Jhula", tag: "Handpainted Devotional Jhulas", img: "https://www.zwende.com/cdn/shop/files/1_32bc60e9-eb4c-49f8-9ddc-bc0aa1cbe4cc.jpg?v=1727520894" },
            { name: "Palki", tag: "Decorative Royal Palkis", img: "https://i0.wp.com/decorsutrablog.com/wp-content/uploads/2020/05/Decorsutra_Palki-Bridal-Entry_fairytale-Weddings.jpg?fit=1072%2C1171&ssl=1" },
            { name: "Pooja Thali", tag: "Premium Traditional Thali Sets", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5HX8DoI___GHvFbjwoZp2Jq00_pov_Xcku8UVn4teZJFoKCpRLZ6TEmRW&s=10" },
            { name: "Resin Photo Frames", tag: "Preserved Floral Frames", img: "https://images.unsplash.com/photo-1609811692040-35b06faddb8d?q=80&w=1674&auto=format&fit=crop&w=800&q=80" },
            { name: "Keychains", tag: "Alphabet & custom keychains", img: "https://images.unsplash.com/photo-1687363714985-990685339050?q=80&w=987&auto=format&fit=crop&w=800&q=80" },
          ].map((c, i) => (
            <Reveal key={c.name} delay={i * 150}>
              <Link
                to="/shop"
                className="hover-lift group relative block aspect-[3/4] overflow-hidden rounded-sm"
              >
                <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/80" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                  <p className="text-[10px] uppercase tracking-[0.3em] opacity-80">{c.tag}</p>
                  <h3 className="font-display text-3xl">{c.name}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:gap-3">
                    Explore <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section 
        className="bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(rgba(245, 230, 227, 0.8), rgba(245, 230, 227, 0.9)), url("https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1600&q=80")' }}
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 sm:px-10 md:grid-cols-2">
          <Reveal className="relative">
            <img src={craft} alt="Artisan at work" loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover shadow-luxe transition-transform duration-700 hover:scale-[1.02]" />
            <div className="absolute -bottom-6 -right-6 hidden rounded-full bg-cream px-6 py-6 text-center shadow-luxe animate-float sm:block">
              <div className="font-hand text-4xl text-rose leading-none">since</div>
              <div className="font-display text-3xl">2024</div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">A tiny studio, <br /> big <span className="text-shimmer">creative</span> dreams.</h2>
            <p className="mt-6 text-ink/70">
              Manivi Creations is a dedicated resin and handmade home decor studio. Our journey is centered on turning high-quality resins and clays into statement decorative accents that elevate your living space.
            </p>
            <p className="mt-4 text-ink/70">
              Every single tray, clock, coaster set, and preservation block is poured, cured, and hand-finished with love by Ruchi Kakani.
            </p>
            <Link
              to="/about"
              className="link-underline mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] hover:text-rose"
            >
              Read our story <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <Reveal className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Just Bloomed</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">New this season</h2>
          </div>
          <Link to="/shop" className="link-underline text-[11px] uppercase tracking-[0.3em] text-ink/70 hover:text-rose">
            View all →
          </Link>
        </Reveal>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 md:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 120}>
              <ProductCard p={p} onClick={() => setSelectedProduct(p)} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-gold-soft/40 bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-10 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {[
            { q: "The final piece was elegant and thoughtfully designed.", n: "Mudit" },
            { q: "Neat finishing and excellent quality. The work speaks for itself.", n: "Priyal" },
            { q: "A lovely handmade creation with impressive detailing. The design was unique and beautifully executed.", n: "Rohan" },
            { q: "Wonderful craftsmanship and a smooth overall experience.", n: "Anjali" },
            { q: "Every piece reflects creativity, patience, and passion.", n: "Shikha" },
          ].map((t, i) => (
            <Reveal key={t.n} delay={i * 120} as="figure" className="text-center">
              <div className="mx-auto flex justify-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <blockquote className="mt-5 font-display text-lg italic text-ink/80">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.25em] text-ink/50">— {t.n}</figcaption>
            </Reveal>
          ))}
        </div>
      </section>

      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </Layout>
  );
}
