import { Section } from "@/components/ui/section";
import { profile } from "@/content/profile";
import { LinkList } from "./link-list";

export function Contact() {
  return (
    <Section id="contact" title="Contact">
      {/* The address is the largest thing in the section and wraps on narrow screens. */}
      <p>
        <a
          href={`mailto:${profile.email}`}
          className="link type-title [overflow-wrap:anywhere]"
        >
          {profile.email}
        </a>
      </p>

      <LinkList
        label="Profiles"
        className="mt-10"
        links={[
          { label: "GitHub", href: profile.github },
          { label: "LinkedIn", href: profile.linkedin },
        ]}
      />

      <p className="mt-8 text-body text-muted">
        {profile.availability}. Based in {profile.location}.
      </p>
    </Section>
  );
}
