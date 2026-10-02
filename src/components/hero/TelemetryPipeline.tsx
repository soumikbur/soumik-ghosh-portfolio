"use client";

import React, { useState } from "react";
import { Cpu, Radio, Activity, Monitor, Network, CheckCircle2 } from "lucide-react";
import { TiltCard } from "../ui/TiltCard";

interface PipelineNode {
  id: string;
  step: string;
  label: string;
  sub: string;
  tech: string;
  icon: React.ReactNode;
  accentClass: {
    badge: string;
    border: string;
    hover: string;
    dot: string;
    text: string;
  };
}

const PIPELINE_NODES: PipelineNode[] = [
  {
    id: "sensor",
    step: "01",
    label: "Sensor & ADC",
    sub: "Analog Front-End",
    tech: "4-20mA · I2C · SPI",
    icon: <Activity className="h-4 w-4 text-emerald-400" />,
    accentClass: {
      badge: "bg-emerald-950/60 border-emerald-800/80 text-emerald-400",
      border: "border-emerald-900/60",
      hover: "hover:border-emerald-600 hover:shadow-[0_0_20px_-5px_rgba(16,185,129,0.25)]",
      dot: "bg-emerald-400",
      text: "group-hover:text-emerald-300",
    },
  },
  {
    id: "mcu",
    step: "02",
    label: "MCU & RTOS",
    sub: "Real-Time Kernel",
    tech: "STM32 · ESP32-S3",
    icon: <Cpu className="h-4 w-4 text-cyan-400" />,
    accentClass: {
      badge: "bg-cyan-950/60 border-cyan-800/80 text-cyan-400",
      border: "border-cyan-900/60",
      hover: "hover:border-cyan-600 hover:shadow-[0_0_20px_-5px_rgba(6,182,212,0.25)]",
      dot: "bg-cyan-400",
      text: "group-hover:text-cyan-300",
    },
  },
  {
    id: "bus",
    step: "03",
    label: "Industrial Bus",
    sub: "Fieldbus Protocol",
    tech: "RS-485 Modbus RTU",
    icon: <Network className="h-4 w-4 text-blue-400" />,
    accentClass: {
      badge: "bg-blue-950/60 border-blue-800/80 text-blue-400",
      border: "border-blue-900/60",
      hover: "hover:border-blue-600 hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.25)]",
      dot: "bg-blue-400",
      text: "group-hover:text-blue-300",
    },
  },
  {
    id: "telemetry",
    step: "04",
    label: "Cellular & Cloud",
    sub: "Encrypted Stream",
    tech: "Quectel 4G · MQTT TLS",
    icon: <Radio className="h-4 w-4 text-violet-400" />,
    accentClass: {
      badge: "bg-violet-950/60 border-violet-800/80 text-violet-400",
      border: "border-violet-900/60",
      hover: "hover:border-violet-600 hover:shadow-[0_0_20px_-5px_rgba(139,92,246,0.25)]",
      dot: "bg-violet-400",
      text: "group-hover:text-violet-300",
    },
  },
  {
    id: "scada",
    step: "05",
    label: "SCADA & Console",
    sub: "Operational UI",
    tech: "Qt 6 QML · Web Dash",
    icon: <Monitor className="h-4 w-4 text-amber-400" />,
    accentClass: {
      badge: "bg-amber-950/60 border-amber-800/80 text-amber-400",
      border: "border-amber-900/60",
      hover: "hover:border-amber-600 hover:shadow-[0_0_20px_-5px_rgba(245,158,11,0.25)]",
      dot: "bg-amber-400",
      text: "group-hover:text-amber-300",
    },
  },
];

const FIRMWARE_BOOT_LOGS = [
  { time: "0.0012s", scope: "BOOT", color: "text-cyan-400", message: "STM32F411 / ESP32-S3 Dual-Core MCU initialized @ 240MHz", ok: true },
  { time: "0.0045s", scope: "RTOS", color: "text-emerald-400", message: "FreeRTOS v10.4.3 scheduler started (3 priority tasks active)", ok: true },
  { time: "0.0089s", scope: "BUS ", color: "text-blue-400", message: "RS-485 Modbus RTU master initialized @ 9600 baud, 8N1", ok: true },
  { time: "0.0152s", scope: "CELL", color: "text-violet-400", message: "Quectel 4G LTE Cat-1 attached · MQTT over TLS 1.2 connected", ok: true },
  { time: "0.0210s", scope: "DIAG", color: "text-amber-400", message: "Hardware self-tests passed [SENSORS=OK, CRC=VALID, FAULTS=0]", ok: true },
];

