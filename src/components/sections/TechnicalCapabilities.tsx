import React from "react";
import { Container } from "../ui/Container";

interface SkillCategory {
  idx: string;
  name: string;
  theme: {
    badge: string;
    border: string;
    hoverBorder: string;
    hoverText: string;
    noteHover: string;
    shadow: string;
  };
  skills: { name: string; note: string }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    idx: "01",
    name: "Embedded & Firmware Engineering",
    theme: {
      badge: "text-emerald-400 bg-emerald-950/60 border-emerald-800/80 shadow-[0_0_12px_-3px_rgba(16,185,129,0.3)]",
      border: "border-zinc-800/80 hover:border-emerald-600/80",
      hoverBorder: "hover:border-emerald-650",
      hoverText: "group-hover:text-emerald-300",
      noteHover: "group-hover/chip:text-emerald-400",
      shadow: "hover:shadow-[0_4px_24px_-6px_rgba(16,185,129,0.18)]",
    },
    skills: [
      { name: "STM32 (ARM Cortex-M)", note: "STM32F411 & STM32L431 bare-metal & HAL" },
      { name: "ESP32 & ESP32-S3", note: "Dual-core FreeRTOS & Wi-Fi/BLE" },
      { name: "FreeRTOS Kernel", note: "Multi-task priority scheduling, queues, semaphores" },
      { name: "C++20 & Embedded C", note: "Deterministic memory, bit manipulation, defensive coding" },
      { name: "Hardware Timers & ISR", note: "Microsecond interrupt-driven sensor sampling" },
    ],
  },
  {
    idx: "02",
    name: "Industrial Protocols & Fieldbuses",
    theme: {
      badge: "text-cyan-400 bg-cyan-950/60 border-cyan-800/80 shadow-[0_0_12px_-3px_rgba(6,182,212,0.3)]",
      border: "border-zinc-800/80 hover:border-cyan-600/80",
      hoverBorder: "hover:border-cyan-650",
      hoverText: "group-hover:text-cyan-300",
      noteHover: "group-hover/chip:text-cyan-400",
      shadow: "hover:shadow-[0_4px_24px_-6px_rgba(6,182,212,0.18)]",
    },
    skills: [
      { name: "RS-485 Modbus RTU", note: "Master/Slave protocol with CRC-16 verification" },
      { name: "I2C & SPI Serial Bus", note: "Peripheral sensor & memory integration" },
      { name: "UART / AT Commands", note: "Resilient non-blocking modem state machines" },
      { name: "4-20mA Current Loops", note: "Precision industrial transducer front-ends" },
    ],
  },
  {
    idx: "03",
    name: "Wireless, Cellular & Cloud Telemetry",
    theme: {
      badge: "text-blue-400 bg-blue-950/60 border-blue-800/80 shadow-[0_0_12px_-3px_rgba(59,130,246,0.3)]",
      border: "border-zinc-800/80 hover:border-blue-600/80",
      hoverBorder: "hover:border-blue-650",
      hoverText: "group-hover:text-blue-300",
      noteHover: "group-hover/chip:text-blue-400",
      shadow: "hover:shadow-[0_4px_24px_-6px_rgba(59,130,246,0.18)]",
    },
    skills: [
      { name: "Quectel 4G LTE Cat-1", note: "Automated socket reconnection & cloud dispatch" },
      { name: "GNSS / GPS Tracking", note: "Coordinate decoding & precision clock sync" },
      { name: "MQTT over TLS 1.2", note: "Encrypted low-overhead broker communication" },
      { name: "RESTful Endpoints", note: "Structured JSON telemetry and ingestion handlers" },
    ],
  },
  {
    idx: "04",
    name: "Hardware Interfaces, Memory & Diagnostics",
    theme: {
      badge: "text-violet-400 bg-violet-950/60 border-violet-800/80 shadow-[0_0_12px_-3px_rgba(139,92,246,0.3)]",
      border: "border-zinc-800/80 hover:border-violet-600/80",
      hoverBorder: "hover:border-violet-650",
      hoverText: "group-hover:text-violet-300",
      noteHover: "group-hover/chip:text-violet-400",
      shadow: "hover:shadow-[0_4px_24px_-6px_rgba(139,92,246,0.18)]",
    },
    skills: [
      { name: "SPI NOR Flash Storage", note: "W25Qxx external flash with FATFS logging" },
      { name: "Hardware Watchdog", note: "Fail-safe recovery & peripheral fault mitigation" },
      { name: "Precision ADC Front-End", note: "Analog signal filtering & noise cancellation" },
      { name: "Self-Diagnostic Matrices", note: "Startup hardware integrity checks & alarms" },
    ],
  },
  {
    idx: "05",
    name: "Desktop SCADA & Full-Stack Interfaces",
    theme: {
      badge: "text-teal-400 bg-teal-950/60 border-teal-800/80 shadow-[0_0_12px_-3px_rgba(20,184,166,0.3)]",
      border: "border-zinc-800/80 hover:border-teal-600/80",
      hoverBorder: "hover:border-teal-650",
      hoverText: "group-hover:text-teal-300",
      noteHover: "group-hover/chip:text-teal-400",
      shadow: "hover:shadow-[0_4px_24px_-6px_rgba(20,184,166,0.18)]",
    },
    skills: [
      { name: "Qt 6 / QML Desktop SCADA", note: "Cross-platform industrial operator consoles" },
      { name: "Next.js 16 & React 19", note: "Server & client components, SSR, static generation" },
      { name: "TypeScript", note: "Strict type safety across models, APIs, and components" },
      { name: "Tailwind CSS", note: "High-density responsive design systems" },
      { name: "Leaflet GIS & PWA", note: "Interactive transit mapping & offline caching" },
    ],
  },
  {
    idx: "06",
    name: "Data Systems, Architecture & Quality",
    theme: {
      badge: "text-amber-400 bg-amber-950/60 border-amber-800/80 shadow-[0_0_12px_-3px_rgba(245,158,11,0.3)]",
      border: "border-zinc-800/80 hover:border-amber-600/80",
      hoverBorder: "hover:border-amber-650",
      hoverText: "group-hover:text-amber-300",
      noteHover: "group-hover/chip:text-amber-400",
      shadow: "hover:shadow-[0_4px_24px_-6px_rgba(245,158,11,0.18)]",
    },
    skills: [
      { name: "PostgreSQL & Prisma ORM", note: "ACID transactions, indexed schemas, constraints" },
      { name: "Double-Entry Ledgers", note: "Strict debit/credit stock models & audit tracking" },
      { name: "Finite State Machines", note: "Deterministic status transitions for orders & modems" },
      { name: "Docker Containerization", note: "Reproducible microservice runtimes" },
      { name: "Playwright & CI/CD", note: "Automated browser workflow validation & GitHub Actions" },
    ],
  },
];

