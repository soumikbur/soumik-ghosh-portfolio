"use client";

import React, { useState } from "react";
import { Cpu, Radio, Activity, Monitor, Network, Terminal, CheckCircle2 } from "lucide-react";

interface PipelineNode {
  id: string;
  step: string;
  label: string;
  sub: string;
  tech: string;
  icon: React.ReactNode;
}

const PIPELINE_NODES: PipelineNode[] = [
  {
    id: "sensor",
    step: "01",
    label: "Sensor & ADC",
    sub: "Analog Front-End",
    tech: "4-20mA · I2C · SPI",
    icon: <Activity className="h-4 w-4 text-emerald-400" />,
  },
  {
    id: "mcu",
    step: "02",
    label: "MCU & RTOS",
    sub: "Real-Time Kernel",
    tech: "STM32 · ESP32-S3",
    icon: <Cpu className="h-4 w-4 text-cyan-400" />,
  },
  {
    id: "bus",
    step: "03",
    label: "Industrial Bus",
    sub: "Fieldbus Protocol",
    tech: "RS-485 Modbus RTU",
    icon: <Network className="h-4 w-4 text-blue-400" />,
  },
  {
    id: "telemetry",
    step: "04",
    label: "Cellular & Cloud",
    sub: "Encrypted Stream",
    tech: "Quectel 4G · MQTT TLS",
    icon: <Radio className="h-4 w-4 text-purple-400" />,
  },
  {
    id: "scada",
    step: "05",
    label: "SCADA & Console",
    sub: "Operational UI",
    tech: "Qt 6 QML · Web Dash",
    icon: <Monitor className="h-4 w-4 text-emerald-400" />,
  },
];

const FIRMWARE_BOOT_LOGS = [
  { time: "0.0012s", scope: "BOOT", message: "STM32F411 / ESP32-S3 Dual-Core MCU initialized @ 240MHz", ok: true },
  { time: "0.0045s", scope: "RTOS", message: "FreeRTOS v10.4.3 scheduler started (3 priority tasks active)", ok: true },
  { time: "0.0089s", scope: "BUS ", message: "RS-485 Modbus RTU master initialized @ 9600 baud, 8N1", ok: true },
  { time: "0.0152s", scope: "CELL", message: "Quectel 4G LTE Cat-1 attached · MQTT over TLS 1.2 connected", ok: true },
  { time: "0.0210s", scope: "DIAG", message: "Hardware self-tests passed [SENSORS=OK, CRC=VALID, FAULTS=0]", ok: true },
];

export function TelemetryPipeline() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "logs">("pipeline");

  return (
    <div className="w-full rounded-xl border border-zinc-800 bg-zinc-950/90 shadow-2xl overflow-hidden backdrop-blur-md">
      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 px-3 sm:px-4 py-2.5 bg-zinc-900/80 gap-2">
        <div className="flex items-center gap-3">
          {/* Window dots */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 border border-red-600/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 border border-amber-600/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
          </div>
          <span className="font-mono text-xs text-zinc-400 font-medium">
            soumik@telemetry-engine: ~/embedded-stack
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* View Toggles */}
          <div className="flex items-center rounded border border-zinc-800 bg-zinc-950 p-0.5 text-[11px] font-mono">
            <button
              type="button"
              onClick={() => setActiveTab("pipeline")}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                activeTab === "pipeline"
                  ? "bg-zinc-800 text-zinc-100 font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Pipeline
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("logs")}
              className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                activeTab === "logs"
                  ? "bg-zinc-800 text-zinc-100 font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Boot Log
            </button>
          </div>

          {/* System status pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/80 text-[10px] font-mono text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYS_OK · TESTS PASS</span>
          </div>
        </div>
      </div>

      {/* Body: Pipeline Flow or Boot Log */}
      <div className="p-3 sm:p-5">
        {activeTab === "pipeline" ? (
          <div>
            <div className="flex items-center justify-between mb-3 text-[11px] font-mono text-zinc-400">
              <span className="text-zinc-400 font-semibold uppercase tracking-wider">
                Deterministic Hardware-to-Cloud Telemetry Architecture
              </span>
              <span className="hidden md:inline text-emerald-400">
                // Continuous telemetry loop: 100ms cycle
              </span>
            </div>

            {/* Horizontal Pipeline Grid for Desktop, Vertical Flow for Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 relative">
              {PIPELINE_NODES.map((node, i) => (
                <div
                  key={node.id}
                  className="group relative rounded-lg border border-zinc-800/90 bg-zinc-900/60 p-3 hover:border-zinc-700 hover:bg-zinc-900 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-zinc-950 border border-zinc-800">
                          {node.icon}
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500 font-bold">
                          [{node.step}]
                        </span>
                      </div>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    </div>
                    <div className="text-xs font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                      {node.label}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 mt-0.5">
                      {node.sub}
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-zinc-800/60">
                    <span className="text-[10px] font-mono text-zinc-400 block truncate">
                      {node.tech}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Firmware Boot Log Terminal View */
          <div className="font-mono text-xs space-y-1.5 py-1 text-zinc-300 overflow-x-auto">
            <div className="text-zinc-500 text-[11px] pb-1 border-b border-zinc-800/80 mb-2 flex items-center justify-between">
              <span>// Target: STM32F411RE &amp; ESP32-S3 Dual-Core FreeRTOS Node</span>
              <span className="text-emerald-400">BUILD SUCCESS</span>
            </div>
            {FIRMWARE_BOOT_LOGS.map((log, index) => (
              <div key={index} className="flex items-start gap-2 whitespace-nowrap">
                <span className="text-zinc-500">[{log.time}]</span>
                <span className="text-emerald-400 font-semibold">{log.scope}:</span>
                <span className="text-zinc-200">{log.message}</span>
                <span className="text-emerald-400 ml-auto hidden sm:inline">✓</span>
              </div>
            ))}
            <div className="pt-2 text-zinc-500 text-[11px] flex items-center gap-1.5">
              <span className="text-emerald-400">soumik@telemetry-engine:~$</span>
              <span className="h-3 w-1.5 bg-emerald-400 animate-pulse" />
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="border-t border-zinc-800/80 px-3 sm:px-4 py-2 bg-zinc-950 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] font-mono text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="h-3 w-3 shrink-0" />
            <span>Firmware: FreeRTOS 10.4.3</span>
          </span>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <span className="hidden sm:inline">Protocol: Modbus RTU / MQTT TLS</span>
        </div>
        <div className="flex items-center gap-2">
          <span>Target Architecture: ARM Cortex-M4 &amp; Xtensa LX7</span>
        </div>
      </div>
    </div>
  );
}
