import React from "react";
import { Layers, ArrowDown } from "lucide-react";

interface Layer {
  layer: string;
  technologies: string;
  responsibility: string;
}

interface ArchitectureDiagramProps {
  overview: string;
  layers: Layer[];
}

export function ArchitectureDiagram({ overview, layers }: ArchitectureDiagramProps) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 backdrop-blur-sm space-y-6">
      <div className="flex items-center gap-2 text-zinc-300 font-mono text-xs uppercase tracking-wider">
        <Layers className="h-4 w-4 text-emerald-400" />
        <span>System Layered Architecture</span>
      </div>

      <p className="text-sm text-zinc-300 leading-relaxed max-w-3xl">
        {overview}
      </p>

      {/* Layer Stack */}
      <div className="space-y-3 font-mono text-xs">
        {layers.map((item, idx) => (
          <React.Fragment key={idx}>
            <div className="rounded-lg border border-zinc-800 bg-zinc-950/80 p-4 transition-colors hover:border-zinc-700">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-850 pb-2 mb-2">
                <span className="font-semibold text-zinc-100 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  {item.layer}
                </span>
                <span className="text-[11px] text-zinc-400 font-normal">
                  {item.technologies}
                </span>
              </div>
              <p className="text-zinc-400 text-xs font-sans leading-relaxed">
                {item.responsibility}
              </p>
            </div>
            {idx < layers.length - 1 && (
              <div className="flex justify-center text-zinc-600">
                <ArrowDown className="h-4 w-4" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
