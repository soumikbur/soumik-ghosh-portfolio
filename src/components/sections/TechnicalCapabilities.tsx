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
  focus: string;
  description: string;
  accent: "emerald" | "cyan" | "blue" | "violet";
  theme: {
    badge: string;
    border: string;
    hoverBorder: string;
    dotColor: string;
    tagBorder: string;
  };
  skills: CapabilityItem[];
}

const DOMAIN_CAPABILITIES: DomainMap[] = [
  {
    idx: "01",
    title: "Embedded & Firmware",
    focus: "Real-Time Systems · MCU Development",
    description:
      "Deterministic microcontroller firmware, bare-metal hardware drivers, and low-latency task scheduling.",
    accent: "emerald",
    theme: {
      badge:
        "text-emerald-400 bg-emerald-950/70 border-emerald-800/80 shadow-[0_0_12px_-3px_rgba(16,185,129,0.3)]",
      border: "border-zinc-800/80 hover:border-emerald-700/60",
      hoverBorder: "hover:border-emerald-600/70",
      dotColor: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.7)]",
      tagBorder: "border-emerald-800/60 text-emerald-300 bg-emerald-950/40",
    },
    skills: [
      { name: "STM32 (ARM Cortex-M)", desc: "F411 & L431 bare-metal, HAL & registers" },
      { name: "ESP32 & ESP32-S3", desc: "Dual-core Xtensa/RISC-V architecture" },
      { name: "FreeRTOS Kernel", desc: "Multi-task queues, semaphores & timers" },
      { name: "Embedded C / C++20", desc: "Bit-level control & zero-overhead memory" },
      { name: "Hardware Timers & PWM", desc: "Input capture, encoder modes & timing" },
      { name: "Interrupts & ISR", desc: "Low-latency priority nested execution" },
      { name: "HAL & CMSIS Drivers", desc: "Low-level peripheral abstraction layers" },
      { name: "Memory & DMA", desc: "Direct memory access & circular buffers" },
    ],
  },
  {
    idx: "02",
    title: "Industrial Protocols & Fieldbus",
    focus: "Fieldbus Infrastructure · Sensor Loops",
    description:
      "Reliable multi-drop communication buses, transceiver front-ends, and industrial supervisory protocols.",
    accent: "cyan",
    theme: {
      badge:
        "text-cyan-400 bg-cyan-950/70 border-cyan-800/80 shadow-[0_0_12px_-3px_rgba(6,182,212,0.3)]",
      border: "border-zinc-800/80 hover:border-cyan-700/60",
      hoverBorder: "hover:border-cyan-600/70",
      dotColor: "bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.7)]",
      tagBorder: "border-cyan-800/60 text-cyan-300 bg-cyan-950/40",
    },
    skills: [
      { name: "RS-485 Modbus RTU", desc: "Master/slave polling with CRC-16 integrity" },
      { name: "SPI Bus Protocol", desc: "High-speed synchronous multi-slave comms" },
      { name: "I²C Bus Architecture", desc: "Multi-master sensor bus & clock stretching" },
      { name: "UART / Serial State", desc: "Non-blocking ring buffers & DMA streams" },
      { name: "4–20mA Current Loops", desc: "Precision transducer signal conditioning" },
      { name: "AT Command Engines", desc: "Cellular modem state machines & parser" },
      { name: "Qt 6 / QML SCADA", desc: "Cross-platform industrial operator UI" },
      { name: "Galvanic Isolation", desc: "Optocoupled surge & transient mitigation" },
    ],
  },
  {
    idx: "03",
    title: "Wireless, Cellular & Cloud",
    focus: "Cellular Telemetry · Secure Transport",
    description:
      "Remote asset monitoring, resilient cellular socket state machines, and authenticated telemetry pipelines.",
    accent: "blue",
    theme: {
      badge:
        "text-blue-400 bg-blue-950/70 border-blue-800/80 shadow-[0_0_12px_-3px_rgba(59,130,246,0.3)]",
      border: "border-zinc-800/80 hover:border-blue-700/60",
      hoverBorder: "hover:border-blue-600/70",
      dotColor: "bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.7)]",
      tagBorder: "border-blue-800/60 text-blue-300 bg-blue-950/40",
    },
    skills: [
      { name: "Quectel 4G LTE Cat-1", desc: "Automated network reconnect & packet dispatch" },
      { name: "MQTT over TLS 1.2", desc: "Encrypted lightweight telemetry broker stream" },
      { name: "GNSS / GPS Navigation", desc: "NMEA sentence parsing & precision clock sync" },
      { name: "Wi-Fi & Bluetooth LE", desc: "Local device provisioning & BLE telemetry" },
      { name: "RESTful Telemetry APIs", desc: "Structured JSON endpoints & edge ingestion" },
      { name: "Next.js & TypeScript", desc: "Full-stack operational monitoring platforms" },
      { name: "Leaflet GIS & PWA", desc: "Geospatial mapping & offline asset caching" },
      { name: "Socket State Recovery", desc: "Exponential backoff socket reconnection" },
    ],
  },
  {
    idx: "04",
    title: "Hardware Interfaces & Diagnostics",
    focus: "Fault Mitigation · Non-Volatile Storage",
    description:
      "Fail-safe watchdog recovery, external memory logging, analog front-ends, and system diagnostic integrity.",
    accent: "violet",
    theme: {
      badge:
        "text-violet-400 bg-violet-950/70 border-violet-800/80 shadow-[0_0_12px_-3px_rgba(139,92,246,0.3)]",
      border: "border-zinc-800/80 hover:border-violet-700/60",
      hoverBorder: "hover:border-violet-600/70",
      dotColor: "bg-violet-400 shadow-[0_0_8px_rgba(139,92,246,0.7)]",
      tagBorder: "border-violet-800/60 text-violet-300 bg-violet-950/40",
    },
    skills: [
      { name: "SPI NOR Flash (W25Qxx)", desc: "Circular telemetry logging with FATFS" },
      { name: "Hardware Watchdog (WDT)", desc: "Independent timeout automated recovery" },
      { name: "Precision ADC Front-Ends", desc: "Multi-sample filtering & voltage scaling" },
      { name: "Self-Diagnostic Matrices", desc: "Startup sensor checks & hardware alarms" },
      { name: "Power Modes & Brownout", desc: "Low-power standby & supply monitoring" },
      { name: "Finite State Machines", desc: "Deterministic fault handling & transitions" },
      { name: "PostgreSQL & Ledgers", desc: "Audited immutable relational data logs" },
      { name: "Automated Validation", desc: "Firmware unit checks & end-to-end testing" },
    ],
  },
];

