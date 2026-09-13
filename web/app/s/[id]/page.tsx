import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { StarLegend } from "@/components/StarLegend";
import { adjacentSections, docsInSection, getSection, sections } from "@/lib/catalog";
import { breadcrumbJsonLd, collectionJsonLd } from "@/lib/schema";

export function generateStaticParams() {
  return sections.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const section = getSection(id);
  if (!section) return {};
  return {
    title: `${section.number} ${section.title}`,
    description: section.blurb,
    alternates: { canonical: `/s/${section.id}` },
  };
}

export default async function SectionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const section = getSection(id);
  if (!section) notFound();
  const items = docsInSection(section.id);
  const { prev, next } = adjacentSections(section.id);

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
      <JsonLd data={collectionJsonLd(section, items.length)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Corpus", path: "/explorer" },
          { name: section.title, path: `/s/${section.id}` },
        ])}
      />
      <nav className="text-sm text-muted" aria-label="Fil d'Ariane">
        <Link href="/explorer" className="hover:text-ink">
          Corpus
        </Link>
        <span className="mx-2 text-dim">/</span>
        <span className="text-ink">{section.title}</span>
      </nav>
      <p className="kicker mt-8">Section {section.number}</p>
      <h1 className="display mt-3 text-4xl text-ink sm:text-5xl">{section.title}</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-muted">{section.blurb}</p>
      {items.some((d) => d.starred) ? <StarLegend className="mt-4" /> : null}
      <div className="mt-10 grid gap-3">
        {items.map((d, i) => (
          <Link
            key={d.slug}
            href={`/d/${d.slug}`}
            className="surface grid gap-2 p-5 md:grid-cols-[4rem_1fr]"
          >
            <span className="font-mono text-xs text-dim">{String(i + 1).padStart(2, "0")}</span>
            <span>
              <span className="block font-display text-2xl text-ink">
                {d.title}
                {d.starred ? <span className="ml-2 text-brass">★</span> : null}
              </span>
              <span className="mt-2 block text-sm leading-6 text-muted">{d.thesis}</span>
            </span>
          </Link>
        ))}
      </div>
      <nav className="mt-16 grid gap-3 border-t border-line pt-8 sm:grid-cols-2">
        {prev ? (
          <Link href={`/s/${prev.id}`} className="surface p-4">
            <span className="text-[11px] tracking-[0.14em] text-dim uppercase">Section précédente</span>
            <span className="mt-1 block font-display text-lg text-ink">
              {prev.number} · {prev.title}
            </span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link href={`/s/${next.id}`} className="surface p-4 sm:text-right">
            <span className="text-[11px] tracking-[0.14em] text-dim uppercase">Section suivante</span>
            <span className="mt-1 block font-display text-lg text-ink">
              {next.number} · {next.title}
            </span>
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
