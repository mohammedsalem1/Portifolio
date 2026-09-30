"use client";

import { useEffect, useRef } from "react";

/**
 * Counts a number up from zero the first time it scrolls into view, like a
 * score tally. The server renders the final value, so it is right without
 * JavaScript and under reduced motion. Values that are not whole numbers
 * ("BSc") are shown as they are.
 */
export function CountUp({ value, delay = 0 }: { value: string; delay?: number }) {
  const target = /^\d+$/.test(value) ? Number(value) : null;
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (target === null || !element) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let timer: ReturnType<typeof setTimeout>;
    // Written straight to the DOM: sixty renders a second for a number
    // nothing else reads would be waste.
    const show = (n: number) => {
      element.textContent = String(n);
    };
    show(0);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timer = setTimeout(() => {
          const start = performance.now();
          const duration = 1400;
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 4);
            show(Math.round(eased * target));
            if (progress < 1) frame = requestAnimationFrame(step);
          };
          frame = requestAnimationFrame(step);
        }, delay);
      },
      { threshold: 0.4 },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [target, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}
