import {
  ArrowRightIcon,
  CalendarBlankIcon,
  DownloadSimpleIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";
import { hasCutout, hasCv, hasPhoto } from "@/config/files";
import { bookingLink, site, whatsappUrl } from "@/config/site";
import { getContent } from "@/content";
import { type Locale, localeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";
import { CountUp } from "./count-up";
import { Typewriter } from "./typewriter";

const quietLink =
  "group inline-flex min-h-11 items-center gap-2 text-small font-medium text-muted transition-colors duration-200 hover:text-ink";

const enter = (i: number) => ({ "--i": i }) as React.CSSProperties;

/**
 * A field of binary digits behind the stats. Seeded, so every build draws
 * the same field.
 */
function binaryField(rows: number, cols: number) {
  let seed = 7;
  const next = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => (next() > 0.5 ? "1" : "0")).join(""),
  ).join("\n");
}

/** Printed-circuit traces around the portrait, drawn once on load. */
function Circuit() {
  const traces = [
    "M2 38 H16 L22 32 H33",
    "M2 50 H12 L18 56 H28 L32 52",
    "M9 68 V76 L15 82 H25",
    "M98 28 H86 L80 34 H70",
    "M98 58 H90 L84 64 H76 L72 60",
    "M88 6 V14 L82 20 H74",
  ];
  const nodes: [number, number][] = [
    [33, 32], [32, 52], [25, 82], [70, 34], [72, 60], [74, 20],
    [2, 38], [2, 50], [98, 28], [98, 58],
  ];
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 125"
      preserveAspectRatio="none"
      className="hero-circuit pointer-events-none absolute inset-0 size-full"
    >
      {traces.map((d, index) => (
        <path
          key={d}
          d={d}
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          style={{ "--d": `${900 + index * 140}ms` } as React.CSSProperties}
        />
      ))}
      {nodes.map(([cx, cy], index) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="0.9"
          style={{ "--d": `${1500 + index * 60}ms` } as React.CSSProperties}
        />
      ))}
    </svg>
  );
}

/**
 * First viewport: the name, large; a role line that types itself; the
 * portrait with a light HUD around it; four numbers a visitor can check.
 * Enters as one orchestrated sequence (.enter with a stagger index).
 */
