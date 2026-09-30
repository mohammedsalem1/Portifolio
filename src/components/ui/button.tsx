import Link from "next/link";
import { cn, isExternal } from "@/lib/cn";

type Variant = "primary" | "secondary";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 whitespace-nowrap rounded-sheet px-5 text-[1rem] font-semibold transition-[background-color,color,border-color,transform] duration-150 active:translate-y-px";

const variants: Record<Variant, string> = {
  // Amber fill with Prussian label: 8.4:1 in both themes.
  primary:
    "bg-signal text-on-signal border-[1.5px] border-signal hover:bg-ink hover:border-ink hover:text-ground",
  secondary:
    "bg-transparent text-ink border-[1.5px] border-line-strong hover:bg-ink hover:border-ink hover:text-ground",
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

/** A link that looks like a button. All site CTAs navigate, so all are links. */
export function ButtonLink({
  href,
  variant = "primary",
  className,
  children,
}: ButtonLinkProps) {
  const classes = cn(base, variants[variant], className);

  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(newTab ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
