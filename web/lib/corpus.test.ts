/**
 * Garde-fous entre le corpus markdown (racine du dépôt) et les données du site.
 * Ces tests échouent quand le corpus évolue sans que le site suive.
 */
import assert from "node:assert/strict";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, it } from "node:test";
import { docHref, docs } from "./catalog";
import { stripEmDashes } from "./copy";
import dates from "./data/doc-dates.json";
import { factcheckSummary, factchecks } from "./data/factcheck";
import { isStatusLabel, statusColor } from "./status";

const REPO = path.resolve(__dirname, "..", "..");

function corpusFiles() {
  const files: string[] = [];
  for (const entry of readdirSync(REPO).sort()) {
    if (!/^\d\d-/.test(entry)) continue;
    const full = path.join(REPO, entry);
    if (statSync(full).isFile()) {
      if (entry.endsWith(".md")) files.push(entry);
      continue;
    }
    for (const name of readdirSync(full).sort()) if (name.endsWith(".md")) files.push(`${entry}/${name}`);
  }
  return files;
}

const read = (file: string) => readFileSync(path.join(REPO, file), "utf8");

describe("catalogue et corpus", () => {
  it("chaque texte du catalogue existe dans le corpus", () => {
    for (const d of docs) assert.ok(corpusFiles().includes(d.file), `fichier absent : ${d.file}`);
  });

  it("chaque fichier du corpus a une entrée dans le catalogue", () => {
    const listed = new Set(docs.map((d) => d.file));
    for (const f of corpusFiles()) assert.ok(listed.has(f), `absent du catalogue (lib/catalog.ts) : ${f}`);
  });

  it("les slugs sont uniques et la synthèse a sa propre page", () => {
    assert.equal(new Set(docs.map((d) => d.slug)).size, docs.length);
    assert.equal(docHref("synthese"), "/synthese");
    assert.equal(docHref("argument/trilemme-bostrom"), "/d/argument/trilemme-bostrom");
  });

  it("doc-dates.json couvre exactement le corpus (npm run dates)", () => {
    assert.deepEqual(Object.keys(dates).sort(), corpusFiles().sort());
  });
});

describe("fact-check", () => {
  const emoji: Record<string, string> = { "✅": "exact", "⚠️": "nuance", "❌": "false", "🔷": "unknown" };
  const rows = [...read("09-SOURCES/02-fact-check-du-corpus.md").matchAll(/^\| (\d+) \|[^|]*\| (✅|⚠️|❌|🔷)/gm)];

  it("chaque verdict du site est celui du markdown", () => {
    assert.equal(rows.length, factchecks.length);
    for (const [, n, mark] of rows) {
      const item = factchecks.find((f) => f.n === Number(n));
      assert.ok(item, `affirmation ${n} absente de lib/data/factcheck.ts`);
      assert.equal(item.verdict, emoji[mark], `affirmation ${n}`);
    }
  });

  it("le bilan affiché correspond aux verdicts", () => {
    const count = (v: string) => factchecks.filter((f) => f.verdict === v).length;
    assert.deepEqual(
      { exact: count("exact"), nuance: count("nuance"), false: count("false"), unknown: count("unknown"), total: factchecks.length },
      { ...factcheckSummary },
    );
  });
});

describe("étiquettes de statut", () => {
  it("toute étiquette du corpus est reconnue comme badge", () => {
    const missed: string[] = [];
    for (const f of corpusFiles()) {
      for (const [, label] of read(f).matchAll(/`(\[[A-ZÀ-Ý][^\]`\n]*\])`/g)) {
        if (label.includes("=")) continue; // notation, pas un statut : [MIP* = RE]
        if (!isStatusLabel(label)) missed.push(`${f} : ${label}`);
      }
    }
    assert.deepEqual(missed, [], "ajouter le mot de tête dans lib/status.ts");
  });

  it("NON ÉTABLI n'est jamais coloré comme ÉTABLI", () => {
    assert.equal(statusColor("[ÉTABLI]"), "good");
    assert.equal(statusColor("[NON ÉTABLI]"), "bad");
    assert.equal(statusColor("[ÉTABLI comme expérience, NON ÉTABLI comme sortie]"), "warn");
    assert.equal(statusColor("[SPÉCULATIF, et bruité = faux]"), "spec");
    assert.equal(statusColor("[TESTABLE, PRÉDICTION PROBABLEMENT FAUSSE]"), "bad");
  });

  it("une notation entre crochets n'est pas un statut", () => {
    for (const label of ["[IP = PSPACE]", "[PBR]", "[OUVERTURE]"]) assert.equal(isStatusLabel(label), false, label);
  });
});

describe("tirets cadratins", () => {
  it("cellule vide, tête de cellule, incise, bloc de code", () => {
    assert.equal(stripEmDashes("| a | — |"), "| a | · |");
    assert.equal(stripEmDashes("| a | — (précision) |"), "| a | (précision) |");
    assert.equal(stripEmDashes("Une incise — comme ceci — fin."), "Une incise, comme ceci, fin.");
    assert.equal(stripEmDashes("```\nA — B\n```"), "```\nA · B\n```");
  });

  it("aucun tiret cadratin ne reste dans un texte rendu", () => {
    for (const f of corpusFiles()) assert.ok(!stripEmDashes(read(f)).includes("—"), f);
  });
});
