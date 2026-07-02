import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-Bgry2uar.mjs";
import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-server-ClVG-eIA.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var getProductsServer = createServerFn({ method: "GET" }).handler(createSsrRpc("835f965f26c9975d1d13622047e20d718c1c86b1545886a8a0400f423072257c"));
var saveProductServer = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("41dcd4968b6539b2f10e1d268454628d716633310d0498bf66978bbc72742265"));
var deleteProductServer = createServerFn({ method: "POST" }).validator((id) => id).handler(createSsrRpc("c93f06565b871725eb2832038ccbf85498f1e59eda3f544d62267647c12361e7"));
var verifyPasswordServer = createServerFn({ method: "POST" }).validator((pw) => pw).handler(createSsrRpc("7b3ad053398d5fdd157cdf4139124bdf49cee8dc52ff6242efcfa93f1565d09b"));
var uploadImageServer = createServerFn({ method: "POST" }).handler(createSsrRpc("27f4eb13a024a5b473ed83e150d7a02d5a9bff693eb61569416323b89b82ba83"));
//#endregion
export { verifyPasswordServer as a, uploadImageServer as i, getProductsServer as n, saveProductServer as r, deleteProductServer as t };
