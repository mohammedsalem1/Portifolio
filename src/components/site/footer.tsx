import { ArrowUpIcon } from "@phosphor-icons/react/dist/ssr";
import { TextLink } from "@/components/ui/text-link";
import { site, telegramUrl, whatsappUrl } from "@/config/site";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function SiteFooter({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const { profile } = getContent(lang);
  const links = [
    { label: t.contact.email, href: `mailto:${site.email}` },
    { label: t.contact.whatsapp, href: whatsappUrl },
    { label: "GitHub", href: site.github },
    { label: "LinkedIn", href: site.linkedin },
    ...(telegramUrl ? [{ label: "Telegram", href: telegramUrl }] : []),
  ];

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-small text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-small">
          {links.map((link) => (
            <li key={link.href}>
              {/* Padding gives a 44px target without widening the underline. */}
              <TextLink href={link.href} className="inline-block bg-clip-content py-3">
                {link.label}
              </TextLink>
            </li>
          ))}
          <li>
            <a
              href="#top"
              className="group inline-flex items-center gap-1.5 py-3 text-muted transition-colors hover:text-ink"
            >
              {t.cta.backToTop}
              <ArrowUpIcon
                aria-hidden="true"
                className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
