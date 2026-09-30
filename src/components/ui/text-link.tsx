import Link from "next/link";
import { cn, isExternal } from "@/lib/cn";
import type { Source } from "@/content/types";

/** Inline text link. External links open in a new tab. */
export function TextLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={cn("link", className)}
        {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cn("link", className)}>
      {children}
    </Link>
  );
}

/**
 * "Source: a, b" line under a block of copy, so a reader can check a claim.
 * Only linked sources are shown. Unlinked ones ("Confirmed by Mohammed", a CV
 * version) are provenance for the content files, not something a visitor can
 * open, so they stay in src/content.
 */
export function SourceLine({
  sources,
  className,
}: {
  sources: Source[];
  className?: string;
}) {
  const linked = sources.filter(
    (source): source is Source & { href: string } => Boolean(source.href),
  );
  if (linked.length === 0) return null;
  return (
    <p className={cn("text-small text-muted", className)}>
      <span>Source: </span>
      {linked.map((source, index) => (
        <span key={source.label}>
          {index > 0 ? ", " : null}
          <TextLink href={source.href}>{source.label}</TextLink>
        </span>
      ))}
    </p>
  );
}
