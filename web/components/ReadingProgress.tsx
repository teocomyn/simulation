"use client";

import { useEffect, useState } from "react";

export function ReadingProgress() {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const article = document.querySelector("article");
      if (!article) {
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        setP(max > 0 ? el.scrollTop / max : 0);
        return;
      }
      const rect = article.getBoundingClientRect();
      const start = window.scrollY + rect.top;
      const max = article.offsetHeight - window.innerHeight;
      const passed = window.scrollY - start;
      setP(max > 0 ? Math.min(1, Math.max(0, passed / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div className="progress" style={{ transform: `scaleX(${p})` }} aria-hidden="true" />;
}
