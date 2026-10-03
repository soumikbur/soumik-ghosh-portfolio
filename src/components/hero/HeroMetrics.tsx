import React from "react";

interface MetricCard {
  value: string;
  label: string;
  colorClass: {
    text: string;
    border: string;
    stroke: string;
  };
}

const METRICS: MetricCard[] = [
  {
    value: "Sub-10ms",
    label: "Deterministic sensor loop",
    colorClass: {
      text: "text-emerald-400",
      border: "border-emerald-900/60",
      stroke: "#10b981",
    },
  },
  {
    value: "CRC-16",
    label: "Fieldbus integrity",
    colorClass: {
      text: "text-cyan-400",
      border: "border-cyan-900/60",
      stroke: "#06b6d4",
    },
  },
  {
    value: "TLS 1.2",
    label: "Encrypted cloud telemetry",
    colorClass: {
      text: "text-violet-400",
      border: "border-violet-900/60",
      stroke: "#a78bfa",
    },
  },
  {
    value: "8 Systems",
    label: "Verified production deploys",
    colorClass: {
      text: "text-amber-400",
      border: "border-amber-900/60",
      stroke: "#fbbf24",
    },
  },
];

interface HeroMetricsProps {
  layout?: "banner" | "grid2x2";
  className?: string;
}

export function HeroMetrics({ className = "" }: HeroMetricsProps) {
  return (
    <div className={`pt-8 sm:pt-10 border-t border-zinc-800/80 relative ${className}`}>
      <div className="flex items-center justify-between mb-5 sm:mb-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gradient-emerald-cyan">
          Engineering Benchmarks
        </p>
        <span className="hidden sm:inline font-mono text-[11px] text-zinc-500">
          {"// Hardware verified"}
        </span>
      </div>

      {/* Compact 4-column metric strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {METRICS.map((metric, i) => (
          <div
            key={i}
            className={`rounded-xl border ${metric.colorClass.border} bg-zinc-900/40 p-4 sm:p-5 transition-colors duration-200 hover:bg-zinc-900/70`}
          >
            <div className={`text-xl sm:text-2xl font-extrabold font-mono tracking-tight ${metric.colorClass.text}`}>
              {metric.value}
            </div>
            <p className="text-[11px] sm:text-xs text-zinc-400 mt-1.5 leading-snug">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
