import { docs, type Doc } from "./catalog";
import manifest from "./data/doc-dates.json";
import { DATE_PUBLISHED } from "./seo";

type DocDates = { published: string; updated: string };

const table = manifest as Record<string, DocDates>;

/** Dates git d'un texte (publication, dernière modification), au format AAAA-MM-JJ. */
export function docDates(doc: Pick<Doc, "file">): DocDates {
  return table[doc.file] ?? { published: DATE_PUBLISHED, updated: DATE_PUBLISHED };
}

/** Date de la modification la plus récente parmi des textes (tout le corpus par défaut). */
export function latestUpdate(subset: Pick<Doc, "file">[] = docs) {
  return subset.map((d) => docDates(d).updated).sort().at(-1) ?? DATE_PUBLISHED;
}

/** Textes classés du plus récemment modifié au plus ancien. */
export function recentlyUpdated(limit = 8) {
  return [...docs]
    .map((d) => ({ doc: d, ...docDates(d) }))
    .sort((a, b) => (a.updated < b.updated ? 1 : a.updated > b.updated ? -1 : 0))
    .slice(0, limit);
}

/** Format RFC 822 attendu par RSS. */
export function rfc822(isoDay: string) {
  return new Date(`${isoDay}T12:00:00Z`).toUTCString();
}
