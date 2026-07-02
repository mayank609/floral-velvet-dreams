import { inr, type Product, getProductImageUrl } from "@/lib/products";

interface ProductCardProps {
  p: Product;
  onClick?: () => void;
}

export function ProductCard({ p, onClick }: ProductCardProps) {
  return (
    <article
      onClick={onClick}
      className="group cursor-pointer transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-blush-soft/40">
        <img
          src={getProductImageUrl(p.image)}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        {p.tag && (
          <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-rose">
            {p.tag}
          </span>
        )}
        <button className="absolute inset-x-3 bottom-3 translate-y-3 rounded-full bg-ink/90 px-4 py-2.5 text-[11px] uppercase tracking-[0.25em] text-cream opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          View Details
        </button>
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-ink/50">{p.category}</p>
          <h3 className="mt-1 font-display text-lg leading-tight">{p.name}</h3>
        </div>
        <p className="whitespace-nowrap font-display text-lg text-rose">{inr(p.price)}</p>
      </div>
    </article>
  );
}