export function TechnicalCapabilities() {
  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-28 xl:py-32 2xl:py-36 border-b border-zinc-800/80 bg-zinc-950 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-28 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="default">
        {/* Section Header with Numbering */}
        <div className="mb-12 sm:mb-16">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-gradient-emerald-cyan">
            04 · Skills
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2 sm:mt-2.5">
            Technical Competencies &amp; Toolbox
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2.5 sm:mt-3 max-w-2xl leading-relaxed">
            Systematic technical competencies organized across firmware, industrial communication protocols, telemetry, operational interfaces, and data architectures.
          </p>
        </div>

        {/* Structured Row-by-Row Skills Grid */}
        <div className="space-y-5 sm:space-y-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.idx}
              className={`group rounded-2xl border bg-zinc-900/40 p-5 sm:p-7 lg:p-8 backdrop-blur-sm ${cat.theme.border} ${cat.theme.shadow} transition-all duration-200 flex flex-col lg:flex-row lg:items-start justify-between gap-6 sm:gap-8`}
            >
              {/* Category Header with Colored Index */}
              <div className="lg:w-1/3 xl:w-1/4 shrink-0 flex items-center lg:items-start gap-3.5 sm:gap-4">
                <span className={`font-mono text-xs font-bold px-3 py-1.5 rounded-lg border ${cat.theme.badge}`}>
                  {cat.idx}
                </span>
                <h3 className={`text-base sm:text-lg font-bold text-zinc-100 ${cat.theme.hoverText} transition-colors`}>
                  {cat.name}
                </h3>
              </div>

              {/* Skills Chips with Context Notes */}
              <div className="lg:w-2/3 xl:w-3/4 flex flex-wrap gap-2.5 sm:gap-3">
                {cat.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="group/chip inline-flex flex-col px-3.5 py-2 rounded-xl border border-zinc-800 bg-zinc-950/80 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-150"
                    title={skill.note}
                  >
                    <span className="text-xs font-semibold text-zinc-200 group-hover/chip:text-white">
                      {skill.name}
                    </span>
                    <span className={`text-[11px] font-mono text-zinc-400 ${cat.theme.noteHover} transition-colors mt-0.5`}>
                      {skill.note}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
