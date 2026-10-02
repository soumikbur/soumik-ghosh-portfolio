import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Soumik Ghosh | Embedded Software Developer",
  description:
    "Get in touch with Soumik Ghosh for embedded software engineering, industrial SCADA, IoT telemetry, and operational full-stack systems inquiries.",
  openGraph: {
    title: "Contact — Soumik Ghosh | Embedded Software Developer",
    description:
      "Get in touch with Soumik Ghosh for embedded software engineering, industrial SCADA, IoT telemetry, and operational full-stack systems inquiries.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
