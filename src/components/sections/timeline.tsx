"use client";

import { useEffect, useRef, useState } from "react";
import type { RExperienceItem } from "@/content/types";
import { cn } from "@/lib/cn";

type Labels = { mostRecent: string; pending: string };

/**
 * The experience timeline. As the reader scrolls, the entry crossing the
 * middle of the screen becomes active: its node lights up, the progress line
 * grows to meet it, and earlier entries stay marked as passed.
 *
 * IntersectionObserver only, no scroll listener. Without JavaScript every
 * entry is simply shown at full strength.
 */
export function Timeline({ items, labels }: { items: RExperienceItem[]; labels: Labels }) {
  const [active, setActive] = useState(0);
  const [ready, setReady] = useState(false);
  const [fill, setFill] = useState(0);
  const list = useRef<HTMLOListElement>(null);
  const nodes = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const entries = list.current?.querySelectorAll<HTMLElement>("[data-index]");
    if (!entries) return;
    const observer = new IntersectionObserver(
      (observed) => {
        // The first callback arrives as soon as observing starts.
        setReady(true);
        for (const entry of observed) {
          if (entry.isIntersecting) setActive(Number(entry.target.getAttribute("data-index")));
        }
      },
      // The entry crossing a band around the middle of the viewport is active.
      { rootMargin: "-42% 0px -48% 0px" },
    );
    entries.forEach((entry) => observer.observe(entry));
    return () => observer.disconnect();
  }, []);

  // Grow the progress line to the active node. Measured, so it follows real
  // layout on every screen size and in both directions.
  useEffect(() => {
    const measure = () => {
      const node = nodes.current[active];
      const container = list.current;
      if (!node || !container) return;
      const top = node.getBoundingClientRect().top - container.getBoundingClientRect().top;
      setFill((top + node.offsetHeight / 2) / container.offsetHeight);
    };
    // ResizeObserver also calls back once when it starts observing.
    const resize = new ResizeObserver(measure);
    if (list.current) resize.observe(list.current);
    return () => resize.disconnect();
  }, [active]);

  return (
    <div className="relative">
      {/* Rail and progress: behind the nodes, on the reading-start side. */}
      <span aria-hidden="true" className="absolute inset-y-0 start-[11px] w-px bg-line-strong/40" />
      <span
        aria-hidden="true"
        className="absolute inset-y-0 start-[11px] w-px origin-top bg-accent transition-transform duration-700 ease-out"
        style={{ transform: `scaleY(${ready ? fill : 0})` }}
      />

      <ol ref={list} className="relative">
        {items.map((item, index) => {
          const isActive = ready && index === active;
          const isPast = ready && index < active;
          const dimmed = ready && index > active;
          const pending = item.status === "pending";

          return (
            <li
              key={item.organization}
              data-index={index}
              data-reveal
              className={cn(
                "relative ps-12 pb-14 last:pb-0 transition-opacity duration-500",
                dimmed ? "opacity-55" : "opacity-100",
              )}
            >
              <span
                ref={(element) => {
                  nodes.current[index] = element;
                }}
                aria-hidden="true"
                className={cn(
                  "absolute start-0 top-1 grid size-[23px] place-items-center rounded-full border-2 bg-ground transition-[border-color,box-shadow,background-color] duration-500",
                  isActive
                    ? "border-accent shadow-[0_0_0_6px_color-mix(in_srgb,var(--accent)_18%,transparent)]"
                    : isPast
                      ? "border-accent"
                      : "border-line-strong",
                )}
              >
                <span
                  className={cn(
                    "size-[9px] rounded-full transition-[background-color,transform] duration-500",
                    isActive || isPast || !ready ? "bg-accent" : "bg-line-strong/60",
                    isActive ? "scale-100" : "scale-75",
                  )}
                />
              </span>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="type-code text-muted">{item.period}</span>
                {index === 0 && !pending ? (
                  <span className="inline-flex items-center gap-1.5 rounded-sheet border border-accent-2/40 px-2 py-0.5 text-label font-medium text-accent-2">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-2" />
                    {labels.mostRecent}
                  </span>
                ) : null}
                {pending ? (
                  <span className="rounded-sheet border border-dashed border-line-strong px-2 py-0.5 text-label font-medium text-muted">
                    {labels.pending}
                  </span>
                ) : null}
              </div>

              {/* bdi isolates each part, so a mixed Arabic and Latin title never
                  reorders around the separator. */}
              <h3 className="type-heading mt-3">
                <bdi>{item.title}</bdi>
                <span className="text-muted"> · </span>
                <bdi className={cn("transition-colors duration-500", isActive ? "text-accent-ink" : "text-ink")}>
                  {item.organization}
                </bdi>
              </h3>
              {item.location ? <p className="mt-1 text-small text-muted">{item.location}</p> : null}
              <p className="mt-3 max-w-[40rem] text-body">{item.body}</p>
              {pending && item.pendingNote ? (
                <p className="mt-3 max-w-[40rem] text-small text-muted">{item.pendingNote}</p>
              ) : null}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
