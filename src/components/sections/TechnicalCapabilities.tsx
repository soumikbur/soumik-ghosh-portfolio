import React from "react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { TECHNICAL_CAPABILITIES } from "@/lib/data/projects";

export function TechnicalCapabilities() {
  const groups = [
    { title: "Embedded & Systems", items: TECHNICAL_CAPABILITIES.embedded },
    { title: "Backend & API Systems", items: TECHNICAL_CAPABILITIES.backend },
    { title: "Frontend Engineering", items: TECHNICAL_CAPABILITIES.frontend },
    { title: "Data Storage & Relational Logic", items: TECHNICAL_CAPABILITIES.data },
    { title: "Reliability & Architecture", items: TECHNICAL_CAPABILITIES.engineering }
  ];

  return (
    <section id="technical-capabilities" className="py-20 sm:py-28 border-b border-zinc-800/80 bg-zinc-950">
      <Container size="default">
        <SectionHeader
          badge="Verified Stack"
          title="Technical Competencies"
          description="Technologies and domains demonstrated across embedded systems, full-stack business applications, backend APIs, and transactional databases."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {groups.map((group, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-4"
            >
              <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 border-b border-zinc-800 pb-2.5">
                {group.title}
              </h3>

              <div className="space-y-3">
                {group.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="space-y-0.5">
                    <div className="text-sm font-medium text-zinc-100">
                      {item.name}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400">
                      {item.note}
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
