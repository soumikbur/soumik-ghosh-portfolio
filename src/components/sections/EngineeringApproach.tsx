import React from "react";
import { Container } from "../ui/Container";
import { ENGINEERING_APPROACH } from "@/lib/data/projects";

const PHASE_COLORS = [
  { text: "text-emerald-400", dot: "bg-emerald-400", hover: "hover:border-emerald-600/80 hover:shadow-[0_4px_24px_-6px_rgba(16,185,129,0.18)]" },
  { text: "text-cyan-400", dot: "bg-cyan-400", hover: "hover:border-cyan-600/80 hover:shadow-[0_4px_24px_-6px_rgba(6,182,212,0.18)]" },
  { text: "text-blue-400", dot: "bg-blue-400", hover: "hover:border-blue-600/80 hover:shadow-[0_4px_24px_-6px_rgba(59,130,246,0.18)]" },
  { text: "text-violet-400", dot: "bg-violet-400", hover: "hover:border-violet-600/80 hover:shadow-[0_4px_24px_-6px_rgba(139,92,246,0.18)]" },
  { text: "text-teal-400", dot: "bg-teal-400", hover: "hover:border-teal-600/80 hover:shadow-[0_4px_24px_-6px_rgba(20,184,166,0.18)]" },
  { text: "text-amber-400", dot: "bg-amber-400", hover: "hover:border-amber-600/80 hover:shadow-[0_4px_24px_-6px_rgba(245,158,11,0.18)]" },
];

export function EngineeringApproach() {
  return (
    <section id="methodology" className="py-14 sm:py-24 border-b border-zinc-800/80 bg-zinc-950">
      <Container size="default">
        {/* Section Header with Numbering */}
        <div className="mb-10 sm:mb-14">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-gradient-emerald-cyan">
            Methodology &amp; Standards
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1.5">
            Engineering Approach &amp; Reliability
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            I engineer embedded and full-stack systems with end-to-end operational accountability. A software application is only as resilient as its hardware boundaries, data model, and transaction guarantees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ENGINEERING_APPROACH.map((step, idx) => {
            const phaseColor = PHASE_COLORS[idx % PHASE_COLORS.length];
            return (
              <div
                key={idx}
                className={`group rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 sm:p-6 flex flex-col justify-between ${phaseColor.hover} transition-all duration-200 hover:-translate-y-0.5`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3 border-b border-zinc-800/70 pb-2.5">
                    <span className={`font-mono text-xs font-bold ${phaseColor.text}`}>
                      PHASE {step.step}
                    </span>
                    <span className={`h-1.5 w-1.5 rounded-full ${phaseColor.dot}`} />
                  </div>
                  <h3 className="text-base font-bold text-zinc-100 group-hover:text-white transition-colors mb-2">
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
