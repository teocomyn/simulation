#!/usr/bin/env node
/**
 * Contrôle de mise en page sur téléphone : charge chaque URL du sitemap
 * à 375 px de large et échoue si la page déborde horizontalement ou si un
 * texte est rogné hors d'un conteneur défilant (tableau, bloc de code).
 *
 *   node scripts/check-mobile.mjs http://localhost:3000
 *   PW_CHANNEL=chrome node scripts/check-mobile.mjs http://localhost:3000   (Chrome installé localement)
 */
import { chromium } from "playwright";

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/+$/, "");
const width = Number(process.env.MOBILE_WIDTH ?? 375);

const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => new URL(url).pathname);
if (paths.length === 0) throw new Error("sitemap vide");

const browser = await chromium.launch(process.env.PW_CHANNEL ? { channel: process.env.PW_CHANNEL } : {});
const page = await browser.newPage({ viewport: { width, height: 812 }, deviceScaleFactor: 1 });
const failures = [];

for (const p of paths) {
  await page.goto(`${base}${p}`, { waitUntil: "networkidle" });
  const report = await page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const scrollers = "pre, .table-scroll, .overflow-x-auto, .katex-display";
    const clipped = [...document.querySelectorAll("main h1, main h2, main h3, main p, main li, main td, main th")]
      .filter((el) => !el.closest(scrollers))
      .filter((el) => {
        const r = el.getBoundingClientRect();
        return r.width > 0 && r.right > vw + 1;
      })
      .map((el) => `${el.tagName.toLowerCase()} « ${(el.textContent ?? "").trim().slice(0, 50)} »`);
    return { scrollWidth: document.documentElement.scrollWidth, vw, clipped };
  });
  if (report.scrollWidth > report.vw + 1 || report.clipped.length > 0) {
    failures.push(`${p} : largeur ${report.scrollWidth}px pour ${report.vw}px${report.clipped.length ? `, rogné : ${report.clipped.slice(0, 3).join(" ; ")}` : ""}`);
  }
}

await browser.close();
if (failures.length) {
  console.error(`${failures.length} page(s) sur ${paths.length} débordent à ${width} px :\n- ${failures.join("\n- ")}`);
  process.exit(1);
}
console.log(`${paths.length} pages vérifiées à ${width} px : aucun débordement.`);
