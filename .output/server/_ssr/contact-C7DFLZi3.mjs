import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { l as Phone, m as Mail, p as MapPin, y as Instagram } from "../_libs/lucide-react.mjs";
import { t as Layout } from "./Layout-CYNuxc1c.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C7DFLZi3.js
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Layout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-gradient-blush",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-6 py-20 text-center sm:px-10 md:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Say Hello"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mt-4 font-display text-5xl sm:text-6xl",
					children: ["We'd love to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-hand text-rose",
						children: "hear from you."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-5 max-w-lg text-ink/70",
					children: "Custom pieces, bulk gifting, collaborations, or just a hello — drop a note and we'll write back within two working days."
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-6xl px-6 py-20 sm:px-10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 md:grid-cols-[1fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-8",
				children: [
					{
						i: Mail,
						t: "Email",
						v: "hello@manivi.co"
					},
					{
						i: Phone,
						t: "Phone",
						v: "+91 99823 70423\n+91 73003 40423"
					},
					{
						i: MapPin,
						t: "Studio",
						v: "House no A21, ward no 31,\nswamiyo ka mohalla near Surani bazaar,\nshrimadhopur, (sikar district)\n(rajasthan) 332715"
					},
					{
						i: Instagram,
						t: "Instagram",
						v: "@manivi.creation"
					}
				].map(({ i: I, t, v }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blush-soft text-rose",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow !text-ink/50",
						children: t
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 whitespace-pre-line font-display text-lg",
						children: v
					})] })]
				}, t))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					alert("Thank you — we'll be in touch soon.");
				},
				className: "space-y-5 rounded-sm bg-card p-8 shadow-sm sm:p-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-5 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "First name" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "Last name" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Email",
						type: "email"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, { label: "Subject" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "eyebrow block !text-ink/50",
						children: "Message"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						rows: 5,
						required: true,
						className: "mt-2 w-full border-b border-ink/30 bg-transparent py-2 outline-none focus:border-rose"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "w-full rounded-full bg-ink py-4 text-[11px] uppercase tracking-[0.3em] text-cream transition-colors hover:bg-rose",
						children: "Send Message"
					})
				]
			})]
		})
	})] });
}
function Field({ label, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "eyebrow block !text-ink/50",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		required: true,
		className: "mt-2 w-full border-b border-ink/30 bg-transparent py-2 outline-none focus:border-rose"
	})] });
}
//#endregion
export { Contact as component };
