import {
  DownloadSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  TelegramLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { hasCv } from "@/config/files";
import { site, telegramUrl, whatsappUrl } from "@/config/site";
import { getContent } from "@/content";
import { type Locale, localeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { LangSwitch } from "./lang-switch";
import { MobileMenu } from "./mobile-menu";
import { type NavItem, NavLinks } from "./nav-links";
import { SoundToggle } from "./sound-toggle";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader({ lang }: { lang: Locale }) {
  const cvAvailable = hasCv();
  const t = getDictionary(lang);
  const { profile } = getContent(lang);
  const other: Locale = lang === "en" ? "ar" : "en";
  const otherName = getDictionary(other).meta.languageName;

  const items: NavItem[] = [
    { id: "top", index: "00", label: t.nav.home, href: localeHref(lang, "/") },
    { id: "about", index: t.sections.about.index, label: t.nav.about, href: localeHref(lang, "/#about") },
    { id: "experience", index: t.sections.experience.index, label: t.nav.experience, href: localeHref(lang, "/#experience") },
    { id: "projects", index: t.sections.projects.index, label: t.nav.projects, href: localeHref(lang, "/#projects") },
    { id: "skills", index: t.sections.skills.index, label: t.nav.skills, href: localeHref(lang, "/#skills") },
    { id: "contact", index: t.sections.contact.index, label: t.nav.contact, href: localeHref(lang, "/#contact") },
  ];

  const socials = [
    { href: site.linkedin, label: "LinkedIn", icon: LinkedinLogoIcon },
    { href: site.github, label: "GitHub", icon: GithubLogoIcon },
    ...(telegramUrl ? [{ href: telegramUrl, label: "Telegram", icon: TelegramLogoIcon }] : []),
  ];

  const languageSwitch = (
    <LangSwitch to={other} label={otherName} description={t.a11y.switchLanguage} />
  );

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ground/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href={localeHref(lang, "/")} className="group flex items-center gap-2.5 whitespace-nowrap">
          <span
            aria-hidden="true"
            className="size-2.5 rounded-[2px] bg-accent transition-transform duration-300 group-hover:rotate-45"
          />
          <span className="text-[1.0625rem] font-bold tracking-tight">{profile.name}</span>
        </Link>

        <nav aria-label={t.a11y.primaryNav} className="hidden lg:block">
          <NavLinks items={items} homePath={`/${lang}`} />
        </nav>

        <div className="flex items-center gap-1">
          <ul className="me-1 hidden items-center gap-0.5 border-e border-line pe-2 xl:flex">
            {socials.map(({ href, label, icon: Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex size-10 items-center justify-center rounded-sheet text-muted transition-colors duration-200 hover:bg-surface-2 hover:text-ink"
                >
                  <Icon aria-hidden="true" className="size-[1.15rem]" />
                  <span className="sr-only">
                    {label} {t.a11y.newTab}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:block">{languageSwitch}</div>
          <SoundToggle turnOff={t.a11y.soundOff} turnOn={t.a11y.soundOn} />
          <ThemeToggle toDark={t.a11y.toDark} toLight={t.a11y.toLight} />
          {cvAvailable ? (
            <div className="ms-2 hidden lg:block">
              <ButtonLink
                href={site.cvPath}
                download
                variant="secondary"
                size="sm"
                icon={<DownloadSimpleIcon className="size-4" weight="bold" />}
              >
                {t.cta.downloadCv}
              </ButtonLink>
            </div>
          ) : null}
          <MobileMenu
            name={profile.name}
            items={items}
            languageSwitch={languageSwitch}
            labels={{
              open: t.a11y.openMenu,
              close: t.a11y.closeMenu,
              menu: t.a11y.menu,
              newTab: t.a11y.newTab,
              cv: t.cta.downloadCv,
              whatsapp: t.cta.whatsapp,
            }}
            links={{
              github: site.github,
              linkedin: site.linkedin,
              whatsapp: whatsappUrl,
              cv: cvAvailable ? site.cvPath : undefined,
            }}
          />
        </div>
      </div>
    </header>
  );
}
