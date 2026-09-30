import { Section } from "@/components/ui/section";
import { profile } from "@/content/profile";

export function About() {
  const [statement, ...rest] = profile.about;

  return (
    <Section id="about" title="About">
      <div className="max-w-[42rem]">
        <p className="type-heading font-semibold">{statement}</p>

        <div className="mt-6 space-y-4 text-body">
          {rest.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <dl className="mt-10 border-t border-line-strong md:mt-12">
          {profile.facts.map((fact) => (
            <div
              key={fact.label}
              className="grid gap-x-8 gap-y-1 border-b border-line py-4 md:grid-cols-[9rem_minmax(0,1fr)]"
            >
              <dt className="text-small text-muted md:pt-0.5">{fact.label}</dt>
              <dd className="text-body font-medium text-ink">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
