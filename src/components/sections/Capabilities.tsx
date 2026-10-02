import React from "react";
import {
  LayoutDashboard,
  Building2,
  Boxes,
  Server,
  Database,
  ShieldCheck,
  FileText,
  Cpu,
  Layers,
  Terminal
} from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Card } from "../ui/card";
import { CAPABILITIES } from "@/lib/data/projects";

export function Capabilities() {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="h-5 w-5 text-zinc-300" />,
    Layers: <Layers className="h-5 w-5 text-zinc-300" />,
    LayoutDashboard: <LayoutDashboard className="h-5 w-5 text-zinc-300" />,
    Building2: <Building2 className="h-5 w-5 text-zinc-300" />,
    Boxes: <Boxes className="h-5 w-5 text-zinc-300" />,
    Server: <Server className="h-5 w-5 text-zinc-300" />,
    Database: <Database className="h-5 w-5 text-zinc-300" />,
    ShieldCheck: <ShieldCheck className="h-5 w-5 text-zinc-300" />,
    FileText: <FileText className="h-5 w-5 text-zinc-300" />,
    Terminal: <Terminal className="h-5 w-5 text-zinc-300" />
  };

  return (
    <section id="capabilities" className="py-14 sm:py-28 border-b border-zinc-800/80 bg-zinc-950">
      <Container size="default">
        <SectionHeader
          badge="Engineering Scope"
          title="What I Build"
          description="Practical, production-oriented software systems where data accuracy, transaction integrity, and deterministic execution are critical."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CAPABILITIES.map((cap, i) => (
            <Card key={i} hoverable className="flex flex-col justify-between">
              <div>
                <div className="flex h-10 w-10 items-center justify-center rounded border border-zinc-750 bg-zinc-900 mb-4">
                  {iconMap[cap.icon] || <Terminal className="h-5 w-5 text-zinc-300" />}
                </div>
                <h3 className="text-base font-semibold text-zinc-100 mb-2">
                  {cap.title}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                  {cap.description}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 font-mono text-[11px] text-zinc-400 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>{cap.evidence}</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
