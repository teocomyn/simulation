import { ImageResponse } from "next/og";
import { docs, getDoc, getSection } from "@/lib/catalog";
import { ogFonts } from "@/lib/og-fonts";
import { SITE_NAME } from "@/lib/seo";

export const dynamic = "force-static";

const size = { width: 1200, height: 630 };

export function generateStaticParams() {
  return docs.map((d) => ({ slug: d.slug.split("/") }));
}

/** La police par défaut de l'image ne contient pas certains symboles. */
function printable(value: string) {
  return value.replace(/≡/g, "équivaut à").replace(/★/g, "");
}

function clip(value: string, max: number) {
  const text = printable(value);
  return text.length > max ? `${text.slice(0, max).trimEnd()}…` : text;
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  const doc = getDoc(slug.join("/"));
  if (!doc) return new Response("Not found", { status: 404 });
  const section = getSection(doc.section);
  const titleSize = doc.title.length > 48 ? 54 : doc.title.length > 30 ? 64 : 76;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(ellipse at 18% 8%, #1b6ca8 0%, transparent 50%), radial-gradient(ellipse at 90% 92%, #0f3d50 0%, transparent 45%), #031c26",
          color: "#fffdf8",
          fontFamily: "Geist",
          padding: "68px 72px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: "0.18em", color: "#5ad2f4" }}>
          <div style={{ display: "flex" }}>{`${section?.number ?? ""} · ${(section?.title ?? "").toUpperCase()}`}</div>
          <div style={{ display: "flex" }}>{doc.starred ? "TEXTE PIVOT" : ""}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
          <div style={{ display: "flex", fontSize: titleSize, fontWeight: 600, lineHeight: 1.08, maxWidth: 1040 }}>
            {printable(doc.title)}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 30,
              lineHeight: 1.35,
              color: "#eaf9ff",
              opacity: 0.82,
              maxWidth: 1000,
              borderLeft: "4px solid #5ad2f4",
              paddingLeft: 24,
            }}
          >
            {clip(doc.thesis, 170)}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#9ec8d6" }}>
          <div style={{ display: "flex", color: "#fffdf8", fontWeight: 600 }}>{SITE_NAME}</div>
          <div style={{ display: "flex" }}>Nous cherchons la vérité, pas la simulation.</div>
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
