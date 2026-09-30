import { PendingMark } from "@/components/ui/pending";
import { SourceLine } from "@/components/ui/text-link";
import type { Block } from "@/content/types";
import type { CaseStudySectionId } from "./section-nav";

/** One case-study section: a hairline, an h2, then its content. */
export function CaseSection({
  id,
  title,
  children,
}: {
  id: CaseStudySectionId;
  title: string;
  children: React.ReactNode;
}) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="border-t border-line py-10 first:border-t-0 first:pt-0 last:pb-0 md:py-12"
    >
      <h2 id={headingId} className="type-heading">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

/**
 * A block of copy with its sources. A pending block keeps its marker visible,
 * and a pending block with no copy yet shows the marker alone.
 */
export function BlockContent({ block }: { block: Block }) {
  const pending = block.status === "pending";

  if (pending && block.body.length === 0) {
    return <PendingMark note={block.pendingNote} />;
  }

  return (
    <div className="space-y-4">
      {block.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <SourceLine sources={block.sources} />
      {pending ? <PendingMark note={block.pendingNote} /> : null}
    </div>
  );
}
