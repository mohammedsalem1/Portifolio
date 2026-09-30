"use client";

import { CheckIcon, CopyIcon } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/** Copies the address and says so, for screen readers too. */
export function CopyEmailButton({
  email,
  label,
  copiedLabel,
  compact = false,
  className,
}: {
  email: string;
  label: string;
  copiedLabel: string;
  /** Icon only, for tight spots such as the email tile. */
  compact?: boolean;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 2200);
    return () => clearTimeout(timer);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked; the mailto link next to this still works.
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      title={compact ? (copied ? copiedLabel : label) : undefined}
      className={cn(
        "group/copy inline-flex items-center rounded-sheet border font-semibold transition-[border-color,background-color,color] duration-200 active:translate-y-px",
        compact ? "size-9 justify-center" : "min-h-11 gap-2 px-4 text-[0.9375rem]",
        copied
          ? "border-accent-2 text-accent-2"
          : compact
            ? "border-transparent text-muted hover:border-line-strong hover:bg-surface hover:text-ink"
            : "border-line-strong text-ink hover:border-ink hover:bg-surface-2/60",
        className,
      )}
    >
      {copied ? (
        <CheckIcon aria-hidden="true" className="size-4" weight="bold" />
      ) : (
        <CopyIcon aria-hidden="true" className="size-4 transition-transform duration-200 group-hover/copy:-rotate-6" />
      )}
      <span aria-live="polite" className={compact ? "sr-only" : undefined}>
        {copied ? copiedLabel : label}
      </span>
    </button>
  );
}
