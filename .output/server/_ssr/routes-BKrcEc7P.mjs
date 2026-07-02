import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Leaf, a as Star, o as Sparkles, w as ArrowRight, x as HandHeart } from "../_libs/lucide-react.mjs";
import { n as manivi_logo_png_asset_default, t as Layout } from "./Layout-CYNuxc1c.mjs";
import { t as about_craft_default } from "./about-craft-BzbYrAub.mjs";
import { t as hero_jewellery_default } from "./hero-jewellery-Qn7u4sR4.mjs";
import { t as cat_jewellery_default } from "./products-Edc1hywI.mjs";
import { t as Route } from "./routes-DrnSDHbU.mjs";
import { n as cat_resin_default, t as cat_clay_default } from "./cat-clay-OW4aEpJk.mjs";
import { n as ProductModal, t as ProductCard } from "./ProductModal-DuwwOXgE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BKrcEc7P.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, as, className = "", delay = 0, once = true }) {
	const Tag = as ?? "div";
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				e.target.setAttribute("data-visible", "true");
				if (once) io.unobserve(e.target);
			} else if (!once) e.target.setAttribute("data-visible", "false");
		}, {
			threshold: .15,
			rootMargin: "0px 0px -60px 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [once]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: `reveal ${className}`,
		style: delay ? { transitionDelay: `${delay}ms` } : void 0,
		children
	});
}
function Home() {
	const { products } = Route.useLoaderData();
	const [selectedProduct, setSelectedProduct] = (0, import_react.useState)(null);
	const featured = products.slice(0, 4);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden bg-gradient-blush",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-blush/50 blur-3xl animate-blob" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-gold-soft/40 blur-3xl animate-blob [animation-delay:-6s]" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 sm:px-10 md:grid-cols-2 md:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow animate-fade-up [animation-delay:100ms]",
								children: "Manivi Creation · Est. 2024"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-5 font-display text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block animate-fade-up [animation-delay:200ms]",
										children: "Little blooms,"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block animate-fade-up font-hand text-6xl text-rose [animation-delay:400ms] sm:text-7xl md:text-8xl",
										children: "forever"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-block animate-fade-up [animation-delay:600ms]",
										children: "in resin & clay."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-base text-ink/70 animate-fade-up [animation-delay:800ms]",
								children: "Slow-made, one-of-a-kind jewellery — real flowers preserved in crystal-clear resin and hand-sculpted clay, finished with pearls and gold."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-wrap items-center gap-4 animate-fade-up [animation-delay:1000ms]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/shop",
									className: "group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[11px] uppercase tracking-[0.3em] text-cream transition-all duration-500 hover:bg-rose hover:shadow-luxe hover:-translate-y-0.5",
									children: ["Shop Collection", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/about",
									className: "link-underline text-[11px] uppercase tracking-[0.3em] text-ink/70 hover:text-rose",
									children: "Our Story"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 flex items-center gap-6 text-xs text-ink/60 animate-fade-up [animation-delay:1200ms]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex items-center gap-1 text-gold",
									children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, i))
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Loved by 2,400+ souls" })]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative animate-zoom-in [animation-delay:200ms]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -left-6 -top-6 h-24 w-24 rounded-full border border-gold-soft/70 animate-spin-slow" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-8 -right-4 h-40 w-40 rounded-full bg-blush/40 blur-3xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_jewellery_default,
								alt: "Handcrafted resin jewellery with pressed flowers",
								width: 1600,
								height: 1200,
								className: "relative aspect-[4/5] w-full rounded-sm object-cover shadow-luxe"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: manivi_logo_png_asset_default.url,
								alt: "",
								className: "absolute -bottom-8 -left-8 hidden h-32 w-32 rounded-full ring-4 ring-cream animate-float md:block"
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-gold-soft/40 bg-cream overflow-hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-8 sm:grid-cols-3 sm:px-10",
				children: [
					{
						icon: HandHeart,
						t: "Handmade to order",
						s: "Each piece touched only by our hands."
					},
					{
						icon: Leaf,
						t: "Real preserved flowers",
						s: "Foraged, dried, set in crystal resin."
					},
					{
						icon: Sparkles,
						t: "Gold-plated finishings",
						s: "Tarnish-resistant, wear every day."
					}
				].map(({ icon: Icon, t, s }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 120,
					className: "flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5 shrink-0 text-rose transition-transform duration-500 hover:rotate-12 hover:scale-110" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-lg",
							children: t
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-ink/60",
							children: s
						})]
					})]
				}, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-24 sm:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-14 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Our Collections"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 font-display text-4xl sm:text-5xl",
						children: "Curated with intention"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-3 max-w-xl text-sm text-ink/60",
						children: "Three quiet worlds of craft — each one born from petals, patience and a little bit of magic."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-6 md:grid-cols-3",
				children: [
					{
						name: "Resin",
						tag: "Preserved blooms",
						img: cat_resin_default
					},
					{
						name: "Clay",
						tag: "Sculpted florals",
						img: cat_clay_default
					},
					{
						name: "Jewellery",
						tag: "Pearl & petal",
						img: cat_jewellery_default
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/shop",
						className: "hover-lift group relative block aspect-[3/4] overflow-hidden rounded-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: c.img,
								alt: c.name,
								loading: "lazy",
								className: "h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-500 group-hover:from-ink/80" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute inset-x-0 bottom-0 p-6 text-cream",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[10px] uppercase tracking-[0.3em] opacity-80",
										children: c.tag
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-3xl",
										children: c.name
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "mt-3 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:gap-3",
										children: ["Explore ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1" })]
									})
								]
							})
						]
					})
				}, c.name))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-blush",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 sm:px-10 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: about_craft_default,
						alt: "Artisan at work",
						loading: "lazy",
						className: "aspect-[4/5] w-full rounded-sm object-cover shadow-luxe transition-transform duration-700 hover:scale-[1.02]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute -bottom-6 -right-6 hidden rounded-full bg-cream px-6 py-6 text-center shadow-luxe animate-float sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-hand text-4xl text-rose leading-none",
							children: "since"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-display text-3xl",
							children: "2024"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 150,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Our Story"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display text-4xl sm:text-5xl",
							children: [
								"A tiny studio, ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								" big ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-shimmer",
									children: "blooming"
								}),
								" dreams."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 text-ink/70",
							children: "Manivi Creation began at a kitchen table with a pot of resin, a scatter of dried flowers and a promise: to make jewellery that feels like a keepsake, not a trend."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-ink/70",
							children: "Every piece is poured, sanded and set by hand. No two are ever exactly alike — because no two flowers ever are."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							className: "link-underline mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] hover:text-rose",
							children: ["Read our story ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-24 sm:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-14 flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Just Bloomed"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-3 font-display text-4xl sm:text-5xl",
					children: "New this season"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					className: "link-underline text-[11px] uppercase tracking-[0.3em] text-ink/70 hover:text-rose",
					children: "View all →"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 md:grid-cols-4",
				children: featured.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						p,
						onClick: () => setSelectedProduct(p)
					})
				}, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-gold-soft/40 bg-cream",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:px-10 md:grid-cols-3",
				children: [
					{
						q: "The pendant is impossibly delicate — like holding a garden.",
						n: "Ananya S."
					},
					{
						q: "Feels heirloom. I've received compliments every single day.",
						n: "Priya M."
					},
					{
						q: "Wrapped like a love letter. The craft speaks for itself.",
						n: "Isha R."
					}
				].map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 150,
					as: "figure",
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-auto flex justify-center gap-1 text-gold",
							children: Array.from({ length: 5 }).map((_, j) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-current" }, j))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
							className: "mt-5 font-display text-xl italic text-ink/80",
							children: [
								"\"",
								t.q,
								"\""
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
							className: "mt-4 text-xs uppercase tracking-[0.25em] text-ink/50",
							children: ["— ", t.n]
						})
					]
				}, t.n))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-24 sm:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "relative overflow-hidden rounded-sm bg-ink px-8 py-16 text-cream sm:px-16 sm:py-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-10 top-0 h-full w-1/2 bg-gradient-to-l from-rose/40 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose/30 blur-3xl animate-blob" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-gold/20 blur-3xl animate-blob [animation-delay:-8s]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow !text-gold-soft",
								children: "Workshops"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "mt-3 font-display text-4xl sm:text-5xl",
								children: ["Come, make something ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-hand text-shimmer",
									children: "beautiful."
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-cream/70",
								children: "Small-group resin and clay sessions in our sunlit studio. Leave with your own piece — and possibly a new obsession."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/workshops",
								className: "group mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-[11px] uppercase tracking-[0.3em] text-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-blush-soft hover:shadow-luxe",
								children: ["Reserve a seat ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-1" })]
							})
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductModal, {
			product: selectedProduct,
			onClose: () => setSelectedProduct(null)
		})
	] });
}
//#endregion
export { Home as component };
