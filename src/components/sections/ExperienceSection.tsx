import React from "react";
import { Briefcase, Calendar, ChevronRight, GraduationCap, MapPin } from "lucide-react";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";
import { TiltCard } from "../ui/TiltCard";

export function ExperienceSection() {
  const responsibilities = [
    "Architect and implement dual-core firmware running on STM32 (ARM Cortex-M4) and ESP32-S3 microcontrollers for mission-critical industrial telemetry and monitoring devices.",
    "Develop preemptive FreeRTOS firmware environments featuring prioritized task scheduling, binary semaphores, message queues, and dedicated software watchdog timers.",
    "Implement fieldbus communication systems using RS-485 Modbus RTU master/slave protocols with CRC-16 hardware integrity verification under electrically noisy environments.",
    "Integrate Quectel 4G LTE cellular modems with autonomous non-blocking AT command state machines, automated socket recovery, and encrypted cloud synchronization.",
    "Validate board-level hardware on bench environments using digital storage oscilloscopes, logic analyzers, and protocol decoders, achieving sub-10ms deterministic sensor acquisition loops.",
  ];

  const firmwareTech = ["C / C++", "STM32CubeIDE", "ESP-IDF", "FreeRTOS"];
  const protocolTech = ["Modbus RTU", "RS-485", "UART", "SPI", "I2C", "MQTT"];
  const uiStorageTech = ["Qt 6", "C++", "FATFS", "SPI Flash", "PostgreSQL"];

  const impacts = [
    {
      metric: "Sub-10ms",
      title: "Modbus RTU Response Time",
      desc: "Deterministic sensor acquisition loop verified with zero packet loss across industrial plant runs.",
      border: "border-emerald-800/80",
      bg: "bg-emerald-950/40",
      text: "text-emerald-400",
      shadow: "shadow-[0_0_15px_-4px_rgba(16,185,129,0.2)]",
    },
    {
      metric: "CRC-16",
      title: "Deterministic Packet Validation",
      desc: "Complete error rejection and autonomous re-polling for substation electrical noise immunity.",
      border: "border-cyan-800/80",
      bg: "bg-cyan-950/40",
      text: "text-cyan-400",
      shadow: "shadow-[0_0_15px_-4px_rgba(6,182,212,0.2)]",
    },
    {
      metric: "4G LTE",
      title: "Quectel Cellular Telemetry",
      desc: "Robust non-blocking AT state machine with automated reconnection for remote installations.",
      border: "border-violet-800/80",
      bg: "bg-violet-950/40",
      text: "text-violet-400",
      shadow: "shadow-[0_0_15px_-4px_rgba(139,92,246,0.2)]",
    },
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-28 xl:py-32 2xl:py-36 border-b border-zinc-800/80 bg-transparent relative overflow-hidden">
      <Container size="default">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-gradient-emerald-cyan">
            02 · Experience
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2 sm:mt-2.5">
            Professional Experience &amp; Engineering Track Record
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2.5 sm:mt-3 max-w-2xl leading-relaxed">
            Engineering real-time embedded firmware, industrial fieldbus networks, and operations software deployed in demanding production environments.
          </p>
        </div>

        <div className="space-y-10 sm:space-y-12">
          {/* Item 1: Full-Time Production Engineering Experience Card (Restrained subtle tilt, stable text) */}
          <TiltCard
            as="article"
            maxTilt={1.5}
            scale={1.005}
            accentGlow="emerald"
            className="rounded-2xl sm:rounded-3xl border border-zinc-800/90 bg-zinc-900/60 p-6 sm:p-8 lg:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            {/* Ambient Background Accent Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Header: Company, Role, Duration, and Badges */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-zinc-800/80 pb-6 mb-6 sm:mb-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl border border-emerald-800/80 bg-emerald-950/60 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 shadow-[0_0_15px_-4px_rgba(16,185,129,0.3)]">
                  <Briefcase className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white tracking-tight">
                    Panorama Electronics Pvt. Ltd.
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-emerald-400">
                      Embedded Software Developer
                    </span>
                    <span className="text-zinc-600 hidden sm:inline">•</span>
                    <span className="text-xs sm:text-sm font-mono text-zinc-400 flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-cyan-400" />
                      Kolkata, West Bengal, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-700/80 bg-zinc-850/80 text-xs font-mono text-zinc-300">
                  <Calendar className="h-3.5 w-3.5 text-emerald-400" />
                  Aug 2024 – Present · Full-time
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/80 text-xs font-mono text-emerald-300 font-semibold shadow-[0_0_12px_-3px_rgba(16,185,129,0.25)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Current Role
                </span>
              </div>
            </div>

            {/* Desktop 2-Column Grid on xl: screens; stacked on mobile/tablet */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-start">
              {/* Left Column (7 cols): Scope & Responsibilities */}
              <div className="xl:col-span-7 space-y-6 sm:space-y-7">
                {/* Scope Summary */}
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-[65ch]">
                  Leading firmware architecture and industrial IoT development for critical telemetry nodes, SCADA desktop monitoring stations, and connected field controllers. Bridging physical analog transducers with embedded microcontrollers and cloud telemetry systems.
                </p>

                {/* Structured Responsibilities */}
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold mb-3.5 sm:mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Core Technical Responsibilities:</span>
                  </h4>
                  <ul className="space-y-3 text-xs sm:text-sm text-zinc-300 max-w-[65ch]">
                    {responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <ChevronRight className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column (5 cols): Measurable Impact & Technology Domains */}
              <div className="xl:col-span-5 space-y-6 sm:space-y-7 xl:border-l xl:border-zinc-800/80 xl:pl-10">
                {/* Measurable Impact & Verification Highlights */}
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold mb-3.5 sm:mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>Measurable Impact &amp; Hardware Verification:</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-3.5 sm:gap-4">
                    {impacts.map((imp, idx) => (
                      <div
                        key={idx}
                        className={`rounded-xl border ${imp.border} ${imp.bg} p-4 sm:p-4.5 space-y-2 transition-all duration-200 ${imp.shadow}`}
                      >
                        <div className="flex items-baseline justify-between">
                          <div className={`font-mono text-sm sm:text-base font-bold ${imp.text}`}>
                            {imp.metric}
                          </div>
                          <div className="text-[10px] font-mono text-zinc-500 uppercase">
                            Hardware Verified
                          </div>
                        </div>
                        <div className="text-xs sm:text-sm font-semibold text-zinc-100">
                          {imp.title}
                        </div>
                        <div className="text-[11px] sm:text-xs text-zinc-300 leading-relaxed">
                          {imp.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color-Categorized Technology Stack Chips */}
                <div className="pt-4 border-t border-zinc-800/70 space-y-3">
                  <span className="text-[11px] font-mono text-zinc-400 block font-semibold uppercase tracking-wider">
                    Technology Domains Utilized:
                  </span>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                    <span className="text-[11px] font-mono text-emerald-400 mr-1">Firmware:</span>
                    {firmwareTech.map((tech) => (
                      <Badge key={tech} variant="emerald" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    <span className="text-[11px] font-mono text-cyan-400 ml-2 mr-1">Protocols:</span>
                    {protocolTech.map((tech) => (
                      <Badge key={tech} variant="cyan" size="sm">
                        {tech}
                      </Badge>
                    ))}
                    <span className="text-[11px] font-mono text-violet-400 ml-2 mr-1">UI &amp; Storage:</span>
                    {uiStorageTech.map((tech) => (
                      <Badge key={tech} variant="violet" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Item 2: Education Milestone */}
          <article className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm hover:border-zinc-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="h-12 w-12 rounded-xl border border-blue-900/60 bg-blue-950/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5 shadow-[0_0_15px_-4px_rgba(59,130,246,0.25)]">
                  <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">
                    Sister Nivedita University
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-blue-300 mt-0.5">
                    B.Tech / Undergraduate Engineering Degree Program
                  </p>
                  <p className="text-xs text-zinc-400 flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-zinc-500" />
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-900/60 bg-blue-950/40 text-xs font-mono text-blue-300">
                  <Calendar className="h-3.5 w-3.5 text-blue-400" />
                  2021 – 2025
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-5 pt-5 border-t border-zinc-800/60">
              Rigorous technical coursework focusing on electronic circuits, microcontroller architectures, real-time operating systems, digital communication networks, and software engineering principles.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
