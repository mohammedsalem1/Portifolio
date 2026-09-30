import { ArrowUpRightIcon, DownloadSimpleIcon, EyeIcon } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink, PlaceholderButton } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { hasCv, hasPhoto } from "@/config/files";
import { site } from "@/config/site";
import { getContent } from "@/content";
import { type Locale, localeHref } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { isExternal } from "@/lib/cn";

/** Corner ticks: the photo is framed like a plate in a technical drawing. */
function Ticks() {
  const tick = "absolute size-3 border-accent";
  return (
    <span aria-hidden="true">
      <span className={`${tick} -start-1.5 -top-1.5 border-s-2 border-t-2`} />
      <span className={`${tick} -end-1.5 -top-1.5 border-e-2 border-t-2`} />
      <span className={`${tick} -bottom-1.5 -start-1.5 border-b-2 border-s-2`} />
      <span className={`${tick} -bottom-1.5 -end-1.5 border-b-2 border-e-2`} />
    </span>
  );
}

export function About({ lang }: { lang: Locale }) {
  const cvAvailable = hasCv();
  const photoAvailable = hasPhoto();
  const t = getDictionary(lang);
  const { profile, highlights } = getContent(lang);
  const [statement, ...rest] = profile.about;

  return (
    <Section id="about" {...t.sections.about}>
      <div className="grid gap-12 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-14 lg:gap-20">
        <figure data-reveal className="mx-auto w-full max-w-sm md:mx-0 md:max-w-none">
          <div className="relative">
            <Ticks />
            <div className="relative aspect-[4/5] overflow-hidden rounded-sheet border border-line bg-surface">
              {photoAvailable ? (
                <Image
                  src={site.photoPath}
                  alt={t.about.photoAlt}
                  fill
                  quality={90}
                  sizes="(min-width: 1024px) 420px, (min-width: 768px) 40vw, 90vw"
                  className="object-cover grayscale-[15%]"
                />
              ) : (
                // No photo yet: a labelled plate, never a stand-in face.
                <div className="diagram-ground flex h-full flex-col items-center justify-center gap-3 text-center">
                  <span className="type-display text-line-strong" aria-hidden="true" dir="ltr">
                    MS
                  </span>
                  <span className="text-small text-muted">{t.about.photoSoon}</span>
                </div>
              )}
            </div>
          </div>
          <figcaption className="mt-4 flex items-baseline justify-between gap-4 border-t border-line pt-3">
            <span className="text-small font-semibold">{profile.name}</span>
            <span className="type-code text-muted" dir="ltr">
              role: full_stack_developer
            </span>
          </figcaption>
        </figure>

        <div>
          <p data-reveal className="type-heading max-w-[36rem]">
            {statement}
          </p>
          <div data-reveal className="mt-6 max-w-[40rem] space-y-4 text-body text-muted">
            {rest.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl data-reveal className="mt-8 grid gap-px overflow-hidden rounded-sheet border border-line bg-line sm:grid-cols-3">
            {profile.facts.map((fact) => (
              <div key={fact.label} className="bg-surface px-4 py-3">
                <dt className="text-label text-muted">{fact.label}</dt>
                <dd className="mt-1 text-small font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <h3 data-reveal className="mt-12 text-small font-semibold text-muted">
            {t.about.highlights}
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const body = (
                <>
                  <span className="block text-lede font-semibold">{item.value}</span>
                  <span className="mt-1 block text-small text-muted">{item.label}</span>
                </>
              );
              const card =
                "group relative block h-full rounded-sheet border border-line bg-surface/70 p-4 transition-[border-color,transform] duration-300";
              return (
                <li
                  key={item.value}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 80}ms` } as React.CSSProperties}
                >
                  {item.href ? (
                    isExternal(item.href) ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className={`${card} hover:-translate-y-0.5 hover:border-line-strong`}>
                        {body}
                        <ArrowUpRightIcon aria-hidden="true" className="flip-rtl absolute end-3 top-3 size-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink" />
                        <span className="sr-only"> {t.a11y.newTab}</span>
                      </a>
                    ) : (
                      <Link href={localeHref(lang, item.href)} className={`${card} hover:-translate-y-0.5 hover:border-line-strong`}>
                        {body}
                        <ArrowUpRightIcon aria-hidden="true" className="flip-rtl absolute end-3 top-3 size-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink" />
                      </Link>
                    )
                  ) : (
                    <div className={card}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>

          <div data-reveal className="mt-10 flex flex-wrap gap-3">
            {cvAvailable ? (
              <>
                <ButtonLink
                  href={site.cvPath}
                  download
                  icon={<DownloadSimpleIcon className="size-4" weight="bold" />}
                >
                  {t.cta.downloadCv}
                </ButtonLink>
                <ButtonLink
                  href={site.cvPath}
                  variant="secondary"
                  newTab
                  newTabLabel={t.a11y.newTab}
                  icon={<EyeIcon className="size-4" />}
                >
                  {t.cta.viewCv}
                </ButtonLink>
              </>
            ) : (
              <PlaceholderButton>
                <DownloadSimpleIcon aria-hidden="true" className="size-4" />
                {t.cta.cvSoon}
              </PlaceholderButton>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
