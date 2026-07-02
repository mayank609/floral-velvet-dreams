import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as Layout } from "./Layout-CYNuxc1c.mjs";
import { t as Route } from "./shop-DavrgfD3.mjs";
import { n as ProductModal, t as ProductCard } from "./ProductModal-DuwwOXgE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-BwkOvme7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var categories = [
	"All",
	"Resin",
	"Clay",
	"Jewellery"
];
function Shop() {
	const { products } = Route.useLoaderData();
	const [cat, setCat] = (0, import_react.useState)("All");
	const [selectedProduct, setSelectedProduct] = (0, import_react.useState)(null);
	const list = cat === "All" ? products : products.filter((p) => p.category === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-blush",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-20 text-center sm:px-10 md:py-28",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The Collection"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "mt-4 font-display text-5xl sm:text-6xl",
						children: ["Every piece, ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-hand text-rose",
							children: "a little poem."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mx-auto mt-5 max-w-xl text-ink/70",
						children: "Browse our latest handmade drops — resin locked with real petals, clay sculpted with love, jewellery finished in gold and pearl."
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-16 sm:px-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-10 flex flex-wrap items-center justify-center gap-2 sm:gap-6",
				children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: `rounded-full border px-5 py-2 text-[11px] uppercase tracking-[0.25em] transition-colors ${cat === c ? "border-rose bg-rose text-cream" : "border-ink/20 text-ink/70 hover:border-rose hover:text-rose"}`,
					children: c
				}, c))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-x-5 gap-y-12 sm:gap-x-8 md:grid-cols-3 lg:grid-cols-4",
				children: list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
					p,
					onClick: () => setSelectedProduct(p)
				}, p.id))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductModal, {
			product: selectedProduct,
			onClose: () => setSelectedProduct(null)
		})
	] });
}
//#endregion
export { Shop as component };
