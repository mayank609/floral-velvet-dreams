import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { g as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Plus, g as Lock, h as LogOut, i as Trash2, r as Upload, u as Pen, v as Key, w as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-CYNuxc1c.mjs";
import { a as verifyPasswordServer, i as uploadImageServer, r as saveProductServer, t as deleteProductServer } from "./products-server-ClVG-eIA.mjs";
import { t as Route } from "./admin-Ca5IT5r0.mjs";
import { n as inr } from "./products-Edc1hywI.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-Cm4t53wA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminPage() {
	const { products } = Route.useLoaderData();
	const router = useRouter();
	const [password, setPassword] = (0, import_react.useState)("");
	const [isLoggedIn, setIsLoggedIn] = (0, import_react.useState)(false);
	const [authError, setAuthError] = (0, import_react.useState)("");
	const [isFormOpen, setIsFormOpen] = (0, import_react.useState)(false);
	const [editingProduct, setEditingProduct] = (0, import_react.useState)(null);
	const [name, setName] = (0, import_react.useState)("");
	const [price, setPrice] = (0, import_react.useState)(1e3);
	const [category, setCategory] = (0, import_react.useState)("Resin");
	const [tag, setTag] = (0, import_react.useState)("");
	const [description, setDescription] = (0, import_react.useState)("");
	const [imageFile, setImageFile] = (0, import_react.useState)(null);
	const [imageUrl, setImageUrl] = (0, import_react.useState)("");
	const [uploading, setUploading] = (0, import_react.useState)(false);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (localStorage.getItem("manivi_admin_session") === "true") setIsLoggedIn(true);
	}, []);
	const handleLogin = async (e) => {
		e.preventDefault();
		setAuthError("");
		try {
			if (await verifyPasswordServer({ data: password })) {
				setIsLoggedIn(true);
				localStorage.setItem("manivi_admin_session", "true");
			} else setAuthError("Invalid password. Please try again.");
		} catch (err) {
			setAuthError("Failed to verify password. Please try again.");
		}
	};
	const handleLogout = () => {
		setIsLoggedIn(false);
		localStorage.removeItem("manivi_admin_session");
	};
	const openAddForm = () => {
		setEditingProduct(null);
		setName("");
		setPrice(1e3);
		setCategory("Resin");
		setTag("");
		setDescription("");
		setImageFile(null);
		setImageUrl("");
		setIsFormOpen(true);
	};
	const openEditForm = (p) => {
		setEditingProduct(p);
		setName(p.name);
		setPrice(p.price);
		setCategory(p.category);
		setTag(p.tag || "");
		setDescription(p.description || "");
		setImageFile(null);
		setImageUrl(p.image);
		setIsFormOpen(true);
	};
	const handleImageChange = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		setImageFile(file);
		setUploading(true);
		try {
			const formData = new FormData();
			formData.append("image", file);
			setImageUrl(await uploadImageServer({ data: formData }));
		} catch (err) {
			alert("Image upload failed. Please try again.");
		} finally {
			setUploading(false);
		}
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!imageUrl) {
			alert("Please upload an image first.");
			return;
		}
		setSubmitting(true);
		try {
			await saveProductServer({ data: { product: {
				id: editingProduct?.id || `${category[0].toLowerCase()}-${Date.now()}`,
				name,
				price: Number(price),
				category,
				image: imageUrl,
				tag: tag || void 0,
				description: description || void 0
			} } });
			setIsFormOpen(false);
			await router.invalidate();
		} catch (err) {
			alert("Failed to save product.");
		} finally {
			setSubmitting(false);
		}
	};
	const handleDelete = async (id) => {
		if (!confirm("Are you sure you want to delete this product?")) return;
		try {
			await deleteProductServer({ data: id });
			await router.invalidate();
		} catch (err) {
			alert("Failed to delete product.");
		}
	};
	const stats = {
		total: products.length,
		resin: products.filter((p) => p.category === "Resin").length,
		clay: products.filter((p) => p.category === "Clay").length,
		jewellery: products.filter((p) => p.category === "Jewellery").length
	};
	if (!isLoggedIn) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "flex min-h-[80vh] items-center justify-center bg-gradient-blush px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-md rounded-sm bg-cream p-8 shadow-luxe border border-gold-soft/30",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blush-soft text-rose",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-5 w-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-5 font-display text-3xl text-ink",
						children: "Admin Login"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs uppercase tracking-widest text-ink/50",
						children: "Manivi Creation Control Panel"
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleLogin,
				className: "mt-8 space-y-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "eyebrow block !text-ink/65 mb-2",
						children: "Password"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "password",
							required: true,
							value: password,
							onChange: (e) => setPassword(e.target.value),
							placeholder: "Enter admin password",
							className: "w-full border-b border-ink/30 bg-transparent py-2.5 pl-3 pr-10 text-sm outline-none focus:border-rose transition-colors"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Key, { className: "absolute right-3 top-3 h-4 w-4 text-ink/40" })]
					}),
					authError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-rose",
						children: authError
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "submit",
					className: "w-full rounded-full bg-ink py-4 text-[11px] uppercase tracking-[0.3em] text-cream transition-colors hover:bg-rose flex items-center justify-center gap-2 group",
					children: ["Access Control Panel", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })]
				})]
			})]
		})
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gradient-blush border-b border-gold-soft/40",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-6 py-12 sm:px-10 flex flex-wrap items-center justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Studio Management"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-3 font-display text-4xl sm:text-5xl text-ink",
					children: ["Product ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-hand text-rose",
						children: "Dashboard"
					})]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: handleLogout,
					className: "flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-[10px] uppercase tracking-widest text-ink/70 hover:border-rose hover:text-rose transition-colors",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "h-3.5 w-3.5" }), "Logout"]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mx-auto max-w-7xl px-6 py-12 sm:px-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-4 md:grid-cols-4",
					children: [
						{
							label: "Total Products",
							value: stats.total,
							color: "text-ink"
						},
						{
							label: "Resin Art",
							value: stats.resin,
							color: "text-rose"
						},
						{
							label: "Clay Florals",
							value: stats.clay,
							color: "text-gold"
						},
						{
							label: "Jewellery Pieces",
							value: stats.jewellery,
							color: "text-ink/80"
						}
					].map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-sm bg-cream p-5 shadow-sm border border-gold-soft/20 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-wider text-ink/50",
							children: stat.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: `mt-2 font-display text-4xl ${stat.color} font-medium`,
							children: stat.value
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl text-ink",
						children: "Showcase Items"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: openAddForm,
						className: "flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-cream hover:bg-rose transition-all duration-300 shadow-md hover:-translate-y-0.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }), " Add Product"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 overflow-hidden rounded-sm bg-cream shadow-sm border border-gold-soft/20",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left border-collapse",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
								className: "border-b border-gold-soft/30 bg-blush-soft/20 text-[10px] uppercase tracking-widest text-ink/55",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4",
										children: "Image"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4",
										children: "Name"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4",
										children: "Category"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4",
										children: "Price"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4",
										children: "Tag"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "px-6 py-4 text-right",
										children: "Actions"
									})
								]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-gold-soft/20 text-sm text-ink/80",
								children: products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									colSpan: 6,
									className: "px-6 py-12 text-center text-ink/40 font-display text-lg",
									children: "No products added yet. Click \"Add Product\" to start showcasing!"
								}) }) : products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									className: "hover:bg-blush-soft/10 transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-12 w-12 overflow-hidden rounded bg-blush-soft/30",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
													src: p.image,
													alt: p.name,
													className: "h-full w-full object-cover"
												})
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 font-display text-base font-medium text-ink",
											children: p.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-blush-soft px-3 py-1 text-xs text-rose",
												children: p.category
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 font-medium text-rose",
											children: inr(p.price)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4",
											children: p.tag ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "rounded-full bg-gold-soft/40 px-2 py-0.5 text-[10px] uppercase tracking-wider text-ink/70",
												children: p.tag
											}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-ink/30",
												children: "-"
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											className: "px-6 py-4 text-right",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-end gap-2",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => openEditForm(p),
													className: "rounded-full p-2 text-ink/60 hover:bg-blush-soft hover:text-rose transition-colors",
													title: "Edit Product",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pen, { className: "h-4 w-4" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
													onClick: () => handleDelete(p.id),
													className: "rounded-full p-2 text-ink/60 hover:bg-rose/10 hover:text-rose transition-colors",
													title: "Delete Product",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "h-4 w-4" })
												})]
											})
										})
									]
								}, p.id))
							})]
						})
					})
				})
			]
		}),
		isFormOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm animate-fade-in",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0",
				onClick: () => setIsFormOpen(false)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative w-full max-w-lg rounded-sm bg-cream p-6 sm:p-8 shadow-2xl animate-zoom-in border border-gold-soft/30 max-h-[90vh] overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl text-ink mb-6",
					children: editingProduct ? "Edit Product" : "Add New Showcase Product"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					className: "space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "eyebrow block !text-ink/60",
							children: "Product Name"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							required: true,
							value: name,
							onChange: (e) => setName(e.target.value),
							placeholder: "e.g. Aurelia Bloom Pendant",
							className: "mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-sm outline-none focus:border-rose"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "eyebrow block !text-ink/60",
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: category,
								onChange: (e) => setCategory(e.target.value),
								className: "mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-sm outline-none focus:border-rose",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Resin",
										children: "Resin"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Clay",
										children: "Clay"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "Jewellery",
										children: "Jewellery"
									})
								]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "eyebrow block !text-ink/60",
								children: "Price (INR)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								required: true,
								min: 0,
								value: price,
								onChange: (e) => setPrice(Number(e.target.value)),
								placeholder: "e.g. 1490",
								className: "mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-sm outline-none focus:border-rose"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "eyebrow block !text-ink/60",
								children: "Tag (Optional)"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								value: tag,
								onChange: (e) => setTag(e.target.value),
								placeholder: "e.g. New, Bestseller, Limited",
								className: "mt-2 w-full border-b border-ink/30 bg-transparent py-2 text-sm outline-none focus:border-rose"
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "eyebrow block !text-ink/60",
								children: "Product Image"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 flex items-center gap-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
										className: "flex cursor-pointer items-center justify-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-[10px] uppercase tracking-wider text-ink/75 hover:bg-blush-soft transition-colors",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "h-3.5 w-3.5" }),
											"Browse",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "file",
												accept: "image/*",
												onChange: handleImageChange,
												className: "hidden"
											})
										]
									}),
									uploading && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-ink/50",
										children: "Uploading..."
									}),
									imageUrl && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-10 w-10 overflow-hidden rounded border border-gold-soft",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: imageUrl,
											alt: "preview",
											className: "h-full w-full object-cover"
										})
									})
								]
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "eyebrow block !text-ink/60",
							children: "Description (Optional)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 4,
							value: description,
							onChange: (e) => setDescription(e.target.value),
							placeholder: "Describe details, materials used, size etc...",
							className: "mt-2 w-full border border-ink/20 rounded bg-transparent p-3 text-sm outline-none focus:border-rose"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex justify-end gap-3 border-t border-gold-soft/30 pt-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setIsFormOpen(false),
								className: "rounded-full border border-ink/20 px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-ink/70 hover:bg-blush-soft transition-colors",
								children: "Cancel"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								disabled: uploading || submitting,
								className: "rounded-full bg-ink px-6 py-3 text-[10px] uppercase tracking-[0.25em] text-cream hover:bg-rose disabled:opacity-50 transition-colors",
								children: submitting ? "Saving..." : "Save Product"
							})]
						})
					]
				})]
			})]
		})
	] });
}
//#endregion
export { AdminPage as component };
