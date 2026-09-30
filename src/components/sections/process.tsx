import { Section } from "@/components/ui/section";
import { Tag } from "@/components/ui/tag";
import { SourceLine } from "@/components/ui/text-link";
import {
  automationNote,
  principles,
  workflow,
  workflowSource,
  workflowStatement,
} from "@/content/process";
import { cn } from "@/lib/cn";

export function Process() {
  // Two columns on desktop, read top to bottom: steps 1 to 4, then 5 to 8.
  const rows = Math.ceil(workflow.length / 2);

  return (
    <Section id="process" title="How I work" lede={workflowStatement}>
      <ol
        style={{ "--rows": rows } as React.CSSProperties}
        className="grid gap-x-14 md:grid-flow-col md:grid-cols-2 md:[grid-template-rows:repeat(var(--rows),auto)]"
      >
        {workflow.map((step, index) => (
          // The left border is the connecting line; the numbered square sits on it.
          <li
            key={step.name}
            className="relative ml-4 border-l border-line-strong pb-9 pl-9"
          >
            <span
              aria-hidden="true"
              className={cn(
                "type-code absolute -left-4 top-0 grid size-8 place-items-center rounded-sheet border-[1.5px] font-semibold",
                step.aiAssisted
                  ? "border-ink bg-signal text-on-signal"
                  : "border-line-strong bg-ground text-ink",
              )}
            >
              {index + 1}
            </span>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <h3 className="text-lede font-semibold leading-8">{step.name}</h3>
              {step.aiAssisted ? <Tag>AI-assisted</Tag> : null}
            </div>
            <p className="mt-1.5 max-w-[34rem] text-body">{step.body}</p>
          </li>
        ))}
      </ol>

      <SourceLine sources={[workflowSource]} className="mt-2" />
      <p className="mt-6 max-w-[42rem] text-body">{automationNote}</p>

      <h3 className="type-heading mt-14 md:mt-16">Principles</h3>
      <ul className="mt-6 grid border-t border-line-strong sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3">
        {principles.map((principle) => (
          <li key={principle.title} className="border-b border-line py-5">
            <p className="font-semibold">{principle.title}</p>
            <p className="mt-1 text-small text-muted">{principle.body}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
