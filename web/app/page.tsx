import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { JsonLd } from "@/components/JsonLd";
import { StarLegend } from "@/components/StarLegend";
import { docs, sections } from "@/lib/catalog";
import { hypotheses } from "@/lib/data/ontologies";
import { questions, results } from "@/lib/data/questions";
import { faqFromQuestions } from "@/lib/schema";
import { formatDateFr } from "@/lib/seo";

const shortPath = [
  { href: "/synthese", title: "Synthèse", time: "20 min" },
  { href: "/d/argument/faille-probabiliste", title: "La faille probabiliste", time: "15 min" },
  { href: "/d/mathematiques/wolpert", title: "Wolpert 2025", time: "20 min" },
  { href: "/d/conscience/probleme-difficile", title: "Le problème difficile", time: "15 min" },
];

const pivots = docs.filter((d) => d.starred);

export default function HomePage() {
  return (
    <main>
      <JsonLd data={faqFromQuestions()} />
      <HomeHero docCount={docs.length} sectionCount={sections.length} />

      <section id="sommaire" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="answer-block max-w-3xl text-base leading-7 text-ink-2">
            L&apos;hypothèse de simulation n&apos;est pas une question unique. Le Dossier
            Simulation, constitué le {formatDateFr()}, la sépare en quatre questions indépendantes :
            le substrat est-il computationnel (Q1), a-t-il été produit intentionnellement (Q2),
            un agent extérieur peut-il intervenir (Q3), et qu&apos;est-ce que cela changerait
            (Q4). L&apos;argument de Bostrom (2003) établit une disjonction conditionnelle, pas
            une probabilité inconditionnelle. Le facteur de Bayes de presque tous les arguments
            populaires vaut 1 : ils sont informationnellement vides. Wolpert (décembre 2025)
            montre qu&apos;aucune dégradation n&apos;est requise entre simulateur et simulé. Le
            verrou n&apos;est pas le calcul, c&apos;est l&apos;absence de théorie de l&apos;expérience
            subjective.
          </p>
          <nav className="page-jump mt-10" aria-label="Dans cette page">
            <a href="#sommaire">Questions</a>
            <a href="#parcours">Parcours</a>
            <a href="#resultats">Résultats</a>
            <a href="#ontologie">Ontologie</a>
            <a href="#corpus">Corpus</a>
          </nav>
          <p className="kicker mt-12">Sommaire</p>
          <h2 className="display mt-3 text-4xl text-ink">Séparer quatre questions</h2>
          <ol className="mt-10 divide-y divide-line border-y border-line">
            {questions.map((q) => (
              <li key={q.id} className="grid gap-4 py-6 md:grid-cols-[4.5rem_1fr_12rem]">
                <span className="font-mono text-sm text-brass">{q.id}</span>
                <div>
                  <h3 className="font-display text-2xl text-ink">
                    <Link href={`/glossaire#${q.id}`} className="hover:text-brass">
                      {q.title}
                    </Link>
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-muted">{q.body}</p>
                </div>
                <p className="text-xs tracking-[0.14em] text-dim uppercase md:text-right">
                  {q.status}
                  <span className="mt-1 block normal-case tracking-normal text-muted">{q.testable}</span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="parcours" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Parcours</p>
          <h2 className="display mt-3 text-4xl text-ink">Par où commencer</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="surface p-6">
              <p className="text-[11px] tracking-[0.14em] text-dim uppercase">Environ 70 minutes</p>
              <ol className="mt-4 space-y-3">
                {shortPath.map((item, i) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block min-h-11 hover:text-brass">
                      <span className="font-mono text-xs text-brass">{String(i + 1).padStart(2, "0")}</span>{" "}
                      <span className="font-display text-lg text-ink">{item.title}</span>
                      <span className="ml-2 text-sm text-muted">{item.time}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
            <div className="surface p-6">
              <p className="text-[11px] tracking-[0.14em] text-dim uppercase">
                {pivots.length} textes pivots
              </p>
              <StarLegend className="mt-3" />
              <p className="mt-4 text-sm leading-6 text-muted">
                Wolpert, sous-détermination, conscience, DishBrain, réception. Le dossier tient
                sans lire les 38 textes d&apos;un trait.
              </p>
              <Link href="/explorer" className="btn btn-ghost mt-6">
                Ouvrir le corpus
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="resultats" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="kicker">Ce que le dossier ferme</p>
          <h2 className="display mt-3 text-4xl text-ink">Quatre résultats</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {results.map((r) => (
              <Link key={r.n} href={r.href} className="surface group p-6">
                <span className="font-mono text-xs text-brass">{r.n}</span>
                <h3 className="mt-3 font-display text-2xl text-ink group-hover:text-brass">{r.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{r.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="ontologie" className="border-b border-line">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="kicker">Ontologie</p>
              <h2 className="display mt-3 text-4xl text-ink">Huit hypothèses</h2>
            </div>
            <Link href="/outils/ontologie" className="text-sm text-brass underline underline-offset-4">
              Carte interactive
            </Link>
          </div>
          <div className="mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {hypotheses.map((h) => (
              <Link key={h.id} href={`/outils/ontologie?h=${h.id}`} className="bg-paper p-5 hover:bg-bg-2">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="font-mono text-xs text-brass">{h.id}</span>
                  <span className="text-[10px] tracking-[0.12em] text-dim uppercase">{h.status}</span>
                </div>
                <h3 className="mt-3 font-display text-lg leading-snug text-ink">{h.name}</h3>
                <p className="mt-2 font-mono text-[11px] text-muted">{h.formula}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="corpus">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="kicker">Le corpus</p>
              <h2 className="display mt-3 text-4xl text-ink">Table des matières</h2>
            </div>
            <Link href="/outils/arguments" className="text-sm text-brass underline underline-offset-4">
              12 arguments
            </Link>
          </div>
          <div className="mt-8 divide-y divide-line border-y border-line">
            {sections.map((s) => {
              const count = docs.filter((d) => d.section === s.id).length;
              return (
              <Link
                key={s.id}
                href={`/s/${s.id}`}
                className="grid items-baseline gap-3 py-4 hover:bg-paper md:grid-cols-[4rem_14rem_1fr_4rem]"
              >
                <span className="font-mono text-xs text-brass">{s.number}</span>
                <span className="font-display text-xl text-ink">{s.title}</span>
                <span className="text-sm text-muted">{s.blurb}</span>
                <span className="font-mono text-xs text-dim md:text-right">{count} txt</span>
              </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
