import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Yawar | Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #18181b 0%, #27272a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 16,
            background: "#fafafa",
            marginBottom: 32,
          }}
        >
          <span style={{ fontSize: 40, fontWeight: 700, color: "#18181b" }}>Y</span>
        </div>
        <h1
          style={{
            fontSize: 64,
            fontWeight: 700,
            color: "#fafafa",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          Yawar
        </h1>
        <p
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            margin: "16px 0 0",
            lineHeight: 1.4,
            maxWidth: 700,
          }}
        >
          Backend engineer specializing in healthcare automation, RPA pipelines, and reliable systems.
        </p>
      </div>
    ),
    { ...size }
  );
}
