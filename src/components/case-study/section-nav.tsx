import { cn } from "@/lib/cn";

/** The six case-study sections, in reading order. Each id is an anchor target. */
export const caseStudySections = [
  { id: "problem", label: "Problem" },
  { id: "approach", label: "Approach" },
  { id: "implementation", label: "What I built" },
  { id: "decisions", label: "Engineering decisions" },
  { id: "status", label: "Status" },
  { id: "learned", label: "What I learned" },
] as const;

export type CaseStudySectionId = (typeof caseStudySections)[number]["id"];

/**
 * In-page navigation. Below 1024px it is a plain wrapped list of links.
 * From 1024px it becomes a rail with square nodes, echoing the hero pipeline.
 * Plain anchors only: no scroll listeners, so there is no "active" state.
 */
export function SectionNav({ className }: { className?: string }) {
  return (
    <nav aria-label="Case study sections" className={className}>
      <ol className="flex flex-wrap gap-x-5 lg:block lg:border-l lg:border-line-strong">
        {caseStudySections.map((section) => (
          <li key={section.id}>
            {/*
             * Padding makes the target 44px tall. bg-clip-content keeps the
             * hover highlight on the text line instead of the whole target.
             */}
            <a
              href={`#${section.id}`}
              className={cn(
                "link group relative inline-block bg-clip-content py-[0.65rem] text-small",
                "lg:pl-6 lg:no-underline",
              )}
            >
              {/* Node sits centred on the 1px rail: half of 9px plus half of the rule. */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1/2 hidden size-[9px] -translate-x-[5px] -translate-y-1/2 border-[1.5px] border-line-strong bg-ground group-hover:bg-signal group-focus-visible:bg-signal lg:block"
              />
              {section.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
