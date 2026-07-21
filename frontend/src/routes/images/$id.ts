import { createFileRoute } from "@tanstack/react-router";

// Proxies MongoDB-stored product images through this app's own origin so
// the browser never needs to know the backend's absolute URL (that URL is
// only reliably known server-side via BACKEND_API_URL — a client-side
// VITE_BACKEND_API_URL that drifts from it, or is never set, silently
// breaks every uploaded product photo with a broken-image icon).
const BACKEND_API_URL = process.env.BACKEND_API_URL || "http://localhost:3001";

export const Route = createFileRoute("/images/$id")({
  server: {
    handlers: {
      GET: async ({ params }) => {
        let upstream: Response;
        try {
          upstream = await fetch(`${BACKEND_API_URL}/images/${params.id}`);
        } catch (err) {
          console.error("Failed to proxy image from backend:", err);
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
