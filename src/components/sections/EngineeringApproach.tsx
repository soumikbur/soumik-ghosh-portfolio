import React from "react";
import { Container } from "../ui/Container";
import { ENGINEERING_APPROACH } from "@/lib/data/projects";

const PHASE_COLORS = [
  {
    text: "text-emerald-400",
    dot: "bg-emerald-400",
    topBorder: "border-t-emerald-500/80",
    hoverBorder: "hover:border-emerald-500/90",
    hoverShadow: "hover:shadow-[0_4px_24px_-4px_rgba(16,185,129,0.20)]",
  },
  {
    text: "text-cyan-400",
    dot: "bg-cyan-400",
    topBorder: "border-t-cyan-500/80",
    hoverBorder: "hover:border-cyan-500/90",
    hoverShadow: "hover:shadow-[0_4px_24px_-4px_rgba(6,182,212,0.20)]",
  },
  {
    text: "text-blue-400",
    dot: "bg-blue-400",
    topBorder: "border-t-blue-500/80",
    hoverBorder: "hover:border-blue-500/90",
    hoverShadow: "hover:shadow-[0_4px_24px_-4px_rgba(59,130,246,0.20)]",
  },
  {
    text: "text-violet-400",
    dot: "bg-violet-400",
    topBorder: "border-t-violet-500/80",
    hoverBorder: "hover:border-violet-500/90",
    hoverShadow: "hover:shadow-[0_4px_24px_-4px_rgba(139,92,246,0.20)]",
  },
  {
    text: "text-teal-400",
    dot: "bg-teal-400",
    topBorder: "border-t-teal-500/80",
    hoverBorder: "hover:border-teal-500/90",
    hoverShadow: "hover:shadow-[0_4px_24px_-4px_rgba(20,184,166,0.20)]",
  },
  {
    text: "text-amber-400",
    dot: "bg-amber-400",
    topBorder: "border-t-amber-500/80",
    hoverBorder: "hover:border-amber-500/90",
    hoverShadow: "hover:shadow-[0_4px_24px_-4px_rgba(245,158,11,0.20)]",
  },
];

export function EngineeringApproach() {
  return (
    <section id="approach" className="py-16 sm:py-24 lg:py-28 xl:py-32 2xl:py-36 border-b border-zinc-800/80 bg-transparent relative overflow-hidden">
      <div id="methodology" className="absolute -top-20" aria-hidden="true" />
      <Container size="default">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-gradient-emerald-cyan">
            Methodology &amp; Standards
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2 sm:mt-2.5">
            Engineering Approach &amp; Reliability
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2.5 sm:mt-3 max-w-2xl leading-relaxed">
            I engineer embedded and full-stack systems with end-to-end operational accountability. A software application is only as resilient as its hardware boundaries, data model, and transaction guarantees.
          </p>
        </div>

        {/* 6-Phase Connected Engineering Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {ENGINEERING_APPROACH.map((step, idx) => {
            const phaseColor = PHASE_COLORS[idx % PHASE_COLORS.length];
            return (
              <div
                key={idx}
                className={`group rounded-2xl border border-zinc-800/80 border-t-2 ${phaseColor.topBorder} bg-zinc-900/40 p-6 sm:p-7 lg:p-8 flex flex-col justify-between backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 ${phaseColor.hoverBorder} ${phaseColor.hoverShadow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5 border-b border-zinc-800/70 pb-3">
                    <span className={`font-mono text-xs font-bold uppercase tracking-wider ${phaseColor.text}`}>
                      Phase {step.step}
                    </span>
                    <span className={`h-1.5 w-1.5 rounded-full ${phaseColor.dot}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-100 group-hover:text-white transition-colors mb-2.5 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
