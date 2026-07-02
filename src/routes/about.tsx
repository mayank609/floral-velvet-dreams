import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import craft from "@/assets/about-craft.jpg";
import hero from "@/assets/hero-jewellery.jpg";
import logo from "@/assets/manivi-logo.png.asset.json";
import { Leaf, HandHeart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Manivi Creation" },
      { name: "description", content: "The story behind Manivi Creation — a slow, handmade jewellery studio for resin, clay and florals." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      <section className="bg-gradient-blush">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 md:grid-cols-2 md:py-28">
          <div>
            <p className="eyebrow">Our Story</p>
            <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
              Made slowly,
              <br />
              <span className="font-hand text-rose">with love,</span>
              <br />
              in small batches.
            </h1>
            <p className="mt-6 max-w-md text-ink/70">
              Manivi Creation is a two-hands studio built on quiet mornings,
              dried flowers and the belief that everyday jewellery can still
              feel like an heirloom.
            </p>
          </div>
          <img src={craft} alt="Studio craft" loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover shadow-luxe" />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
        <img src={logo.url} alt="" className="mx-auto h-24 w-24 rounded-full ring-1 ring-gold-soft" />
        <h2 className="mt-8 text-center font-display text-4xl">Where it began</h2>
        <div className="mx-auto mt-8 space-y-5 text-ink/75 [&>p]:text-lg [&>p]:leading-relaxed">
          <p>
            It began the way most beautiful things do — accidentally. A
            forgotten bouquet, a curiosity for resin, and a very small kitchen
            table. What started as a hobby quickly became a promise: to slow
            down, to notice small blooms, and to give them a way to stay.
          </p>
          <p>
            Today, Manivi Creation is still small — and we like it that way.
            Every pendant is poured by hand, every clay petal shaped between
            fingertips, every finish polished with patience. We do not batch
            hundreds. We make a few, and we make them well.
          </p>
          <p>
            You will find no plastic filler here — only real preserved
            flowers, food-safe resins, hypoallergenic gold-plated findings
            and freshwater pearls. Wear it every day. Pass it on someday.
          </p>
        </div>
      </section>

      <section className="bg-cream border-y border-gold-soft/40">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 md:grid-cols-3">
          {[
            { i: Leaf, t: "Botanical", d: "We forage, press and dry seasonal blooms — no dyes, no shortcuts." },
            { i: HandHeart, t: "Handmade", d: "Every piece is touched by human hands, from first pour to final polish." },
            { i: Sparkles, t: "Heirloom", d: "Gold-plated, tarnish-resistant hardware built for a lifetime of wear." },
          ].map(({ i: I, t, d }) => (
            <div key={t} className="text-center">
              <I className="mx-auto h-6 w-6 text-rose" />
              <h3 className="mt-4 font-display text-2xl">{t}</h3>
              <p className="mt-3 text-sm text-ink/65">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <img src={hero} alt="" loading="lazy" className="aspect-[21/9] w-full rounded-sm object-cover shadow-luxe" />
      </section>
    </Layout>
  );
}
