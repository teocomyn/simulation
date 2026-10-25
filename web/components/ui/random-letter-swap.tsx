import { cn } from "@/lib/utils";

export type RandomLetterSwapProps = {
  label: string;
  /** Les lettres sortent vers le bas (true) ou vers le haut (false). */
  reverse?: boolean;
  /** Décalage entre deux lettres, en secondes. */
  staggerDuration?: number;
  className?: string;
};

/**
 * Ordre de passage des lettres : pseudo-aléatoire mais déterministe,
 * pour que le rendu serveur et le rendu client soient identiques.
 */
function swapRank(label: string) {
  const order = Array.from(label, (_, i) => i);
  let seed = 7;
  for (const ch of label) seed = (Math.imul(seed, 31) + ch.charCodeAt(0)) >>> 0;
  for (let i = order.length - 1; i > 0; i -= 1) {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    const j = seed % (i + 1);
    [order[i], order[j]] = [order[j]!, order[i]!];
  }
  const rank: number[] = [];
  order.forEach((charIndex, position) => {
    rank[charIndex] = position;
  });
  return rank;
}

/**
 * Effet de survol : chaque lettre glisse et est remplacée par sa copie.
 * CSS pur (voir .rls dans globals.css), désactivé par prefers-reduced-motion.
 */
export function RandomLetterSwap({ label, reverse = true, staggerDuration = 0.02, className }: RandomLetterSwapProps) {
  const chars = Array.from(label);
  const rank = swapRank(label);

  return (
    <span className={cn("rls relative inline-flex items-center overflow-hidden", reverse ? "rls-down" : "rls-up", className)}>
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className="pointer-events-none inline-flex">
        {chars.map((ch, i) => {
          const glyph = ch === " " ? " " : ch;
          const style = { transitionDelay: `${(rank[i] ?? 0) * staggerDuration}s` };
          return (
            <span key={`${label}-${i}`} className="relative inline-block overflow-hidden align-bottom leading-none" style={{ height: "1.05em" }}>
              <span className="rls-a block" style={style}>
                {glyph}
              </span>
              <span className="rls-b absolute top-0 left-0 block" style={style}>
                {glyph}
              </span>
            </span>
          );
        })}
      </span>
    </span>
  );
}

export default RandomLetterSwap;
