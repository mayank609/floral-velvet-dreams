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
      <section
        className="bg-cover bg-center"
        style={{ backgroundImage: 'linear-gradient(rgba(245, 230, 227, 0.8), rgba(245, 230, 227, 0.95)), url("https://images.unsplash.com/photo-1748068545388-30781f2cdbbc?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
      >
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
              { i: Mail, t: "Email", v: "hello@manivi.co", link: "mailto:hello@manivi.co" },
              { i: Phone, t: "Phone", v: "+91 99823 70423\n+91 73003 40423\n+91 83023 97189" },
              { i: MapPin, t: "Studio", v: "House no A21, ward no 31,\nswamiyo ka mohalla near Surani bazaar,\nshrimadhopur, (sikar district)\n(rajasthan) 332715" },
              { i: Instagram, t: "Instagram", v: "@manivi_creations", link: "https://www.instagram.com/manivi_creations?utm_source=qr&igsh=MTk1ZHpkNDE1YjZkNQ%3D%3D" },
            ].map(({ i: I, t, v, link }) => (
              <div key={t} className="flex gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blush-soft text-rose">
                  <I className="h-4 w-4" />
                </div>
                <div>
                  <p className="eyebrow !text-ink/50">{t}</p>
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block font-display text-lg hover:text-rose transition-colors"
                    >
                      {v}
                    </a>
                  ) : (
                    <p className="mt-1 whitespace-pre-line font-display text-lg">{v}</p>
                  )}
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
