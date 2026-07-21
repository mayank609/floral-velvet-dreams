import { createFileRoute } from "@tanstack/react-router";

// Proxies pre-seeded sample images served statically from the backend
// (backend/public/uploads) through this app's own origin — see
// src/routes/images/$id.ts for why this indirection exists.
const BACKEND_API_URL = process.env.BACKEND_API_URL || "http://localhost:3001";

export const Route = createFileRoute("/uploads/$")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        let upstream: Response;
        try {
          upstream = await fetch(`${BACKEND_API_URL}/uploads/${params._splat}`);
        } catch (err) {
          console.error("Failed to proxy upload from backend:", err);
          return new Response(null, { status: 502 });
        }

        if (!upstream.ok || !upstream.body) {
          return new Response(null, { status: upstream.status });
        }

        const headers = new Headers();
        const contentType = upstream.headers.get("content-type");
        const cacheControl = upstream.headers.get("cache-control");
        if (contentType) headers.set("content-type", contentType);
        if (cacheControl) headers.set("cache-control", cacheControl);

        return new Response(upstream.body, { status: upstream.status, headers });
      },
    },
  },
});
