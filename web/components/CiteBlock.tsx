"use client";

import { useState } from "react";
import { SITE_NAME, formatDateFr } from "@/lib/seo";

export function CiteBlock({ title, path, date }: { title: string; path: string; date: string }) {
  const [copied, setCopied] = useState(false);
  const citation = `${SITE_NAME}. « ${title} ». Version du ${formatDateFr(date)}.`;

  return (
    <div className="border-t border-line pt-4">
      <p className="kicker">Citer</p>
      <p className="mt-3 text-sm leading-6 text-muted">{citation}</p>
      <button
        type="button"
        className="mt-3 text-sm text-brass underline underline-offset-4"
        onClick={async () => {
          const url = `${window.location.origin}${path}`;
          await navigator.clipboard.writeText(`${citation} ${url}`);
          setCopied(true);
          window.setTimeout(() => setCopied(false), 1600);
        }}
      >
        {copied ? "Copié" : "Copier la citation"}
      </button>
    </div>
  );
}
