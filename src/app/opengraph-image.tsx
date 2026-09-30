import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The blueprint: chalk on Prussian, one amber square. Tokens are not
// available inside next/og, so the three colours are written out here.
const PRUSSIAN = "#0B2545";
const CHALK = "#E8F0F8";
const MIST = "#A9BDD3";
const AMBER = "#FFB020";

export default function OpengraphImage() {
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
          background: PRUSSIAN,
          color: CHALK,
        }}
      >
        <div style={{ width: 44, height: 44, background: AMBER }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.02 }}>
            {profile.name}
          </div>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.02 }}>
            {profile.role}
          </div>
          <div
            style={{
              marginTop: 36,
              maxWidth: 900,
              fontSize: 34,
              lineHeight: 1.35,
              color: MIST,
            }}
          >
            {profile.tagline}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
