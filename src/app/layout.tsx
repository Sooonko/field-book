import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";

const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Thin.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-ExtraLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-SemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-ExtraBold.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fieldbook AI Caddie",
  description: "모든 순간을 함께하는 프리미엄 AI Caddie",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.variable}>
      <body className="font-pretendard bg-black text-white">{children}</body>
    </html>
  );
}
