import type { MetadataRoute } from "next";
import { docHref, docs, docsInSection, sections } from "@/lib/catalog";
import { docDates, latestUpdate } from "@/lib/dates";
import { instruments } from "@/lib/nav-index";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = latestUpdate();
  const page = (
    path: string,
    priority: number,
    lastModified = latest,
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly",
  ) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  });

  return [
    page("/", 1, latest, "weekly"),
    page("/synthese", 0.95, docDates(docs[0]).updated),
    page("/explorer", 0.8),
    page("/outils", 0.8),
    page("/glossaire", 0.75),
    page("/methode", 0.7),
    page("/sources", 0.7),
    page("/recherche", 0.5),
    ...instruments.map((t) => page(t.href, 0.65)),
    ...sections.map((s) => page(`/s/${s.id}`, 0.6, latestUpdate(docsInSection(s.id)))),
    ...docs.filter((d) => d.slug !== "synthese").map((d) => page(docHref(d.slug), d.starred ? 0.85 : 0.55, docDates(d).updated)),
  ];
}
