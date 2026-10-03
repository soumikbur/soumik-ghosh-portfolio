import React from "react";
import { Container } from "../ui/Container";
import { ENGINEERING_APPROACH } from "@/lib/data/projects";

const PHASE_COLORS = [
  { text: "text-emerald-400", dot: "bg-emerald-400", line: "from-emerald-500/40" },
  { text: "text-cyan-400", dot: "bg-cyan-400", line: "from-cyan-500/40" },
  { text: "text-blue-400", dot: "bg-blue-400", line: "from-blue-500/40" },
  { text: "text-violet-400", dot: "bg-violet-400", line: "from-violet-500/40" },
  { text: "text-teal-400", dot: "bg-teal-400", line: "from-teal-500/40" },
  { text: "text-amber-400", dot: "bg-amber-400", line: "from-amber-500/40" },
];

export function EngineeringApproach() {
  return (
    <section id="methodology" className="py-16 sm:py-24 lg:py-28 xl:py-32 border-b border-zinc-800/80 bg-transparent">
      <Container size="default">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-gradient-emerald-cyan">
            Methodology
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2 sm:mt-2.5">
            Engineering Approach
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2.5 sm:mt-3 max-w-2xl leading-relaxed">
            End-to-end operational accountability — from hardware boundaries to data model guarantees.
          </p>
        </div>

        {/* Process flow — timeline on mobile, horizontal grid on desktop */}
        <div className="relative">
          {/* Desktop: 3-column compact grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800/40 rounded-2xl overflow-hidden border border-zinc-800/80">
            {ENGINEERING_APPROACH.map((step, idx) => {
              const phaseColor = PHASE_COLORS[idx % PHASE_COLORS.length];
              return (
                <div
                  key={idx}
                  className="bg-zinc-950/80 p-5 sm:p-6 flex flex-col gap-2.5 hover:bg-zinc-900/60 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2 w-2 rounded-full ${phaseColor.dot} shrink-0`} />
                    <span className={`font-mono text-[11px] font-bold uppercase tracking-wider ${phaseColor.text}`}>
                      Phase {step.step}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-zinc-100">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
