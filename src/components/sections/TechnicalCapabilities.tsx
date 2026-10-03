import React from "react";
import { Container } from "../ui/Container";
import { TiltCard } from "../ui/TiltCard";

interface CapabilityItem {
  name: string;
  desc: string;
}

interface DomainMap {
  idx: string;
  title: string;
  description: string;
  accent: "emerald" | "cyan" | "blue" | "violet" | "amber";
  theme: {
    badge: string;
    dotColor: string;
    hoverBorder: string;
  };
  skills: CapabilityItem[];
}

const DOMAIN_CAPABILITIES: DomainMap[] = [
  {
    idx: "01",
    title: "Embedded & Firmware",
    description:
      "Deterministic microcontroller firmware, bare-metal drivers, and low-latency task scheduling.",
    accent: "emerald",
    theme: {
      badge:
        "text-emerald-400 bg-emerald-950/70 border-emerald-800/80 shadow-[0_0_12px_-3px_rgba(16,185,129,0.25)]",
      dotColor: "bg-emerald-400",
      hoverBorder: "hover:border-emerald-600/70",
    },
    skills: [
      { name: "STM32 (ARM Cortex-M)", desc: "F411 & L431, HAL & register-level drivers" },
      { name: "ESP32 & ESP32-S3", desc: "Dual-core Xtensa/RISC-V architecture" },
      { name: "FreeRTOS Kernel", desc: "Tasks, queues, binary semaphores & timers" },
      { name: "Embedded C / C++20", desc: "Bit-level control & zero-overhead memory" },
      { name: "Hardware Timers & ISR", desc: "Input capture, PWM & nested interrupts" },
      { name: "DMA & Memory", desc: "Direct memory access & circular buffers" },
    ],
  },
  {
    idx: "02",
    title: "Industrial Protocols & Fieldbus",
    description:
      "Reliable multi-drop communication buses, transceiver front-ends, and industrial supervisory protocols.",
    accent: "cyan",
    theme: {
      badge:
        "text-cyan-400 bg-cyan-950/70 border-cyan-800/80 shadow-[0_0_12px_-3px_rgba(6,182,212,0.25)]",
      dotColor: "bg-cyan-400",
      hoverBorder: "hover:border-cyan-600/70",
    },
    skills: [
      { name: "RS-485 Modbus RTU", desc: "Master/slave polling with CRC-16 integrity" },
      { name: "SPI & I²C Buses", desc: "High-speed synchronous peripheral comms" },
      { name: "UART / Serial", desc: "Non-blocking ring buffers & DMA transfers" },
      { name: "4–20mA Current Loops", desc: "Precision analog transducer conditioning" },
      { name: "AT Command Engines", desc: "Cellular modem non-blocking state machines" },
      { name: "Qt 6 / QML SCADA", desc: "Cross-platform industrial operator interface" },
    ],
  },
  {
    idx: "03",
    title: "Wireless, Cellular & Cloud",
    description:
      "Remote asset monitoring, resilient cellular state machines, and authenticated telemetry pipelines.",
    accent: "blue",
    theme: {
      badge:
        "text-blue-400 bg-blue-950/70 border-blue-800/80 shadow-[0_0_12px_-3px_rgba(59,130,246,0.25)]",
      dotColor: "bg-blue-400",
      hoverBorder: "hover:border-blue-600/70",
    },
    skills: [
      { name: "Quectel 4G LTE Cat-1", desc: "Automated network reconnect & packet dispatch" },
      { name: "MQTT over TLS 1.2", desc: "Encrypted lightweight telemetry broker stream" },
      { name: "GNSS / GPS Navigation", desc: "NMEA sentence parsing & precision clock sync" },
      { name: "Wi-Fi & Bluetooth LE", desc: "Local device provisioning & BLE telemetry" },
      { name: "RESTful Telemetry APIs", desc: "Structured JSON endpoints & edge ingestion" },
      { name: "Socket State Recovery", desc: "Exponential backoff socket reconnection" },
    ],
  },
  {
    idx: "04",
    title: "Web Development & UI Engineering",
    description:
      "Modern full-stack web platforms, component design systems, and responsive user interfaces.",
    accent: "violet",
    theme: {
      badge:
        "text-violet-400 bg-violet-950/70 border-violet-800/80 shadow-[0_0_12px_-3px_rgba(139,92,246,0.25)]",
      dotColor: "bg-violet-400",
      hoverBorder: "hover:border-violet-600/70",
    },
    skills: [
      { name: "React 19 & Next.js 16", desc: "App router, Server Components & static build" },
      { name: "TypeScript (Strict)", desc: "Strict type models, generic interfaces & schemas" },
      { name: "Tailwind CSS v4", desc: "Design token systems, fluid typography & utilities" },
      { name: "Micro-Interactions", desc: "Tactile hover responses & smooth transitions" },
      { name: "Responsive Layouts", desc: "Fluid breakpoints (320px–1920px) & ergonomics" },
      { name: "Git & Edge Deployment", desc: "CI/CD verification & Vercel hosting" },
    ],
  },
  {
    idx: "05",
    title: "Hardware Interfaces & Diagnostics",
    description:
      "Fail-safe watchdog recovery, external memory logging, and system diagnostic integrity.",
    accent: "amber",
    theme: {
      badge:
        "text-amber-400 bg-amber-950/70 border-amber-800/80 shadow-[0_0_12px_-3px_rgba(245,158,11,0.25)]",
      dotColor: "bg-amber-400",
      hoverBorder: "hover:border-amber-600/70",
    },
    skills: [
      { name: "SPI NOR Flash (W25Qxx)", desc: "Circular telemetry logging with FATFS" },
      { name: "Hardware Watchdog (WDT)", desc: "Independent timeout automated recovery" },
      { name: "Precision ADC Front-Ends", desc: "Multi-sample filtering & voltage scaling" },
      { name: "Power Modes & Brownout", desc: "Low-power standby & supply monitoring" },
      { name: "Finite State Machines", desc: "Deterministic fault handling & transitions" },
      { name: "PostgreSQL & Ledgers", desc: "Audited immutable relational data logs" },
    ],
  },
];

