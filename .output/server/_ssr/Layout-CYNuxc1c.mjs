import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as Heart, d as MessageCircle, f as Menu, m as Mail, s as Search, t as X, y as Instagram } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Layout-CYNuxc1c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var manivi_logo_png_asset_default = {
	version: 1,
	asset_id: "20537f46-8a64-4442-bf88-13bdefbedb82",
	project_id: "21e449e0-ad2d-4eb1-836a-00ba444abe67",
	url: "/__l5e/assets-v1/20537f46-8a64-4442-bf88-13bdefbedb82/manivi-logo.png",
	r2_key: "a/v1/21e449e0-ad2d-4eb1-836a-00ba444abe67/20537f46-8a64-4442-bf88-13bdefbedb82/manivi-logo.png",
	original_filename: "manivi-logo.png",
	size: 226259,
	content_type: "image/png",
	created_at: "2026-07-02T10:15:48Z"
};
var nav = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/shop",
		label: "Shop"
	},
	{
		to: "/about",
		label: "Our Story"
	},
	{
		to: "/workshops",
		label: "Workshops"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/60 bg-cream/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-5 py-4 sm:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: manivi_logo_png_asset_default.url,
						alt: "Manivi Creation",
						className: "h-12 w-12 rounded-full object-cover shadow-sm ring-1 ring-gold-soft/60 sm:h-14 sm:w-14"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden flex-col leading-none sm:flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-xl tracking-wide",
							children: "Manivi"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-hand text-base text-rose -mt-1",
							children: "creation"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden justify-center gap-9 lg:flex",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "text-[13px] uppercase tracking-[0.22em] text-ink/70 transition-colors hover:text-rose",
						activeProps: { className: "text-rose" },
						activeOptions: { exact: n.to === "/" },
						children: n.label
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-end gap-2 sm:gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Search",
							className: "hidden rounded-full p-2 text-ink/70 hover:bg-blush-soft hover:text-rose sm:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "https://wa.me/919982370423",
							target: "_blank",
							rel: "noopener noreferrer",
							"aria-label": "WhatsApp Chat",
							className: "flex items-center gap-1.5 rounded-full p-2 text-ink/70 hover:bg-blush-soft hover:text-rose",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden text-[10px] uppercase tracking-wider lg:inline-block",
								children: "Chat"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Menu",
							onClick: () => setOpen((v) => !v),
							className: "rounded-full p-2 text-ink/70 hover:bg-blush-soft hover:text-rose lg:hidden",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-5 w-5" })
						})
					]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/60 bg-cream lg:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "mx-auto flex max-w-7xl flex-col px-6 py-4",
				children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: n.to,
					onClick: () => setOpen(false),
					className: "border-b border-border/40 py-3 text-sm uppercase tracking-[0.22em] text-ink/80",
					activeProps: { className: "text-rose" },
					children: n.label
				}, n.to))
			})
		})]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-24 border-t border-gold-soft/40 bg-gradient-blush",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-10 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: manivi_logo_png_asset_default.url,
								alt: "",
								className: "h-14 w-14 rounded-full ring-1 ring-gold-soft"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-display text-2xl",
									children: "Manivi"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-hand text-lg text-rose -mt-1",
									children: "creation"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xs text-sm text-ink/70",
							children: "Handcrafted resin, clay & floral jewellery — pieces made slowly, with intention and love."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-1.5 text-xs text-ink/60",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Phones:" }), " 9982370423, 7300340423"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "leading-relaxed",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Studio:" }), " House no A21, ward no 31, swamiyo ka mohalla near Surani bazaar, shrimadhopur, (sikar district) (rajasthan) 332715"]
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "eyebrow mb-4",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/shop",
							className: "hover:text-rose",
							children: "Shop"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							className: "hover:text-rose",
							children: "Our Story"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/workshops",
							className: "hover:text-rose",
							children: "Workshops"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							className: "hover:text-rose",
							children: "Contact"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admin",
							className: "hover:text-rose text-ink/50",
							children: "Admin Panel"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "eyebrow mb-4",
					children: "Care"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-2 text-sm text-ink/80",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Shipping & Returns" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Jewellery Care" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Custom Orders" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "FAQs" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "eyebrow mb-4",
						children: "Stay in bloom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-ink/70",
						children: "New collections, drops & studio stories — once a month."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						className: "mt-4 flex items-center gap-2 border-b border-ink/30 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "email",
							placeholder: "your@email.com",
							className: "w-full bg-transparent text-sm outline-none placeholder:text-ink/40"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-rose",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "h-4 w-4" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#",
						className: "mt-5 inline-flex items-center gap-2 text-sm text-ink/70 hover:text-rose",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-4 w-4" }), " @manivi.creation"]
					})
				] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-gold-soft/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-ink/60 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Manivi Creation. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "inline-flex items-center gap-1.5",
					children: [
						"Handmade with ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "h-3 w-3 fill-rose text-rose" }),
						" in India"
					]
				})]
			})
		})]
	});
}
function Layout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { manivi_logo_png_asset_default as n, Layout as t };
