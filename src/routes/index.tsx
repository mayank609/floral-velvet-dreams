import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { products } from "@/lib/products";
import { ArrowRight, Sparkles, Leaf, HandHeart, Star } from "lucide-react";
import hero from "@/assets/hero-jewellery.jpg";
import craft from "@/assets/about-craft.jpg";
import resin from "@/assets/cat-resin.jpg";
import clay from "@/assets/cat-clay.jpg";
import jewel from "@/assets/cat-jewellery.jpg";
import logo from "@/assets/manivi-logo.png.asset.json";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = products.slice(0, 4);
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-blush">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 md:grid-cols-2 md:py-24">
          <div className="relative z-10">
            <p className="eyebrow">Manivi Creation · Est. 2024</p>
            <h1 className="mt-5 font-display text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl">
              Little blooms,
              <br />
              <span className="font-hand text-6xl text-rose sm:text-7xl md:text-8xl">forever</span>
              <br />
              in resin & clay.
            </h1>
            <p className="mt-6 max-w-md text-base text-ink/70">
              Slow-made, one-of-a-kind jewellery — real flowers preserved in
              crystal-clear resin and hand-sculpted clay, finished with pearls
              and gold.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/shop"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.3em] text-cream transition-all hover:bg-rose"
              >
                Shop Collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="text-[11px] uppercase tracking-[0.3em] text-ink/70 underline-offset-4 hover:text-rose hover:underline"
              >
                Our Story
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-6 text-xs text-ink/60">
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <span>Loved by 2,400+ souls</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full border border-gold-soft/70" />
            <div className="absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-blush/40 blur-3xl" />
            <img
              src={hero}
              alt="Handcrafted resin jewellery with pressed flowers"
              width={1600}
              height={1200}
              className="relative aspect-[4/5] w-full rounded-sm object-cover shadow-luxe"
            />
            <img
              src={logo.url}
              alt=""
              className="absolute -bottom-8 -left-8 hidden h-32 w-32 rounded-full ring-4 ring-cream md:block"
            />
          </div>
        </div>
      </section>

      {/* MARQUEE / VALUES */}
      <section className="border-y border-gold-soft/40 bg-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-3 sm:px-10">
          {[
            { icon: HandHeart, t: "Handmade to order", s: "Each piece touched only by our hands." },
            { icon: Leaf, t: "Real preserved flowers", s: "Foraged, dried, set in crystal resin." },
            { icon: Sparkles, t: "Gold-plated finishings", s: "Tarnish-resistant, wear every day." },
          ].map(({ icon: Icon, t, s }) => (
            <div key={t} className="flex items-center gap-4">
              <Icon className="h-5 w-5 shrink-0 text-rose" />
              <div className="min-w-0">
                <p className="font-display text-lg">{t}</p>
                <p className="text-xs text-ink/60">{s}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="mb-14 text-center">
          <p className="eyebrow">Our Collections</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">Curated with intention</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-ink/60">
            Three quiet worlds of craft — each one born from petals, patience and a little bit of magic.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Resin", tag: "Preserved blooms", img: resin },
            { name: "Clay", tag: "Sculpted florals", img: clay },
            { name: "Jewellery", tag: "Pearl & petal", img: jewel },
          ].map((c) => (
            <Link
              key={c.name}
              to="/shop"
              className="group relative block aspect-[3/4] overflow-hidden rounded-sm"
            >
              <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-cream">
                <p className="text-[10px] uppercase tracking-[0.3em] opacity-80">{c.tag}</p>
                <h3 className="font-display text-3xl">{c.name}</h3>
                <span className="mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] opacity-80 transition-opacity group-hover:opacity-100">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="bg-gradient-blush">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 sm:px-10 md:grid-cols-2">
          <div className="relative">
            <img src={craft} alt="Artisan at work" loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover shadow-luxe" />
            <div className="absolute -bottom-6 -right-6 hidden rounded-full bg-cream px-6 py-6 text-center shadow-luxe sm:block">
              <div className="font-hand text-4xl text-rose leading-none">since</div>
              <div className="font-display text-3xl">2024</div>
            </div>
          </div>
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">A tiny studio, <br /> big blooming dreams.</h2>
            <p className="mt-6 text-ink/70">
              Manivi Creation began at a kitchen table with a pot of resin, a
              scatter of dried flowers and a promise: to make jewellery that
              feels like a keepsake, not a trend.
            </p>
            <p className="mt-4 text-ink/70">
              Every piece is poured, sanded and set by hand. No two are ever
              exactly alike — because no two flowers ever are.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 border-b border-ink/40 pb-1 text-[11px] uppercase tracking-[0.3em] hover:border-rose hover:text-rose"
            >
              Read our story <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Just Bloomed</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">New this season</h2>
          </div>
          <Link to="/shop" className="text-[11px] uppercase tracking-[0.3em] text-ink/70 hover:text-rose">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 md:grid-cols-4">
          {featured.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-y border-gold-soft/40 bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-10 md:grid-cols-3">
          {[
            { q: "The pendant is impossibly delicate — like holding a garden.", n: "Ananya S." },
            { q: "Feels heirloom. I've received compliments every single day.", n: "Priya M." },
            { q: "Wrapped like a love letter. The craft speaks for itself.", n: "Isha R." },
          ].map((t) => (
            <figure key={t.n} className="text-center">
              <div className="mx-auto flex justify-center gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              </div>
              <blockquote className="mt-5 font-display text-xl italic text-ink/80">
                "{t.q}"
              </blockquote>
              <figcaption className="mt-4 text-xs uppercase tracking-[0.25em] text-ink/50">— {t.n}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* WORKSHOP CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="relative overflow-hidden rounded-sm bg-ink px-8 py-16 text-cream sm:px-16 sm:py-24">
          <div className="absolute -right-10 top-0 h-full w-1/2 bg-gradient-to-l from-rose/40 to-transparent" />
          <div className="relative max-w-xl">
            <p className="eyebrow !text-gold-soft">Workshops</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Come, make something beautiful.</h2>
            <p className="mt-5 text-cream/70">
              Small-group resin and clay sessions in our sunlit studio. Leave
              with your own piece — and possibly a new obsession.
            </p>
            <Link
              to="/workshops"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-[11px] uppercase tracking-[0.3em] text-ink hover:bg-blush-soft"
            >
              Reserve a seat <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
