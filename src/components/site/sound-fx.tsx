"use client";

import { useEffect } from "react";
import { sfx, unlockSfx } from "@/lib/sfx";

/** Anything a visitor can point at and activate. */
const interactive =
  "a[href], button:not(:disabled), summary, [role='button'], label[for], [data-sfx]";

/**
 * One set of listeners on the document plays a tick when the mouse moves onto
 * a link or button and a coin sound when one is pressed. Touch and pen get the
 * press sound only, since they have no hover. Renders nothing.
 */
export function SoundFx() {
  useEffect(() => {
    let current: Element | null = null;
    let lastHover = 0;

    function onOver(event: PointerEvent) {
      if (event.pointerType !== "mouse") return;
      const target = (event.target as Element).closest?.(interactive) ?? null;
      // Moving between an element's own children is not a new hover.
      if (target === current) return;
      current = target;
      if (!target) return;
      const now = performance.now();
      if (now - lastHover < 45) return;
      lastHover = now;
      sfx.hover();
    }

    function onDown(event: PointerEvent) {
      if (event.button !== 0) return;
      const target = (event.target as Element).closest?.(interactive);
      if (target && !target.closest("[data-sfx-silent]")) sfx.select();
      else unlockSfx();
    }

    document.addEventListener("pointerover", onOver, { passive: true });
    document.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("keydown", unlockSfx);
    return () => {
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", unlockSfx);
    };
  }, []);

  return null;
}
