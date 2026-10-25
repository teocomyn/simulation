#!/usr/bin/env node
/**
 * Dates de publication et de mise à jour de chaque texte du corpus, tirées de git.
 *
 *   npm run dates           régénère lib/data/doc-dates.json
 *   npm run dates -- --check échoue si le fichier ne correspond plus à l'historique git
 *
 * Vercel clone le dépôt sans historique complet : les dates sont donc calculées
 * en local, versionnées, et vérifiées en intégration continue.
 * Un fichier modifié mais pas encore commité prend la date du jour.
 */
import { execFileSync } from "node:child_process";
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const web = path.resolve(here, "..");
const repo = path.resolve(web, "..");
const out = path.join(web, "lib/data/doc-dates.json");
const check = process.argv.includes("--check");

const git = (...args) => execFileSync("git", args, { cwd: repo, encoding: "utf8" }).trim();

function corpusFiles() {
  const files = [];
  for (const entry of readdirSync(repo).sort()) {
    if (!/^\d\d-/.test(entry)) continue;
    const full = path.join(repo, entry);
    if (statSync(full).isFile()) {
      if (entry.endsWith(".md")) files.push(entry);
      continue;
    }
    for (const name of readdirSync(full).sort()) {
      if (name.endsWith(".md")) files.push(`${entry}/${name}`);
    }
  }
  return files;
}

function localDay(date = new Date()) {
  const p = (n) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${p(date.getMonth() + 1)}-${p(date.getDate())}`;
}

const today = localDay();
const result = {};
for (const file of corpusFiles()) {
  const log = git("log", "--follow", "--format=%cI", "--", file).split("\n").filter(Boolean);
  const dirty = !check && git("status", "--porcelain", "--", file) !== "";
  const published = log.length ? log[log.length - 1].slice(0, 10) : today;
  const updated = dirty || !log.length ? today : log[0].slice(0, 10);
  result[file] = { published, updated };
}

const json = `${JSON.stringify(result, null, 2)}\n`;
if (check) {
  const current = readFileSync(out, "utf8");
  if (current !== json) {
    console.error("lib/data/doc-dates.json n'est plus à jour. Lancez « npm run dates » puis commitez.");
    process.exit(1);
  }
  console.log(`doc-dates.json à jour (${Object.keys(result).length} textes).`);
} else {
  writeFileSync(out, json);
  console.log(`doc-dates.json écrit (${Object.keys(result).length} textes).`);
}
