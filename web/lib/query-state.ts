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
