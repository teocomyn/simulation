import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleToc } from "@/components/ArticleToc";
import { CiteBlock } from "@/components/CiteBlock";
import { CopyLink } from "@/components/CopyLink";
import { JsonLd } from "@/components/JsonLd";
import { MarkdownBody } from "@/components/MarkdownBody";
import { ReadingProgress } from "@/components/ReadingProgress";
import { StarLegend } from "@/components/StarLegend";
import { adjacentDocs, docHref, docs, getDoc, getSection, relatedPivots } from "@/lib/catalog";
import { loadDoc } from "@/lib/content";
import { docDates } from "@/lib/dates";
import { extractHeadings, instrumentsForDoc } from "@/lib/links";
import { plainText, readingMinutes } from "@/lib/plain";
import { breadcrumbJsonLd, scholarlyArticleJsonLd } from "@/lib/schema";
import { SITE_NAME, docOgImage, formatDateFr } from "@/lib/seo";

export async function generateStaticParams() {
  return docs.filter((d) => d.slug !== "synthese").map((d) => ({ slug: d.slug.split("/") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const meta = getDoc(slug.join("/"));
  if (!meta) return {};
  const section = getSection(meta.section);
  const image = { url: docOgImage(meta.slug), width: 1200, height: 630, alt: meta.title };
  const dates = docDates(meta);
  return {
    title: meta.title,
    description: meta.thesis,
    alternates: { canonical: docHref(meta.slug) },
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.thesis,
      publishedTime: dates.published,
      modifiedTime: dates.updated,
      section: section?.title,
      tags: [SITE_NAME, section?.title ?? meta.section, "hypothèse de simulation"],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.thesis,
      images: [image.url],
    },
  };
}

export default async function DocPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const key = slug.join("/");
  const doc = await loadDoc(key);
  if (!doc) notFound();
  const section = getSection(doc.section);
  const { prev, next } = adjacentDocs(doc.slug);
  const headings = extractHeadings(doc.markdown);
  const tools = instrumentsForDoc(doc.slug);
  const minutes = readingMinutes(plainText(doc.markdown));
  const more = relatedPivots(doc.slug);
  const dates = docDates(doc);

  return (
    <main className="relative">
      <JsonLd
        data={scholarlyArticleJsonLd({
          title: doc.title,
          description: doc.thesis,
          path: docHref(doc.slug),
          section: section?.title,
          datePublished: dates.published,
          dateModified: dates.updated,
        })}
      />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Corpus", path: "/explorer" },
          { name: section?.title ?? doc.section, path: `/s/${doc.section}` },
          { name: doc.title, path: docHref(doc.slug) },
        ])}
      />
      <ReadingProgress />
      <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <nav className="text-sm text-muted" aria-label="Fil d'Ariane">
          <Link href="/explorer" className="hover:text-ink">
            Corpus
          </Link>
          <span className="mx-2 text-dim">/</span>
          <Link href={`/s/${doc.section}`} className="hover:text-ink">
            {section?.title}
          </Link>
          <span className="mx-2 text-dim">/</span>
          <span className="text-ink">{doc.title}</span>
        </nav>

        <div className="mt-8 grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_16.5rem]">
          <article className="min-w-0">
            <p className="kicker">
              {section?.number} · {section?.title}
              {doc.starred ? " · texte pivot" : ""}
            </p>
            <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">{doc.title}</h1>
            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
              <p className="text-sm text-muted">
                <time dateTime={dates.updated}>
                  {dates.updated === dates.published ? "Publié le" : "Mis à jour le"} {formatDateFr(dates.updated)}
                </time>
                <span className="mx-2 text-dim">·</span>
                {minutes} min de lecture
              </p>
              <CopyLink path={docHref(doc.slug)} />
            </div>
            <div className="answer-block mt-5 border-l-2 border-brass bg-paper px-5 py-4">
              <p className="font-display text-xl italic leading-snug text-ink">{doc.thesis}</p>
            </div>
            {doc.starred ? <StarLegend className="mt-4" /> : null}
            {headings.length >= 2 ? (
              <div className="mt-8 border border-line bg-paper p-5 lg:hidden">
                <ArticleToc headings={headings} />
              </div>
            ) : null}
            <div className="mt-10">
              <MarkdownBody markdown={doc.markdown} skipFirstH1 />
            </div>
            {more.length > 0 ? (
              <section className="mt-16 border-t border-line pt-8" aria-labelledby="lire-aussi">
                <p className="kicker">Continuer</p>
                <h2 id="lire-aussi" className="mt-3 font-display text-2xl text-ink">
                  Autres textes pivots
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                  {more.map((d) => (
                    <li key={d.slug}>
                      <Link href={docHref(d.slug)} className="surface block min-h-11 p-4">
                        <span className="font-display text-lg text-ink">{d.title}</span>
                        <span className="mt-2 block text-sm leading-6 text-muted">{d.thesis}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
            <nav className="mt-10 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
              {prev ? (
                <Link href={docHref(prev.slug)} className="surface p-4">
                  <span className="text-[11px] tracking-[0.14em] text-dim uppercase">Précédent</span>
                  <span className="mt-1 block font-display text-lg text-ink">{prev.title}</span>
                </Link>
              ) : (
                <div />
              )}
              {next ? (
                <Link href={docHref(next.slug)} className="surface p-4 sm:text-right">
                  <span className="text-[11px] tracking-[0.14em] text-dim uppercase">Suivant</span>
                  <span className="mt-1 block font-display text-lg text-ink">{next.title}</span>
                </Link>
              ) : null}
            </nav>
          </article>
          <aside className="h-fit min-w-0 space-y-8 bg-paper p-5 ring-1 ring-line lg:sticky lg:top-24">
            <div className="hidden lg:block">
              <ArticleToc headings={headings} />
            </div>
            {tools.length > 0 ? (
              <div>
                <p className="kicker">Instrument lié</p>
                <ul className="mt-4 space-y-2 border-t border-line pt-4">
                  {tools.map((t) => (
                    <li key={t.href}>
                      <Link href={t.href} className="text-sm text-brass underline underline-offset-4">
                        {t.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <div>
              <p className="kicker">Dans cette section</p>
              <h2 className="mt-3 font-display text-2xl text-ink">{section?.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted">{section?.blurb}</p>
              <Link href={`/s/${doc.section}`} className="mt-4 inline-block text-sm text-brass underline underline-offset-4">
                Tous les textes
              </Link>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-4">
                {docs
                  .filter((d) => d.section === doc.section)
                  .map((d) => (
                    <li key={d.slug}>
                      <Link
                        href={docHref(d.slug)}
                        className={`block text-sm leading-5 ${d.slug === doc.slug ? "text-brass" : "text-muted hover:text-ink"}`}
                      >
                        {d.title}
                        {d.starred ? <span className="ml-1 text-brass">★</span> : null}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <CiteBlock title={doc.title} path={docHref(doc.slug)} date={dates.updated} />
          </aside>
        </div>
      </div>
    </main>
  );
}
