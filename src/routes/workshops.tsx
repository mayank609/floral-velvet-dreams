import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
import craft from "@/assets/about-craft.jpg";
import resin from "@/assets/cat-resin.jpg";
import clay from "@/assets/cat-clay.jpg";

export const Route = createFileRoute("/workshops")({
  head: () => ({
    meta: [
      { title: "Workshops — Manivi Creation" },
      { name: "description", content: "Small-group resin and clay jewellery workshops at the Manivi Creation studio." },
    ],
  }),
  component: Workshops,
});

const sessions = [
  {
    title: "Resin Botanical Pendant",
    desc: "Set your own tiny garden in crystal-clear resin. Take home two finished pendants.",
    date: "Sat · 14 Sep",
    time: "11am – 2pm",
    seats: "6 seats",
    price: "₹2,900",
    img: resin,
  },
  {
    title: "Clay Floral Earrings",
    desc: "Sculpt, texture and paint a pair of statement clay earrings from scratch.",
    date: "Sun · 22 Sep",
    time: "12pm – 3pm",
    seats: "8 seats",
    price: "₹2,400",
    img: clay,
  },
  {
    title: "Private · Bride & Bridesmaids",
    desc: "A slow afternoon of craft and champagne. Custom pieces for your day.",
    date: "By request",
    time: "3 hours",
    seats: "up to 10",
    price: "from ₹18,000",
    img: craft,
  },
];

function Workshops() {
  return (
    <Layout>
      <section className="bg-gradient-blush">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10 md:py-28">
          <p className="eyebrow">Workshops & Events</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">
            Come make something <span className="font-hand text-rose">beautiful.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-ink/70">
            Small groups. Sun-soaked afternoons. All materials included, plus
            tea, treats and everything you need to take home a piece you made
            yourself.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          {sessions.map((s) => (
            <article key={s.title} className="group flex flex-col overflow-hidden rounded-sm bg-card shadow-sm">
              <img src={s.img} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-display text-2xl">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/65">{s.desc}</p>
                <div className="mt-5 space-y-1.5 text-xs text-ink/70">
                  <p className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 text-rose" /> {s.date}</p>
                  <p className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-rose" /> {s.time}</p>
                  <p className="flex items-center gap-2"><Users className="h-3.5 w-3.5 text-rose" /> {s.seats}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="font-display text-2xl text-rose">{s.price}</span>
                  <button className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-ink/80 hover:text-rose">
                    Reserve <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-gold-soft/40 bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:px-10">
          <p className="eyebrow">Corporate & Gifting</p>
          <h2 className="mt-4 font-display text-4xl">Bring the studio to your team.</h2>
          <p className="mt-4 text-ink/70">
            Team offsites, brand collaborations, wedding favours — we design
            experiences and pieces that people actually keep.
          </p>
          <a href="mailto:hello@manivi.co" className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.3em] text-cream hover:bg-rose">
            Enquire now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </Layout>
  );
}