export function TechnicalCapabilities() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 lg:py-28 xl:py-32 border-b border-zinc-800/80 bg-transparent relative overflow-hidden"
    >
      <Container size="default">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-gradient-emerald-cyan">
            04 · Skills
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2 sm:mt-2.5">
            Technical Competencies
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 mt-2.5 sm:mt-3 max-w-2xl leading-relaxed">
            Core capability map spanning embedded systems, industrial protocols, cellular telemetry, web engineering, and hardware diagnostics.
          </p>
        </div>

        {/* 5 Curated Domain Capability Panels — Solid translucent surface (rgba(10,15,18,0.85)) for maximum text contrast */}
        <div className="space-y-5 sm:space-y-6">
          {DOMAIN_CAPABILITIES.map((domain) => (
            <TiltCard
              key={domain.idx}
              accentGlow={domain.accent}
              maxTilt={1.5}
              scale={1.005}
              className={`rounded-2xl border border-zinc-800/80 bg-[#0a0f12]/85 backdrop-blur-md p-5 sm:p-7 lg:p-8 shadow-xl transition-all duration-200 ${domain.theme.hoverBorder} hover:bg-[#0c1216]/90`}
            >
              {/* Domain Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/70 pb-4 sm:pb-5 mb-5 sm:mb-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg border shrink-0 ${domain.theme.badge}`}
                  >
                    {domain.idx}
                  </span>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-white">
                    {domain.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 sm:max-w-md leading-relaxed">
                  {domain.description}
                </p>
              </div>

              {/* Compact 3-Column Typographic Capability Matrix — High-contrast text on solid dark surface */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 sm:gap-y-3.5">
                {domain.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex items-start gap-2.5 p-2 -mx-2 rounded-lg hover:bg-zinc-850/50 transition-colors"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${domain.theme.dotColor} mt-1.5 shrink-0 opacity-80 group-hover/item:opacity-100 transition-opacity`}
                    />
                    <div className="flex flex-col">
                      <span className="font-mono text-xs sm:text-sm font-semibold text-zinc-100 group-hover/item:text-white transition-colors tracking-tight">
                        {skill.name}
                      </span>
                      <span className="text-[11px] sm:text-xs text-zinc-400 group-hover/item:text-zinc-300 leading-snug mt-0.5 transition-colors">
                        {skill.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </TiltCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
