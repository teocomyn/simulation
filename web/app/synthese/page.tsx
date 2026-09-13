import Link from "next/link";
import { ArticleToc } from "@/components/ArticleToc";
import { CiteBlock } from "@/components/CiteBlock";
import { CopyLink } from "@/components/CopyLink";
import { JsonLd } from "@/components/JsonLd";
import { MarkdownBody } from "@/components/MarkdownBody";
import { loadDoc } from "@/lib/content";
import { extractHeadings } from "@/lib/links";
import { plainText, readingMinutes } from "@/lib/plain";
import { breadcrumbJsonLd, scholarlyArticleJsonLd } from "@/lib/schema";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Synthèse",
  description:
    "Position d'ensemble du Dossier Simulation : quatre questions séparées, verdict sur Bostrom, verrou de la conscience, Règle 0.",
  path: "/synthese",
  type: "article",
});

export default async function SynthesePage() {
  const doc = await loadDoc("synthese");
  if (!doc) return null;
  const headings = extractHeadings(doc.markdown);
  const minutes = readingMinutes(plainText(doc.markdown));

  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <JsonLd
        data={scholarlyArticleJsonLd({
          title: "Synthèse du dossier",
          description: doc.thesis,
          path: "/synthese",
          section: "Synthèse",
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Synthèse", path: "/synthese" },
        ])}
      />
      <p className="kicker">00 · Point d&apos;entrée</p>
      <h1 className="display mt-3 text-4xl text-ink sm:text-5xl">Synthèse</h1>
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
        <p className="text-sm text-muted">{minutes} min de lecture</p>
        <CopyLink path="/synthese" />
      </div>
      <p className="answer-block mt-4 text-lg text-muted">{doc.thesis}</p>
      {headings.length >= 2 ? (
        <div className="mt-8 border border-line bg-paper p-5">
          <ArticleToc headings={headings} />
        </div>
      ) : null}
      <div className="mt-10">
        <MarkdownBody markdown={doc.markdown} skipFirstH1 />
      </div>
      <div className="mt-12 flex flex-wrap gap-3">
        <Link href="/outils" className="btn btn-primary">
          Passer aux instruments
        </Link>
        <Link href="/explorer" className="btn btn-ghost">
          Lire le corpus
        </Link>
      </div>
      <div className="mt-10">
        <CiteBlock title="Synthèse du dossier" path="/synthese" />
      </div>
    </main>
  );
}
