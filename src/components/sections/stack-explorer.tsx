"use client";

import { CaretRightIcon } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { flushSync } from "react-dom";
import type { StackCategoryId } from "@/content/types";
import { cn } from "@/lib/cn";

type Filter = "all" | StackCategoryId;

export type ExplorerItem = {
  id: string;
  name: string;
  type: string;
  category: StackCategoryId;
  /** Rendered on the server so the icon data stays out of the client bundle. */
  icon: React.ReactNode;
  color?: { light: string; dark: string };
};

export type ExplorerCategory = {
  id: StackCategoryId;
  name: string;
  icon: React.ReactNode;
};

/**
 * The filterable technology grid. Every card is in the server HTML; filtering
 * only hides cards, so the full list is there without JavaScript too.
 *
 * Where the browser supports view transitions, a filter change is one: cards
 * that stay glide to their new place, the others fade and scale in or out,
 * and the panel resizes smoothly instead of jumping. With reduced motion the
 * change is instant.
 */
export function StackExplorer({
  items,
  categories,
  allIcon,
  labels,
  children,
}: {
  items: ExplorerItem[];
  categories: ExplorerCategory[];
  allIcon: React.ReactNode;
  labels: { toolkit: string; hint: string; filter: string; all: string; total: string; showing: string };
  /** The focus strip under the grid. */
  children?: React.ReactNode;
}) {
  const [filter, setFilter] = useState<Filter>("all");
  // Once the visitor filters, the first-reveal stagger must not replay on
  // cards that come back from display: none.
  const [filtered, setFiltered] = useState(false);

  const countOf = (id: Filter) =>
    id === "all" ? items.length : items.filter((item) => item.category === id).length;
  const total = String(items.length);
  const status =
    filter === "all"
      ? labels.total.replace("{n}", total)
      : labels.showing.replace("{shown}", String(countOf(filter))).replace("{n}", total);

  function select(next: Filter) {
    if (next === filter) return;
    const update = () =>
      flushSync(() => {
        setFilter(next);
        setFiltered(true);
      });
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!reduce && typeof document.startViewTransition === "function") {
      document.startViewTransition(update);
    } else {
      update();
    }
  }

  const filters: { id: Filter; name: string; icon: React.ReactNode }[] = [
    { id: "all", name: labels.all, icon: allIcon },
    ...categories,
  ];

  return (
    <div
      data-reveal
      data-filtered={filtered ? "" : undefined}
      className="stack-panel panel relative overflow-hidden"
    >
      {/* Ambient layer: a hairline of light along the top edge, a faint teal
          glow and a dot grid that fades out down the panel. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,color-mix(in_srgb,var(--accent-2)_65%,transparent),transparent)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 mx-auto h-72 w-[40rem] max-w-full rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--accent-2)_13%,transparent),transparent)]"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(var(--grid)_1.2px,transparent_1.2px)] [background-size:18px_18px] [mask-image:linear-gradient(to_bottom,black,transparent_45%)]"
      />

      <div className="relative flex flex-wrap items-center justify-between gap-3 px-5 pt-5 md:px-7 md:pt-7">
        <p className="flex items-center gap-2.5">
          <span aria-hidden="true" className="relative flex size-2">
            <span className="absolute inset-0 rounded-full bg-accent-2 opacity-50 motion-safe:animate-ping [animation-duration:2.4s]" />
            <span className="relative size-2 rounded-full bg-accent-2" />
          </span>
          <span className="type-code text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-ink rtl:tracking-normal">
            {labels.toolkit}
          </span>
          <span aria-hidden="true" className="hidden h-3 w-px bg-line-strong/60 sm:block" />
          <span className="hidden text-label text-muted sm:inline">{labels.hint}</span>
        </p>
        <p
          aria-live="polite"
          className="type-code rounded-sheet border border-accent-2/35 bg-accent-2/10 px-2.5 py-1 text-[0.75rem] font-semibold text-accent-2"
        >
          {status}
        </p>
      </div>

      {/* One row that scrolls sideways on small screens, wrapping from md up. */}
      <div
        role="group"
        aria-label={labels.filter}
        className="relative mt-5 flex gap-2 overflow-x-auto px-5 py-1.5 [scrollbar-width:none] md:flex-wrap md:overflow-visible md:px-7 [&::-webkit-scrollbar]:hidden"
      >
        {filters.map((option) => {
          const active = option.id === filter;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={active}
              onClick={() => select(option.id)}
              className={cn(
                "group/filter inline-flex min-h-10 shrink-0 items-center gap-2 rounded-sheet border px-3.5 text-[0.8125rem] font-semibold whitespace-nowrap transition-[background-color,border-color,color,box-shadow] duration-200 active:translate-y-px",
                active
                  ? "border-ink bg-ink text-ground shadow-[0_10px_28px_-14px_var(--accent-2)]"
                  : "border-line bg-surface-2/40 text-muted hover:border-line-strong hover:text-ink",
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  "inline-flex transition-colors duration-200 [&>svg]:size-4",
                  active ? "text-accent-2" : "group-hover/filter:text-accent-2",
                )}
              >
                {option.icon}
              </span>
              {option.name}
              <span className={cn("type-code text-[0.6875rem]", active ? "opacity-60" : "opacity-70")}>
                {countOf(option.id)}
              </span>
            </button>
          );
        })}
      </div>

      <ul className="relative grid grid-cols-1 gap-3 p-5 min-[22rem]:grid-cols-2 md:grid-cols-3 md:p-7 lg:grid-cols-4">
        {items.map((item, index) => (
          <li
            key={item.id}
            hidden={filter !== "all" && item.category !== filter}
            // Hover ticks like a button, but a press stays silent: cards
            // are not controls.
            data-sfx
            data-sfx-silent
            style={
              {
                "--brand-light": item.color?.light ?? "var(--accent-2)",
                "--brand-dark": item.color?.dark ?? "var(--accent-2)",
                "--i": index,
                viewTransitionName: `tech-${item.id}`,
              } as React.CSSProperties
            }
            className="tech-card group/tech relative flex flex-col overflow-hidden rounded-panel border border-line bg-surface-2/35 p-4 transition-[translate,border-color,background-color,box-shadow] duration-300 ease-out hover:-translate-y-1"
          >
            {/* The badge sits beside the icon, or wraps under it on narrow cards. */}
            <span className="relative flex flex-wrap items-start justify-between gap-2">
              <span className="tech-well grid size-10 shrink-0 place-items-center rounded-sheet border">
                {item.icon}
              </span>
              <span className="tech-badge type-code max-w-full rounded-sheet border px-1.5 py-0.5 text-[0.625rem] leading-tight font-semibold uppercase tracking-[0.1em] rtl:tracking-normal">
                {item.type}
              </span>
            </span>
            <span className="relative mt-auto flex items-center justify-between gap-2 pt-3.5">
              <span className="text-[0.96875rem] leading-snug font-semibold">{item.name}</span>
              <CaretRightIcon
                aria-hidden="true"
                weight="bold"
                className="flip-rtl size-3.5 shrink-0 text-muted/70 transition-[translate,color] duration-300 group-hover/tech:translate-x-1 group-hover/tech:text-[color:var(--brand)] rtl:group-hover/tech:-translate-x-1"
              />
            </span>
          </li>
        ))}
      </ul>

      {children}
    </div>
  );
}
