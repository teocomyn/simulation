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
          background: "#031c26",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 156,
            height: 156,
            border: "6px solid #5ad2f4",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 100,
              height: 100,
              border: "6px solid #5ad2f4",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 44, height: 44, background: "#5ad2f4" }} />
          </div>
        </div>
      </div>
    ),
    size,
  );
}
