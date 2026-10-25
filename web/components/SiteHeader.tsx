"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { RandomLetterSwap } from "@/components/ui/random-letter-swap";
import { sections } from "@/lib/catalog";
import { BrandMark } from "./BrandMark";
import { openCommandPalette } from "./CommandPalette";

const nav = [
  { href: "/synthese", label: "Synthèse" },
  { href: "/explorer", label: "Corpus" },
  { href: "/outils", label: "Instruments" },
  { href: "/sources", label: "Sources" },
];

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  window.addEventListener("hashchange", onChange);
  window.addEventListener("resize", onChange);
  return () => {
    window.removeEventListener("scroll", onChange);
    window.removeEventListener("hashchange", onChange);
    window.removeEventListener("resize", onChange);
  };
}

/** L'en-tête reste transparent tant que le haut de l'accueil est visible. */
function heroInView() {
  return !window.location.hash && window.scrollY < window.innerHeight * 0.62;
}

export function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [openedAt, setOpenedAt] = useState(pathname);
  const overHero = useSyncExternalStore(subscribeScroll, heroInView, () => true);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const cover = isHome && overHero && !open;

  // Le menu se referme quand la page change (ajustement pendant le rendu, sans effet).
  if (openedAt !== pathname) {
    setOpenedAt(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const first = panel?.querySelector<HTMLElement>("a, button");
    first?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const nodes = [...panel.querySelectorAll<HTMLElement>("a, button")];
      if (nodes.length === 0) return;
      const firstNode = nodes[0];
      const lastNode = nodes[nodes.length - 1];
      if (event.shiftKey && document.activeElement === firstNode) {
        event.preventDefault();
        lastNode.focus();
      } else if (!event.shiftKey && document.activeElement === lastNode) {
        event.preventDefault();
        firstNode.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={cover ? "site-header header-cover sticky top-0 z-40" : "site-header sticky top-0 z-40 bg-bg/90 backdrop-blur-md masthead-shadow"}>
      <div className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3 text-ink">
          <BrandMark className="h-7 w-7 text-brass" />
          <span className="leading-none">
            <span className="block font-display text-[1.35rem] tracking-tight">Dossier</span>
            <span className="mt-0.5 block text-[0.62rem] tracking-[0.22em] text-muted uppercase">
              Simulation
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Principal" suppressHydrationWarning>
          {nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative pb-1 text-[0.92rem] ${active ? "text-ink" : "text-muted hover:text-ink"}`}
              >
                <RandomLetterSwap
                  label={item.label}
                  staggerDuration={0.025}
                />
                {active ? <span className="absolute inset-x-0 -bottom-0.5 h-px bg-brass" /> : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => openCommandPalette()}
            className={`inline-flex min-h-11 items-center gap-2 border px-3 text-sm ${
              cover
                ? "border-white/20 bg-transparent text-ink-2 hover:border-brass hover:text-ink"
                : "border-line bg-paper text-muted hover:border-brass hover:text-ink"
            }`}
          >
            <span aria-hidden="true">⌕</span>
            <span className="hidden sm:inline">Chercher</span>
            <kbd className="ml-1 hidden border border-line px-1.5 py-0.5 text-[10px] tracking-normal text-dim md:inline">
              ⌘K
            </kbd>
          </button>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-sm tracking-[0.16em] text-ink uppercase md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Fermer" : "Menu"}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="menu-mobile"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-x-0 top-[4.25rem] bottom-0 z-40 overflow-y-auto bg-bg px-4 py-6 md:hidden"
        >
          <nav className="mx-auto max-w-6xl">
            <div className="grid gap-1">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="border-b border-line py-4 font-display text-3xl text-ink">
                  <RandomLetterSwap
                    label={item.label}
                    staggerDuration={0.03}
                    className="text-3xl"
                  />
                </Link>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  openCommandPalette();
                }}
                className="border-b border-line py-4 text-left font-display text-3xl text-ink"
              >
                Recherche
              </button>
              <Link href="/methode" className="border-b border-line py-4 font-display text-3xl text-ink">
                Méthode
              </Link>
            </div>
            <p className="kicker mt-10">Sections</p>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
              {sections.map((s) => (
                <Link key={s.id} href={`/s/${s.id}`} className="min-h-11 text-sm text-muted">
                  <span className="font-mono text-brass">{s.number}</span> {s.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
