import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { moreProjects } from "@/content/projects";
import { LinkList } from "./link-list";

export function MoreProjects() {
  return (
    <Section id="more-projects" title="More projects">
      <ul className="divide-y divide-line-strong">
        {moreProjects.map((project) => (
          <li
            key={project.name}
            className="grid gap-x-12 gap-y-6 py-10 first:pt-0 last:pb-0 md:grid-cols-12"
          >
            <div className="md:col-span-7">
              <h3 className="type-heading">{project.name}</h3>
              <p className="mt-3 max-w-[40rem] text-body">{project.summary}</p>
            </div>

            <div className="md:col-span-5">
              <p className="text-body text-muted">{project.detail}</p>
              <TagList
                items={project.stack}
                label={`${project.name} stack`}
                className="mt-5"
              />
              <LinkList
                links={project.links}
                label={`${project.name} links`}
                className="mt-6"
              />
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
