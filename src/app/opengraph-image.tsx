import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#09090b",
          padding: "60px 72px",
          fontFamily: "system-ui, -apple-system, sans-serif",
          border: "2px solid #27272a",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#18181b",
              border: "1px solid #3f3f46",
              color: "#34d399",
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            &gt;_
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "16px", color: "#a1a1aa", letterSpacing: "2px", textTransform: "uppercase" }}>
              Engineering Portfolio
            </span>
            <span style={{ fontSize: "14px", color: "#34d399", fontWeight: 600 }}>
              AVAILABLE FOR ENGAGEMENTS
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: "-1px",
            }}
          >
            Soumik Ghosh
          </h1>
          <p
            style={{
              fontSize: "28px",
              fontWeight: 600,
              color: "#34d399",
              margin: 0,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Embedded Software Developer
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "#d4d4d8",
              margin: 0,
              maxWidth: "900px",
              lineHeight: 1.4,
            }}
          >
            Practical software systems: Real-time embedded firmware, industrial telemetry, and full-stack business applications.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #27272a",
            paddingTop: "24px",
            color: "#71717a",
            fontSize: "16px",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <span style={{ color: "#a1a1aa" }}>STM32 &bull; ESP32 &bull; FreeRTOS</span>
            <span style={{ color: "#a1a1aa" }}>Modbus RTU &bull; 4G LTE</span>
            <span style={{ color: "#a1a1aa" }}>Next.js &bull; PostgreSQL</span>
          </div>
          <span style={{ color: "#34d399", fontWeight: 600 }}>soumikbur.github.io</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
