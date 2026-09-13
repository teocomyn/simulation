import { docs } from "@/lib/catalog";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, absoluteUrl, siteOrigin } from "@/lib/seo";

export const dynamic = "force-static";

export function GET() {
  const base = siteOrigin();
  const items = docs
    .map(
      (d) => `    <item>
      <title>${escapeXml(d.title)}</title>
      <link>${absoluteUrl(`/d/${d.slug}`)}</link>
      <guid isPermaLink="true">${absoluteUrl(`/d/${d.slug}`)}</guid>
      <description>${escapeXml(d.thesis)}</description>
      <category>${escapeXml(d.section)}</category>
      <pubDate>Sat, 29 Aug 2026 00:00:00 GMT</pubDate>
    </item>`,
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${base}</link>
    <atom:link href="${absoluteUrl("/rss.xml")}" rel="self" type="application/rss+xml"/>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>fr</language>
    <copyright>${escapeXml(SITE_TAGLINE)}</copyright>
    <lastBuildDate>Sat, 29 Aug 2026 00:00:00 GMT</lastBuildDate>
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
