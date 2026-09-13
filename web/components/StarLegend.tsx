export function StarLegend({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm text-muted ${className}`}>
      <span className="text-brass" aria-hidden="true">
        ★
      </span>{" "}
      Texte pivot : à lire en priorité pour tenir le dossier.
    </p>
  );
}
