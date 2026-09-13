import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { popularArguments } from "@/lib/data/arguments";
import { hypotheses } from "@/lib/data/ontologies";
import { questions } from "@/lib/data/questions";
import { traps } from "@/lib/data/traps";
import { definedTermsJsonLd, faqFromQuestions } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Glossaire",
  description: "Q1–Q4, H1–H8, A1–A12, P1–P14, facteur de Bayes et Règle 0. Chaque code a une phrase.",
  path: "/glossaire",
});

const extras = [
  {
    id: "BF",
    title: "Facteur de Bayes",
    body: "P(D|H1) / P(D|H2). Quand il vaut 1, l'observation est vide. C'est le cas de presque tous les arguments du domaine.",
    href: "/outils/bayes",
  },
  {
    id: "R0",
    title: "Règle 0",
    body: "Sans prédiction différentielle, l'affirmation reste métaphysique. Elle n'entre pas dans le corpus empirique.",
    href: "/outils/protocole",
  },
  {
    id: "P1*",
    title: "P1, substrat-indépendance",
    body: "Dans le trilemme : les consciences simulées comptent dans notre classe. La retirer annule f_sim.",
    href: "/outils/trilemme",
  },
];

export default function GlossairePage() {
  const terms = [
    ...questions.map((q) => ({ id: q.id, title: q.title, body: q.body })),
    ...hypotheses.map((h) => ({ id: h.id, title: h.name, body: h.formula })),
    ...popularArguments.map((a) => ({ id: a.id, title: a.title, body: a.verdictLabel })),
    ...traps.map((p) => ({ id: p.id, title: p.title, body: p.title })),
    ...extras.map((item) => ({
      id: item.id.replace("*", "star"),
      title: item.title,
      body: item.body,
    })),
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <JsonLd data={faqFromQuestions()} />
      <JsonLd data={definedTermsJsonLd(terms)} />
      <p className="kicker">Légende</p>
      <h1 className="display mt-3 text-4xl text-ink">Glossaire du dossier</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Les sigles reviennent partout. Ici, chaque code a une phrase et un lien.
      </p>
      <nav className="page-jump mt-8" aria-label="Dans cette page">
        <a href="#questions">Q1–Q4</a>
        <a href="#hypotheses">H1–H8</a>
        <a href="#arguments">A1–A12</a>
        <a href="#pieges">P1–P14</a>
        <a href="#sigles">Sigles</a>
      </nav>

      <section id="questions" className="mt-12 scroll-mt-28">
        <h2 className="display text-3xl text-ink">Quatre questions</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {questions.map((q) => (
            <article key={q.id} id={q.id} className="surface scroll-mt-28 p-5">
              <p className="font-mono text-xs text-brass">{q.id}</p>
              <h3 className="mt-2 font-display text-xl text-ink">{q.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{q.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="hypotheses" className="mt-14 scroll-mt-28">
        <div className="flex items-end justify-between gap-4">
          <h2 className="display text-3xl text-ink">H1 à H8</h2>
          <Link href="/outils/ontologie" className="text-sm text-brass underline underline-offset-4">
            Carte
          </Link>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {hypotheses.map((h) => (
            <Link key={h.id} id={h.id} href={`/outils/ontologie?h=${h.id}`} className="surface block scroll-mt-28 p-5">
              <p className="font-mono text-xs text-brass">{h.id}</p>
              <h3 className="mt-2 font-display text-xl text-ink">{h.name}</h3>
              <p className="mt-2 font-mono text-xs text-muted">{h.formula}</p>
            </Link>
          ))}
        </div>
      </section>

      <section id="arguments" className="mt-14 scroll-mt-28">
        <div className="flex items-end justify-between gap-4">
          <h2 className="display text-3xl text-ink">A1 à A12</h2>
          <Link href="/outils/arguments" className="text-sm text-brass underline underline-offset-4">
            Verdicts
          </Link>
        </div>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {popularArguments.map((a) => (
            <li key={a.id}>
              <Link id={a.id} href={`/outils/arguments?a=${a.id}`} className="surface flex scroll-mt-28 gap-3 p-4">
                <span className="font-mono text-xs text-brass">{a.id}</span>
                <span>
                  <span className="block text-sm text-ink">{a.title}</span>
                  <span className="mt-1 block text-xs text-muted">{a.verdictLabel}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="pieges" className="mt-14 scroll-mt-28">
        <div className="flex items-end justify-between gap-4">
          <h2 className="display text-3xl text-ink">P1 à P14</h2>
          <Link href="/outils/pieges" className="text-sm text-brass underline underline-offset-4">
            Pièges
          </Link>
        </div>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {traps.map((p) => (
            <li key={p.id} id={p.id} className="surface scroll-mt-28 p-4">
              <p className="font-mono text-xs text-brass">{p.id}</p>
              <p className="mt-1 text-sm text-ink">{p.title}</p>
            </li>
          ))}
        </ul>
      </section>

      <section id="sigles" className="mt-14 scroll-mt-28">
        <h2 className="display text-3xl text-ink">Sigles</h2>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {extras.map((item) => (
            <Link
              key={item.id}
              id={item.id.replace("*", "star")}
              href={item.href}
              className="surface block scroll-mt-28 p-5"
            >
              <p className="font-mono text-xs text-brass">{item.id}</p>
              <h3 className="mt-2 font-display text-xl text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
