import { CertificateIcon, GraduationCapIcon } from "@phosphor-icons/react/dist/ssr";
import { Section } from "@/components/ui/section";
import { getContent } from "@/content";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { Timeline } from "./timeline";

export function Experience({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);
  const { experience, training } = getContent(lang);

  return (
    <Section id="experience" {...t.sections.experience}>
      <div className="grid gap-16 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-20">
        <Timeline
          items={experience}
          labels={{ mostRecent: t.experience.mostRecent, pending: t.common.pending.replace(".", "") }}
        />

        <aside aria-labelledby="training-title" className="lg:pt-1">
          <h3 id="training-title" data-reveal className="text-small font-semibold text-muted">
            {t.experience.training}
          </h3>
          <ul className="mt-4 space-y-3">
            {training.map((item, index) => {
              const Icon = index === training.length - 1 ? GraduationCapIcon : CertificateIcon;
              return (
                <li
                  key={item.title}
                  data-reveal
                  style={{ "--reveal-delay": `${index * 90}ms` } as React.CSSProperties}
                  className="panel flex gap-4 p-4"
                >
                  <Icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent-ink" />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-small text-muted">
                      {item.provider}
                      <span aria-hidden="true"> · </span>
                      {item.period}
                    </p>
                    {item.note ? <p className="mt-1.5 text-small">{item.note}</p> : null}
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
