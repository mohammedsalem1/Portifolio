import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { TextLink } from "@/components/ui/text-link";
import type { RLinkItem } from "@/content/types";
import { cn } from "@/lib/cn";

/*
 * A standalone text link keeps its inline look, so the touch target is grown
 * with an invisible pseudo-element instead of padding.
 */
const hitArea =
  "relative inline-block after:absolute after:-inset-x-1 after:-inset-y-3 after:content-['']";

/** One standalone link. Links that leave the site say so. */
export function StandaloneLink({
  href,
  newTabLabel,
  className,
  children,
}: {
  href: string;
  newTabLabel: string;
  className?: string;
  children: React.ReactNode;
}) {
  const newTab = href.startsWith("http");
  return (
    <TextLink href={href} className={cn("group", hitArea, className)}>
      {children}
      {newTab ? (
        <>
          <ArrowUpRightIcon
            aria-hidden="true"
            weight="bold"
            className="flip-rtl ms-1 inline-block size-[0.8em] align-baseline transition-transform duration-200 group-hover:-translate-y-0.5"
          />
          <span className="sr-only"> {newTabLabel}</span>
        </>
      ) : null}
    </TextLink>
  );
}

/** A wrapping row of standalone links. */
export function LinkList({
  links,
  label,
  newTabLabel,
  className,
}: {
  links: readonly RLinkItem[];
  label: string;
  newTabLabel: string;
  className?: string;
}) {
  if (links.length === 0) return null;
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-x-6 gap-y-5", className)}>
      {links.map((link) => (
        <li key={link.href}>
          <StandaloneLink href={link.href} newTabLabel={newTabLabel}>
            {link.label}
          </StandaloneLink>
        </li>
      ))}
    </ul>
  );
}
