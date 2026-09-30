/**
 * Game-style interface sounds, synthesised with the Web Audio API so there
 * are no audio files to download.
 *
 * Browsers only let a page make sound after the visitor clicks, taps or
 * presses a key. Until then hovers stay silent; the first click unlocks audio
 * and from then on hovers tick too.
 *
 * The visitor's choice lives on <html data-sfx="off"> (set before paint by the
 * inline script in the layout) and in localStorage under "sfx".
 */

let context: AudioContext | null = null;
let master: GainNode | null = null;

export function sfxEnabled() {
  return document.documentElement.dataset.sfx !== "off";
}

export function setSfxEnabled(on: boolean) {
  if (on) delete document.documentElement.dataset.sfx;
  else document.documentElement.dataset.sfx = "off";
  try {
    localStorage.setItem("sfx", on ? "on" : "off");
  } catch {
    // Storage can be blocked; the choice still holds for this page view.
  }
}

/** Creates or resumes the audio context. Only call during a user gesture. */
export function unlockSfx() {
  if (!context) {
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    context = new Ctor();
    master = context.createGain();
    master.gain.value = 0.5;
    master.connect(context.destination);
  }
  if (context.state === "suspended") void context.resume().catch(() => {});
  return context;
}

type Note = {
  freq: number;
  /** Seconds after the sound starts. */
  at: number;
  dur: number;
  type?: OscillatorType;
  gain?: number;
  /** Pitch to glide to by the end of the note. */
  slideTo?: number;
};

function play(notes: Note[], fromGesture: boolean) {
  if (!sfxEnabled()) return;
  const audio = fromGesture ? unlockSfx() : context;
  if (!audio || !master) return;
  // Without a gesture a suspended context would queue sounds and play them
  // all at once later, so skip instead.
  if (!fromGesture && audio.state !== "running") return;

  const now = audio.currentTime;
  for (const note of notes) {
    const osc = audio.createOscillator();
    const env = audio.createGain();
    const start = now + note.at;
    const end = start + note.dur;
    osc.type = note.type ?? "square";
    osc.frequency.setValueAtTime(note.freq, start);
    if (note.slideTo) osc.frequency.exponentialRampToValueAtTime(note.slideTo, end);
    env.gain.setValueAtTime(0.0001, start);
    env.gain.exponentialRampToValueAtTime(note.gain ?? 0.05, start + 0.005);
    env.gain.exponentialRampToValueAtTime(0.0001, end);
    osc.connect(env).connect(master);
    osc.start(start);
    osc.stop(end + 0.02);
  }
}

export const sfx = {
  /** A short rising 8-bit tick when the pointer lands on something clickable. */
  hover: () => play([{ freq: 1400, slideTo: 1900, at: 0, dur: 0.045, gain: 0.03 }], false),
  /** Two rising notes, like picking up a coin. */
  select: () =>
    play(
      [
        { freq: 988, at: 0, dur: 0.07 },
        { freq: 1319, at: 0.07, dur: 0.22 },
      ],
      true,
    ),
  /** A quick power-up arpeggio when sound is switched back on. */
  on: () =>
    play(
      [
        { freq: 523, at: 0, dur: 0.07, type: "triangle", gain: 0.09 },
        { freq: 659, at: 0.07, dur: 0.07, type: "triangle", gain: 0.09 },
        { freq: 784, at: 0.14, dur: 0.07, type: "triangle", gain: 0.09 },
        { freq: 1047, at: 0.21, dur: 0.2, type: "triangle", gain: 0.09 },
      ],
      true,
    ),
};
