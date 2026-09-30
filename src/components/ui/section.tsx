import { cn } from "@/lib/cn";

type SectionProps = {
  id: string;
  /** "01", "02"... in reading order. */
  index: string;
  /** A short shell command that names the section, shown in mono. */
  command: string;
  title: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
};

/**
 * A page section with its header: number, command, title, subtitle.
 * The command is code, so it always reads left to right.
 */
export function Section({
  id,
  index,
  command,
  title,
  subtitle,
  className,
  children,
}: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={cn("section-y", className)}>
      <div className="container-page">
        <header data-reveal className="mb-12 md:mb-16">
          <p className="flex items-center gap-3">
            <span className="type-code font-semibold text-accent-ink">{index}</span>
            <span aria-hidden="true" className="h-px w-10 bg-line-strong" />
            <span className="type-code text-muted" dir="ltr">
              <span className="text-accent-2">~</span> $ {command}
            </span>
          </p>
          <h2 id={headingId} className="type-title mt-5 max-w-[22ch]">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-4 max-w-[40rem] text-lede text-muted">{subtitle}</p>
          ) : null}
        </header>
        {children}
      </div>
    </section>
  );
}
