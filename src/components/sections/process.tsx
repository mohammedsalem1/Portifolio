import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { SourceLine } from "@/components/ui/text-link";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";

export function Process({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const { workflow, workflowSource, workflowStatement, automationNote, principles } = getContent(lang);
  // Two columns on desktop, read top to bottom: steps 1 to 4, then 5 to 8.
  const rows = Math.ceil(workflow.length / 2);

  return (
    <Section id="process" {...t.sections.process} subtitle={workflowStatement}>
      <ol
        style={{ "--rows": rows } as React.CSSProperties}
        className="grid gap-x-14 md:grid-flow-col md:grid-cols-2 md:[grid-template-rows:repeat(var(--rows),auto)]"
      >
        {workflow.map((step, index) => (
          // The start border is the connecting line; the numbered square sits on it.
          <li
            key={step.name}
            data-reveal
            style={{ "--reveal-delay": `${(index % rows) * 70}ms` } as React.CSSProperties}
            className="relative ms-4 border-s border-line-strong/50 pb-9 ps-9"
          >
            <span
              aria-hidden="true"
              className={cn(
                "type-code absolute -start-4 top-0 grid size-8 place-items-center rounded-sheet border font-semibold",
                step.aiAssisted
                  ? "border-accent bg-accent text-on-accent"
                  : "border-line-strong bg-ground text-ink",
              )}
              dir="ltr"
            >
              {index + 1}
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <h3 className="text-lede font-semibold leading-8">{step.name}</h3>
              {step.aiAssisted ? <Tag className="text-accent-ink">{t.process.aiAssisted}</Tag> : null}
            </div>
            <p className="mt-1.5 max-w-[34rem] text-body text-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      <SourceLine sources={[workflowSource]} label={t.common.source} className="mt-2" />
      <p data-reveal className="mt-6 max-w-[42rem] text-body">
        {automationNote}
      </p>

      <h3 data-reveal className="type-heading mt-14 md:mt-16">
        {t.process.principles}
      </h3>
      <ul className="mt-6 grid gap-px overflow-hidden rounded-sheet border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {principles.map((principle, index) => (
          <li
            key={principle.title}
            data-reveal
            style={{ "--reveal-delay": `${index * 60}ms` } as React.CSSProperties}
            className="group bg-surface p-5 transition-colors duration-300 hover:bg-surface-2/60"
          >
            <p className="flex items-center gap-2.5 font-semibold">
              <span
                aria-hidden="true"
                className="size-2 rounded-[2px] bg-line-strong transition-colors duration-300 group-hover:bg-accent"
              />
              {principle.title}
            </p>
            <p className="mt-1.5 text-small text-muted">{principle.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
