import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { ButtonLink } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { featuredProjects } from "@/content/projects";
import type { CaseStudy, Figure } from "@/content/types";
import { cn } from "@/lib/cn";
import { StandaloneLink } from "./link-list";

const sheet = "overflow-hidden rounded-sheet border border-line-strong bg-surface";
const projectName =
  "type-heading text-[length:clamp(1.5rem,1.15rem_+_1.5vw,2.125rem)] leading-[1.12]";
const smallLabel = "text-label text-muted";

function headingId(project: CaseStudy) {
  return `project-${project.slug}`;
}

function titleBlockRows(project: CaseStudy) {
  return [
    { label: "Role", value: project.role },
    { label: "Context", value: project.context },
    { label: "Period", value: project.period },
    { label: "Stage", value: project.stage },
  ];
}

function StoryBlock({ label, children }: { label: string; children: string }) {
  return (
    <div>
      <h4 className="text-small font-semibold text-muted">{label}</h4>
      <p className="mt-1.5 text-body">{children}</p>
    </div>
  );
}

function Stack({ project }: { project: CaseStudy }) {
  return (
    <div>
      <p className={smallLabel} aria-hidden="true">
        Stack
      </p>
      <TagList items={project.stack} label="Stack" className="mt-2" />
    </div>
  );
}

function ProjectLinks({
  project,
  className,
}: {
  project: CaseStudy;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-x-6 gap-y-4", className)}>
      <ButtonLink href={`/projects/${project.slug}`} variant="secondary">
        Read the case study
        <span className="sr-only">: {project.name}</span>
        <ArrowRightIcon aria-hidden="true" weight="bold" className="size-4" />
      </ButtonLink>
      {project.links.map((link) => (
        <StandaloneLink key={link.href} href={link.href}>
          {link.label}
        </StandaloneLink>
      ))}
    </div>
  );
}

/** Real numbers only. A project without figures renders nothing here. */
function Figures({
  figures,
  className,
}: {
  figures: Figure[];
  className?: string;
}) {
  if (figures.length === 0) return null;
  return (
    <dl className={cn("grid gap-x-8 gap-y-3 md:grid-cols-4", className)}>
      {figures.map((figure) => (
        // The label comes first in the markup and the numeral first on screen.
        <div
          key={figure.label}
          className="flex flex-row-reverse items-baseline justify-end gap-4 md:flex-col-reverse md:items-start md:gap-1"
        >
          <dt className="text-small text-muted">{figure.label}</dt>
          <dd className="type-title w-20 shrink-0 tabular-nums md:w-auto">
            {figure.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Sheet one: the story on the left, the title block down the right edge. */
function ColumnSheet({ project }: { project: CaseStudy }) {
  return (
    <article aria-labelledby={headingId(project)} className={sheet}>
      <div className="grid lg:grid-cols-[minmax(0,1fr)_21rem]">
        <div className="p-6 md:p-10">
          <h3 id={headingId(project)} className={projectName}>
            {project.name}
          </h3>
          <p className="mt-4 max-w-[40rem] text-lede">{project.summary}</p>

          <div className="mt-8 max-w-[40rem] space-y-6">
            <StoryBlock label="The problem">{project.card.problem}</StoryBlock>
            <StoryBlock label="My contribution">
              {project.card.contribution}
            </StoryBlock>
          </div>

          <Figures figures={project.figures} className="mt-8" />

          <ProjectLinks project={project} className="mt-10" />
        </div>

        <div className="border-t border-line-strong lg:border-l lg:border-t-0">
          <dl className="divide-y divide-line">
            {titleBlockRows(project).map((row) => (
              <div key={row.label} className="px-6 py-4 md:px-10 lg:px-6">
                <dt className={smallLabel}>{row.label}</dt>
                <dd className="mt-0.5 text-small font-medium text-ink">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
          <div className="border-t border-line px-6 py-4 md:px-10 lg:px-6">
            <Stack project={project} />
          </div>
        </div>
      </div>
    </article>
  );
}

/** Sheet two: a band of figures under the name, the title block as a strip along the bottom. */
function StripSheet({ project }: { project: CaseStudy }) {
  return (
    <article aria-labelledby={headingId(project)} className={sheet}>
      <div className="grid gap-x-10 gap-y-4 p-6 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:items-baseline md:p-10">
        <h3 id={headingId(project)} className={projectName}>
          {project.name}
        </h3>
        <p className="max-w-[40rem] text-lede">{project.summary}</p>
      </div>

      <Figures
        figures={project.figures}
        className="border-t border-line-strong px-6 py-6 md:px-10 md:py-8"
      />

      <div className="border-t border-line-strong p-6 md:p-10">
        <div className="grid gap-x-10 gap-y-6 md:grid-cols-2">
          <StoryBlock label="The problem">{project.card.problem}</StoryBlock>
          <StoryBlock label="My contribution">
            {project.card.contribution}
          </StoryBlock>
        </div>

        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Stack project={project} />
          <ProjectLinks project={project} className="lg:shrink-0" />
        </div>
      </div>

      {/* The 1px gaps show the grid's background as hairlines between cells. */}
      <dl className="grid gap-px border-t border-line-strong bg-line md:grid-cols-2 lg:grid-cols-4">
        {titleBlockRows(project).map((row) => (
          <div key={row.label} className="bg-surface px-6 py-4 md:px-10 lg:px-6">
            <dt className={smallLabel}>{row.label}</dt>
            <dd className="mt-0.5 text-small font-medium text-ink">{row.value}</dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

export function FeaturedProjects() {
  return (
    <Section id="projects" title="Featured projects">
      <div className="space-y-8 md:space-y-12">
        {featuredProjects.map((project, index) =>
          // Alternate the composition so neighbouring sheets never match.
          index % 2 === 0 ? (
            <ColumnSheet key={project.slug} project={project} />
          ) : (
            <StripSheet key={project.slug} project={project} />
          ),
        )}
      </div>
    </Section>
  );
}
