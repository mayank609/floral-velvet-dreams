import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getProductsServer } from "./products-server-ClVG-eIA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-DavrgfD3.js
var $$splitComponentImporter = () => import("./shop-BwkOvme7.mjs");
var Route = createFileRoute("/shop")({
	head: () => ({ meta: [{ title: "Shop — Manivi Creation" }, {
		name: "description",
		content: "Shop handmade resin, clay and floral jewellery from Manivi Creation."
	}] }),
	loader: async () => {
		return { products: await getProductsServer() };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
