import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { cta, navItems, profile } from "@/content/profile";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";

const iconLink =
  "hidden size-11 items-center justify-center rounded-sheet text-ink transition-colors duration-150 hover:bg-ink hover:text-ground lg:inline-flex";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ground">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        {/* The name is the home link, so the nav has no separate "Home". */}
        <Link
          href="/"
          className="whitespace-nowrap text-[1.0625rem] font-bold tracking-tight"
        >
          {profile.name}
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex h-11 items-center px-3 text-small font-medium text-muted underline-offset-4 transition-colors duration-150 hover:text-ink hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className={iconLink}
          >
            <GithubLogoIcon aria-hidden="true" className="size-5" />
            <span className="sr-only">GitHub (opens in a new tab)</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className={iconLink}
          >
            <LinkedinLogoIcon aria-hidden="true" className="size-5" />
            <span className="sr-only">LinkedIn (opens in a new tab)</span>
          </a>
          <ThemeToggle />
          {/* Wrapped so "hidden" never competes with the button's own display. */}
          <div className="ml-2 hidden lg:block">
            <ButtonLink href={cta.contact.href} variant="secondary">
              {cta.contact.label}
            </ButtonLink>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
