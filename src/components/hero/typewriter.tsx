"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 70;
const DELETE_MS = 35;
const HOLD_MS = 2200;

/**
 * Types each line, holds it, deletes it, moves on. The server renders the
 * first line in full, so it reads without JavaScript and screen readers get
 * the whole list once instead of letter by letter. Reduced motion: the first
 * line, still.
 */
export function Typewriter({ lines, className }: { lines: string[]; className?: string }) {
  const [text, setText] = useState(lines[0] ?? "");

  useEffect(() => {
    if (lines.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let line = 0;
    let shown = lines[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      if (deleting) {
        shown -= 1;
        if (shown === 0) {
          deleting = false;
          line = (line + 1) % lines.length;
        }
      } else {
        shown += 1;
      }
      const current = lines[line];
      setText(current.slice(0, shown));

      if (!deleting && shown === current.length) {
        deleting = true;
        timer = setTimeout(tick, HOLD_MS);
      } else {
        timer = setTimeout(tick, deleting ? DELETE_MS : TYPE_MS);
      }
    }

    // The first line is already on screen: hold it before the first delete.
    timer = setTimeout(tick, HOLD_MS + 900);
    return () => clearTimeout(timer);
  }, [lines]);

  return (
    <span className={className}>
      <span className="sr-only">{lines.join(". ")}</span>
      <span aria-hidden="true">
        {text}
        <span className="typewriter-caret" />
      </span>
    </span>
  );
}
