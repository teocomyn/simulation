import { useSyncExternalStore } from "react";

export function readQuery() {
  if (typeof window === "undefined") return new URLSearchParams();
  return new URLSearchParams(window.location.search);
}

export function writeQuery(next: URLSearchParams) {
  if (typeof window === "undefined") return;
  const qs = next.toString();
  const url = qs ? `${window.location.pathname}?${qs}${window.location.hash}` : `${window.location.pathname}${window.location.hash}`;
  window.history.replaceState(null, "", url);
}

function subscribe(onChange: () => void) {
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
}

/**
 * Chaîne de requête de l'URL courante, sans effet ni état copié.
 * Vide au rendu serveur et pendant l'hydratation, puis la vraie valeur.
 *
 * Usage : dériver l'état initial d'un instrument de l'URL, et n'écrire
 * l'URL (writeQuery) que dans les gestionnaires d'événements.
 */
export function useLocationSearch() {
  return useSyncExternalStore(
    subscribe,
    () => window.location.search,
    () => "",
  );
}
