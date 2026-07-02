import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search, Instagram, Facebook } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Contact" },
] as const;

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.05 22h-.005a9.94 9.94 0 0 1-4.996-1.366L2 22l1.395-5.093A9.907 9.907 0 0 1 2.05 12.05C2.045 6.502 6.55 2 12.1 2c2.688.002 5.213 1.05 7.11 2.949a9.933 9.933 0 0 1 2.94 7.106c-.003 5.55-4.508 10.05-10.05 10.05m8.413-18.463A11.815 11.815 0 0 0 12.1 0C5.448 0 .046 5.401.05 12.052a12 12 0 0 0 1.599 6.032L0 24l6.064-1.588a12.05 12.05 0 0 0 5.997 1.556h.005c6.652 0 12.052-5.402 12.055-12.053a11.98 11.98 0 0 0-3.658-8.462" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Manivi Creation" className="h-12 w-12 rounded-full object-cover shadow-sm ring-1 ring-gold-soft/60 sm:h-14 sm:w-14" />
          <div className="hidden flex-col leading-none sm:flex">
            <span className="font-display text-xl tracking-wide">Manivi</span>
            <span className="font-hand text-base text-rose -mt-1">creation</span>
          </div>
        </Link>

        <nav className="hidden justify-center gap-9 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[13px] uppercase tracking-[0.22em] text-ink/70 transition-colors hover:text-rose"
              activeProps={{ className: "text-rose" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2 sm:gap-4">
          <button aria-label="Search" className="hidden rounded-full p-2 text-ink/70 hover:bg-blush-soft hover:text-rose sm:block">
            <Search className="h-4 w-4" />
          </button>
          <div className="hidden items-center gap-1 sm:flex">
            <a
              href="https://www.instagram.com/manivi_creations?utm_source=qr&igsh=MTk1ZHpkNDE1YjZkNQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="rounded-full p-2 text-ink/70 hover:bg-blush-soft hover:text-rose"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/919982370423"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full p-2 text-ink/70 hover:bg-blush-soft hover:text-rose"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/manivicreations"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="rounded-full p-2 text-ink/70 hover:bg-blush-soft hover:text-rose"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <a
            href="https://wa.me/919982370423"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="rounded-full p-2 text-ink/70 hover:bg-blush-soft hover:text-rose sm:hidden"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full p-2 text-ink/70 hover:bg-blush-soft hover:text-rose lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm uppercase tracking-[0.22em] text-ink/80"
                activeProps={{ className: "text-rose" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
