import React from "react";

interface MetricCard {
  context: string;
  value: string;
  label: string;
  sparkline: string;
  colorClass: {
    text: string;
    badge: string;
    border: string;
    hover: string;
    stroke: string;
  };
}

const METRICS: MetricCard[] = [
  {
    context: "Panorama Electronics · Embedded Firmware",
    value: "Sub-10ms",
    label:
      "Deterministic sensor acquisition cycle time implemented with FreeRTOS multi-priority tasks and hardware timer interrupts for industrial liquid level telemetry.",
    sparkline: "M2 24 L20 18 L38 20 L56 12 L74 15 L92 8 L110 10 L128 4",
    colorClass: {
      text: "text-emerald-400 group-hover:text-emerald-300",
      badge: "text-emerald-400",
      border: "border-zinc-800/80 hover:border-emerald-700/80",
      hover: "hover:shadow-[0_4px_24px_-6px_rgba(16,185,129,0.2)]",
      stroke: "#10b981",
    },
  },
  {
    context: "Substation Monitoring · Fieldbus Protocol",
    value: "CRC-16",
    label:
      "Integrity-verified RS-485 Modbus RTU master communication with zero undetected packet corruption across electrical substation noise environments.",
    sparkline: "M2 8 L20 12 L38 10 L56 18 L74 14 L92 22 L110 18 L128 26",
    colorClass: {
      text: "text-cyan-400 group-hover:text-cyan-300",
      badge: "text-cyan-400",
      border: "border-zinc-800/80 hover:border-cyan-700/80",
      hover: "hover:shadow-[0_4px_24px_-6px_rgba(6,182,212,0.2)]",
      stroke: "#06b6d4",
    },
  },
  {
    context: "Autonomous Nodes · Cellular Telemetry",
    value: "TLS 1.2",
    label:
      "Encrypted cloud transmission via Quectel 4G LTE with non-blocking AT command state machines and automated socket reconnection for remote installations.",
    sparkline: "M2 22 L20 20 L38 14 L56 16 L74 8 L92 12 L110 6 L128 4",
    colorClass: {
      text: "text-violet-400 group-hover:text-violet-300",
      badge: "text-violet-400",
      border: "border-zinc-800/80 hover:border-violet-700/80",
      hover: "hover:shadow-[0_4px_24px_-6px_rgba(139,92,246,0.2)]",
      stroke: "#a78bfa",
    },
  },
  {
    context: "Production Portfolio · Complete Architecture",
    value: "8 Systems",
    label:
      "Verified engineering implementations spanning dual-core microcontroller firmware, industrial SCADA, double-entry inventory ledgers, and operations dashboards.",
    sparkline: "M2 26 L20 22 L38 24 L56 16 L74 18 L92 10 L110 8 L128 2",
    colorClass: {
      text: "text-amber-400 group-hover:text-amber-300",
      badge: "text-amber-400",
      border: "border-zinc-800/80 hover:border-amber-700/80",
      hover: "hover:shadow-[0_4px_24px_-6px_rgba(245,158,11,0.2)]",
      stroke: "#fbbf24",
    },
  },
];

interface HeroMetricsProps {
  layout?: "banner" | "grid2x2";
  className?: string;
}

export function HeroMetrics({ layout = "banner", className = "" }: HeroMetricsProps) {
  if (layout === "grid2x2") {
    return (
      <div className={`h-full flex flex-col justify-between rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 sm:p-6 lg:p-7 xl:p-8 backdrop-blur-md shadow-2xl ${className}`}>
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-zinc-800/80">
          <div>
            <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-gradient-emerald-cyan">
              Engineering Benchmarks
            </p>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-0.5">
              Production Reliability, Measured
            </h3>
          </div>
          <span className="font-mono text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2.5 py-1 rounded flex items-center gap-1.5 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            4/4 BENCHMARKS PASS
          </span>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 flex-1">
          {METRICS.map((metric, i) => (
            <div
              key={i}
              className={`group rounded-xl border bg-zinc-950/70 p-3.5 sm:p-4.5 backdrop-blur-sm ${metric.colorClass.border} ${metric.colorClass.hover} transition-all duration-200 flex flex-col justify-between`}
            >
              <div>
                <span className={`font-mono text-[9px] uppercase tracking-wider block mb-1.5 truncate ${metric.colorClass.badge}`}>
                  {metric.context.split("·")[1]?.trim() || metric.context}
                </span>
                <div className={`text-xl sm:text-2xl font-extrabold font-mono tracking-tight transition-colors ${metric.colorClass.text}`}>
                  {metric.value}
                </div>
                <p className="text-[11px] text-zinc-300 leading-snug mt-2 line-clamp-3">
                  {metric.label}
                </p>
              </div>

              {/* Sparkline Waveform */}
              <div className="mt-3 pt-2.5 border-t border-zinc-800/60">
                <svg
                  className="w-full h-6 overflow-visible opacity-80 group-hover:opacity-100 transition-opacity"
                  viewBox="0 0 130 30"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d={metric.sparkline}
                    fill="none"
                    stroke={metric.colorClass.stroke}
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Verification Footer */}
        <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-400">
          <span>// Verified on hardware test benches &amp; active deployments</span>
          <span className="text-zinc-500">ISO/IEC Standardized</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`mt-14 sm:mt-18 pt-8 sm:pt-10 border-t border-zinc-800/80 relative ${className}`}>
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gradient-emerald-cyan">
            Verified Engineering Impact &amp; Architecture
          </p>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white mt-1">
            Production Reliability, Measured
          </h2>
        </div>
        <span className="hidden sm:inline font-mono text-xs text-zinc-400">
          // Fieldbus · Firmware · Telemetry
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {METRICS.map((metric, i) => (
          <div
            key={i}
            className={`group rounded-xl border bg-zinc-900/50 p-5 sm:p-6 backdrop-blur-sm ${metric.colorClass.border} ${metric.colorClass.hover} transition-all duration-200 flex flex-col justify-between`}
          >
            <div>
              <span className={`font-mono text-[10px] uppercase tracking-wider block mb-2 line-clamp-1 ${metric.colorClass.badge}`}>
                {metric.context}
              </span>
              <div className={`text-2xl sm:text-3xl font-extrabold font-mono tracking-tight transition-colors ${metric.colorClass.text}`}>
                {metric.value}
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed mt-2.5">
                {metric.label}
              </p>
            </div>

            {/* Sparkline Waveform Visual with Per-Card Gradient */}
            <div className="mt-4 pt-3 border-t border-zinc-800/60">
              <svg
                className="w-full h-8 overflow-visible opacity-80 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 130 30"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d={metric.sparkline}
                  fill="none"
                  stroke={metric.colorClass.stroke}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
