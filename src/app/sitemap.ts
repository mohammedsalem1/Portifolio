import type { MetadataRoute } from "next";
import { featuredProjects } from "@/content";
import { locales } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", ...featuredProjects.map((project) => `/projects/${project.slug}`)];

  return paths.flatMap((path) =>
    locales.map((lang) => ({
      url: `${siteUrl}/${lang}${path}`,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}${path}`])),
      },
    })),
  );
}