export function TechnicalCapabilities() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-24 lg:py-28 xl:py-32 2xl:py-36 border-b border-zinc-800/80 bg-zinc-950 relative overflow-hidden"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 -right-28 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-28 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="default">
        {/* Section Header with Numbering */}
        <div className="mb-12 sm:mb-16">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-gradient-emerald-cyan">
            04 · Technical Capability Map
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2 sm:mt-2.5">
            Technical Competencies &amp; Skills
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2.5 sm:mt-3 max-w-2xl leading-relaxed">
            Curated technical capability map organized across deterministic firmware, industrial communication protocols, cellular IoT telemetry, and system-level diagnostics.
          </p>
        </div>

        {/* 4 Curated Domain Capability Containers */}
        <div className="space-y-6 sm:space-y-8">
          {DOMAIN_CAPABILITIES.map((domain) => (
            <TiltCard
              key={domain.idx}
              accentGlow={domain.accent}
              maxTilt={2.0}
              scale={1.006}
              className="rounded-2xl border border-zinc-800/80 bg-zinc-900/30 p-6 sm:p-8 lg:p-10 backdrop-blur-sm transition-[border-color,background-color,box-shadow] duration-200 hover:border-zinc-700 shadow-xl space-y-6 sm:space-y-7"
            >
              {/* Domain Header: Index, Title, Focus Tag, and One-Line Description */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-800/70 pb-5 sm:pb-6">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <span
                    className={`font-mono text-xs sm:text-sm font-bold px-3 py-1.5 rounded-lg border shrink-0 ${domain.theme.badge}`}
                  >
                    {domain.idx}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white">
                        {domain.title}
                      </h3>
                      <span
                        className={`inline-flex items-center text-[10px] font-mono font-semibold px-2 py-0.5 rounded border uppercase tracking-wider ${domain.theme.tagBorder}`}
                      >
                        {domain.focus}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 lg:max-w-md xl:max-w-lg leading-relaxed font-mono sm:font-sans">
                  {domain.description}
                </p>
              </div>

              {/* Responsive 4-Column Typographic Capability Matrix (Zero box-in-box feeling) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-x-8 gap-y-4 sm:gap-y-5">
                {domain.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group/item relative flex flex-col p-2.5 sm:p-3 -mx-2.5 rounded-lg hover:bg-zinc-800/40 transition-colors duration-150 cursor-default"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${domain.theme.dotColor} opacity-70 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-200 shrink-0`}
                      />
                      <span className="font-mono text-xs sm:text-sm font-bold text-zinc-100 group-hover/item:text-white transition-colors tracking-tight">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-[11px] sm:text-xs text-zinc-400 group-hover/item:text-zinc-300 mt-1 pl-3.5 leading-relaxed transition-colors">
                      {skill.desc}
                    </span>
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