export function Hero({ lang }: { lang: Locale }) {
  const cvAvailable = hasCv();
  const photoAvailable = hasPhoto();
  const cutout = hasCutout();
  const t = getDictionary(lang);
  const { profile, heroStats } = getContent(lang);
  const booking = bookingLink(t.contact.bookingSubject);
  const [firstName, ...rest] = profile.name.split(" ");

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      {/* Atmosphere: a warm glow where the portrait stands, a cool one
          behind the text. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 end-[-10%] size-[42rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent)_16%,transparent),transparent)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute start-[-15%] top-1/3 size-[34rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent-2)_9%,transparent),transparent)]"
      />

      <div className="container-page relative grid items-center gap-14 pb-16 pt-10 sm:pt-14 lg:min-h-[calc(100dvh-4rem)] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-10 lg:py-12">
        <div className="relative z-10">
          <p
            className="enter type-code mb-7 inline-flex items-center gap-2.5 rounded-sheet border border-accent-2/40 bg-accent-2/[0.07] px-3 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-accent-2 rtl:tracking-normal"
            style={enter(0)}
          >
            {/* A real status, not decoration: open to remote roles. */}
            <span aria-hidden="true" className="relative flex size-2">
              <span className="absolute inset-0 rounded-full bg-accent-2 opacity-50 motion-safe:animate-ping [animation-iteration-count:3]" />
              <span className="relative size-2 rounded-full bg-accent-2" />
            </span>
            {t.hero.status}
          </p>

          <h1 id="hero-title" className="type-hero-name">
            <span className="enter block" style={enter(1)}>
              {firstName}
            </span>
            <span className="hero-last enter block" style={enter(2)}>
              {rest.join(" ")}
            </span>
          </h1>

          <p className="enter mt-6 flex items-center gap-3" style={enter(3)}>
            <span aria-hidden="true" className="type-code text-[1.125rem] text-accent-2 sm:text-[1.375rem]">
              &gt;
            </span>
            <Typewriter
              lines={profile.typed}
              className="type-code min-h-[1.6em] text-[1.125rem] tracking-[0.04em] text-ink sm:text-[1.375rem] rtl:tracking-normal"
            />
          </p>

          <p className="enter mt-5 max-w-[34rem] text-lede text-muted" style={enter(4)}>
            {profile.tagline}
          </p>

          <div className="enter mt-9 flex flex-wrap gap-3" style={enter(5)}>
            <ButtonLink
              href={whatsappUrl}
              variant="whatsapp"
              newTabLabel={t.a11y.newTab}
              className="min-h-12 px-6 text-[1rem] font-bold"
              icon={<ArrowRightIcon className="flip-rtl size-4" weight="bold" />}
            >
              <WhatsappLogoIcon aria-hidden="true" weight="bold" className="size-5" />
              {t.hero.whatsapp}
            </ButtonLink>
            <ButtonLink
              href={booking.href}
              variant="secondary"
              newTab={booking.external}
              newTabLabel={t.a11y.newTab}
              className="min-h-12 bg-surface/60 backdrop-blur-sm"
            >
              <CalendarBlankIcon aria-hidden="true" className="size-[1.125rem]" />
              {t.cta.bookCall}
            </ButtonLink>
          </div>

          <div className="enter mt-4 flex flex-wrap items-center gap-x-6" style={enter(6)}>
            <a href={localeHref(lang, "/#projects")} className={quietLink}>
              {t.cta.viewProjects}
              <ArrowRightIcon
                aria-hidden="true"
                className="flip-rtl size-4 transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
              />
            </a>
            {cvAvailable ? (
              <a href={site.cvPath} download className={quietLink}>
                <DownloadSimpleIcon
                  aria-hidden="true"
                  className="size-[1.15rem] transition-transform duration-200 group-hover:translate-y-0.5"
                />
                {t.cta.downloadCv}
              </a>
            ) : null}
          </div>
        </div>

        {/* Portrait and numbers. */}
        <div className="enter relative mx-auto w-full max-w-[25rem] sm:max-w-[28rem] lg:max-w-none" style={enter(3)}>
          <div className="relative">
            <div className={cn("hero-photo relative aspect-[4/5] overflow-hidden", cutout && "hero-photo--cutout")}>
              {cutout ? (
                <>
                  <span aria-hidden="true" className="hero-halo absolute inset-0" />
                  <Image
                    src={site.cutoutPath}
                    alt={t.about.photoAlt}
                    fill
                    preload
                    quality={90}
                    sizes="(min-width: 1024px) 34rem, 28rem"
                    className="object-contain object-bottom"
                  />
                </>
              ) : photoAvailable ? (
                <>
                  <Image
                    src={site.photoPath}
                    alt={t.about.photoAlt}
                    fill
                    preload
                    quality={90}
                    sizes="(min-width: 1024px) 34rem, 28rem"
                    className="object-cover object-[50%_18%]"
                  />
                  <span aria-hidden="true" className="hero-vignette absolute inset-0" />
                </>
              ) : (
                <div className="diagram-ground size-full" />
              )}
              <Circuit />
              <span aria-hidden="true" className="hero-scan absolute inset-0" />
            </div>

            {/* HUD: corner brackets, a path label, and a small code card. */}
            <span aria-hidden="true" className="hud-frame pointer-events-none absolute inset-x-[10%] top-[4%] bottom-[24%]" />
            {/* Positioned by a wrapper: the code inside is dir="ltr", which
                would otherwise flip what "start" and "end" mean in Arabic. */}
            <div aria-hidden="true" className="absolute start-[13%] top-[7%]">
              <span
                dir="ltr"
                className="type-code block rounded-sheet border border-line bg-ground/60 px-2 py-1 text-[0.6875rem] text-muted backdrop-blur-sm"
              >
                <span className="text-accent-2">~</span>/mohammed-salem
              </span>
            </div>
            <div aria-hidden="true" className="code-float absolute -end-4 top-[16%] hidden lg:block xl:-end-10">
              <pre
                dir="ltr"
                className="type-code rounded-panel border border-line bg-surface/75 px-4 py-3 text-left text-[0.6875rem] leading-relaxed text-muted shadow-[var(--shadow)] backdrop-blur-md"
              >
                <span className="text-accent-2">const</span> <span className="text-ink">developer</span> = {"{\n"}
                {"  "}role: <span className="text-accent-ink">&quot;full-stack&quot;</span>,{"\n"}
                {"  "}stack: [<span className="text-accent-ink">&quot;NestJS&quot;</span>,{" "}
                <span className="text-accent-ink">&quot;PostgreSQL&quot;</span>],{"\n"}
                {"  "}automate: <span className="text-accent-ink">&quot;n8n&quot;</span>,{"\n"}
                {"};"}
              </pre>
            </div>
          </div>

          <div className="relative -mt-24 sm:-mt-28">
            <pre
              aria-hidden="true"
              dir="ltr"
              className="binary-field type-code pointer-events-none absolute -inset-x-6 -bottom-6 top-6 overflow-hidden text-[0.625rem] leading-[1.35] tracking-[0.3em] text-accent-ink"
            >
              {binaryField(18, 40)}
            </pre>
            <ul aria-label={t.hero.stats} className="relative grid grid-cols-2 gap-3">
              {heroStats.map((stat, index) => {
                const external = stat.href.startsWith("http");
                return (
                  <li key={stat.label}>
                    <a
                      href={external ? stat.href : localeHref(lang, stat.href)}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="hud-frame hero-stat group/stat flex h-full flex-col p-4 transition-[translate,background-color] duration-300 hover:-translate-y-1 sm:p-5"
                    >
                      <span className="hero-stat-value text-[clamp(1.875rem,1.4rem+1.6vw,2.625rem)] leading-none font-extrabold text-accent-ink">
                        <CountUp value={stat.value} delay={1100 + index * 160} />
                      </span>
                      <span className="type-code mt-3 text-[0.6875rem] leading-snug uppercase tracking-[0.12em] text-muted transition-colors duration-300 group-hover/stat:text-ink rtl:tracking-normal">
                        {stat.label}
                      </span>
                      {external ? <span className="sr-only"> {t.a11y.newTab}</span> : null}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
