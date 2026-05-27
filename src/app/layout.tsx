import type { Metadata } from "next";
import { DM_Serif_Display, DM_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const notoSansKR = Noto_Sans_KR({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Lee Jaein — Frontend Engineer",
  description:
    "5년간 금융·공공 서비스를 개발해온 프론트엔드 엔지니어 Lee Jaein입니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${dmSerif.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
