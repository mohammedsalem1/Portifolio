import { PendingMark } from "@/components/ui/pending";
import { Tag } from "@/components/ui/tag";
import { SourceLine } from "@/components/ui/text-link";
import type { RCaseStudy } from "@/content/types";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/cn";

export function DecisionList({ decisions, lang }: { decisions: RCaseStudy["decisions"]; lang: Locale }) {
  const t = getDictionary(lang);
  const pending = decisions.status === "pending";

  return (
    <div className="space-y-6">
      {decisions.items.length > 0 ? (
        <ul className="space-y-4">
          {decisions.items.map((decision) => (
            <li key={decision.title} className="panel p-5">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-lede font-semibold">{decision.title}</h3>
                {/* Says plainly whose decision it was, so team work never reads as solo work. */}
                <Tag className={cn(decision.owner === "mine" && "border-accent/40 text-accent-ink")}>
                  {decision.owner === "mine" ? t.caseStudy.mine : t.caseStudy.team}
                </Tag>
              </div>
              <p className="mt-2">{decision.body}</p>
              <SourceLine sources={decision.sources} label={t.common.source} className="mt-3" />
            </li>
          ))}
        </ul>
      ) : null}
      {pending ? <PendingMark label={t.common.pending} note={decisions.pendingNote} /> : null}
    </div>
  );
}
