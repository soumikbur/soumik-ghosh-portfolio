import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import {
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Database,
  Terminal,
  Activity,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — Soumik Ghosh | Embedded Software Developer",
  description:
    "Soumik Ghosh is an Embedded Software Developer who builds practical software systems across real-time embedded firmware, full-stack applications, and transactional business tools.",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-24 bg-zinc-950 text-zinc-100">
      <Container size="default">
        {/* Header / Identity Banner */}
        <div className="border-b border-zinc-800 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Bio & Positioning */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="accent">Professional Profile</Badge>
                <span className="text-zinc-600 font-mono text-xs">•</span>
                <span className="text-emerald-400 font-mono text-xs flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Available for Engagements
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
                Soumik Ghosh
              </h1>

              <p className="font-mono text-base text-zinc-400 uppercase tracking-wider">
                Embedded Software Developer
              </p>

              <p className="text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed pt-2">
                I build practical software systems that solve real operational and business problems.
              </p>

              <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
                Rather than treating firmware and application software as isolated disciplines, I design end-to-end architectures—connecting physical sensors, microcontrollers, and real-time operating systems with cloud telemetry, relational databases, and operational web interfaces.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-3">
                <Button
                  href="/projects"
                  variant="primary"
                  size="md"
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  View Verified Projects
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="md"
                  icon={<ArrowUpRight className="h-4 w-4" />}
                >
                  Contact Direct
                </Button>
              </div>
            </div>

            {/* Right: Verified Profile Photo */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                <Image
                  src="/images/soumik-ghosh.jpg"
                  alt="Soumik Ghosh"
                  fill
                  priority
                  sizes="(max-width: 768px) 192px, 224px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 1: What I Build */}
        <section className="py-14 border-b border-zinc-800/80 space-y-6">
          <SectionHeader
            badge="Engineering Scope"
            title="What I Build"
            description="Systems designed for operational environments where data accuracy, timing precision, and reliable state recovery are essential."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
              <div className="h-9 w-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300">
                <Cpu className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Embedded & RTOS Firmware
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Deterministic multi-tasking firmware for STM32 and ESP32 microcontrollers using FreeRTOS, hardware timers, and inter-task queues.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
              <div className="h-9 w-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300">
                <Layers className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Industrial Protocols & Telemetry
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Fieldbus communication stacks for RS-485 Modbus RTU, I2C, SPI, UART, and cellular 4G LTE AT command state machines.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
              <div className="h-9 w-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300">
                <Database className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Full-Stack Business Systems
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Relational applications coordinating inventory ledgers, purchase orders, fulfillment pipelines, and role-based permissions.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
              <div className="h-9 w-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300">
                <Activity className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Analytics & Internal Dashboards
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                High-density operational dashboards with sub-100ms KPI aggregations, interactive charts, and administrative audit trails.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
              <div className="h-9 w-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300">
                <Terminal className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Desktop SCADA & Operator Stations
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Cross-platform operator interfaces built with C++ and Qt 6 / QML for real-time sensor visualization, calibration, and alarms.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-6 space-y-3">
              <div className="h-9 w-9 rounded border border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-300">
                <Zap className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white">
                Geospatial & Progressive Web Apps
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Interactive GIS mapping applications with offline service worker caching designed for low-bandwidth mobile environments.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: Engineering Focus */}
        <section className="py-14 border-b border-zinc-800/80 space-y-6">
          <SectionHeader
            badge="Core Priorities"
            title="Engineering Focus"
            description="Foundational principles applied across embedded firmware and full-stack software development."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-6 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase">
                <ShieldCheck className="h-4 w-4" />
                <span>Deterministic Execution & Safety</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Prioritizing predictable response times, task priority isolation, mutex synchronization, and watchdog monitoring to prevent deadlocks and race conditions in constrained runtime environments.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-6 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase">
                <ShieldCheck className="h-4 w-4" />
                <span>Relational Integrity & Auditability</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Enforcing strict schema constraints, database transactions, and double-entry ledger models so business operations remain mathematically verifiable and traceable.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-6 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase">
                <ShieldCheck className="h-4 w-4" />
                <span>Fault Tolerance & Self-Diagnostics</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Implementing startup self-tests, sensor disconnect detection, communication retries with backoff, and graceful degradation during network disruption or hardware failures.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/30 p-6 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold uppercase">
                <ShieldCheck className="h-4 w-4" />
                <span>Clean Interfaces & Role Gating</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Designing explicit API contracts, granular role-based authorization (RBAC), and ergonomic operator screens that present high-density operational metrics clearly.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Technical Capabilities Summary */}
        <section className="py-14 border-b border-zinc-800/80 space-y-6">
          <SectionHeader
            badge="Verified Technologies"
            title="Technical Capabilities"
            description="Verified technologies used across completed firmware, industrial IoT, and full-stack software projects."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-3">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 border-b border-zinc-800 pb-2">
                Embedded & Firmware
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["STM32 (Cortex-M)", "ESP32-S3", "FreeRTOS", "Embedded C/C++", "ADC Front-Ends", "Watchdogs"].map((item) => (
                  <Badge key={item} variant="neutral" size="sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-3">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 border-b border-zinc-800 pb-2">
                Protocols & IoT
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["RS-485 Modbus RTU", "Quectel 4G LTE", "MQTT / TLS 1.2", "I2C", "SPI", "UART"].map((item) => (
                  <Badge key={item} variant="neutral" size="sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-3">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 border-b border-zinc-800 pb-2">
                Full-Stack & APIs
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["Next.js", "Node.js", "TypeScript", "REST APIs", "Prisma ORM", "NextAuth v5"].map((item) => (
                  <Badge key={item} variant="neutral" size="sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-3">
              <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 border-b border-zinc-800 pb-2">
                Data & Storage
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {["PostgreSQL", "Double-Entry Ledgers", "SPI NOR Flash", "FATFS", "Redis", "Docker"].map((item) => (
                  <Badge key={item} variant="neutral" size="sm">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: High-Level Engineering Approach */}
        <section className="py-14 space-y-6">
          <SectionHeader
            badge="Process"
            title="High-Level Engineering Approach"
            description="How I approach new technical problems from initial requirement through to field operation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
              <div className="font-mono text-xs text-emerald-400 font-semibold">01. ANALYZE</div>
              <h4 className="text-sm font-semibold text-white">Constraints & Workflows</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Clarify real operational requirements, sensor physics, timing constraints, and failure modes before architecture begins.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
              <div className="font-mono text-xs text-emerald-400 font-semibold">02. MODEL</div>
              <h4 className="text-sm font-semibold text-white">Schemas & States</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Define formal state machines, communication frames, and strict relational schemas to eliminate runtime ambiguity.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
              <div className="font-mono text-xs text-emerald-400 font-semibold">03. IMPLEMENT</div>
              <h4 className="text-sm font-semibold text-white">Defensive Architecture</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Build modular tasks and clean service abstractions with thread-safe resource protection and structured error handling.
              </p>
            </div>

            <div className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-5 space-y-2">
              <div className="font-mono text-xs text-emerald-400 font-semibold">04. VERIFY</div>
              <h4 className="text-sm font-semibold text-white">Hardware & Suite Testing</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Validate through bench testing, hardware self-tests, edge-case simulation, and automated test pipelines.
              </p>
            </div>
          </div>

          {/* Bottom CTA Card */}
          <div className="mt-12 rounded-xl border border-zinc-800 bg-zinc-900/50 p-8 text-center space-y-4">
            <h3 className="text-xl font-bold text-white">
              Interested in discussing a system or engineering challenge?
            </h3>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              I am available for engagements involving embedded firmware, industrial telemetry, full-stack operational platforms, and system architecture.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Get in Touch
              </Button>
              <Button
                href="/projects"
                variant="outline"
                size="md"
                icon={<ArrowUpRight className="h-4 w-4" />}
              >
                Explore Projects
              </Button>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
