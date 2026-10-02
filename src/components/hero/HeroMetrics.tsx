import React from "react";

interface MetricCard {
  context: string;
  value: string;
  label: string;
  sparkline: string;
  gradientId: string;
}

const METRICS: MetricCard[] = [
  {
    context: "Panorama Electronics · Embedded Firmware",
    value: "Sub-10ms",
    label:
      "Deterministic sensor acquisition cycle time implemented with FreeRTOS multi-priority tasks and hardware timer interrupts for industrial liquid level telemetry.",
    sparkline: "M2 24 L20 18 L38 20 L56 12 L74 15 L92 8 L110 10 L128 4",
    gradientId: "sg-emerald",
  },
  {
    context: "Substation Monitoring · Fieldbus Protocol",
    value: "CRC-16",
    label:
      "Integrity-verified RS-485 Modbus RTU master communication with zero undetected packet corruption across electrical substation noise environments.",
    sparkline: "M2 8 L20 12 L38 10 L56 18 L74 14 L92 22 L110 18 L128 26",
    gradientId: "sg-cyan",
  },
  {
    context: "Autonomous Nodes · Cellular Telemetry",
    value: "TLS 1.2",
    label:
      "Encrypted cloud transmission via Quectel 4G LTE with non-blocking AT command state machines and automated socket reconnection for remote installations.",
    sparkline: "M2 22 L20 20 L38 14 L56 16 L74 8 L92 12 L110 6 L128 4",
    gradientId: "sg-blue",
  },
  {
    context: "Production Portfolio · Complete Architecture",
    value: "8 Systems",
    label:
      "Verified engineering implementations spanning dual-core microcontroller firmware, industrial SCADA, double-entry inventory ledgers, and operations dashboards.",
    sparkline: "M2 26 L20 22 L38 24 L56 16 L74 18 L92 10 L110 8 L128 2",
    gradientId: "sg-emerald",
  },
];

export function HeroMetrics() {
  return (
    <div className="mt-12 sm:mt-16 pt-8 border-t border-zinc-800/80">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="font-mono text-xs text-emerald-400 font-semibold uppercase tracking-wider">
            Verified Engineering Impact &amp; Architecture
          </p>
          <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white mt-1">
            Production Reliability, Measured
          </h2>
        </div>
        <span className="hidden sm:inline font-mono text-xs text-zinc-500">
          // Fieldbus · Firmware · Telemetry
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {METRICS.map((metric, i) => (
          <div
            key={i}
            className="group rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-4 sm:p-5 backdrop-blur-sm hover:border-zinc-700 hover:bg-zinc-900/70 transition-all flex flex-col justify-between"
          >
            <div>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider block mb-2 line-clamp-1">
                {metric.context}
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                {metric.value}
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed mt-2.5">
                {metric.label}
              </p>
            </div>

            {/* Sparkline Visual */}
            <div className="mt-4 pt-3 border-t border-zinc-800/60">
              <svg
                className="w-full h-8 overflow-visible opacity-75 group-hover:opacity-100 transition-opacity"
                viewBox="0 0 130 30"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id={`sg-${i}`} x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
                <path
                  d={metric.sparkline}
                  fill="none"
                  stroke={`url(#sg-${i})`}
                  strokeWidth="2"
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
