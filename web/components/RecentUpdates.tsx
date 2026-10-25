import Link from "next/link";
import { docHref, getSection } from "@/lib/catalog";
import { recentlyUpdated } from "@/lib/dates";
import { formatDateFr } from "@/lib/seo";

/** Textes modifiés le plus récemment, d'après l'historique git (lib/data/doc-dates.json). */
export function RecentUpdates({ limit = 6 }: { limit?: number }) {
  const items = recentlyUpdated(limit).filter((i) => i.updated !== i.published);
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="mis-a-jour" className="border border-line bg-paper p-5">
      <p className="kicker" id="mis-a-jour">
        Mis à jour récemment
      </p>
      <ul className="mt-4 divide-y divide-line">
        {items.map(({ doc, updated }) => (
          <li key={doc.slug} className="py-2.5">
            <Link href={docHref(doc.slug)} className="group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <span className="text-ink group-hover:text-brass">
                <span className="mr-2 font-mono text-xs text-dim">{getSection(doc.section)?.number}</span>
                {doc.title}
              </span>
              <time dateTime={updated} className="text-sm text-muted">
                {formatDateFr(updated)}
              </time>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
