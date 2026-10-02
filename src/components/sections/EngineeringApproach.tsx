import React from "react";
import { Container } from "../ui/Container";
import { ENGINEERING_APPROACH } from "@/lib/data/projects";

export function EngineeringApproach() {
  return (
    <section id="methodology" className="py-14 sm:py-24 border-b border-zinc-800/80 bg-zinc-950">
      <Container size="default">
        {/* Section Header with Numbering */}
        <div className="mb-10 sm:mb-14">
          <p className="font-mono text-xs text-emerald-400 font-semibold tracking-wider uppercase">
            05 · Methodology
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1.5">
            Engineering Approach &amp; Reliability
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            I engineer embedded and full-stack systems with end-to-end operational accountability. A software application is only as resilient as its hardware boundaries, data model, and transaction guarantees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ENGINEERING_APPROACH.map((step, idx) => (
            <div
              key={idx}
              className="group rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-5 sm:p-6 flex flex-col justify-between hover:border-zinc-700 hover:bg-zinc-900/70 transition-all hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3 border-b border-zinc-800/70 pb-2.5">
                  <span className="font-mono text-xs font-bold text-emerald-400">
                    PHASE {step.step}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/60" />
                </div>
                <h3 className="text-base font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
