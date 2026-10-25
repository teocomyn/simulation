import { ImageResponse } from "next/og";
import { ogFonts } from "@/lib/og-fonts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "radial-gradient(ellipse at 22% 12%, #1b6ca8 0%, transparent 52%), radial-gradient(ellipse at 86% 88%, #5ad2f4 0%, transparent 40%), #031c26",
          color: "#fffdf8",
          fontFamily: "Geist",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: "0.2em", textTransform: "uppercase", color: "#5ad2f4" }}>
          Dossier Simulation · revue de référence
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 600, lineHeight: 1.1, maxWidth: 900 }}>
            Quel est le niveau le plus fondamental de la réalité ?
          </div>
          <div style={{ fontSize: 28, color: "#eaf9ff", maxWidth: 820, opacity: 0.78 }}>
            Quatre questions séparées. Un argument conditionnel. Un verrou : la conscience.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 22, color: "#5ad2f4" }}>
          Nous cherchons la vérité, pas la simulation.
        </div>
      </div>
    ),
    { ...size, fonts: await ogFonts() },
  );
}
