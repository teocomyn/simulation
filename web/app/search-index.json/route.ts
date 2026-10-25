import { getSection } from "@/lib/catalog";
import { loadAllDocs } from "@/lib/content";

export const dynamic = "force-static";

/** Index plein texte de la page Recherche, servi en fichier statique mis en cache. */
export async function GET() {
  const all = await loadAllDocs();
  const items = all.map((d) => ({
    slug: d.slug,
    title: d.title,
    thesis: d.thesis,
    section: getSection(d.section)?.title ?? d.section,
    excerpt: d.excerpt,
    body: d.body,
  }));
  return Response.json(items, {
    headers: { "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400" },
  });
}
