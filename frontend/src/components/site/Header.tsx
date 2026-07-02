import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Search, MessageCircle } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "Our Story" },
  { to: "/contact", label: "Contact" },
] as const;

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
          <a
            href="https://wa.me/919982370423"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Chat"
            className="flex items-center gap-1.5 rounded-full p-2 text-ink/70 hover:bg-blush-soft hover:text-rose"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden text-[10px] uppercase tracking-wider lg:inline-block">Chat</span>
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