export function TelemetryPipeline() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "logs">("pipeline");

  return (
    <TiltCard
      maxTilt={2.8}
      scale={1.008}
      perspective={1200}
      accentGlow="emerald"
      glareMaxOpacity={0.12}
      className="w-full rounded-xl border border-zinc-800/90 bg-zinc-950/90 shadow-2xl overflow-hidden backdrop-blur-md relative"
    >
      {/* Subtle top gradient accent */}
      <div className="h-0.5 w-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500" />

      {/* Terminal Title Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-zinc-800 px-3 sm:px-4 py-2.5 bg-zinc-900/80 gap-2">
        <div className="flex items-center gap-3">
          {/* Window dots */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80 border border-red-600/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80 border border-amber-600/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80 border border-emerald-600/50" />
          </div>
          <span className="font-mono text-xs text-zinc-300 font-medium flex items-center gap-1.5">
            <span className="text-emerald-400">soumik@telemetry-engine:</span>
            <span className="text-cyan-400">~/embedded-stack</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* View Toggles */}
          <div className="flex items-center rounded border border-zinc-800 bg-zinc-950 p-0.5 text-[11px] font-mono">
            <button
              type="button"
              onClick={() => setActiveTab("pipeline")}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                activeTab === "pipeline"
                  ? "bg-zinc-800 text-emerald-300 font-semibold border border-zinc-700/60"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Pipeline
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("logs")}
              className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                activeTab === "logs"
                  ? "bg-zinc-800 text-cyan-300 font-semibold border border-zinc-700/60"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              Boot Log
            </button>
          </div>

          {/* System status pill */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-800/80 text-[10px] font-mono text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYS_OK · TESTS PASS</span>
          </div>
        </div>
      </div>

      {/* Body: Pipeline Flow or Boot Log */}
      <div className="p-4 sm:p-6 lg:p-7 xl:p-8">
        {activeTab === "pipeline" ? (
          <div>
            <div className="flex items-center justify-between mb-4 sm:mb-5 lg:mb-6 text-[11px] font-mono text-zinc-400">
              <span className="text-zinc-300 font-semibold uppercase tracking-wider flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Deterministic Hardware-to-Cloud Telemetry Architecture</span>
              </span>
              <span className="hidden md:inline text-cyan-400 font-medium">
                {"// Continuous telemetry loop: 100ms cycle"}
              </span>
            </div>

            {/* Horizontal Pipeline Grid with Per-Node Accent Colors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-4 xl:gap-5 relative">
              {PIPELINE_NODES.map((node) => (
                <div
                  key={node.id}
                  className={`group relative rounded-xl border border-zinc-800/90 bg-zinc-900/60 p-4 sm:p-5 ${node.accentClass.hover} transition-all duration-200 flex flex-col justify-between`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-3.5">
                      <div className="flex items-center gap-2">
                        <div className="p-1.5 rounded bg-zinc-950 border border-zinc-800">
                          {node.icon}
                        </div>
                        <span className="text-[10px] font-mono text-zinc-500 font-bold">
                          [{node.step}]
                        </span>
                      </div>
                      <span className={`h-1.5 w-1.5 rounded-full ${node.accentClass.dot}`} />
                    </div>
                    <div className={`text-xs sm:text-sm font-bold text-zinc-100 ${node.accentClass.text} transition-colors`}>
                      {node.label}
                    </div>
                    <div className="text-[11px] font-mono text-zinc-400 mt-1">
                      {node.sub}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-800/60">
                    <span className="text-[10px] font-mono text-zinc-300 block truncate">
                      {node.tech}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* Firmware Boot Log Terminal View with Accent Tags */
          <div className="font-mono text-xs space-y-2 py-1 text-zinc-300 overflow-x-auto">
            <div className="text-zinc-500 text-[11px] pb-2 border-b border-zinc-800/80 mb-3 flex items-center justify-between">
              <span>{"// Target: STM32F411RE & ESP32-S3 Dual-Core FreeRTOS Node"}</span>
              <span className="text-emerald-400 font-semibold">BUILD SUCCESS</span>
            </div>
            {FIRMWARE_BOOT_LOGS.map((log, index) => (
              <div key={index} className="flex items-start gap-2.5 whitespace-nowrap">
                <span className="text-zinc-500">[{log.time}]</span>
                <span className={`${log.color} font-semibold`}>{log.scope}:</span>
                <span className="text-zinc-200">{log.message}</span>
                <span className="text-emerald-400 ml-auto hidden sm:inline">✓</span>
              </div>
            ))}
            <div className="pt-3 text-zinc-400 text-[11px] flex items-center gap-1.5">
              <span className="text-emerald-400">soumik@telemetry-engine:</span>
              <span className="text-cyan-400">~$</span>
              <span className="h-3.5 w-2 bg-emerald-400 animate-pulse ml-0.5" />
            </div>
          </div>
        )}
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="border-t border-zinc-800/80 px-4 sm:px-6 py-3 sm:py-3.5 bg-zinc-950 flex flex-wrap items-center justify-between gap-3 text-[10px] sm:text-[11px] font-mono text-zinc-400">
        <div className="flex items-center gap-3">
          <span className="text-emerald-400 flex items-center gap-1.5 font-medium">
            <CheckCircle2 className="h-3 w-3 shrink-0" />
            <span>Firmware: FreeRTOS 10.4.3</span>
          </span>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="hidden sm:inline text-cyan-400">Protocol: RS-485 Modbus RTU / MQTT TLS</span>
        </div>
        <div className="flex items-center gap-2 text-zinc-300">
          <span>Target Architecture: ARM Cortex-M4 &amp; Xtensa LX7</span>
        </div>
      </div>
    </TiltCard>
  );
}
