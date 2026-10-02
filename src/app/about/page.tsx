import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Cpu,
  Layers,
  ShieldCheck,
  ArrowUpRight,
  Database,
  Terminal,
  Activity,
  Briefcase,
  GraduationCap,
  Award,
  GitPullRequest,
  MapPin,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TiltCard } from "@/components/ui/TiltCard";

export const metadata: Metadata = {
  title: "About — Soumik Ghosh | Embedded Software Developer",
  description:
    "Soumik Ghosh is an Embedded Software Developer at Panorama Electronics Pvt. Ltd., building real-time firmware, industrial IoT telemetry, and connected operational software.",
};

export default function AboutPage() {
  const certifications = [
    {
      title: "Develop GenAI Apps with Gemini and Streamlit",
      issuer: "Google",
      date: "May 2024",
      category: "Artificial Intelligence",
    },
    {
      title: "Introduction to Generative AI",
      issuer: "Google",
      date: "May 2024",
      category: "Artificial Intelligence",
    },
    {
      title: "Level 3: GenAIus Registries",
      issuer: "Google",
      date: "May 2024",
      category: "Cloud & AI",
    },
    {
      title: "Prompt Design in Vertex AI",
      issuer: "Google",
      date: "May 2024",
      category: "Cloud & AI",
    },
    {
      title: "Android App Development",
      issuer: "Oasis Infobyte",
      date: "October 2023",
      category: "Mobile Systems",
    },
    {
      title: "AWS Services",
      issuer: "Code8",
      date: "September 2022",
      category: "Cloud Infrastructure",
    },
  ];

  const communityActivities = [
    {
      title: "GirlScript Summer of Code 2024 — Extended Edition",
      role: "Contributor",
      description:
        "Contributed to open-source repositories and collaborative software projects, submitting pull requests and improving codebase documentation.",
      tag: "Open Source",
    },
    {
      title: "Hacktoberfest 2023",
      role: "Participant / Completer",
      description:
        "Completed verified open-source contributions during the annual global open-source initiative, earning official DigitalOcean and Appwrite completion badges.",
      tag: "Open Source",
    },
    {
      title: "Google Developer Student Club (GDSC)",
      role: "Videography Core Team, 2023–2024",
      description:
        "Supported developer community technical meetups, workshops, and event media documentation as part of the student club core team.",
      tag: "Community",
    },
    {
      title: "Institution's Innovation Council (IIC)",
      role: "Regional Meet Participant",
      description:
        "Participated in regional entrepreneurship and institutional innovation network activities fostering student technical initiatives.",
      tag: "Innovation",
    },
  ];

  const milestones = [
    {
      period: "Present",
      title: "Embedded Software Developer",
      organization: "Panorama Electronics Pvt. Ltd.",
      location: "Kolkata, West Bengal, India",
      description:
        "Engineering embedded firmware, industrial SCADA monitoring interfaces, and connected IoT telemetry solutions across microcontrollers, FreeRTOS, and fieldbus communication protocols.",
      highlight: true,
    },
    {
      period: "2024",
      title: "Generative AI & Vertex AI Specializations",
      organization: "Google & Open Source Initiatives",
      location: "Online / Community",
      description:
        "Earned verified Google certifications across GenAI apps, Vertex AI prompt design, and contributed to GirlScript Summer of Code (Extended Edition).",
      highlight: false,
    },
    {
      period: "2023",
      title: "Mobile Development & Community Core Team",
      organization: "GDSC & Oasis Infobyte",
      location: "Kolkata, India",
      description:
        "Completed Android App Development internship certification, served on the GDSC Videography Core Team (2023–2024), and completed Hacktoberfest 2023.",
      highlight: false,
    },
    {
      period: "2022",
      title: "Cloud Infrastructure Fundamentals",
      organization: "Code8",
      location: "Online",
      description:
        "Completed foundational training in cloud services and distributed architecture fundamentals (AWS Services).",
      highlight: false,
    },
    {
      period: "2021 – 2025",
      title: "Bachelor of Technology / Undergraduate Studies",
      organization: "Sister Nivedita University",
      location: "Kolkata, West Bengal, India",
      description:
        "Comprehensive engineering studies covering electronic fundamentals, microcontroller architectures, software design patterns, and distributed computing.",
      highlight: false,
    },
  ];

  return (
    <div className="py-16 sm:py-24 lg:py-28 xl:py-32 2xl:py-36 bg-zinc-950 text-zinc-100">
      <Container size="default">
        {/* Header / Identity Banner */}
        <div className="border-b border-zinc-800 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Bio & Positioning */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">Professional Profile</Badge>
                <span className="text-zinc-600 font-mono text-xs">•</span>
                <span className="text-emerald-400 font-mono text-xs flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Panorama Electronics Pvt. Ltd.
                </span>
                <span className="text-zinc-600 font-mono text-xs">•</span>
                <span className="text-zinc-400 font-mono text-xs flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-zinc-500" />
                  Kolkata, India
                </span>
              </div>

              <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight text-white">
                Soumik Ghosh
              </h1>

              <div className="flex flex-wrap items-center gap-2 font-mono text-sm text-zinc-300">
                <span className="text-gradient-emerald-cyan font-bold uppercase tracking-wider">
                  Embedded Software Developer
                </span>
                <span className="text-zinc-600">|</span>
                <span className="text-cyan-400">Firmware</span>
                <span className="text-zinc-600">&amp;</span>
                <span className="text-violet-400">Industrial IoT</span>
              </div>

              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed pt-2">
                I build practical software systems that solve real operational and business problems.
              </p>

              <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
                Currently working as an Embedded Software Developer at <strong className="text-zinc-100 font-medium">Panorama Electronics Pvt. Ltd.</strong> in Kolkata, India. Rather than treating firmware and application software as disconnected disciplines, I engineer integrated architectures—connecting physical sensors, microcontrollers, and real-time operating systems with cloud telemetry, industrial fieldbuses, and responsive operational tools.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-3">
                <Button
                  href="/projects"
                  variant="emerald"
                  size="md"
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  View Verified Projects
                </Button>
                <a
                  href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-xs font-semibold text-blue-300 hover:text-white transition-colors"
                >
                  <LinkedinIcon className="h-4 w-4 text-[#0a66c2]" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
                <a
                  href="https://github.com/soumikbur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-700 bg-zinc-900/80 hover:bg-zinc-800 text-xs font-semibold text-zinc-200 hover:text-white transition-colors"
                >
                  <GithubIcon className="h-4 w-4 text-zinc-300" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </div>
            </div>

            {/* Right: Verified Profile Photo */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl ring-1 ring-emerald-500/30 glow-card-emerald">
                <Image
                  src="/images/soumik-ghosh.jpg"
                  alt="Soumik Ghosh — Embedded Software Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: Professional Experience */}
        <section className="py-10 sm:py-14 border-b border-zinc-800/80 space-y-6">
          <SectionHeader
            badge="Employment"
            title="Professional Experience"
            description="Verified organization and current engineering responsibilities."
          />

          <TiltCard
            accentGlow="emerald"
            maxTilt={3.5}
            scale={1.01}
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-8 space-y-4 hover:border-zinc-700 transition-[border-color,background-color,box-shadow]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-4">
              <div>
                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 rounded-lg border border-emerald-800/80 bg-emerald-950/50 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_-4px_rgba(16,185,129,0.3)]">
                    <Briefcase className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      Panorama Electronics Pvt. Ltd.
                    </h3>
                    <p className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                      Embedded Software Developer
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                  Kolkata, West Bengal, India
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800 text-[11px] text-emerald-300 font-semibold shadow-[0_0_10px_-3px_rgba(16,185,129,0.3)]">
                  Current Role
                </span>
              </div>
            </div>

            <div className="space-y-3 text-sm text-zinc-300 leading-relaxed pt-2">
              <p>
                Engaged in the development and firmware architecture of embedded systems, industrial monitoring controllers, and connected IoT telemetry solutions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
                <div className="rounded border border-emerald-900/60 bg-emerald-950/30 p-3.5 space-y-1 hover:border-emerald-700 transition-colors">
                  <div className="font-mono text-[11px] text-emerald-400 uppercase font-semibold">
                    Core Hardware & RTOS
                  </div>
                  <div className="text-xs text-zinc-300">
                    STM32 (Cortex-M), ESP32-S3, FreeRTOS deterministic task scheduling
                  </div>
                </div>
                <div className="rounded border border-cyan-900/60 bg-cyan-950/30 p-3.5 space-y-1 hover:border-cyan-700 transition-colors">
                  <div className="font-mono text-[11px] text-cyan-400 uppercase font-semibold">
                    Industrial Communication
                  </div>
                  <div className="text-xs text-zinc-300">
                    RS-485 Modbus RTU, Quectel 4G LTE Cat-1, MQTT over TLS 1.2
                  </div>
                </div>
                <div className="rounded border border-violet-900/60 bg-violet-950/30 p-3.5 space-y-1 hover:border-violet-700 transition-colors">
                  <div className="font-mono text-[11px] text-violet-400 uppercase font-semibold">
                    System Applications
                  </div>
                  <div className="text-xs text-zinc-300">
                    Desktop Qt 6 / QML SCADA consoles, operational dashboards
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </section>

        {/* Section 2: Education */}
        <section className="py-10 sm:py-14 border-b border-zinc-800/80 space-y-6">
          <SectionHeader
            badge="Academic Background"
            title="Education"
            description="Verified university qualification and formal engineering studies."
          />

          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-8 hover:border-zinc-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-emerald-400 shrink-0">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Sister Nivedita University
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400">
                    Undergraduate Engineering Degree Program
                  </p>
                  <p className="text-xs text-zinc-500 flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" />
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>
              <div className="sm:text-right">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-300 font-semibold">
                  <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                  2021 – 2025
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-4 pt-4 border-t border-zinc-800/60">
              Rigorous technical coursework focusing on electronic circuits, microcontroller architectures, real-time operating systems, digital communication networks, and software engineering principles.
            </p>
          </div>
        </section>

        {/* Section 3: Certifications */}
        <section className="py-10 sm:py-14 border-b border-zinc-800/80 space-y-6">
          <SectionHeader
            badge="Verified Credentials"
            title="Certifications"
            description="Professional certifications verified on LinkedIn across artificial intelligence, cloud platforms, and mobile engineering."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-5 space-y-3 flex flex-col justify-between hover:border-zinc-700 transition-colors"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-emerald-400 font-semibold">
                      {cert.issuer}
                    </span>
                    <span className="text-zinc-500">{cert.date}</span>
                  </div>
                  <h4 className="text-sm font-semibold text-white leading-snug">
                    {cert.title}
                  </h4>
                </div>
                <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span>{cert.category}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" />
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Open Source & Community */}
        <section className="py-10 sm:py-14 border-b border-zinc-800/80 space-y-6">
          <SectionHeader
            badge="Contributions & Engagement"
            title="Open Source & Community"
            description="Active participation in collaborative open-source initiatives and university developer communities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {communityActivities.map((act) => (
              <div
                key={act.title}
                className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-4 sm:p-6 space-y-3"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">
                    {act.role}
                  </span>
                  <Badge variant="neutral" size="sm">
                    {act.tag}
                  </Badge>
                </div>
                <h4 className="text-base font-semibold text-white">
                  {act.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {act.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Career & Milestones Timeline */}
        <section className="py-10 sm:py-14 border-b border-zinc-800/80 space-y-6">
          <SectionHeader
            badge="Chronology"
            title="Career & Engineering Milestones"
            description="Chronological journey spanning academic foundations, open-source initiatives, technical certifications, and professional engineering practice."
          />

          <div className="relative pl-4 sm:pl-8 border-l border-zinc-800 space-y-6 sm:space-y-8 my-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[23px] sm:-left-[39px] top-1.5 h-3 w-3 sm:h-3.5 sm:w-3.5 rounded-full border-2 ${
                    item.highlight
                      ? "border-emerald-400 bg-emerald-500 shadow-lg shadow-emerald-500/30"
                      : "border-zinc-700 bg-zinc-950 group-hover:border-zinc-500"
                  } transition-colors`}
                />

                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {item.period}
                    </span>
                    <span className="text-xs font-medium text-emerald-400">
                      {item.organization}
                    </span>
                    <span className="text-zinc-600 text-xs">•</span>
                    <span className="text-zinc-500 text-xs">{item.location}</span>
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white pt-0.5">
                    {item.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Engineering Scope & What I Build */}
        <section className="py-10 sm:py-14 border-b border-zinc-800/80 space-y-6">
          <SectionHeader
            badge="Disciplines"
            title="Engineering Scope"
            description="Systems designed for operational environments where data accuracy, timing precision, and reliable state recovery are essential."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
              <div className="h-9 w-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300">
                <Cpu className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Embedded & RTOS Firmware
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Deterministic multi-tasking firmware for STM32 and ESP32 microcontrollers using FreeRTOS, hardware timers, and inter-task queues.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
              <div className="h-9 w-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300">
                <Layers className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Industrial Protocols & Telemetry
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Fieldbus communication stacks for RS-485 Modbus RTU, I2C, SPI, UART, and cellular 4G LTE AT command state machines.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
              <div className="h-9 w-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300">
                <Database className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Full-Stack Business Systems
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Relational applications coordinating inventory ledgers, purchase orders, fulfillment pipelines, and role-based permissions.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
              <div className="h-9 w-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300">
                <Activity className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Analytics & Internal Dashboards
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                High-density operational dashboards with sub-100ms KPI aggregations, interactive charts, and administrative audit trails.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
              <div className="h-9 w-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300">
                <Terminal className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Desktop SCADA & Operator Stations
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Cross-platform operator interfaces built with C++ and Qt 6 / QML for real-time sensor visualization, calibration, and alarms.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
              <div className="h-9 w-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300">
                <ShieldCheck className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Defensive Engineering & Safety
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Watchdog supervision, startup self-tests, sensor disconnect detection, communication retries, and transactional ledger consistency.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7: Technical Capabilities Matrix */}
        <section className="py-10 sm:py-14 border-b border-zinc-800/80 space-y-6">
          <SectionHeader
            badge="Verified Technologies"
            title="Technical Capabilities"
            description="Verified technologies used across completed firmware, industrial IoT, and full-stack software projects."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-3">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 border-b border-zinc-800 pb-2">
                Embedded & Firmware
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["STM32 (Cortex-M)", "ESP32-S3", "FreeRTOS", "Embedded C/C++", "ADC Front-Ends", "Watchdogs", "Timers"].map((item) => (
                  <Badge key={item} variant="neutral" size="sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-3">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 border-b border-zinc-800 pb-2">
                Protocols & IoT
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["RS-485 Modbus RTU", "Quectel 4G LTE", "MQTT / TLS 1.2", "GNSS / GPS", "I2C", "SPI", "UART"].map((item) => (
                  <Badge key={item} variant="neutral" size="sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-3">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 border-b border-zinc-800 pb-2">
                Full-Stack & APIs
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "Node.js", "TypeScript", "REST APIs", "Prisma ORM", "NextAuth v5", "Tailwind CSS"].map((item) => (
                  <Badge key={item} variant="neutral" size="sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-3">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 border-b border-zinc-800 pb-2">
                Data & Storage
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["PostgreSQL", "Double-Entry Ledgers", "SPI NOR Flash", "FATFS", "Redis", "Docker"].map((item) => (
                  <Badge key={item} variant="neutral" size="sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Card */}
        <section className="pt-10 sm:pt-14">
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-8 text-center space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Interested in discussing an engineering challenge or project?
            </h3>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              I am open to discussions regarding embedded firmware, industrial IoT systems, SCADA interfaces, and full-stack operational tools.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Get in Touch
              </Button>
              <Button
                href="/projects"
                variant="outline"
                size="md"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Explore Projects
              </Button>
              <a
                href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-700 bg-zinc-900 text-xs font-semibold text-zinc-200 hover:bg-zinc-800 transition-colors"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
