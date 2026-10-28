import type { MetadataRoute } from "next";
import { indexierbar, site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Nur die eigene Produktionsdomain indexieren lassen (siehe lib/site.ts → indexierbar)
  return {
    rules: indexierbar ? [{ userAgent: "*", allow: "/", disallow: "/api/" }] : [{ userAgent: "*", disallow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
