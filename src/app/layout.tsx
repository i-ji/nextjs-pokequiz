import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ポケモン中国語クイズ",
  description:
    "中国語で出題されたポケモンの名前を、漢字から推測して当てるゲームです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#de2910] text-[#ffde00]`}>
        {children}
      </body>
    </html>
  );
}
