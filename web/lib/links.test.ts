import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  extractHeadings,
  looksLikePathLabel,
  prettyLinkLabel,
  rewriteCorpusHref,
  slugifyHeading,
} from "./links";

describe("rewriteCorpusHref", () => {
  it("maps a folder with trailing slash to the section, not the first doc", () => {
    assert.equal(rewriteCorpusHref("11-MATHEMATIQUES/"), "/s/mathematiques");
    assert.equal(rewriteCorpusHref("../11-MATHEMATIQUES/"), "/s/mathematiques");
  });

  it("maps a known file to its article", () => {
    assert.equal(
      rewriteCorpusHref("10-ACTUALISATION/01-etat-de-l-art-2026.md"),
      "/d/actualisation/etat-de-l-art-2026",
    );
  });

  it("maps a short folder/number path", () => {
    assert.equal(rewriteCorpusHref("../04-ONTOLOGIE/01"), "/d/ontologie/carte-des-niveaux");
  });

  it("keeps external URLs", () => {
    assert.equal(rewriteCorpusHref("https://example.com/x"), "https://example.com/x");
  });

  it("does not match an empty basename", () => {
    assert.notEqual(rewriteCorpusHref("11-MATHEMATIQUES/"), "/d/synthese");
  });
});

describe("prettyLinkLabel", () => {
  it("replaces folder-looking labels", () => {
    assert.equal(prettyLinkLabel("11-MATHEMATIQUES/", "11-MATHEMATIQUES"), "Mathématiques");
    assert.equal(
      prettyLinkLabel("10-ACTUALISATION/01-etat-de-l-art-2026.md", "10-ACTUALISATION"),
      "État de l'art 2026",
    );
  });

  it("keeps a human label", () => {
    assert.equal(
      prettyLinkLabel("01-ARGUMENT/02-la-faille-probabiliste.md", "La faille probabiliste"),
      null,
    );
  });
});

describe("headings", () => {
  it("uses numbered ids for numbered titles", () => {
    assert.equal(slugifyHeading("1. Le geste central"), "1");
    assert.equal(slugifyHeading("6.3 Souffrance"), "6-3");
  });

  it("extracts h2-h4 only", () => {
    const heads = extractHeadings("# Titre\n\n## 1. Un\n\n### 1.1 Deux\n");
    assert.deepEqual(
      heads.map((h) => h.id),
      ["1", "1-1"],
    );
  });

  it("suffixes duplicate titles so TOC anchors stay unique", () => {
    const heads = extractHeadings("## Énoncé\n\n## Énoncé\n");
    assert.deepEqual(
      heads.map((h) => h.id),
      ["enonce", "enonce-2"],
    );
  });
});

describe("looksLikePathLabel", () => {
  it("detects folder names", () => {
    assert.equal(looksLikePathLabel("10-ACTUALISATION"), true);
    assert.equal(looksLikePathLabel("La faille probabiliste"), false);
  });
});
