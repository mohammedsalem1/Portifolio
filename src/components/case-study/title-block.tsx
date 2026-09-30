import { TagList } from "@/components/ui/tag";
import { TextLink } from "@/components/ui/text-link";
import type { RCaseStudy } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";

function Cell({ term, className, children }: { term: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={cn("bg-surface px-4 py-3 md:px-5 md:py-4", className)}>
      <dt className="text-label text-muted">{term}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

/**
 * Project facts, laid out like the title block in the corner of a drawing.
 * The cell rules are the grid gap showing the rule colour underneath.
 */
export function TitleBlock({ project, lang, className }: { project: RCaseStudy; lang: Locale; className?: string }) {
  const t = getDictionary(lang);
  const hasLinks = project.links.length > 0;

  return (
    <dl
      data-reveal
      className={cn(
        "grid gap-px overflow-hidden rounded-panel border border-line bg-line shadow-[var(--shadow)] md:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      <Cell term={t.projects.role}>{project.role}</Cell>
      <Cell term={t.projects.context}>{project.context}</Cell>
      <Cell term={t.projects.period}>{project.period}</Cell>
      <Cell term={t.projects.stage}>{project.stage}</Cell>
      <Cell term={t.projects.stack} className={cn("md:col-span-2", hasLinks ? "lg:col-span-3" : "lg:col-span-4")}>
        <TagList items={project.stack} label={t.projects.stack} className="mt-2" />
      </Cell>
      {hasLinks ? (
        <Cell term={t.projects.links} className="md:col-span-2 lg:col-span-1">
          <ul>
            {project.links.map((link) => (
              <li key={link.href}>
                <TextLink href={link.href} className="inline-block bg-clip-content py-2">
                  {link.label}
                </TextLink>
              </li>
            ))}
          </ul>
        </Cell>
      ) : null}
    </dl>
  );
}
