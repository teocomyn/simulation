"use client";

import { useEffect, useId, useRef, useState } from "react";
import { type AnimationOptions, motion, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export type RandomLetterSwapProps = {
  label: string;
  reverse?: boolean;
  staggerDuration?: number;
  transition?: AnimationOptions;
  className?: string;
  onClick?: () => void;
};

function shuffle(indices: number[]) {
  const next = [...indices];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = next[i]!;
    next[i] = next[j]!;
    next[j] = current;
  }
  return next;
}

export function RandomLetterSwap({
  label,
  reverse = true,
  staggerDuration = 0.02,
  transition = { type: "spring", duration: 0.8 },
  className,
  onClick,
}: RandomLetterSwapProps) {
  const [scope, animate] = useAnimate();
  const blocked = useRef(false);
  const [ready, setReady] = useState(false);
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const chars = Array.from(label);

  useEffect(() => {
    setReady(true);
  }, []);

  const run = (hovered: boolean) => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const order = shuffle(chars.map((_, i) => i));
    for (let i = 0; i < order.length; i += 1) {
      const index = order[i]!;
      const delay = i * staggerDuration;
      void animate(
        `.rls-${uid}-a-${index}`,
        { y: hovered ? (reverse ? "100%" : "-100%") : "0%" },
        { ...transition, delay },
      );
      void animate(
        `.rls-${uid}-b-${index}`,
        { y: hovered ? "0%" : reverse ? "-100%" : "100%" },
        { ...transition, delay },
      );
    }
  };

  if (!ready) {
    return <span className={cn("relative inline-flex items-center", className)}>{label}</span>;
  }

  return (
    <motion.span
      ref={scope}
      className={cn("relative inline-flex items-center overflow-hidden", className)}
      onHoverStart={() => {
        if (blocked.current) return;
        blocked.current = true;
        run(true);
      }}
      onHoverEnd={() => {
        run(false);
        blocked.current = false;
      }}
      onClick={onClick}
    >
      <span className="sr-only">{label}</span>
      <span aria-hidden="true" className="pointer-events-none inline-flex">
        {chars.map((ch, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-block align-bottom leading-none"
            style={{ position: "relative", overflow: "hidden", height: "1.05em" }}
          >
            <motion.span className={`rls-${uid}-a-${i} block`} initial={{ y: "0%" }}>
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
            <motion.span
              className={`rls-${uid}-b-${i} block`}
              style={{ position: "absolute", left: 0, top: 0 }}
              initial={{ y: reverse ? "-100%" : "100%" }}
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          </span>
        ))}
      </span>
    </motion.span>
  );
}

export default RandomLetterSwap;
