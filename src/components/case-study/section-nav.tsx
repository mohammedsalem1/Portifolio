import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";

/** The six case-study sections, in reading order. Each id is an anchor target. */
export const caseStudySectionIds = [
  "problem",
  "approach",
  "implementation",
  "decisions",
  "status",
  "learned",
] as const;

export type CaseStudySectionId = (typeof caseStudySectionIds)[number];

/**
 * In-page navigation. Below 1024px it is a plain wrapped list of links.
 * From 1024px it becomes a rail with square nodes.
 */
export function SectionNav({ lang, className }: { lang: Locale; className?: string }) {
  const t = getDictionary(lang);
  return (
    <nav aria-label={t.caseStudy.sections} className={className}>
      <ol className="flex flex-wrap gap-x-5 lg:block lg:border-s lg:border-line-strong/50">
        {caseStudySectionIds.map((id) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={cn(
                "link group relative inline-block bg-clip-content py-[0.65rem] text-small",
                "lg:ps-6 lg:no-underline lg:hover:text-ink",
              )}
            >
              {/* Node centred on the 1px rail. */}
              <span
                aria-hidden="true"
                className="absolute start-0 top-1/2 hidden size-[9px] -translate-y-1/2 -translate-x-[5px] rounded-[2px] border-[1.5px] border-line-strong bg-ground transition-colors group-hover:border-accent group-hover:bg-accent group-focus-visible:bg-accent rtl:translate-x-[5px] lg:block"
              />
              {t.caseStudy[id]}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
