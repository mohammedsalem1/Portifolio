import { TagList } from "@/components/ui/tag";
import { TextLink } from "@/components/ui/text-link";
import { cn } from "@/lib/cn";
import type { CaseStudy } from "@/content/types";

function Cell({
  term,
  className,
  children,
}: {
  term: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("bg-surface px-4 py-3 md:px-5 md:py-4", className)}>
      <dt className="text-label text-muted">{term}</dt>
      <dd className="mt-1">{children}</dd>
    </div>
  );
}

/**
 * Project facts, laid out like the title block in the corner of a drawing.
 * The cell rules are the grid gap showing the rule colour underneath, so
 * neighbouring cells never double their borders.
 */
export function TitleBlock({
  project,
  className,
}: {
  project: CaseStudy;
  className?: string;
}) {
  const hasLinks = project.links.length > 0;

  return (
    <dl
      className={cn(
        "grid gap-px overflow-hidden rounded-sheet border border-line-strong bg-line-strong md:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      <Cell term="Role">{project.role}</Cell>
      <Cell term="Context">{project.context}</Cell>
      <Cell term="Period">{project.period}</Cell>
      <Cell term="Stage">{project.stage}</Cell>
      <Cell
        term="Stack"
        className={cn("md:col-span-2", hasLinks ? "lg:col-span-3" : "lg:col-span-4")}
      >
        <TagList items={project.stack} label="Stack" className="mt-2" />
      </Cell>
      {hasLinks ? (
        <Cell term="Links" className="md:col-span-2 lg:col-span-1">
          <ul>
            {project.links.map((link) => (
              <li key={link.href}>
                {/* Padding gives a 44px target. The highlight stays on the text. */}
                <TextLink
                  href={link.href}
                  className="inline-block bg-clip-content py-2"
                >
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
