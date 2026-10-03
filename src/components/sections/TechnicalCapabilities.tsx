import React from "react";
import { Container } from "../ui/Container";

interface CapabilityItem {
  name: string;
  desc: string;
}

interface DomainMap {
  idx: string;
  title: string;
  description: string;
  theme: {
    badge: string;
    dotColor: string;
    tagBorder: string;
  };
  skills: CapabilityItem[];
}

const DOMAIN_CAPABILITIES: DomainMap[] = [
  {
    idx: "01",
    title: "Embedded & Firmware",
    description:
      "Deterministic microcontroller firmware, bare-metal drivers, and low-latency task scheduling.",
    theme: {
      badge:
        "text-emerald-400 bg-emerald-950/70 border-emerald-800/80",
      dotColor: "bg-emerald-400",
      tagBorder: "border-emerald-800/60 text-emerald-300 bg-emerald-950/40",
    },
    skills: [
      { name: "STM32 (ARM Cortex-M)", desc: "F411 & L431, HAL & registers" },
      { name: "ESP32 & ESP32-S3", desc: "Dual-core Xtensa/RISC-V" },
      { name: "FreeRTOS Kernel", desc: "Tasks, queues, semaphores & timers" },
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
    theme: {
      badge:
        "text-cyan-400 bg-cyan-950/70 border-cyan-800/80",
      dotColor: "bg-cyan-400",
      tagBorder: "border-cyan-800/60 text-cyan-300 bg-cyan-950/40",
    },
    skills: [
      { name: "RS-485 Modbus RTU", desc: "Master/slave polling with CRC-16" },
      { name: "SPI & I²C Buses", desc: "High-speed synchronous comms" },
      { name: "UART / Serial", desc: "Non-blocking ring buffers & DMA" },
      { name: "4–20mA Current Loops", desc: "Precision transducer conditioning" },
      { name: "AT Command Engines", desc: "Cellular modem state machines" },
      { name: "Qt 6 / QML SCADA", desc: "Cross-platform industrial operator UI" },
    ],
  },
  {
    idx: "03",
    title: "Wireless, Cellular & Cloud",
    description:
      "Remote asset monitoring, resilient cellular state machines, and authenticated telemetry pipelines.",
    theme: {
      badge:
        "text-blue-400 bg-blue-950/70 border-blue-800/80",
      dotColor: "bg-blue-400",
      tagBorder: "border-blue-800/60 text-blue-300 bg-blue-950/40",
    },
    skills: [
      { name: "Quectel 4G LTE Cat-1", desc: "Automated reconnect & dispatch" },
      { name: "MQTT over TLS 1.2", desc: "Encrypted telemetry broker stream" },
      { name: "GNSS / GPS", desc: "NMEA parsing & precision clock sync" },
      { name: "Wi-Fi & Bluetooth LE", desc: "Local provisioning & BLE telemetry" },
      { name: "RESTful APIs", desc: "Structured JSON endpoints" },
      { name: "Socket State Recovery", desc: "Exponential backoff reconnection" },
    ],
  },
  {
    idx: "04",
    title: "Web Development & UI Engineering",
    description:
      "Modern full-stack web platforms, component design systems, and responsive user interfaces.",
    theme: {
      badge:
        "text-violet-400 bg-violet-950/70 border-violet-800/80",
      dotColor: "bg-violet-400",
      tagBorder: "border-violet-800/60 text-violet-300 bg-violet-950/40",
    },
    skills: [
      { name: "React 19 & Next.js 16", desc: "App router & Server Components" },
      { name: "TypeScript (Strict)", desc: "Generic interfaces & API schemas" },
      { name: "Tailwind CSS v4", desc: "Design tokens & fluid typography" },
      { name: "GSAP & Micro-Interactions", desc: "Transitions, 3D tilt & hover" },
      { name: "Responsive Layouts", desc: "Fluid 320px–1920px breakpoints" },
      { name: "Git & Edge Deployment", desc: "CI/CD verification & Vercel hosting" },
    ],
  },
  {
    idx: "05",
    title: "Hardware Interfaces & Diagnostics",
    description:
      "Fail-safe watchdog recovery, external memory logging, and system diagnostic integrity.",
    theme: {
      badge:
        "text-amber-400 bg-amber-950/70 border-amber-800/80",
      dotColor: "bg-amber-400",
      tagBorder: "border-amber-800/60 text-amber-300 bg-amber-950/40",
    },
    skills: [
      { name: "SPI NOR Flash (W25Qxx)", desc: "Circular telemetry logging" },
      { name: "Hardware Watchdog", desc: "Independent timeout recovery" },
      { name: "Precision ADC Front-Ends", desc: "Multi-sample filtering" },
      { name: "Power Modes & Brownout", desc: "Low-power standby & monitoring" },
      { name: "Finite State Machines", desc: "Deterministic fault handling" },
      { name: "PostgreSQL & Ledgers", desc: "Audited immutable data logs" },
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
          <p className="text-sm sm:text-base text-zinc-400 mt-2.5 sm:mt-3 max-w-2xl leading-relaxed">
            Core capability map spanning embedded systems, industrial protocols, cellular telemetry, web engineering, and hardware diagnostics.
          </p>
        </div>

        {/* Domain grid — static cards, no TiltCard (reduce visual weight) */}
        <div className="space-y-5 sm:space-y-6">
          {DOMAIN_CAPABILITIES.map((domain) => (
            <div
              key={domain.idx}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-5 sm:p-7 lg:p-8 transition-colors duration-200 hover:border-zinc-700"
            >
              {/* Domain Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/70 pb-4 sm:pb-5 mb-5 sm:mb-6">
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg border shrink-0 ${domain.theme.badge}`}
                  >
                    {domain.idx}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold tracking-tight text-white">
                    {domain.title}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 sm:max-w-sm leading-relaxed">
                  {domain.description}
                </p>
              </div>

              {/* Compact skill matrix — 3-column on desktop */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3 sm:gap-y-3.5">
                {domain.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item flex items-start gap-2 py-1"
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${domain.theme.dotColor} opacity-60 mt-1.5 shrink-0`}
                    />
                    <div>
                      <span className="font-mono text-xs sm:text-sm font-bold text-zinc-200 group-hover/item:text-white transition-colors tracking-tight">
                        {skill.name}
                      </span>
                      <span className="text-[11px] text-zinc-500 ml-1.5">
                        {skill.desc}
                      </span>
                    </div>
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
