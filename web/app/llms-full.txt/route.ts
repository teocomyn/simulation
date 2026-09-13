import { docs, sections } from "@/lib/catalog";
import { instruments } from "@/lib/nav-index";
import { questions, results, verdicts } from "@/lib/data/questions";
import { SITE_NAME, SITE_TAGLINE, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE_NAME} (full)

> ${SITE_TAGLINE} Revue constituée le 29 août 2026. Corpus markdown rendu tel quel.

## Position

${verdicts.map((v) => `- ${v.title}: ${v.body}`).join("\n")}

## Questions

${questions.map((q) => `- ${q.id} ${q.title} (${q.status}, ${q.testable}): ${q.body}`).join("\n")}

## Results the dossier closes

${results.map((r) => `- ${r.n} ${r.title}: ${r.body} → ${absoluteUrl(r.href)}`).join("\n")}

## Pages

- [Accueil](${absoluteUrl("/")}): Couverture, parcours, ontologie, table des matières.
- [Synthèse](${absoluteUrl("/synthese")}): Texte 00, point d'entrée.
- [Méthode](${absoluteUrl("/methode")}): Colophon et Règle 0.
- [Glossaire](${absoluteUrl("/glossaire")}): Légende Q, H, A, P.
- [Recherche](${absoluteUrl("/recherche")}): Index plein texte des 38 fichiers.

## Sections

${sections.map((s) => `- [${s.number} ${s.title}](${absoluteUrl(`/s/${s.id}`)}): ${s.blurb}`).join("\n")}

## Corpus

${docs
  .map((d) => `- [${d.title}](${absoluteUrl(`/d/${d.slug}`)})${d.starred ? " ★" : ""}: ${d.thesis}`)
  .join("\n")}

## Instruments

${instruments.map((t) => `- [${t.title}](${absoluteUrl(t.href)}): ${t.body}`).join("\n")}

## Key Facts

- Date d'arrêt du tableau: 29 août 2026.
- 38 textes, 14 sections, 8 textes pivots.
- 51 affirmations fact-checkées, 12 arguments populaires, 14 pièges nommés, 8 hypothèses H1–H8.
- Extended index: ${absoluteUrl("/llms-full.txt")}
- Concise index: ${absoluteUrl("/llms.txt")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
