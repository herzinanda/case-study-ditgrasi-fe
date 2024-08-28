import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publiSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Case Study Ditgrasi",
  description: "Case Study Ditgrasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ publiSans.className }>{ children }</body>
    </html>
  );
}
