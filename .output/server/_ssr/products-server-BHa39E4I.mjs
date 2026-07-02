import { i as TSS_SERVER_FUNCTION, l as createServerFn } from "./esm-Dova13aH.mjs";
import processModule from "node:process";
import { Buffer } from "node:buffer";
import * as fs from "node:fs/promises";
import * as path from "node:path";
//#region node_modules/.nitro/vite/services/ssr/assets/products-server-BHa39E4I.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var dbDir = path.join(processModule.cwd(), "data");
var dbPath = path.join(dbDir, "products.json");
var uploadDir = path.join(processModule.cwd(), "public", "uploads");
async function ensureDb() {
	try {
		await fs.mkdir(dbDir, { recursive: true });
		await fs.mkdir(uploadDir, { recursive: true });
	} catch (err) {
		console.error("Failed to create directories:", err);
	}
	try {
		await fs.access(dbPath);
	} catch {
		const initialProducts = [
			{
				id: "r-01",
				name: "Aurelia Bloom Pendant",
				price: 1490,
				category: "Resin",
				image: "/uploads/product-1.jpg",
				tag: "New",
				description: "A gorgeous pendant featuring hand-pressed botanical flowers suspended in glass-like resin, finished with gold-plated hardware."
			},
			{
				id: "c-01",
				name: "Rosa Painted Bangle",
				price: 1290,
				category: "Clay",
				image: "/uploads/product-2.jpg",
				description: "Artfully sculpted clay bangle with detailed rose petals painted by hand, showcasing unique floral art."
			},
			{
				id: "j-01",
				name: "Petal Pearl Drops",
				price: 1690,
				category: "Jewellery",
				image: "/uploads/product-3.jpg",
				tag: "Bestseller",
				description: "Elegant drop earrings adorned with real pearls and preserved miniature petals, a perfect heirloom piece."
			},
			{
				id: "c-02",
				name: "Blush Blossom Locket",
				price: 1390,
				category: "Clay",
				image: "/uploads/product-4.jpg",
				description: "A hand-finished locket featuring sculpted clay blush blossoms. Perfect for carrying special memories."
			},
			{
				id: "r-02",
				name: "Meadow Resin Charm",
				price: 1190,
				category: "Resin",
				image: "/uploads/cat-resin.jpg",
				description: "A miniature meadow of dried wildflowers frozen in clear, crystal resin. Lightweight and vibrant."
			},
			{
				id: "c-03",
				name: "Pastel Petal Earrings",
				price: 990,
				category: "Clay",
				image: "/uploads/cat-clay.jpg",
				tag: "Limited",
				description: "Charming pastel-toned floral studs made of premium oven-baked polymer clay, lightweight for all-day wear."
			},
			{
				id: "j-02",
				name: "Pearl Garden Bracelet",
				price: 1990,
				category: "Jewellery",
				image: "/uploads/cat-jewellery.jpg",
				description: "A dainty bracelet combining genuine freshwater pearls and delicate botanical charms."
			},
			{
				id: "r-03",
				name: "Wildflower Ring",
				price: 890,
				category: "Resin",
				image: "/uploads/product-1.jpg",
				description: "A subtle and lovely band ring embedded with tiny wildflowers and gold foil flakes."
			}
		];
		for (const asset of [
			{
				src: "product-1.jpg",
				dest: "product-1.jpg"
			},
			{
				src: "product-2.jpg",
				dest: "product-2.jpg"
			},
			{
				src: "product-3.jpg",
				dest: "product-3.jpg"
			},
			{
				src: "product-4.jpg",
				dest: "product-4.jpg"
			},
			{
				src: "cat-resin.jpg",
				dest: "cat-resin.jpg"
			},
			{
				src: "cat-clay.jpg",
				dest: "cat-clay.jpg"
			},
			{
				src: "cat-jewellery.jpg",
				dest: "cat-jewellery.jpg"
			}
		]) try {
			const srcPath = path.join(processModule.cwd(), "src", "assets", asset.src);
			const destPath = path.join(uploadDir, asset.dest);
			await fs.copyFile(srcPath, destPath);
		} catch (err) {
			console.error(`Failed to copy default asset ${asset.src}:`, err);
		}
		try {
			await fs.writeFile(dbPath, JSON.stringify(initialProducts, null, 2), "utf-8");
		} catch (err) {
			console.error("Failed to write initial products JSON database file:", err);
		}
	}
}
var getProductsServer_createServerFn_handler = createServerRpc({
	id: "835f965f26c9975d1d13622047e20d718c1c86b1545886a8a0400f423072257c",
	name: "getProductsServer",
	filename: "src/lib/products-server.ts"
}, (opts) => getProductsServer.__executeServer(opts));
var getProductsServer = createServerFn({ method: "GET" }).handler(getProductsServer_createServerFn_handler, async () => {
	await ensureDb();
	try {
		const content = await fs.readFile(dbPath, "utf-8");
		return JSON.parse(content);
	} catch (err) {
		console.error("Failed to read products DB file:", err);
		return [];
	}
});
var saveProductServer_createServerFn_handler = createServerRpc({
	id: "41dcd4968b6539b2f10e1d268454628d716633310d0498bf66978bbc72742265",
	name: "saveProductServer",
	filename: "src/lib/products-server.ts"
}, (opts) => saveProductServer.__executeServer(opts));
var saveProductServer = createServerFn({ method: "POST" }).validator((data) => data).handler(saveProductServer_createServerFn_handler, async ({ data }) => {
	await ensureDb();
	const { product } = data;
	try {
		const content = await fs.readFile(dbPath, "utf-8");
		const list = JSON.parse(content);
		const index = list.findIndex((p) => p.id === product.id);
		if (index > -1) list[index] = product;
		else list.push(product);
		await fs.writeFile(dbPath, JSON.stringify(list, null, 2), "utf-8");
		return {
			success: true,
			product
		};
	} catch (err) {
		console.error("Failed to save product in database:", err);
		throw new Error("Database save failed");
	}
});
var deleteProductServer_createServerFn_handler = createServerRpc({
	id: "c93f06565b871725eb2832038ccbf85498f1e59eda3f544d62267647c12361e7",
	name: "deleteProductServer",
	filename: "src/lib/products-server.ts"
}, (opts) => deleteProductServer.__executeServer(opts));
var deleteProductServer = createServerFn({ method: "POST" }).validator((id) => id).handler(deleteProductServer_createServerFn_handler, async ({ data: id }) => {
	await ensureDb();
	try {
		const content = await fs.readFile(dbPath, "utf-8");
		let list = JSON.parse(content);
		list = list.filter((p) => p.id !== id);
		await fs.writeFile(dbPath, JSON.stringify(list, null, 2), "utf-8");
		return { success: true };
	} catch (err) {
		console.error("Failed to delete product from database:", err);
		throw new Error("Database delete failed");
	}
});
var verifyPasswordServer_createServerFn_handler = createServerRpc({
	id: "7b3ad053398d5fdd157cdf4139124bdf49cee8dc52ff6242efcfa93f1565d09b",
	name: "verifyPasswordServer",
	filename: "src/lib/products-server.ts"
}, (opts) => verifyPasswordServer.__executeServer(opts));
var verifyPasswordServer = createServerFn({ method: "POST" }).validator((pw) => pw).handler(verifyPasswordServer_createServerFn_handler, async ({ data: pw }) => {
	return pw === (processModule.env.ADMIN_PASSWORD || "admin123");
});
var uploadImageServer_createServerFn_handler = createServerRpc({
	id: "27f4eb13a024a5b473ed83e150d7a02d5a9bff693eb61569416323b89b82ba83",
	name: "uploadImageServer",
	filename: "src/lib/products-server.ts"
}, (opts) => uploadImageServer.__executeServer(opts));
var uploadImageServer = createServerFn({ method: "POST" }).handler(uploadImageServer_createServerFn_handler, async ({ request }) => {
	await ensureDb();
	try {
		const file = (await request.formData()).get("image");
		if (!file) throw new Error("No image file provided");
		const bytes = await file.arrayBuffer();
		const buffer = Buffer.from(bytes);
		const ext = path.extname(file.name) || ".jpg";
		const filename = `${Date.now()}-${Math.random().toString(36).substring(2, 8)}${ext}`;
		const filepath = path.join(uploadDir, filename);
		await fs.writeFile(filepath, buffer);
		return `/uploads/${filename}`;
	} catch (err) {
		console.error("Failed to upload image:", err);
		throw new Error(err.message || "Image upload failed");
	}
});
//#endregion
export { deleteProductServer_createServerFn_handler, getProductsServer_createServerFn_handler, saveProductServer_createServerFn_handler, uploadImageServer_createServerFn_handler, verifyPasswordServer_createServerFn_handler };
