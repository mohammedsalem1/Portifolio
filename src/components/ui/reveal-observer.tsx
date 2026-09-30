"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Reveals [data-reveal] elements as they scroll into view by setting
 * data-revealed. The CSS in globals.css does the animating, and only when the
 * visitor has not asked for reduced motion. One observer for the whole page.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal]:not([data-revealed])",
    );
    if (!("IntersectionObserver" in window)) {
      targets.forEach((element) => element.setAttribute("data-revealed", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    targets.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
    // Re-scan when the route changes, since the layout stays mounted.
  }, [pathname]);

  return null;
}
