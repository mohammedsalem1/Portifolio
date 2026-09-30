import { Section } from "@/components/ui/section";
import { TagList } from "@/components/ui/tag";
import { skillGroups } from "@/content/skills";
import { StandaloneLink } from "./link-list";

export function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      lede="Only what my own projects show in use."
    >
      <dl className="border-t border-line-strong">
        {skillGroups.map((group) => (
          <div
            key={group.name}
            className="grid gap-x-10 gap-y-3 border-b border-line py-7 md:grid-cols-[11rem_minmax(0,1fr)]"
          >
            <dt className="text-lede font-semibold">{group.name}</dt>
            <dd>
              <TagList items={group.items} label={`${group.name} skills`} />
              <p className="mt-5 flex flex-wrap items-baseline gap-x-5 gap-y-4 text-small">
                <span className="text-muted">See it in:</span>
                {group.evidence.map((link) => (
                  <StandaloneLink key={link.href} href={link.href}>
                    {link.label}
                  </StandaloneLink>
                ))}
              </p>
              {group.note ? (
                <p className="mt-4 max-w-[42rem] text-small text-muted">
                  {group.note}
                </p>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
