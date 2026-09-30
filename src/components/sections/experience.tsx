import { PendingMark } from "@/components/ui/pending";
import { Section } from "@/components/ui/section";
import { experience, training } from "@/content/experience";

const row =
  "grid gap-x-10 gap-y-2 border-b border-line py-7 md:grid-cols-[11rem_minmax(0,1fr)]";
const period = "text-small text-muted md:pt-1";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="border-t border-line-strong">
        {experience.map((item) => (
          <li key={item.organization} className={row}>
            <p className={period}>{item.period}</p>
            <div className="max-w-[42rem]">
              <h3 className="text-lede font-semibold">
                {item.title}, {item.organization}
              </h3>
              {item.location ? (
                <p className="text-small text-muted">{item.location}</p>
              ) : null}
              <p className="mt-2 text-body">{item.body}</p>
              {item.status === "pending" ? (
                <PendingMark note={item.pendingNote} className="mt-4" />
              ) : null}
            </div>
          </li>
        ))}
      </ol>

      <h3 className="type-heading mt-14 md:mt-16">Training and education</h3>
      <ul className="mt-6 border-t border-line-strong">
        {training.map((item) => (
          <li key={item.title} className={row}>
            <p className={period}>{item.period}</p>
            <div className="max-w-[42rem]">
              <p className="text-lede font-semibold">{item.title}</p>
              <p className="text-small text-muted">{item.provider}</p>
              {item.note ? <p className="mt-2 text-body">{item.note}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
