import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { ENGINEERING_APPROACH } from "@/lib/data/projects";

export function EngineeringApproach() {
  return (
    <section id="approach" className="py-20 sm:py-28 border-b border-zinc-800/80 bg-zinc-950">
      <Container size="default">
        <SectionHeader
          badge="Methodology"
          title="Engineering Approach"
          description="I build full-stack systems with end-to-end operational accountability. A software application is only as resilient as its data model and transaction guarantees."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ENGINEERING_APPROACH.map((step, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="font-mono text-xs font-semibold text-emerald-400 mb-3">
                  STEP {step.step}
                </div>
                <h3 className="text-base font-semibold text-zinc-100 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
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
