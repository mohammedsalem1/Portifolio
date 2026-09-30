import { cn } from "@/lib/cn";

/**
 * Visible marker for content that has not been confirmed yet.
 * It must stay obvious: an unconfirmed claim should never read as a fact.
 * Remove the marker by setting the item's status to "confirmed" in src/content.
 */
export function PendingMark({
  note,
  className,
}: {
  note?: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "rounded-sheet border border-dashed border-line-strong px-3 py-2 text-small text-muted",
        className,
      )}
    >
      <span className="font-semibold text-ink">To be confirmed.</span>
      {note ? <> {note}</> : null}
    </p>
  );
}
