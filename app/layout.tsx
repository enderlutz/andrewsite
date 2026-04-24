import type { Metadata } from "next";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { ResumeProvider } from "@/components/resume-viewer";
import { ScrollProgress } from "@/components/scroll-progress";
import { ConsoleHello } from "@/components/console-hello";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andrew Bieh-Mintah — Student Sales Professional",
  description:
    "Finance and sales student. Personal portfolio, resume, and contact.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body className="grain font-sans">
        <ConsoleHello />
        <ScrollProgress />
        <ResumeProvider>
          <Nav />
          <main className="relative">{children}</main>
        </ResumeProvider>
      </body>
    </html>
  );
}
