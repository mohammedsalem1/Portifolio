import { PendingMark } from "@/components/ui/pending";
import { Tag } from "@/components/ui/tag";
import { SourceLine } from "@/components/ui/text-link";
import type { CaseStudy, Decision } from "@/content/types";

// Says plainly whose decision it was, so team work never reads as solo work.
const ownerLabel: Record<Decision["owner"], string> = {
  mine: "My work",
  team: "Team decision",
};

export function DecisionList({
  decisions,
}: {
  decisions: CaseStudy["decisions"];
}) {
  const pending = decisions.status === "pending";

  return (
    <div className="space-y-6">
      {decisions.items.length > 0 ? (
        <ul className="space-y-8">
          {decisions.items.map((decision) => (
            <li key={decision.title}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <h3 className="text-lede font-semibold">{decision.title}</h3>
                <Tag>{ownerLabel[decision.owner]}</Tag>
              </div>
              <p className="mt-2">{decision.body}</p>
              <SourceLine sources={decision.sources} className="mt-2" />
            </li>
          ))}
        </ul>
      ) : null}
      {pending ? <PendingMark note={decisions.pendingNote} /> : null}
    </div>
  );
}
