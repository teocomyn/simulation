"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const PaletteDialog = dynamic(() => import("./PaletteDialog"), { ssr: false });

function isTypingTarget(el: EventTarget | null) {
  if (!(el instanceof HTMLElement)) return false;
  const tag = el.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
}

/**
 * Raccourcis ⌘K et « / ». La fenêtre et son index de recherche ne sont
 * téléchargés qu'à la première ouverture.
 */
export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (event.key === "/" && !isTypingTarget(event.target) && !event.metaKey && !event.ctrlKey) {
        event.preventDefault();
        setOpen(true);
      }
    };
    window.addEventListener("dossier-search", onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("dossier-search", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return open ? <PaletteDialog onClose={() => setOpen(false)} /> : null;
}

export function openCommandPalette() {
  window.dispatchEvent(new Event("dossier-search"));
}
