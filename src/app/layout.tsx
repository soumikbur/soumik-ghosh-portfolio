import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/animations/PageTransition";
import { BackToTop } from "@/components/ui/BackToTop";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

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
    "Soumik Ghosh is an Embedded Software Developer at Panorama Electronics Pvt. Ltd. in Kolkata, India. Building practical systems across real-time embedded firmware, industrial IoT telemetry, and operational software.",
  keywords: [
    "Soumik Ghosh",
    "Embedded Software Developer",
    "Panorama Electronics",
    "Firmware Engineer",
    "STM32",
    "ESP32-S3",
    "FreeRTOS",
    "Modbus RTU",
    "Industrial IoT",
    "Next.js",
    "Sister Nivedita University",
    "Full-Stack Systems",
  ],
  authors: [{ name: "Soumik Ghosh", url: "https://github.com/soumikbur" }],
  creator: "Soumik Ghosh",
  openGraph: {
    title: "Soumik Ghosh — Embedded Software Developer",
    description:
      "Embedded Software Developer at Panorama Electronics Pvt. Ltd. Practical systems: Real-time embedded firmware, industrial telemetry, and full-stack operational platforms.",
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
      "Embedded Software Developer at Panorama Electronics Pvt. Ltd. Real-time embedded firmware, industrial telemetry, and full-stack operational platforms.",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Soumik Ghosh",
  jobTitle: "Embedded Software Developer",
  worksFor: {
    "@type": "Organization",
    name: "Panorama Electronics Pvt. Ltd.",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Sister Nivedita University",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kolkata",
    addressRegion: "West Bengal",
    addressCountry: "India",
  },
  url: siteUrl,
  sameAs: [
    "https://www.linkedin.com/in/soumik-ghosh-883a1a22b/",
    "https://github.com/soumikbur",
  ],
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
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100 selection:bg-zinc-800 selection:text-white relative">
        <AmbientBackground />
        <Navbar />
        <main className="flex-1 flex flex-col relative z-10">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <BackToTop />
        <CustomCursor />
      </body>
    </html>
  );
}
