import { TextLink } from "@/components/ui/text-link";
import { profile } from "@/content/profile";

const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-small text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-small">
          {links.map((link) => (
            <li key={link.href}>
              {/* Padding makes the target 44px tall; the highlight stays on the text. */}
              <TextLink href={link.href} className="inline-block bg-clip-content py-3">
                {link.label}
              </TextLink>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
