import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/animations/PageTransition";
import { BackToTop } from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://soumikghosh.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Soumik Ghosh — Embedded Software Developer",
    template: "%s | Soumik Ghosh",
  },
  description:
    "Soumik Ghosh is an Embedded Software Developer who builds practical, production-oriented software systems across real-time embedded firmware, full-stack applications, and transactional business tools.",
  keywords: [
    "Soumik Ghosh",
    "Embedded Software Developer",
    "Firmware Engineer",
    "STM32",
    "ESP32",
    "FreeRTOS",
    "Modbus RTU",
    "Next.js",
    "PostgreSQL",
    "ApexFlow",
    "Full-Stack Development",
  ],
  authors: [{ name: "Soumik Ghosh", url: "https://github.com/soumikbur" }],
  creator: "Soumik Ghosh",
  openGraph: {
    title: "Soumik Ghosh — Embedded Software Developer",
    description:
      "Practical software systems: Real-time embedded firmware, industrial telemetry, and full-stack operational platforms.",
    url: siteUrl,
    siteName: "Soumik Ghosh Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Soumik Ghosh — Embedded Software Developer",
      },
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Soumik Ghosh — Embedded Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soumik Ghosh — Embedded Software Developer",
    description:
      "Practical software systems across real-time embedded firmware, full-stack applications, and transactional business tools.",
    images: ["/images/og-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
