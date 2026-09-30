import { cn } from "@/lib/cn";

/** A technology or label. Bordered, never filled, so lists stay quiet. */
export function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sheet border border-line-strong/40 px-2 py-0.5 text-small text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({
  items,
  label,
  className,
}: {
  items: string[];
  /** Accessible name for the list, for example "Stack". */
  label: string;
  className?: string;
}) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
