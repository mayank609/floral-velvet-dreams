//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-Bgry2uar.js
var manifest = {
	"27f4eb13a024a5b473ed83e150d7a02d5a9bff693eb61569416323b89b82ba83": {
		functionName: "uploadImageServer_createServerFn_handler",
		importer: () => import("./_ssr/products-server-BHa39E4I.mjs")
	},
	"41dcd4968b6539b2f10e1d268454628d716633310d0498bf66978bbc72742265": {
		functionName: "saveProductServer_createServerFn_handler",
		importer: () => import("./_ssr/products-server-BHa39E4I.mjs")
	},
	"7b3ad053398d5fdd157cdf4139124bdf49cee8dc52ff6242efcfa93f1565d09b": {
		functionName: "verifyPasswordServer_createServerFn_handler",
		importer: () => import("./_ssr/products-server-BHa39E4I.mjs")
	},
	"835f965f26c9975d1d13622047e20d718c1c86b1545886a8a0400f423072257c": {
		functionName: "getProductsServer_createServerFn_handler",
		importer: () => import("./_ssr/products-server-BHa39E4I.mjs")
	},
	"c93f06565b871725eb2832038ccbf85498f1e59eda3f544d62267647c12361e7": {
		functionName: "deleteProductServer_createServerFn_handler",
		importer: () => import("./_ssr/products-server-BHa39E4I.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
