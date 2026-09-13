import type { Heading } from "@/lib/links";

export function ArticleToc({ headings }: { headings: Heading[] }) {
  if (headings.length < 2) return null;
  return (
    <nav aria-label="Dans ce texte">
      <p className="kicker">Dans ce texte</p>
      <ol className="mt-4 space-y-2 border-t border-line pt-4">
        {headings.map((h) => (
          <li key={h.id} className={h.depth > 2 ? "pl-3" : undefined}>
            <a href={`#${h.id}`} className="block min-h-11 py-2 text-sm leading-5 text-muted hover:text-ink">
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
