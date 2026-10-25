import { docHref, docs, getSection, sections } from "@/lib/catalog";
import { stripEmDashes } from "@/lib/copy";
import { readCorpusFile } from "@/lib/content";
import { docDates, latestUpdate } from "@/lib/dates";
import { instruments } from "@/lib/nav-index";
import { questions, results, verdicts } from "@/lib/data/questions";
import { SITE_NAME, SITE_TAGLINE, absoluteUrl, formatDateFr } from "@/lib/seo";

export const dynamic = "force-static";

/**
 * Version intégrale pour les modèles de langage : index, faits clés,
 * puis le texte complet de chaque document du corpus.
 */
export async function GET() {
  const pivots = docs.filter((d) => d.starred).length;
  const fullTexts = await Promise.all(
    docs.map(async (d) => {
      const markdown = stripEmDashes(await readCorpusFile(d.file)).replace(/^#\s.+\n+/, "").trim();
      const section = getSection(d.section);
      return `### ${d.title}

- URL : ${absoluteUrl(docHref(d.slug))}
- Section : ${section?.number ?? ""} ${section?.title ?? d.section}
- Thèse : ${d.thesis}
- Mis à jour le ${formatDateFr(docDates(d).updated)}

${markdown}`;
    }),
  );

  const body = `# ${SITE_NAME} (full)

> ${SITE_TAGLINE} Revue constituée le 29 août 2026, mise à jour le ${formatDateFr(latestUpdate())}. Ce fichier contient l'index puis le texte intégral des ${docs.length} documents.

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
- [Recherche](${absoluteUrl("/recherche")}): Index plein texte des ${docs.length} documents.

## Sections

${sections.map((s) => `- [${s.number} ${s.title}](${absoluteUrl(`/s/${s.id}`)}): ${s.blurb}`).join("\n")}

## Corpus

${docs
  .map((d) => `- [${d.title}](${absoluteUrl(docHref(d.slug))})${d.starred ? " ★" : ""}: ${d.thesis}`)
  .join("\n")}

## Instruments

${instruments.map((t) => `- [${t.title}](${absoluteUrl(t.href)}): ${t.body}`).join("\n")}

## Key Facts

- État de l'art arrêté au 29 août 2026, dernière mise à jour du corpus le ${formatDateFr(latestUpdate())}.
- ${docs.length} textes, ${sections.length} sections, ${pivots} textes pivots.
- 51 affirmations fact-checkées, 12 arguments populaires, 14 pièges nommés, 8 hypothèses H1–H8.
- Extended index: ${absoluteUrl("/llms-full.txt")}
- Concise index: ${absoluteUrl("/llms.txt")}

## Corpus intégral

Chaque document est reproduit en entier. Les étiquettes entre crochets, comme [ÉTABLI] ou [SPÉCULATIF], donnent le statut épistémique de l'affirmation qui les précède ou les suit.

${fullTexts.join("\n\n---\n\n")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
