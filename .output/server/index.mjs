globalThis.__nitro_main__ = import.meta.url;
import { a as FastResponse, n as HTTPError, r as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/Layout-DsaUM3Um.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"227e-pvTGKfJWwlCCWcjMB8A3+h4qo7w\"",
		"mtime": "2026-07-02T11:32:35.565Z",
		"size": 8830,
		"path": "../public/assets/Layout-DsaUM3Um.js"
	},
	"/assets/about-2rLkiDvn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ca9-45Ukxq4/+MZsCmPNCF6N+1LckPw\"",
		"mtime": "2026-07-02T11:32:35.565Z",
		"size": 3241,
		"path": "../public/assets/about-2rLkiDvn.js"
	},
	"/assets/ProductModal-DVQr2YeC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"11ad-G04qPAdLBMFAmNXrb6tHi6WAFc8\"",
		"mtime": "2026-07-02T11:32:35.565Z",
		"size": 4525,
		"path": "../public/assets/ProductModal-DVQr2YeC.js"
	},
	"/assets/about-craft-BN-y5CNa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"38-0Ww4rvioba+NpyoNH7JfL20KZGI\"",
		"mtime": "2026-07-02T11:32:35.565Z",
		"size": 56,
		"path": "../public/assets/about-craft-BN-y5CNa.js"
	},
	"/assets/admin-B49NDIe_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"342b-uXQAWZgF1Bv7QjFylxlCOi+SMcs\"",
		"mtime": "2026-07-02T11:32:35.565Z",
		"size": 13355,
		"path": "../public/assets/admin-B49NDIe_.js"
	},
	"/assets/about-craft-DcwTIPuS.jpg": {
		"type": "image/jpeg",
		"etag": "\"1aa6c-nBKYUabGUwkxjqEHBYw2y3zyAK0\"",
		"mtime": "2026-07-02T11:32:35.568Z",
		"size": 109164,
		"path": "../public/assets/about-craft-DcwTIPuS.jpg"
	},
	"/assets/cat-clay-CFxYLh96.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5a-7e7EDUsTXzkEFA+z2nf+vPL9sXU\"",
		"mtime": "2026-07-02T11:32:35.566Z",
		"size": 90,
		"path": "../public/assets/cat-clay-CFxYLh96.js"
	},
	"/assets/arrow-right-D_P43WrP.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9b-C3l/pTlR4ASjbaPH8v0a9VpYIvI\"",
		"mtime": "2026-07-02T11:32:35.565Z",
		"size": 155,
		"path": "../public/assets/arrow-right-D_P43WrP.js"
	},
	"/assets/cat-clay-Emhx9xfB.jpg": {
		"type": "image/jpeg",
		"etag": "\"17cad-8LAfTAW3r4bkUdt2CRoai4enWLU\"",
		"mtime": "2026-07-02T11:32:35.568Z",
		"size": 97453,
		"path": "../public/assets/cat-clay-Emhx9xfB.jpg"
	},
	"/assets/contact-DeYsixTq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"c82-ReNTf24BOv2ZRqlysc5TSZnPUVY\"",
		"mtime": "2026-07-02T11:32:35.566Z",
		"size": 3202,
		"path": "../public/assets/contact-DeYsixTq.js"
	},
	"/assets/hero-jewellery-BWnav2M5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"49d-QLsoq9ftDtAuayGJgp66bThMmEs\"",
		"mtime": "2026-07-02T11:32:35.566Z",
		"size": 1181,
		"path": "../public/assets/hero-jewellery-BWnav2M5.js"
	},
	"/assets/cat-jewellery-CbbDUnS2.jpg": {
		"type": "image/jpeg",
		"etag": "\"167ba-lyjTXGDhKhP2PzUSbPQoxN9So5M\"",
		"mtime": "2026-07-02T11:32:35.569Z",
		"size": 92090,
		"path": "../public/assets/cat-jewellery-CbbDUnS2.jpg"
	},
	"/assets/cat-resin-BQx2Oxx8.jpg": {
		"type": "image/jpeg",
		"etag": "\"1085c-HI+9MU5AF7L4Fctuj5kw9qM55r4\"",
		"mtime": "2026-07-02T11:32:35.570Z",
		"size": 67676,
		"path": "../public/assets/cat-resin-BQx2Oxx8.jpg"
	},
	"/assets/hero-jewellery-D-EyP-HV.jpg": {
		"type": "image/jpeg",
		"etag": "\"2f1c2-N7/SFYpNOTrYMDNBGQxd9bgVknQ\"",
		"mtime": "2026-07-02T11:32:35.583Z",
		"size": 192962,
		"path": "../public/assets/hero-jewellery-D-EyP-HV.jpg"
	},
	"/assets/link-Cgu-qitC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"891a-yQKVs1FhFGSfNDL8FRLrMvx/0Oo\"",
		"mtime": "2026-07-02T11:32:35.566Z",
		"size": 35098,
		"path": "../public/assets/link-Cgu-qitC.js"
	},
	"/assets/product-1-CXa7F7KJ.jpg": {
		"type": "image/jpeg",
		"etag": "\"883b-+Ph6KkOBNJGZ+H6G1vS0wahwUxw\"",
		"mtime": "2026-07-02T11:32:35.583Z",
		"size": 34875,
		"path": "../public/assets/product-1-CXa7F7KJ.jpg"
	},
	"/assets/product-2-CWZHpu9O.jpg": {
		"type": "image/jpeg",
		"etag": "\"e6c1-GqO06hExxrs9brEy56YouDFr9Ug\"",
		"mtime": "2026-07-02T11:32:35.584Z",
		"size": 59073,
		"path": "../public/assets/product-2-CWZHpu9O.jpg"
	},
	"/assets/products-nXLpBXsB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"63-IeSkgpQwOoAXQBvizYRFshA1vWs\"",
		"mtime": "2026-07-02T11:32:35.566Z",
		"size": 99,
		"path": "../public/assets/products-nXLpBXsB.js"
	},
	"/assets/index-KxvZaYCd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4d594-nxHswl5QZOeK5ym+OikgOH4p2kg\"",
		"mtime": "2026-07-02T11:32:35.565Z",
		"size": 316820,
		"path": "../public/assets/index-KxvZaYCd.js"
	},
	"/assets/shop-C2t2t4eQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6b0-V9c0ceCZcM9MTWHhMDFX5DAQSCU\"",
		"mtime": "2026-07-02T11:32:35.566Z",
		"size": 1712,
		"path": "../public/assets/shop-C2t2t4eQ.js"
	},
	"/assets/product-3-kz9-hSgv.jpg": {
		"type": "image/jpeg",
		"etag": "\"86d6-RQlNnYkbZxD4jXan8BUMJFuu/Co\"",
		"mtime": "2026-07-02T11:32:35.585Z",
		"size": 34518,
		"path": "../public/assets/product-3-kz9-hSgv.jpg"
	},
	"/assets/routes-Bt21Emg1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2eed-pKNDmrADTrJuQoSrdjPccEhZlCs\"",
		"mtime": "2026-07-02T11:32:35.566Z",
		"size": 12013,
		"path": "../public/assets/routes-Bt21Emg1.js"
	},
	"/assets/product-4-BdZ5SICS.jpg": {
		"type": "image/jpeg",
		"etag": "\"9302-jjMXbxsbwqxCPbhH7juqynDENIo\"",
		"mtime": "2026-07-02T11:32:35.586Z",
		"size": 37634,
		"path": "../public/assets/product-4-BdZ5SICS.jpg"
	},
	"/assets/styles-CueMLWVQ.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"17cb4-HnP4AaOQs6TXdWxMgPhrhN4xvvs\"",
		"mtime": "2026-07-02T11:32:35.589Z",
		"size": 97460,
		"path": "../public/assets/styles-CueMLWVQ.css"
	},
	"/favicon.ico": {
		"type": "image/vnd.microsoft.icon",
		"etag": "\"4f95-3RXc3p2mhEAs1WBwaIvE0Y0uu0Y\"",
		"mtime": "2026-07-02T11:32:35.903Z",
		"size": 20373,
		"path": "../public/favicon.ico"
	},
	"/assets/workshops-D49nXymL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10da-EPGAFFQFGvljQNLUOKhbSJ5uH7A\"",
		"mtime": "2026-07-02T11:32:35.568Z",
		"size": 4314,
		"path": "../public/assets/workshops-D49nXymL.js"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_FvoVh4 = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_FvoVh4
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
