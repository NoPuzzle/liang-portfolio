import type { MetadataRoute } from "next";

const canonicalUrl = "https://nopuzzle.github.io/liang-portfolio/";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: canonicalUrl,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
