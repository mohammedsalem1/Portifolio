"use client";

import { SpeakerHighIcon, SpeakerSlashIcon } from "@phosphor-icons/react/dist/ssr";
import { setSfxEnabled, sfx, sfxEnabled } from "@/lib/sfx";

/**
 * Mutes or unmutes the interface sounds. Like the theme toggle, both icons
 * and labels are rendered and CSS picks the pair from <html data-sfx>, so
 * server and client markup match.
 */
export function SoundToggle({ turnOff, turnOn }: { turnOff: string; turnOn: string }) {
  function toggle() {
    const on = !sfxEnabled();
    setSfxEnabled(on);
    if (on) sfx.on();
  }

  return (
    <button
      type="button"
      onClick={toggle}
      data-sfx-silent
      className="group inline-flex size-10 items-center justify-center rounded-sheet text-ink transition-colors duration-200 hover:bg-surface-2"
    >
      <SpeakerHighIcon
        aria-hidden="true"
        className="size-[1.15rem] transition-transform duration-300 group-hover:scale-110 sfx-off:hidden"
      />
      <SpeakerSlashIcon aria-hidden="true" className="hidden size-[1.15rem] text-muted sfx-off:block" />
      <span className="sr-only sfx-off:hidden">{turnOff}</span>
      <span className="sr-only hidden sfx-off:block">{turnOn}</span>
    </button>
  );
}
