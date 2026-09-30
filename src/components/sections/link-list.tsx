import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { TextLink } from "@/components/ui/text-link";
import { cn } from "@/lib/cn";
import type { LinkItem } from "@/content/types";

/*
 * A standalone text link keeps its inline look, so the touch target is grown
 * with an invisible pseudo-element instead of padding. Padding would stretch
 * the amber hover highlight into a block.
 */
const hitArea =
  "relative inline-block after:absolute after:-inset-x-1 after:-inset-y-3 after:content-['']";

/** One standalone link. Links that leave the site say so. */
export function StandaloneLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  const newTab = href.startsWith("http");
  return (
    <TextLink href={href} className={cn(hitArea, className)}>
      {children}
      {newTab ? (
        <>
          <ArrowUpRightIcon
            aria-hidden="true"
            weight="bold"
            className="ml-1 inline-block size-[0.8em] align-baseline"
          />
          <span className="sr-only"> (opens in a new tab)</span>
        </>
      ) : null}
    </TextLink>
  );
}

/** A wrapping row of standalone links. */
export function LinkList({
  links,
  label,
  className,
}: {
  links: readonly LinkItem[];
  /** Accessible name for the list, for example "Quizora links". */
  label: string;
  className?: string;
}) {
  if (links.length === 0) return null;
  return (
    <ul
      aria-label={label}
      className={cn("flex flex-wrap gap-x-6 gap-y-5", className)}
    >
      {links.map((link) => (
        <li key={link.href}>
          <StandaloneLink href={link.href}>{link.label}</StandaloneLink>
        </li>
      ))}
    </ul>
  );
}
