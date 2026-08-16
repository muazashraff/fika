import { ImageResponse } from "next/og";
import { loadGoogleFont } from "@/lib/og-font";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const fontData = await loadGoogleFont("F", 600);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#8B6343",
          color: "#F5F0E8",
          fontSize: 24,
          fontFamily: "Cormorant Garamond",
          fontWeight: 600,
        }}
      >
        F
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Cormorant Garamond", data: fontData, weight: 600, style: "normal" },
      ],
    }
  );
}
