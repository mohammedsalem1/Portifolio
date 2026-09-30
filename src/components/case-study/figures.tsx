import { cn } from "@/lib/cn";
import type { Figure } from "@/content/types";

/**
 * Counts taken from the project's history: a large numeral and a small label.
 * One column of rows below 768px, one row of columns from 768px.
 */
export function Figures({
  figures,
  className,
}: {
  figures: Figure[];
  className?: string;
}) {
  if (figures.length === 0) return null;

  return (
    <ul
      aria-label="Project figures"
      className={cn("md:grid md:grid-cols-4 md:gap-x-8", className)}
    >
      {figures.map((figure) => (
        <li
          key={figure.label}
          className="flex items-baseline gap-4 border-t border-line-strong py-3 md:block md:py-4"
        >
          <span className="type-title block w-[5.5rem] shrink-0 tabular-nums md:w-auto">
            {figure.value}
          </span>
          <span className="block text-small text-muted md:mt-2">
            {figure.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
