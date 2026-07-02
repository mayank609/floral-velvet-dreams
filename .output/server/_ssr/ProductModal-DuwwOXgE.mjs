import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as MessageCircle, t as X } from "../_libs/lucide-react.mjs";
import { n as inr } from "./products-Edc1hywI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProductModal-DuwwOXgE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ p, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		onClick,
		className: "group cursor-pointer transition-transform duration-500 hover:-translate-y-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[4/5] overflow-hidden rounded-sm bg-blush-soft/40",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.image,
					alt: p.name,
					loading: "lazy",
					className: "h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
				}),
				p.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-rose",
					children: p.tag
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "absolute inset-x-3 bottom-3 translate-y-3 rounded-full bg-ink/90 px-4 py-2.5 text-[11px] uppercase tracking-[0.25em] text-cream opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
					children: "View Details"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] uppercase tracking-[0.25em] text-ink/50",
				children: p.category
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 font-display text-lg leading-tight",
				children: p.name
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "whitespace-nowrap font-display text-lg text-rose",
				children: inr(p.price)
			})]
		})]
	});
}
function ProductModal({ product, onClose }) {
	(0, import_react.useEffect)(() => {
		if (product) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [product]);
	if (!product) return null;
	const whatsappUrl = `https://wa.me/919982370423?text=${encodeURIComponent(`Hi Manivi Creation! I would like to purchase the following item:\n\n*Product:* ${product.name}\n*Price:* ${inr(product.price)}\n*Category:* ${product.category}\n\nIs it available for order?`)}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-md animate-fade-in",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-3xl overflow-hidden rounded-md bg-cream shadow-2xl animate-zoom-in md:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					className: "absolute right-4 top-4 z-10 rounded-full bg-cream/80 p-2 text-ink/70 backdrop-blur transition-colors hover:bg-rose hover:text-cream shadow-sm",
					"aria-label": "Close modal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[4/3] w-full md:aspect-auto md:w-1/2 bg-blush-soft/30",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						className: "h-full w-full object-cover"
					}), product.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-4 top-4 rounded-full bg-rose px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-cream",
						children: product.tag
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between p-6 sm:p-8 md:w-1/2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] uppercase tracking-[0.25em] text-rose font-medium",
							children: product.category
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl text-ink leading-tight sm:text-4xl",
							children: product.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 font-display text-2xl text-rose font-medium",
							children: inr(product.price)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 border-t border-gold-soft/40 pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "eyebrow !text-ink/60 mb-2",
								children: "Description"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed text-ink/75",
								children: product.description || "Individually hand-crafted with meticulous detail, real pressed botanical flowers and premium components. Truly one of a kind."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-2 text-xs text-ink/60",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "🌸 Hand-selected and pressed real flowers." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "✨ Hypoallergenic premium gold plating." }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "🕊️ Lovingly packed & ready to gift." })
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: whatsappUrl,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center justify-center gap-3 rounded-full bg-ink px-6 py-4 text-center text-[11px] uppercase tracking-[0.3em] text-cream transition-all duration-300 hover:bg-rose hover:shadow-lg hover:-translate-y-0.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4 fill-current" }), "Order via WhatsApp"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-center text-[10px] tracking-wider text-ink/50 uppercase",
							children: "Free shipping across India"
						})]
					})]
				})
			]
		})]
	});
}
//#endregion
export { ProductModal as n, ProductCard as t };
