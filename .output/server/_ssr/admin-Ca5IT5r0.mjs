import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getProductsServer } from "./products-server-ClVG-eIA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Ca5IT5r0.js
var $$splitComponentImporter = () => import("./admin-Cm4t53wA.mjs");
var Route = createFileRoute("/admin")({
	head: () => ({ meta: [{ title: "Admin Portal — Manivi Creation" }, {
		name: "description",
		content: "Management console for products showcase."
	}] }),
	loader: async () => {
		return { products: await getProductsServer() };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
