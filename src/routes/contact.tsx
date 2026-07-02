import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Manivi Creation" },
      { name: "description", content: "Get in touch with the Manivi Creation studio for custom orders, workshops and collaborations." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <section className="bg-gradient-blush">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center sm:px-10 md:py-28">
          <p className="eyebrow">Say Hello</p>
          <h1 className="mt-4 font-display text-5xl sm:text-6xl">
            We'd love to <span className="font-hand text-rose">hear from you.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-ink/70">
            Custom pieces, bulk gifting, collaborations, or just a hello —
            drop a note and we'll write back within two working days.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <div className="grid gap-14 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            {[
              { i: Mail, t: "Email", v: "hello@manivi.co" },
              { i: Phone, t: "Phone", v: "+91 98765 43210" },
              { i: MapPin, t: "Studio", v: "Bengaluru, India\nVisit by appointment" },
              { i: Instagram, t: "Instagram", v: "@manivi.creation" },
            ].map(({ i: I, t, v }) => (
              <div key={t} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blush-soft text-rose">
                  <I className="h-4 w-4" />
                </div>
                <div>
                  <p className="eyebrow !text-ink/50">{t}</p>
                  <p className="mt-1 whitespace-pre-line font-display text-lg">{v}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); alert("Thank you — we'll be in touch soon."); }}
            className="space-y-5 rounded-sm bg-card p-8 shadow-sm sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="First name" />
              <Field label="Last name" />
            </div>
            <Field label="Email" type="email" />
            <Field label="Subject" />
            <div>
              <label className="eyebrow block !text-ink/50">Message</label>
              <textarea rows={5} required className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 outline-none focus:border-rose" />
            </div>
            <button className="w-full rounded-full bg-ink py-4 text-[11px] uppercase tracking-[0.3em] text-cream transition-colors hover:bg-rose">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="eyebrow block !text-ink/50">{label}</label>
      <input type={type} required className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 outline-none focus:border-rose" />
    </div>
  );
}
