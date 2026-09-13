export function BrandMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="7" y="7" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <rect x="12" y="12" width="8" height="8" fill="currentColor" />
    </svg>
  );
}
