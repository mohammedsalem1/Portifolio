import { ImageResponse } from "next/og";
import { getContent } from "@/content";
import { locales } from "@/i18n/config";

export const alt = "Mohammed Salem, Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

// Tokens are not available inside next/og, so the palette is written out.
// The default font has no Arabic glyphs, so the card is English in both
// locales.
const GROUND = "#0D0E11";
const INK = "#ECEDEF";
const MUTED = "#9AA1AB";
const ACCENT = "#FF5A61";
const TEAL = "#63C7BB";

export default function OpengraphImage() {
  const { profile } = getContent("en");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: GROUND,
          color: INK,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: MUTED }}>
          <div style={{ width: 14, height: 14, borderRadius: 7, background: TEAL }} />
          <span>~ $ whoami</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.02 }}>{profile.name}</div>
          <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.02, color: ACCENT }}>
            {profile.role}
          </div>
          <div style={{ marginTop: 36, maxWidth: 940, fontSize: 34, lineHeight: 1.35, color: MUTED }}>
            {profile.tagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
