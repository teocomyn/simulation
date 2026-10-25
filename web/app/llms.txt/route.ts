import { docHref, docs, sections } from "@/lib/catalog";
import { instruments } from "@/lib/nav-index";
import { SITE_NAME, SITE_TAGLINE, absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const pivots = docs.filter((d) => d.starred);

export function GET() {
  const body = `# ${SITE_NAME}

> Revue constituée le 29 août 2026. L'hypothèse de simulation n'est pas une question, c'en est quatre. Bostrom calcule une condition. Le verrou est la conscience.

## Docs

- [Synthèse](${absoluteUrl("/synthese")}): Position d'ensemble : Q1–Q4, verdict sur Bostrom, Règle 0, verrou conscience.
- [Méthode](${absoluteUrl("/methode")}): Source de vérité markdown, Règle 0, ce que le dossier n'affirme pas, date d'arrêt.
- [Glossaire](${absoluteUrl("/glossaire")}): Q1–Q4, H1–H8, A1–A12, P1–P14, BF, Règle 0.
- [Explorer le corpus](${absoluteUrl("/explorer")}): ${docs.length} textes dans l'ordre des ${sections.length} sections, avec filtre pivots.
- [Sources](${absoluteUrl("/sources")}): Bibliographie primaire et fact-check des 51 affirmations.
- [Instruments](${absoluteUrl("/outils")}): Trilemme, Bayes, ontologie, arguments, décohérence, protocole.

## Textes pivots

${pivots.map((d) => `- [${d.title}](${absoluteUrl(docHref(d.slug))}): ${d.thesis}`).join("\n")}

## Instruments

${instruments.map((t) => `- [${t.title}](${absoluteUrl(t.href)}): ${t.body}`).join("\n")}

## Key Facts

- Constituted on 29 August 2026. Constitutional line: ${SITE_TAGLINE}
- 38 source texts, 14 sections. Nothing is summarized in place of the markdown.
- Four independent questions: Q1 substrate, Q2 intention, Q3 intervention, Q4 consequences.
- Bostrom 2003 yields a conditional probability, not an unconditional one.
- Almost every popular argument has Bayes factor BF = 1 (informationally empty).
- Wolpert (Journal of Physics: Complexity, December 2025): no computational degradation is required; mutual simulation is possible.
- Rule 0: without a differential prediction, the claim stays metaphysical.

## Contact

- Website: ${absoluteUrl("/")}
- Full machine index: ${absoluteUrl("/llms-full.txt")}
- RSS: ${absoluteUrl("/rss.xml")}
- Search: ${absoluteUrl("/recherche")}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
