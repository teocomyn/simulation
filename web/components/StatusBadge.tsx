import { statusClass, statusColor } from "@/lib/status";

export function StatusBadge({ children }: { children: string }) {
  const color = statusColor(children);
  return (
    <span className={`badge ${statusClass[color]}`}>
      {children.replace(/^\[|\]$/g, "")}
    </span>
  );
}
