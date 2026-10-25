import { readFile } from "node:fs/promises";
import path from "node:path";

/**
 * Police Geist pour les images de partage (ImageResponse ne lit pas les polices next/font).
 * Fichiers TTF versionnés dans assets/fonts, sous licence SIL OFL 1.1 (assets/fonts/OFL.txt).
 */
let cached: Promise<{ name: string; data: Buffer; weight: 400 | 600; style: "normal" }[]> | null = null;

export function ogFonts() {
  cached ??= Promise.all(
    ([
      ["Geist-Regular.ttf", 400],
      ["Geist-SemiBold.ttf", 600],
    ] as const).map(async ([file, weight]) => ({
      name: "Geist",
      data: await readFile(path.join(process.cwd(), "assets/fonts", file)),
      weight,
      style: "normal" as const,
    })),
  );
  return cached;
}
