import { X, MessageCircle } from "lucide-react";
import { type Product, inr, getProductImageUrl } from "@/lib/products";
import { useEffect } from "react";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  if (!product) return null;

  const whatsappText = encodeURIComponent(
    `Hi Manivi Creation! I would like to purchase the following item:\n\n*Product:* ${product.name}\n*Price:* ${product.priceLabel || inr(product.price)}\n*Category:* ${product.category}\n\nIs it available for order?`
  );
  
  // Primary WhatsApp number is +91 99823 70423 (format wa.me/919982370423)
  const whatsappUrl = `https://wa.me/919982370423?text=${whatsappText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-md animate-fade-in">
      {/* Backdrop click to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal content box */}
      <div className="relative w-full max-w-3xl overflow-hidden rounded-md bg-cream shadow-2xl animate-zoom-in md:flex">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-cream/80 p-2 text-ink/70 backdrop-blur transition-colors hover:bg-rose hover:text-cream shadow-sm"
          aria-label="Close modal"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Product Image Column */}
        <div className="relative aspect-[4/3] w-full md:aspect-auto md:w-1/2 bg-blush-soft/30">
          <img
            src={getProductImageUrl(product.image)}
            alt={product.name}
            className="h-full w-full object-cover"
          />
          {product.tag && (
            <span className="absolute left-4 top-4 rounded-full bg-rose px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cream">
              {product.tag}
            </span>
          )}
        </div>

        {/* Product Details Column */}
        <div className="flex flex-col justify-between p-6 sm:p-8 md:w-1/2">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-rose font-medium">
              {product.category}
            </span>
            <h2 className="mt-2 font-display text-3xl text-ink leading-tight sm:text-4xl">
              {product.name}
            </h2>
            <p className="mt-3 font-display text-2xl text-rose font-medium">
              {product.priceLabel || inr(product.price)}
            </p>
            <div className="mt-6 border-t border-gold-soft/40 pt-5">
              <h4 className="eyebrow !text-ink/60 mb-2">Description</h4>
              <p className="text-sm leading-relaxed text-ink/75">
                {product.description ||
                  "Individually hand-crafted with meticulous detail, real pressed botanical flowers and premium components. Truly one of a kind."}
              </p>
            </div>
            <div className="mt-5 space-y-2 text-xs text-ink/60">
              <p>🌸 Hand-selected and pressed real flowers.</p>
              <p>✨ Hypoallergenic premium gold plating.</p>
              <p>🕊️ Lovingly packed & ready to gift.</p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-cream transition-all duration-300 hover:bg-rose hover:shadow-lg hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4 fill-current" />
              Order via WhatsApp
            </a>
            <p className="mt-3 text-center text-[10px] tracking-wider text-ink/50 uppercase">
              Free shipping across India
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
