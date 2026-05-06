import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TheDentistry — A complete destination for precision technology and expert dental care",
  description:
    "A new standard in dental care for aesthetics and oral health, featuring world-class dental technologies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
