import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Heart } from "lucide-react";
import logo from "@/assets/manivi-logo.png.asset.json";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gold-soft/40 bg-gradient-blush">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="" className="h-14 w-14 rounded-full ring-1 ring-gold-soft" />
            <div className="leading-tight">
              <div className="font-display text-2xl">Manivi</div>
              <div className="font-hand text-lg text-rose -mt-1">creation</div>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm text-ink/70">
            Handcrafted resin, clay & floral jewellery — pieces made slowly, with intention and love.
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-rose">Shop</Link></li>
            <li><Link to="/about" className="hover:text-rose">Our Story</Link></li>
            <li><Link to="/workshops" className="hover:text-rose">Workshops</Link></li>
            <li><Link to="/contact" className="hover:text-rose">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Care</h4>
          <ul className="space-y-2 text-sm text-ink/80">
            <li>Shipping & Returns</li>
            <li>Jewellery Care</li>
            <li>Custom Orders</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Stay in bloom</h4>
          <p className="text-sm text-ink/70">New collections, drops & studio stories — once a month.</p>
          <form className="mt-4 flex items-center gap-2 border-b border-ink/30 py-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full bg-transparent text-sm outline-none placeholder:text-ink/40"
            />
            <button className="text-rose">
              <Mail className="h-4 w-4" />
            </button>
          </form>
          <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm text-ink/70 hover:text-rose">
            <Instagram className="h-4 w-4" /> @manivi.creation
          </a>
        </div>
      </div>

      <div className="border-t border-gold-soft/40">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-ink/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Manivi Creation. All rights reserved.</p>
          <p className="inline-flex items-center gap-1.5">Handmade with <Heart className="h-3 w-3 fill-rose text-rose" /> in India</p>
        </div>
      </div>
    </footer>
  );
}
