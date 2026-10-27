import { ImageResponse } from "next/og";
export const alt =
  "Avnish Gupta — Backend systems, AI workflows and business applications";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "#f6f3ec",
        padding: "70px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        color: "#20221f",
      }}
    >
      <div style={{ display: "flex", fontSize: 32 }}>
        Avnish Gupta <span style={{ color: "#a13e2b", marginLeft: 16 }}>↗</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 65,
          letterSpacing: "-3px",
          lineHeight: 1.12,
        }}
      >
        <span>Business applications.</span>
        <span>Connected systems.</span>
        <span style={{ color: "#a13e2b" }}>Less manual work.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 18,
          borderTop: "1px solid #d7d4cb",
          paddingTop: 25,
        }}
      >
        <span>INDEPENDENT DEVELOPER</span>
        <span>avnishgupta.dev</span>
      </div>
    </div>,
    size,
  );
}
