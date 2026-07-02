import { f as lazyRouteComponent, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as getProductsServer } from "./products-server-ClVG-eIA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DrnSDHbU.js
var $$splitComponentImporter = () => import("./routes-BKrcEc7P.mjs");
var Route = createFileRoute("/")({
	loader: async () => {
		return { products: await getProductsServer() };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
