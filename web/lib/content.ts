import { readFile } from "node:fs/promises";
import path from "node:path";
import { docs, type Doc } from "./catalog";
import { stripEmDashes } from "./copy";
import { rewriteCorpusHref } from "./links";
import { plainText } from "./plain";

const CORPUS_ROOT = path.join(process.cwd(), "corpus");

export type LoadedDoc = Doc & {
  markdown: string;
  excerpt: string;
  body: string;
};

export async function readCorpusFile(relativeFile: string) {
  return readFile(path.join(CORPUS_ROOT, relativeFile), "utf8");
}

export async function loadDoc(slug: string): Promise<LoadedDoc | null> {
  const meta = docs.find((d) => d.slug === slug);
  if (!meta) return null;
  const markdown = stripEmDashes(await readCorpusFile(meta.file));
  const body = plainText(markdown);
  return { ...meta, markdown, body, excerpt: makeExcerpt(body) };
}

export async function loadAllDocs(): Promise<LoadedDoc[]> {
  return Promise.all(
    docs.map(async (meta) => {
      const markdown = stripEmDashes(await readCorpusFile(meta.file));
      const body = plainText(markdown);
      return { ...meta, markdown, body, excerpt: makeExcerpt(body) };
    }),
  );
}

export function makeExcerpt(text: string, max = 220) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > max ? `${clean.slice(0, max).trim()}…` : clean;
}

export { rewriteCorpusHref };
