import type { MetadataRoute } from "next";
import { SITE_URL, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/privacy/"),
      lastModified: new Date("2026-07-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
