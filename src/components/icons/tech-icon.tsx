import {
  BracketsCurlyIcon,
  ClipboardTextIcon,
  CloudIcon,
  DeviceMobileIcon,
  FileSqlIcon,
  FlowArrowIcon,
  InfinityIcon,
  MicrosoftExcelLogoIcon,
  WebhooksLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { type BrandIcon, brandPaths } from "./brand-paths";

/**
 * Technologies without a mark in Simple Icons (Microsoft and AWS withdrew
 * theirs) and general concepts such as REST or CI/CD use Phosphor, drawn in
 * the fill weight so they sit at the same visual weight as the brand marks.
 */
const generic = {
  rest: BracketsCurlyIcon,
  sql: FileSqlIcon,
  cicd: InfinityIcon,
  aws: CloudIcon,
  excel: MicrosoftExcelLogoIcon,
  kobo: ClipboardTextIcon,
  odk: DeviceMobileIcon,
  webhooks: WebhooksLogoIcon,
  workflow: FlowArrowIcon,
} as const;

export type TechIconId = BrandIcon | keyof typeof generic | "powerbi";

function isBrand(id: TechIconId): id is BrandIcon {
  return id in brandPaths;
}

/** One technology icon in currentColor. Always decorative: the name is text. */
export function TechIcon({ id, className }: { id: TechIconId; className?: string }) {
  if (isBrand(id)) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
        <path d={brandPaths[id]} />
      </svg>
    );
  }
  if (id === "powerbi") {
    // Rising bars, after the Power BI mark.
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
        <rect x="3" y="14" width="4.5" height="8" rx="1.2" opacity="0.55" />
        <rect x="9.75" y="9" width="4.5" height="13" rx="1.2" opacity="0.8" />
        <rect x="16.5" y="2" width="4.5" height="20" rx="1.2" />
      </svg>
    );
  }
  const Icon = generic[id];
  return <Icon aria-hidden="true" weight="fill" className={className} />;
}
