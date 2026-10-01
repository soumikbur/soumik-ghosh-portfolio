import { ShieldCheck } from "lucide-react";

interface Workflow {
  title: string;
  stepList: string[];
  technicalEnforcement: string;
}

interface WorkflowSectionProps {
  workflows: Workflow[];
}

export function WorkflowSection({ workflows }: WorkflowSectionProps) {
  return (
    <div className="space-y-6">
      {workflows.map((wf, idx) => (
        <div
          key={idx}
          className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 sm:p-7 space-y-4"
        >
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">
              WORKFLOW 0{idx + 1}
            </span>
            <span className="text-zinc-600 font-mono text-xs">•</span>
            <h4 className="text-base font-semibold text-zinc-100">{wf.title}</h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            {wf.stepList.map((step, sIdx) => (
              <div
                key={sIdx}
                className="flex items-start gap-2.5 rounded border border-zinc-800/80 bg-zinc-950/60 p-3 text-xs text-zinc-300"
              >
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-zinc-900 font-mono text-[10px] text-zinc-400 border border-zinc-750">
                  {sIdx + 1}
                </div>
                <span className="leading-relaxed">{step}</span>
              </div>
            ))}
          </div>

          <div className="rounded border border-emerald-900/50 bg-emerald-950/20 p-3 text-xs font-mono text-emerald-300 flex items-start gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-emerald-200 font-semibold uppercase text-[10px] tracking-wider block mb-0.5">
                Technical Enforcement Guarantee:
              </span>
              <span>{wf.technicalEnforcement}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
