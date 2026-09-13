import type { SectionId } from "./catalog";
import { docs, getDoc, getSection, sections } from "./catalog";

const FOLDER_HREF: Record<string, string> = {
  "00-SYNTHESE": "/synthese",
  "00-SYNTHESE.md": "/synthese",
  "01-ARGUMENT": "/s/argument",
  "02-PHYSIQUE": "/s/physique",
  "03-CONSCIENCE": "/s/conscience",
  "04-ONTOLOGIE": "/s/ontologie",
  "05-COSMOLOGIE": "/s/cosmologie",
  "06-ETHIQUE": "/s/ethique",
  "07-SOCIOLOGIE": "/s/sociologie",
  "08-PROTOCOLE": "/s/protocole",
  "09-SOURCES": "/s/sources",
  "10-ACTUALISATION": "/s/actualisation",
  "11-MATHEMATIQUES": "/s/mathematiques",
  "12-BIOCOMPUTING": "/s/biocomputing",
  "13-RECEPTION": "/s/reception",
};

export type Heading = {
  depth: number;
  text: string;
  id: string;
};

export function cleanCorpusPath(href: string) {
  return href.split("#")[0].replace(/^\.\.\/+/, "").replace(/^\.\//, "").replace(/\/+$/, "");
}

export function fileToSlug(file: string) {
  const normalized = cleanCorpusPath(file);
  if (!normalized) return undefined;
  return docs.find((d) => {
    if (d.file === normalized) return true;
    if (d.file.endsWith(`/${normalized}`)) return true;
    if (normalized.includes("/") && (d.file.endsWith(normalized) || normalized.endsWith(d.file))) {
      return true;
    }
    return false;
  })?.slug;
}

export function rewriteCorpusHref(href: string): string | null {
  if (!href) return null;
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("mailto:")) {
    return href;
  }
  if (href.startsWith("#")) return href;

  const cleaned = cleanCorpusPath(href);
  const hash = href.includes("#") ? `#${href.split("#").slice(1).join("#")}` : "";
  if (!cleaned) return href;

  const folderHref = FOLDER_HREF[cleaned] ?? (!cleaned.includes("/") ? FOLDER_HREF[cleaned.split("/")[0]] : undefined);
  if (folderHref) return `${folderHref}${hash}`;

  const byFile = fileToSlug(cleaned);
  if (byFile) return `/d/${byFile}${hash}`;

  const short = cleaned.match(/^(\d{2}-[A-Z-]+)\/(\d{2})(?:[./]|$)/);
  if (short) {
    const prefix = `${short[1]}/${short[2]}`;
    const doc = docs.find((d) => d.file.startsWith(prefix));
    if (doc) return `/d/${doc.slug}${hash}`;
  }

  const basename = cleaned.split("/").pop() ?? "";
  if (basename.length > 2) {
    const byName = docs.find((d) => d.file.endsWith(basename) || d.file.endsWith(`${basename}.md`));
    if (byName) return `/d/${byName.slug}${hash}`;
  }

  return href;
}

export function looksLikePathLabel(text: string) {
  return (
    /[./]/.test(text) ||
    text.endsWith(".md") ||
    /^\d{2}-[A-Z]/.test(text) ||
    /^\d{2}$/.test(text)
  );
}

export function prettyLinkLabel(href: string | undefined, text: string | null): string | null {
  if (!href) return null;
  const resolved = rewriteCorpusHref(href);
  if (!resolved || resolved === href) {
    if (text && looksLikePathLabel(text)) {
      const folder = FOLDER_HREF[cleanCorpusPath(href).split("/")[0]];
      if (folder === "/synthese") return "Synthèse";
      if (folder?.startsWith("/s/")) return getSection(folder.slice(3))?.title ?? null;
    }
    return null;
  }
  if (text && !looksLikePathLabel(text)) return null;
  if (resolved.startsWith("/d/")) {
    return getDoc(resolved.replace(/^\/d\//, "").split("#")[0])?.title ?? null;
  }
  if (resolved.startsWith("/s/")) {
    return getSection(resolved.replace(/^\/s\//, "").split("#")[0])?.title ?? null;
  }
  if (resolved.startsWith("/synthese")) return "Synthèse";
  return null;
}

export function slugifyHeading(text: string) {
  const numbered = text.match(/^(\d+)(?:\.(\d+))?/);
  if (numbered) {
    return numbered[2] ? `${numbered[1]}-${numbered[2]}` : numbered[1];
  }
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 64);
}

export function uniqueHeadingId(text: string, used: Map<string, number>) {
  const base = slugifyHeading(text) || "section";
  const n = (used.get(base) ?? 0) + 1;
  used.set(base, n);
  return n === 1 ? base : `${base}-${n}`;
}

export function flattenText(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (Array.isArray(value)) return value.map(flattenText).join("");
  if (value && typeof value === "object" && "props" in value) {
    return flattenText((value as { props?: { children?: unknown } }).props?.children);
  }
  return "";
}

export function extractHeadings(markdown: string): Heading[] {
  const used = new Map<string, number>();
  const headings: Heading[] = [];
  for (const line of markdown.split("\n")) {
    const match = /^(#{2,4})\s+(.+)$/.exec(line);
    if (!match) continue;
    const text = match[2]
      .replace(/[*_`]/g, "")
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      .trim();
    headings.push({
      depth: match[1].length,
      text,
      id: uniqueHeadingId(text, used),
    });
  }
  return headings;
}

export type InstrumentLink = {
  href: string;
  title: string;
};

const INSTRUMENTS: { href: string; title: string; slugs: string[]; sections?: SectionId[] }[] = [
  { href: "/outils/trilemme", title: "Laboratoire du trilemme", slugs: ["argument/trilemme-bostrom"] },
  { href: "/outils/bayes", title: "Facteur de Bayes", slugs: ["argument/faille-probabiliste", "mathematiques/sous-determination"] },
  { href: "/outils/arguments", title: "12 arguments populaires", slugs: ["physique/arguments-populaires", "physique/arguments-contre"] },
  { href: "/outils/ontologie", title: "Carte H1–H8", slugs: ["ontologie/carte-des-niveaux", "ontologie/information-regression"] },
  { href: "/outils/pieges", title: "14 pièges nommés", slugs: ["protocole/hygiene-epistemique"] },
  { href: "/outils/decoherence", title: "Temps de décohérence", slugs: ["mathematiques/decoherence-boltzmann", "conscience/campbell-effondrement"] },
  { href: "/outils/equations", title: "Échelle de profondeur", slugs: ["mathematiques/equations-profondes"] },
  { href: "/outils/eres", title: "Cinq ères", slugs: ["cosmologie/cinq-eres", "argument/genealogie-du-doute"] },
  { href: "/outils/protocole", title: "Règle 0", slugs: ["protocole/programme-de-recherche"] },
  { href: "/outils/fact-check", title: "51 affirmations", slugs: ["sources/fact-check-corpus"] },
];

export function instrumentsForDoc(slug: string): InstrumentLink[] {
  return INSTRUMENTS.filter((item) => item.slugs.includes(slug)).map(({ href, title }) => ({
    href,
    title,
  }));
}

export const factcheckGroupHref: Record<string, string> = {
  Interview: "/d/sociologie/silicon-valley",
  Physique: "/d/physique/arguments-physiques",
  Neurosciences: "/d/conscience/probleme-difficile",
  Campbell: "/d/conscience/campbell-effondrement",
  Ontologie: "/d/ontologie/carte-des-niveaux",
  Probabiliste: "/d/argument/faille-probabiliste",
};

export { siteOrigin } from "./seo";

export { sections };
