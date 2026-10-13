import type { MetadataRoute } from "next";

import { INDUSTRIES } from "@/content/industries";
import { INSIGHTS } from "@/content/insights";
import { PROJECTS } from "@/content/projects";
import { SERVICES } from "@/content/services";
import { SITE } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority = 0.7): MetadataRoute.Sitemap[number] => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    priority,
  });
  return [
    page("", 1),
    page("/work", 0.9),
    page("/services", 0.9),
    page("/industries", 0.8),
    page("/about", 0.7),
    page("/insights", 0.6),
    page("/contact", 0.8),
    ...PROJECTS.map((p) => page(`/work/${p.slug}`, 0.8)),
    ...SERVICES.map((s) => page(`/services/${s.slug}`, 0.8)),
    ...INDUSTRIES.map((i) => page(`/industries/${i.slug}`, 0.7)),
    ...INSIGHTS.map((a) => ({ ...page(`/insights/${a.slug}`, 0.6), lastModified: new Date(a.date) })),
  ];
}
