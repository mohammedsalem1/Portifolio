"use client";

import { useId, useRef, useState } from "react";
import { TextLink } from "@/components/ui/text-link";
import { pipeline } from "@/content/process";
import { cn } from "@/lib/cn";
import styles from "./pipeline.module.css";

/**
 * The hero schematic: five stages on one line, each opening a real artefact
 * from a real project. Built as an accessible tabs pattern: arrow keys move
 * between stages, Home and End jump to the ends. It never advances on its own.
 */
export function Pipeline() {
  const [active, setActive] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const baseId = useId();
  const stage = pipeline[active];

  const tabId = (index: number) => `${baseId}-tab-${index}`;
  const panelId = `${baseId}-panel`;

  function select(index: number) {
    setActive(index);
    tabs.current[index]?.focus();
  }

  // The row is horizontal on small screens and vertical on large ones, so
  // both arrow pairs move through the stages.
  function onKeyDown(event: React.KeyboardEvent, index: number) {
    const last = pipeline.length - 1;
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        select(index === last ? 0 : index + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        select(index === 0 ? last : index - 1);
        break;
      case "Home":
        event.preventDefault();
        select(0);
        break;
      case "End":
        event.preventDefault();
        select(last);
        break;
    }
  }

  return (
    <div
      role="group"
      aria-label="How I build: from idea to shipped product"
      className="diagram-ground overflow-hidden rounded-sheet border border-line-strong"
    >
      <div className="lg:grid lg:grid-cols-[10.5rem_minmax(0,1fr)]">
        <div
          role="tablist"
          aria-label="Stages"
          className="relative grid grid-cols-5 border-b border-line-strong lg:grid-cols-1 lg:border-b-0 lg:border-r"
        >
          <span aria-hidden="true" className={styles.line} />
          {pipeline.map((item, index) => {
            const selected = index === active;
            return (
              <button
                key={item.id}
                ref={(element) => {
                  tabs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={tabId(index)}
                aria-selected={selected}
                aria-controls={panelId}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                className={cn(
                  "relative flex min-h-16 flex-col items-center gap-2 px-0.5 pb-3 pt-3.5 text-center",
                  "lg:min-h-14 lg:flex-row lg:gap-3 lg:px-5 lg:py-0 lg:text-left",
                  selected ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                <span
                  aria-hidden="true"
                  style={{ "--index": index } as React.CSSProperties}
                  className={cn(
                    styles.node,
                    "relative block size-[13.5px] shrink-0 rounded-[1px] border-[1.5px]",
                    selected
                      ? "border-ink bg-signal"
                      : "border-line-strong bg-surface",
                  )}
                />
                <span
                  className={cn(
                    "text-[0.75rem] leading-tight [font-stretch:82%] sm:text-small sm:[font-stretch:100%]",
                    selected ? "font-bold" : "font-medium",
                  )}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={panelId}
          aria-labelledby={tabId(active)}
          tabIndex={0}
          className="bg-surface p-5 sm:p-7 lg:min-h-[21.5rem]"
        >
          {/* A paragraph, not a heading: it changes with the selected stage. */}
          <p className="type-heading">{stage.heading}</p>
          <p className="mt-3 text-small text-ink sm:text-body">{stage.body}</p>

          <ul aria-label="From the project" className="mt-5 flex flex-wrap gap-2">
            {stage.artefacts.map((artefact) => (
              <li
                key={artefact}
                className="type-code rounded-sheet border border-line-strong/50 px-2 py-1"
              >
                {artefact}
              </li>
            ))}
          </ul>

          <p className="mt-5 text-small text-muted">
            Source:{" "}
            {stage.source.href ? (
              <TextLink href={stage.source.href}>{stage.source.label}</TextLink>
            ) : (
              stage.source.label
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
