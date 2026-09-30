import { ArrowLeftIcon, ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";
import { TextLink } from "@/components/ui/text-link";
import { featuredProjects } from "@/content/projects";

/**
 * Standalone link: padding makes the target 44px tall, and bg-clip-content
 * keeps the hover highlight on the text line.
 */
export const standaloneLink = "inline-block bg-clip-content py-2 font-medium";

/** "All projects", back to the projects section of the home page. */
export function AllProjectsLink() {
  return (
    <TextLink href="/#projects" className={standaloneLink}>
      <ArrowLeftIcon
        aria-hidden="true"
        weight="bold"
        className="mr-2 inline-block align-[-0.125em]"
      />
      All projects
    </TextLink>
  );
}

/** End of a case study: the next featured case study, and the way back. */
export function CaseStudyPager({ slug }: { slug: string }) {
  const index = featuredProjects.findIndex((project) => project.slug === slug);
  const next =
    featuredProjects.length > 1
      ? featuredProjects[(index + 1) % featuredProjects.length]
      : undefined;

  return (
    <nav
      aria-label="More projects"
      className="mt-16 flex flex-col gap-4 border-t border-line-strong pt-8 md:mt-20 md:flex-row md:items-end md:justify-between"
    >
      {next ? (
        <p>
          <span className="block text-small text-muted">Next case study</span>
          <TextLink
            href={`/projects/${next.slug}`}
            className="type-heading inline-block bg-clip-content py-2"
          >
            {next.name}
            <ArrowRightIcon
              aria-hidden="true"
              weight="bold"
              className="ml-2 inline-block align-[-0.125em]"
            />
          </TextLink>
        </p>
      ) : null}
      <p>
        <AllProjectsLink />
      </p>
    </nav>
  );
}
