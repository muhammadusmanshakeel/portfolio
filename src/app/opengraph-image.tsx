import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/profile";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#070B12",
          color: "#E8EEF8",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#2EF2C2",
            fontFamily: "monospace",
          }}
        >
          {siteConfig.role}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 900,
              color: "#2EF2C2",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#8B97AB",
              maxWidth: 720,
              lineHeight: 1.35,
            }}
          >
            {siteConfig.positioning}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(46,242,194,0.25)",
            paddingTop: 28,
            fontSize: 20,
            color: "#8B97AB",
          }}
        >
          <span>Design → Development</span>
          <span style={{ color: "#2EF2C2" }}>Portfolio</span>
        </div>
      </div>
    ),
    size,
  );
}
