import Link from "next/link";
import { cn, isExternal } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "md" | "sm";

const base =
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sheet font-semibold transition-[background-color,color,border-color,box-shadow,transform] duration-200 ease-out active:translate-y-px";

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-[0.9375rem]",
  sm: "min-h-10 px-4 text-small",
};

const variants: Record<Variant, string> = {
  // Red with white text: 4.6:1 in both themes. The only lift on
  // the site is on the primary action.
  primary:
    "bg-accent text-on-accent hover:-translate-y-px hover:shadow-[0_10px_28px_-12px_var(--accent)]",
  secondary:
    "border border-line-strong bg-transparent text-ink hover:border-ink hover:bg-surface",
  ghost: "text-ink hover:bg-surface-2",
  // WhatsApp green with dark text (9:1); white text would fail contrast.
  whatsapp:
    "bg-[#25d366] text-[#04260f] shadow-[0_14px_34px_-16px_#25d366] hover:-translate-y-px hover:bg-[#34e077] hover:shadow-[0_20px_44px_-14px_#25d366]",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  /** Trailing icon; it nudges forward on hover (backward in RTL). */
  icon?: React.ReactNode;
  download?: boolean;
  /** Force a new tab (defaults to true for http links). */
  newTab?: boolean;
  newTabLabel?: string;
  className?: string;
  children: React.ReactNode;
};

/** A link that looks like a button. Every CTA on the site navigates. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  icon,
  download,
  newTab,
  newTabLabel,
  className,
  children,
}: ButtonLinkProps) {
  const classes = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      {children}
      {icon ? (
        <span
          aria-hidden="true"
          className="inline-flex transition-transform duration-200 group-hover/btn:translate-x-0.5 rtl:group-hover/btn:-translate-x-0.5"
        >
          {icon}
        </span>
      ) : null}
    </>
  );

  const openInNewTab = newTab ?? href.startsWith("http");

  if (isExternal(href) || download) {
    return (
      <a
        href={href}
        className={classes}
        download={download || undefined}
        {...(openInNewTab ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {content}
        {openInNewTab && newTabLabel ? <span className="sr-only"> {newTabLabel}</span> : null}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}

/** Same footprint as a button, for an action that is not available yet. */
export function PlaceholderButton({
  size = "md",
  className,
  children,
}: {
  size?: Size;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      aria-disabled="true"
      className={cn(
        base,
        sizes[size],
        "cursor-not-allowed border border-dashed border-line-strong text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
