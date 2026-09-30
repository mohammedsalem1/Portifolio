import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  title: string;
  /** Optional sentence under the title. Keep it under 25 words. */
  lede?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * A page section: a rule, a title, an optional lede, then content.
 * Title and lede stack vertically. No eyebrow labels.
 */
export function Section({ id, title, lede, className, children }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("border-t border-line", className)}
    >
      <div className="container-page section-y">
        <header className="mb-10 max-w-[44rem] md:mb-14">
          <h2 id={headingId} className="type-title">
            {title}
          </h2>
          {lede ? (
            <p className="mt-4 text-lede text-muted">{lede}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
