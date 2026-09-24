import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070B12",
          color: "#2EF2C2",
          fontSize: 64,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          border: "2px solid #2EF2C2",
        }}
      >
        MU
      </div>
    ),
    size,
  );
}
