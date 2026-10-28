import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Nur die Produktionsdomain indexieren lassen, Vorschau-Deployments nicht
  const isProd = process.env.VERCEL_ENV === "production" || !process.env.VERCEL_ENV;
  return {
    rules: isProd ? [{ userAgent: "*", allow: "/", disallow: "/api/" }] : [{ userAgent: "*", disallow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
