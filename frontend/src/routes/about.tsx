import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Heart, Star, Sparkles, ShieldCheck, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Manivi Creation" },
      { name: "description", content: "Learn about Ruchi Kakani, the founder of Manivi Creations, and our story of crafting handmade resin and home decor." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <Layout>
      {/* HEADER SECTION */}
      <section 
        className="bg-cover bg-center py-12 border-b border-gold-soft/30"
        style={{ backgroundImage: 'linear-gradient(rgba(245, 230, 227, 0.8), rgba(245, 230, 227, 0.95)), url("https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1600&q=80")' }}
      >
        <div className="mx-auto max-w-4xl px-6 text-center sm:px-10">
          <p className="eyebrow">Our Story</p>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl text-ink">
            Crafting memories <span className="font-hand text-rose">that last.</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm text-ink/70">
            Every creation is born from a desire to turn raw resin and simple components into custom keepsakes and gorgeous home decor.
          </p>
        </div>
      </section>

      {/* GRAPHIC-BASED ABOUT CARD SECTION */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="overflow-hidden rounded-sm border border-gold-soft/30 bg-cream shadow-luxe lg:flex">
          {/* LEFT SIDE: Image Frame & Overlays */}
          <div className="relative aspect-[4/5] w-full lg:w-1/2 bg-blush-soft/20 min-h-[500px]">
            {/* Ruchi Kakani Portrait (Placeholder) */}
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&h=1000&q=80"
              alt="Ruchi Kakani - Founder of Manivi Creations"
              className="h-full w-full object-cover p-4"
            />
            
            {/* Badge overlay bottom-left */}
            <div className="absolute bottom-8 left-8 rounded-sm bg-[#F5E6E3]/95 backdrop-blur-sm px-6 py-3 shadow-md border border-[#EACEC9] max-w-[240px]">
              <span className="font-hand text-3xl text-rose block leading-none">Ruchi Kakani</span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-ink/60 mt-1 block">
                FOUNDER, MANIVI CREATIONS
              </span>
            </div>

            {/* Circular Logo overlay bottom-right */}
            <img 
              src="/logo.png" 
              alt="Manivi Creations Logo" 
              className="absolute bottom-8 right-8 h-24 w-24 rounded-full border border-gold/40 object-cover shadow-md bg-cream p-1 ring-1 ring-gold-soft/30"
            />
          </div>

          {/* RIGHT SIDE: Graphic-Matched Content */}
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:w-1/2 bg-cream text-ink">
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-rose/70 font-semibold">
                ABOUT ME
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl text-ink">
                Crafting with Passion, <br />Creating with Purpose
              </h2>
              
              {/* Cursive style line separator with heart */}
              <div className="my-6 flex items-center gap-4">
                <div className="h-[1px] flex-1 bg-gold-soft/40" />
                <Heart className="h-4 w-4 text-rose/50 fill-rose/25" />
                <div className="h-[1px] flex-1 bg-gold-soft/40" />
              </div>

              <div className="space-y-4 text-[14px] leading-relaxed text-ink/80">
                <p>
                  Hi, I'm <strong className="text-ink font-medium">Ruchi Kakani</strong>, the heart and hands behind Manivi Creations.
                </p>
                <p>
                  With <strong className="text-rose font-semibold">5+ years</strong> of experience in crafting, my journey has been about turning simple materials into beautiful, meaningful creations.
                </p>
                <p>
                  At Manivi Creations, every piece is thoughtfully handmade with love, creativity, and attention to detail. From resin art to customized keepsakes, I aim to preserve your special moments in the most beautiful way.
                </p>
              </div>

              {/* Second heart separator */}
              <div className="my-6 flex items-center justify-center">
                <Heart className="h-3 w-3 text-rose/40 fill-rose/10" />
              </div>

              {/* Thank you note */}
              <p className="text-center font-display text-lg italic text-ink/75 leading-relaxed max-w-sm mx-auto">
                "Thank you for supporting my journey and being a part of this beautiful story. Let's create memories that last forever."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS HIGHLIGHTS */}
      <section className="bg-cream border-y border-gold-soft/40 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 sm:grid-cols-3 sm:px-10 text-center">
          {[
            { icon: Award, t: "5+ Years", d: "Creating customized resin masterpieces and handmade decor." },
            { icon: Star, t: "200+ Happy Customers", d: "Trusted by families and couples to preserve memories." },
            { icon: ShieldCheck, t: "100% Handcrafted", d: "Individually styled and poured by Ruchi in the studio." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="space-y-3">
              <Icon className="mx-auto h-7 w-7 text-rose" />
              <h3 className="font-display text-2xl text-ink font-medium">{t}</h3>
              <p className="text-xs text-ink/65 max-w-xs mx-auto leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BRAND ETHOS */}
      <section className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10">
        <h2 className="font-display text-3xl sm:text-4xl text-ink">Resin & Handmade Decor</h2>
        <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-ink/75">
          From custom ocean resin clocks and geode coasters to personalized wedding flower preservations, our brand is dedicated to slow-made, premium home accents. We select the finest non-toxic resins, high-quality pigments, and natural elements to ensure that every object feels premium and endures.
        </p>
      </section>
    </Layout>
  );
}
