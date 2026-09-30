import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PhoneIcon,
  TelegramLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { TextLink } from "@/components/ui/text-link";
import { Section } from "@/components/ui/section";
import { bookingLink, phoneUrl, site, telegramUrl, whatsappUrl } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { CopyEmailButton } from "./copy-email";

type Icon = typeof GithubLogoIcon;

/** Small mono caps above each block, like a HUD label. */
const label = "type-code block font-semibold uppercase tracking-[0.14em] text-accent-ink rtl:tracking-normal";

/** Icon well shared by the email, phone and social tiles. */
const well = "grid size-10 shrink-0 place-items-center rounded-sheet";

const tile =
  "relative flex items-center gap-3 rounded-sheet border border-line bg-surface-2/40 p-3 transition-[border-color,background-color,transform] duration-200";

/** One direct line (email, phone). The whole tile is the link. */
function LineTile({
  href,
  icon: IconComponent,
  title,
  value,
  action,
}: {
  href: string;
  icon: Icon;
  title: string;
  value: string;
  /** A control that sits above the stretched link, such as copy. */
  action?: React.ReactNode;
}) {
  return (
    <div className={`${tile} group/tile min-w-0 flex-auto hover:border-line-strong hover:bg-surface-2/70`}>
      <span className={`${well} bg-accent/12 text-accent-ink`}>
        <IconComponent aria-hidden="true" className="size-[1.125rem]" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="type-code block text-[0.6875rem] uppercase tracking-[0.12em] text-muted rtl:tracking-normal">
          {title}
        </span>
        <a
          href={href}
          dir="ltr"
          className="block truncate text-small font-semibold text-ink after:absolute after:inset-0 after:rounded-sheet after:content-[''] rtl:text-right"
        >
          {value}
        </a>
      </span>
      {action ? <span className="relative z-10">{action}</span> : null}
    </div>
  );
}

/** One profile link in the "Find me online" grid. */
function SocialTile({
  href,
  icon: IconComponent,
  name,
  handle,
  newTabLabel,
}: {
  href: string;
  icon: Icon;
  name: string;
  handle: string;
  newTabLabel: string;
}) {
  return (
    <li className="sm:odd:last:col-span-2 lg:odd:last:col-span-1">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${tile} group/tile hover:-translate-y-0.5 hover:border-accent/50 hover:bg-surface-2/70`}
      >
        <span
          className={`${well} border border-line bg-surface text-muted transition-colors duration-200 group-hover/tile:text-accent-ink`}
        >
          <IconComponent aria-hidden="true" className="size-5" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-small font-semibold">{name}</span>
          <span className="type-code block truncate text-muted rtl:text-right" dir="ltr">
            {handle}
          </span>
        </span>
        <ArrowUpRightIcon
          aria-hidden="true"
          className="flip-rtl size-4 shrink-0 text-muted transition-[transform,color] duration-200 group-hover/tile:-translate-y-0.5 group-hover/tile:translate-x-0.5 group-hover/tile:text-ink rtl:group-hover/tile:-translate-x-0.5"
        />
        <span className="sr-only"> {newTabLabel}</span>
      </a>
    </li>
  );
}

export function Contact({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const booking = bookingLink(t.contact.bookingSubject);

  const socials = [
    { href: site.linkedin, icon: LinkedinLogoIcon, name: "LinkedIn", handle: "in/mohammedsalem9" },
    { href: site.github, icon: GithubLogoIcon, name: "GitHub", handle: "@mohammedsalem1" },
    ...(telegramUrl
      ? [{ href: telegramUrl, icon: TelegramLogoIcon, name: "Telegram", handle: `@${site.telegramUsername}` }]
      : []),
  ];

  return (
    <Section id="contact" {...t.sections.contact}>
      <div className="grid gap-4 lg:grid-cols-[7fr_5fr]">
        {/* The pitch and the direct lines. WhatsApp is the main action. */}
        <div data-reveal className="panel relative flex flex-col overflow-hidden p-6 md:p-8">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -end-24 -top-24 size-64 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_16%,transparent),transparent_70%)]"
          />
          <h3 className="relative type-heading font-bold">
            {t.contact.headlineLead}
            <span className="text-accent-ink">{t.contact.headlineAccent}</span>
            {t.contact.headlineTail}
          </h3>
          <p className="relative mt-4 max-w-[46ch] text-body text-muted">{t.contact.body}</p>

          {/* WhatsApp green with dark text: 9:1, where white would fail. */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group/wa relative mt-8 flex min-h-14 items-center justify-center gap-2.5 rounded-sheet bg-[#25d366] px-4 text-[0.9375rem] font-bold whitespace-nowrap sm:gap-3 sm:px-6 sm:text-[1rem] text-[#04260f] shadow-[0_14px_34px_-16px_#25d366] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#34e077] hover:shadow-[0_20px_44px_-14px_#25d366] active:translate-y-0"
          >
            <WhatsappLogoIcon aria-hidden="true" weight="bold" className="size-5" />
            {t.contact.whatsappCta}
            <ArrowRightIcon
              aria-hidden="true"
              weight="bold"
              className="flip-rtl size-4 transition-transform duration-200 group-hover/wa:translate-x-1 rtl:group-hover/wa:-translate-x-1"
            />
            <span className="sr-only"> {t.a11y.newTab}</span>
          </a>

          {/* Side by side when both fit in full, stacked otherwise: never cut off. */}
          <div className="relative mt-4 flex flex-wrap gap-3">
            <LineTile
              href={`mailto:${site.email}`}
              icon={EnvelopeSimpleIcon}
              title={t.contact.email}
              value={site.email}
              action={
                <CopyEmailButton
                  email={site.email}
                  label={t.contact.copy}
                  copiedLabel={t.contact.copied}
                  compact
                />
              }
            />
            <LineTile href={phoneUrl} icon={PhoneIcon} title={t.contact.phone} value={site.whatsappDisplay} />
          </div>

          <p className="relative mt-auto pt-8 text-small text-muted">
            {t.contact.bookingPrompt}{" "}
            <TextLink href={booking.href} className="font-semibold text-ink">
              {site.bookingUrl ? t.contact.pickTime : t.contact.emailToSchedule}
            </TextLink>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div
            data-reveal
            style={{ "--reveal-delay": "90ms" } as React.CSSProperties}
            className="panel flex-1 p-6 md:p-8"
          >
            <h3 className={label}>{t.contact.findMe}</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {socials.map((social) => (
                <SocialTile key={social.href} {...social} newTabLabel={t.a11y.newTab} />
              ))}
            </ul>
          </div>

          <div
            data-reveal
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            className="panel p-6 md:p-8"
          >
            <h3 className={label}>{t.contact.availabilityLabel}</h3>
            <p className="mt-4 flex items-center gap-3 font-medium">
              <span aria-hidden="true" className="relative flex size-2.5 shrink-0">
                <span className="absolute inset-0 rounded-full bg-accent-2 opacity-50 motion-safe:animate-ping" />
                <span className="relative size-2.5 rounded-full bg-accent-2" />
              </span>
              {t.contact.availability}
            </p>
            <p className="mt-1.5 ps-[1.375rem] text-small text-muted">{t.contact.availabilityBody}</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
