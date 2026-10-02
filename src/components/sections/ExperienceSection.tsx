import React from "react";
import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight, GraduationCap } from "lucide-react";
import { Container } from "../ui/Container";
import { Badge } from "../ui/Badge";

export function ExperienceSection() {
  const panoramaTech = [
    "STM32 (Cortex-M)",
    "ESP32-S3",
    "FreeRTOS",
    "C++20",
    "RS-485 Modbus RTU",
    "Quectel 4G LTE",
    "Qt 6 / QML",
    "MQTT TLS 1.2",
    "SPI Flash / FATFS",
  ];

  const responsibilities = [
    "Engineered multi-tasking FreeRTOS firmware separating sensor acquisition, control loops, and cloud reporting into deterministic priority tasks.",
    "Interfaced precision analog front-end circuitry and signal conditioning for industrial pressure transducers and liquid volume monitoring.",
    "Implemented master-mode RS-485 Modbus RTU fieldbus communication protocols with CRC-16 frame integrity verification.",
    "Constructed resilient non-blocking AT command parsers for Quectel 4G LTE modems with automated socket reconnection state machines.",
    "Developed cross-platform desktop SCADA monitoring stations in Qt 6 / QML with custom gauges, alerts, and historical telemetry logging.",
  ];

  const impacts = [
    {
      metric: "Sub-10ms",
      title: "Deterministic Sensor Loop",
      desc: "Maintained microsecond-level hardware timer interrupt timing for high-frequency transducer polling.",
    },
    {
      metric: "CRC-16",
      title: "Fieldbus Integrity",
      desc: "Delivered error-free Modbus serial frames across noisy railway and industrial substation environments.",
    },
    {
      metric: "LTE Cat-1",
      title: "Autonomous Telemetry",
      desc: "Verified long-duration autonomous cloud telemetry reporting with microampere sleep modes on hardware benches.",
    },
  ];

  return (
    <section id="experience" className="py-14 sm:py-24 border-b border-zinc-800/80 bg-zinc-950">
      <Container size="default">
        {/* Section Header with Numbering */}
        <div className="mb-10 sm:mb-14">
          <p className="font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase">
            02 · Experience
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1.5">
            Where I&apos;ve Engineered Systems
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Verified professional engineering experience in real-time firmware, industrial SCADA, and connected IoT telemetry.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8">
          {/* Item 1: Panorama Electronics Pvt. Ltd. */}
          <article className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5 sm:p-8 backdrop-blur-sm shadow-xl space-y-6">
            {/* Header / Role Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800 pb-5">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg border border-zinc-700 bg-zinc-900 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Panorama Electronics Pvt. Ltd.
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                      Embedded Software Developer
                    </span>
                    <span className="text-zinc-600 hidden sm:inline">•</span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-zinc-500" />
                      Kolkata, West Bengal, India
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-800/80 text-xs font-mono text-emerald-400 font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Current Role
                </span>
              </div>
            </div>

            {/* Scope Summary */}
            <p className="text-sm text-zinc-300 leading-relaxed">
              Leading firmware architecture and industrial IoT development for critical telemetry nodes, SCADA desktop monitoring stations, and connected field controllers. Bridging physical analog transducers with embedded microcontrollers and cloud telemetry systems.
            </p>

            {/* Structured Responsibilities */}
            <div>
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold mb-3">
                Core Technical Responsibilities:
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                {responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <ChevronRight className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Measurable Impact & Verification Highlights */}
            <div>
              <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold mb-3">
                Measurable Impact &amp; Hardware Verification:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {impacts.map((imp, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-3.5 space-y-1"
                  >
                    <div className="font-mono text-sm font-bold text-emerald-400">
                      {imp.metric}
                    </div>
                    <div className="text-xs font-semibold text-zinc-200">
                      {imp.title}
                    </div>
                    <div className="text-[11px] text-zinc-400 leading-relaxed">
                      {imp.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology Stack Chips */}
            <div className="pt-2 border-t border-zinc-800/70">
              <span className="text-[11px] font-mono text-zinc-500 block mb-2">
                TECHNOLOGIES UTILIZED:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {panoramaTech.map((tech) => (
                  <Badge key={tech} variant="neutral" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </article>

          {/* Item 2: Education Milestone */}
          <article className="rounded-xl border border-zinc-800/80 bg-zinc-900/30 p-5 sm:p-6 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-lg border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-400 shrink-0 mt-0.5">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Sister Nivedita University
                  </h3>
                  <p className="text-xs font-mono text-zinc-400">
                    B.Tech / Undergraduate Engineering Degree Program
                  </p>
                  <p className="text-xs text-zinc-500 flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3" />
                    Kolkata, West Bengal, India
                  </p>
                </div>
              </div>

              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-zinc-800 bg-zinc-950 text-xs font-mono text-zinc-300">
                  <Calendar className="h-3.5 w-3.5 text-zinc-500" />
                  2021 – 2025
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mt-4 pt-4 border-t border-zinc-800/60">
              Rigorous technical coursework focusing on electronic circuits, microcontroller architectures, real-time operating systems, digital communication networks, and software engineering principles.
            </p>
          </article>
        </div>
      </Container>
    </section>
  );
}
