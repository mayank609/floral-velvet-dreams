import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { _ as Leaf, o as Sparkles, x as HandHeart } from "../_libs/lucide-react.mjs";
import { n as manivi_logo_png_asset_default, t as Layout } from "./Layout-CYNuxc1c.mjs";
import { t as about_craft_default } from "./about-craft-BzbYrAub.mjs";
import { t as hero_jewellery_default } from "./hero-jewellery-Qn7u4sR4.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CEsQsmpb.js
var import_jsx_runtime = require_jsx_runtime();
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-blush",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 sm:px-10 md:grid-cols-2 md:py-28",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Our Story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-display text-5xl leading-tight sm:text-6xl",
						children: [
							"Made slowly,",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-hand text-rose",
								children: "with love,"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"in small batches."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-ink/70",
						children: "Manivi Creation is a two-hands studio built on quiet mornings, dried flowers and the belief that everyday jewellery can still feel like an heirloom."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_craft_default,
					alt: "Studio craft",
					loading: "lazy",
					className: "aspect-[4/5] w-full rounded-sm object-cover shadow-luxe"
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-4xl px-6 py-24 sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: manivi_logo_png_asset_default.url,
					alt: "",
					className: "mx-auto h-24 w-24 rounded-full ring-1 ring-gold-soft"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-8 text-center font-display text-4xl",
					children: "Where it began"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-8 space-y-5 text-ink/75 [&>p]:text-lg [&>p]:leading-relaxed",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "It began the way most beautiful things do — accidentally. A forgotten bouquet, a curiosity for resin, and a very small kitchen table. What started as a hobby quickly became a promise: to slow down, to notice small blooms, and to give them a way to stay." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Today, Manivi Creation is still small — and we like it that way. Every pendant is poured by hand, every clay petal shaped between fingertips, every finish polished with patience. We do not batch hundreds. We make a few, and we make them well." }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "You will find no plastic filler here — only real preserved flowers, food-safe resins, hypoallergenic gold-plated findings and freshwater pearls. Wear it every day. Pass it on someday." })
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-cream border-y border-gold-soft/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 md:grid-cols-3",
				children: [
					{
						i: Leaf,
						t: "Botanical",
						d: "We forage, press and dry seasonal blooms — no dyes, no shortcuts."
					},
					{
						i: HandHeart,
						t: "Handmade",
						d: "Every piece is touched by human hands, from first pour to final polish."
					},
					{
						i: Sparkles,
						t: "Heirloom",
						d: "Gold-plated, tarnish-resistant hardware built for a lifetime of wear."
					}
				].map(({ i: I, t, d }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "mx-auto h-6 w-6 text-rose" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-display text-2xl",
							children: t
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-ink/65",
							children: d
						})
					]
				}, t))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "mx-auto max-w-7xl px-6 py-24 sm:px-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_jewellery_default,
				alt: "",
				loading: "lazy",
				className: "aspect-[21/9] w-full rounded-sm object-cover shadow-luxe"
			})
		})
	] });
}
//#endregion
export { About as component };
