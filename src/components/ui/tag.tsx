import { cn } from "@/lib/cn";

/** A technology or label. Quiet: a hairline border and a tinted ground. */
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
        "inline-flex items-center rounded-sheet border border-line bg-surface-2/60 px-2 py-0.5 text-small text-ink",
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
  items: readonly string[];
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
