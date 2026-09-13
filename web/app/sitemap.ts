import type { MetadataRoute } from "next";
import { docs, sections } from "@/lib/catalog";
import { instruments } from "@/lib/nav-index";
import { DATE_PUBLISHED, absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const dated = DATE_PUBLISHED;
  const page = (
    path: string,
    priority: number,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ) => ({
    url: absoluteUrl(path),
    lastModified: dated,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, "weekly"),
    page("/synthese", 0.95, "monthly"),
    page("/explorer", 0.8),
    page("/outils", 0.8),
    page("/glossaire", 0.75),
    page("/methode", 0.7),
    page("/sources", 0.7),
    page("/recherche", 0.5),
    ...instruments.map((t) => page(t.href, 0.65)),
    ...sections.map((s) => page(`/s/${s.id}`, 0.6)),
    ...docs.map((d) => page(`/d/${d.slug}`, d.starred ? 0.85 : 0.55)),
  ];
}
