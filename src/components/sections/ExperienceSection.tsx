import React from "react";
import { Briefcase, MapPin, ChevronRight, GraduationCap, Calendar } from "lucide-react";
import { Container } from "../ui/Container";
import { TiltCard } from "../ui/TiltCard";

export function ExperienceSection() {
  const responsibilities = [
    "Engineered multi-tasking FreeRTOS firmware separating sensor acquisition, control loops, and cloud reporting into deterministic priority tasks.",
    "Interfaced precision analog front-end circuitry and signal conditioning for industrial pressure transducers and liquid volume monitoring.",
    "Implemented master-mode RS-485 Modbus RTU fieldbus communication protocols with CRC-16 frame integrity verification.",
    "Constructed resilient non-blocking AT command parsers for Quectel 4G LTE modems with automated socket reconnection state machines.",
    "Developed cross-platform desktop SCADA monitoring stations in Qt 6 / QML with custom gauges, alerts, and historical telemetry logging.",
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-28 xl:py-32 border-b border-zinc-800/80 bg-transparent relative overflow-hidden">
      <Container size="default">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-gradient-emerald-cyan">
            02 · Experience
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2 sm:mt-2.5">
            Where I&apos;ve Engineered Systems
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2.5 sm:mt-3 max-w-2xl leading-relaxed">
            Professional engineering experience in real-time firmware, industrial SCADA, and connected IoT telemetry.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8 sm:space-y-10">
          {/* Item 1: Panorama Electronics Pvt. Ltd. */}
          <TiltCard
            as="article"
            accentGlow="emerald"
            maxTilt={1.5}
            scale={1.005}
            className="rounded-2xl border border-zinc-800/90 bg-zinc-900/50 p-6 sm:p-8 lg:p-10 backdrop-blur-sm shadow-xl space-y-6 hover:border-zinc-700 transition-[border-color,background-color,box-shadow]"
          >
            {/* Header / Role Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-zinc-800 pb-5">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="h-11 w-11 rounded-xl border border-emerald-800/80 bg-emerald-950/50 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                  <Briefcase className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                    Panorama Electronics Pvt. Ltd.
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className="text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider text-emerald-400">
                      Embedded Software Developer
                    </span>
                    <span className="text-zinc-600 hidden sm:inline">•</span>
                    <span className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <MapPin className="h-3 w-3 text-zinc-500" />
                      Kolkata, India
                    </span>
                  </div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/80 text-xs font-mono text-emerald-300 font-semibold shrink-0">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Current Role
              </span>
            </div>

            {/* Scope Summary */}
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-[65ch]">
              Leading firmware architecture and industrial IoT development for critical telemetry nodes, SCADA desktop monitoring stations, and connected field controllers.
            </p>

            {/* Responsibilities — the unique, non-duplicated content */}
            <div>
              <h4 className="text-xs font-mono text-zinc-500 uppercase tracking-wider font-semibold mb-3 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Core Responsibilities</span>
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300 max-w-[65ch]">
                {responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <ChevronRight className="h-4 w-4 text-emerald-400/70 shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </TiltCard>

          {/* Item 2: Education Milestone */}
          <article className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 sm:p-8 backdrop-blur-sm hover:border-zinc-700 transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="h-11 w-11 rounded-xl border border-blue-900/60 bg-blue-950/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white">
                    Sister Nivedita University
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-blue-300 mt-0.5">
                    B.Tech / Undergraduate Engineering Degree Program
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-blue-900/60 bg-blue-950/40 text-xs font-mono text-blue-300 shrink-0">
                <Calendar className="h-3.5 w-3.5 text-blue-400" />
                2021 – 2025
              </span>
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
