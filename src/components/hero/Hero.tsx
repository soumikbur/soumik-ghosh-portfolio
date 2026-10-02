import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ShieldCheck, Activity, Database, KeyRound, FileText } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../ui/Icons";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { GsapHero } from "../animations/GsapHero";
import { TelemetryPipeline } from "./TelemetryPipeline";
import { HeroMetrics } from "./HeroMetrics";

export function Hero() {
  return (
    <section className="relative pt-8 pb-12 sm:pt-16 sm:pb-24 border-b border-zinc-800/80 bg-zinc-950 overflow-hidden bg-tech-grid">
      {/* Ambient Radial Color Meshes */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="hero">
        <GsapHero>
          {/* Top Identity Block: Grid with Text/CTAs on Left, Developer Dossier Card on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start relative z-10">
            {/* Left 7 cols: Name, Role, Statement, CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Eyebrow / Availability Badge with Color Accents */}
              <div className="gsap-hero-badge flex flex-wrap items-center gap-x-2 gap-y-1 mb-4">
                <span className="font-mono text-xs text-zinc-500 font-bold mr-1">00 ·</span>
                <Badge variant="emerald" size="md">
                  Embedded Software Developer
                </Badge>
                <span className="text-zinc-600 font-mono text-xs hidden sm:inline">•</span>
                <span className="text-cyan-400 font-mono text-xs flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                  <span className="break-words font-medium">Panorama Electronics Pvt. Ltd.</span>
                </span>
                <span className="text-zinc-600 font-mono text-xs hidden sm:inline">•</span>
                <span className="text-zinc-400 font-mono text-xs">
                  Kolkata, India
                </span>
              </div>

              {/* Developer Name */}
              <h1 className="gsap-hero-title text-3xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                SOUMIK GHOSH
              </h1>

              {/* Professional Title with Dual Gradient Accent */}
              <div className="gsap-hero-role mt-2 font-mono text-sm sm:text-base text-zinc-300 uppercase tracking-wider font-semibold flex flex-wrap items-center gap-2">
                <span className="text-emerald-400">&gt;</span>
                <span className="text-gradient-emerald-cyan font-bold">Embedded Software Developer</span>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <span className="text-cyan-400">Firmware</span>
                <span className="text-zinc-600">&amp;</span>
                <span className="text-violet-400">Industrial IoT</span>
              </div>

              {/* Short Technical Positioning Statement (constrained line-length for optimal readability) */}
              <p className="gsap-hero-desc mt-5 text-base sm:text-lg xl:text-xl text-zinc-200 leading-relaxed max-w-[58ch] font-medium">
                I build practical embedded systems, industrial firmware, and connected operational software where real-world timing, hardware reliability, and data integrity are non-negotiable.
              </p>

              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-[62ch]">
                Engineering deterministic FreeRTOS task schedules, industrial RS-485 Modbus RTU fieldbuses, Quectel 4G LTE cellular telemetry nodes, and full-stack operational platforms.
              </p>

              {/* CTAs & Developer Links */}
              <div className="gsap-hero-cta mt-6 sm:mt-8 flex flex-wrap items-center gap-3">
                <Button href="#projects" variant="emerald" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                  Explore Projects
                </Button>
                <Button href="#contact" variant="outline-cyan" size="md" icon={<ArrowUpRight className="h-4 w-4" />}>
                  Get in Touch
                </Button>

                <div className="flex items-center gap-2 w-full sm:w-auto mt-2 sm:mt-0 flex-wrap">
                  <a
                    href="https://github.com/soumikbur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white transition-colors py-2 px-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-300 hover:text-white transition-colors py-2 px-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-blue-600/70"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-300 hover:text-white transition-colors py-2 px-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-emerald-600/70"
                    title="Detailed Engineering Profile"
                  >
                    <FileText className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Profile &amp; Bio</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Developer Dossier & Telemetry Card */}
            <div className="lg:col-span-5 flex justify-start lg:justify-end w-full">
              <div className="gsap-hero-photo w-full rounded-2xl border border-zinc-800/90 bg-zinc-900/60 p-4 sm:p-5 backdrop-blur-md shadow-2xl ring-1 ring-zinc-700/50 glow-card-emerald">
                {/* Console Window Header */}
                <div className="flex items-center justify-between pb-3 mb-3.5 border-b border-zinc-800/80 text-[11px] font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-zinc-200 font-semibold">station: ~/soumik.firmware</span>
                  </div>
                  <span className="text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded text-[10px] font-mono">
                    HARDWARE VERIFIED
                  </span>
                </div>

                {/* Profile Photo + Verified Credentials */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start xl:items-center gap-4 sm:gap-5">
                  <div className="relative rounded-2xl border-2 border-emerald-500/50 bg-zinc-950 p-1.5 shadow-2xl shrink-0 ring-2 ring-emerald-500/30 glow-card-emerald">
                    <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48 rounded-xl overflow-hidden bg-zinc-950">
                      <Image
                        src="/images/soumik-ghosh.jpg"
                        alt="Soumik Ghosh — Embedded Software Developer"
                        width={384}
                        height={384}
                        priority
                        className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 192px"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5 min-w-0 text-center sm:text-left">
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-white tracking-tight">
                      Soumik Ghosh
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-emerald-400 font-semibold">
                      Embedded Software Developer
                    </p>
                    <p className="text-xs font-mono text-zinc-200">
                      Panorama Electronics Pvt. Ltd.
                    </p>
                    <p className="text-[11px] font-mono text-zinc-400">
                      Sister Nivedita University · Kolkata
                    </p>
                    <div className="pt-1.5 flex justify-center sm:justify-start">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/70 border border-emerald-800/80 text-[10px] font-mono text-emerald-300 font-semibold shadow-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span>Hardware Verified · In-Field</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Architecture & Telemetry Specs Grid */}
                <div className="mt-4 pt-3 border-t border-zinc-800/70 grid grid-cols-2 gap-2 text-[11px] font-mono">
                  <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-lg p-2">
                    <span className="text-zinc-500 text-[9px] uppercase tracking-wider block">Target MCU</span>
                    <span className="text-emerald-300 font-semibold truncate block">STM32 &amp; ESP32-S3</span>
                  </div>
                  <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-lg p-2">
                    <span className="text-zinc-500 text-[9px] uppercase tracking-wider block">RTOS Kernel</span>
                    <span className="text-cyan-300 font-semibold truncate block">FreeRTOS Priority</span>
                  </div>
                  <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-lg p-2">
                    <span className="text-zinc-500 text-[9px] uppercase tracking-wider block">Industrial Bus</span>
                    <span className="text-blue-300 font-semibold truncate block">RS-485 Modbus RTU</span>
                  </div>
                  <div className="bg-zinc-950/60 border border-zinc-800/80 rounded-lg p-2">
                    <span className="text-zinc-500 text-[9px] uppercase tracking-wider block">Telemetry</span>
                    <span className="text-violet-300 font-semibold truncate block">Quectel 4G LTE Cat-1</span>
                  </div>
                </div>

                {/* Footer Status */}
                <div className="mt-3 pt-2.5 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-zinc-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>8 In-Field Architectures</span>
                  </span>
                  <span className="text-zinc-500">Deterministic Timing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Hardware-to-Cloud Telemetry Pipeline */}
          <div className="mt-8 sm:mt-12 w-full">
            <TelemetryPipeline />
          </div>

          {/* Systems UI Preview & Verification Metrics Grid */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Left 7 cols: Real Production System UI Preview */}
            <div className="xl:col-span-7 flex flex-col">
              <div className="gsap-hero-visual h-full w-full rounded-xl border border-zinc-800 bg-zinc-900/70 p-3 sm:p-5 backdrop-blur-md shadow-2xl flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 mb-3 text-xs font-mono text-zinc-400">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5" aria-hidden="true">
                      <span className="h-2 w-2 rounded-full bg-red-500/80" />
                      <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                      <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-zinc-200 font-medium ml-1">
                      apexflow.production.telemetry
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] sm:text-[11px]">
                    <span className="text-emerald-400 flex items-center gap-1 font-mono">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                      <span className="hidden sm:inline">ACTIVE PRODUCTION SYSTEM</span>
                      <span className="sm:hidden">ACTIVE</span>
                    </span>
                  </div>
                </div>

                {/* Real UI Screenshot Asset */}
                <div className="relative w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950 flex-1 min-h-[220px] sm:min-h-[280px]">
                  <Image
                    src="/images/apexflow_preview.jpg"
                    alt="ApexFlow Enterprise Inventory & Order Management Platform UI"
                    width={1280}
                    height={720}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Architectural Highlights Bar with Multi-Accent Icons */}
                <div className="mt-3 pt-3 border-t border-zinc-800/60 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-zinc-300">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                    <span>Append-Only Ledger</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Activity className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                    <span>5-Stage State Machine</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Database className="h-3.5 w-3.5 text-violet-400 shrink-0" />
                    <span>ACID DB Transactions</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <KeyRound className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                    <span>4-Tier Role Security</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Widescreen 2x2 Performance Metrics */}
            <div className="hidden xl:flex xl:col-span-5 flex-col">
              <HeroMetrics layout="grid2x2" />
            </div>
          </div>

          {/* Banner layout for mobile/tablet (< xl) */}
          <div className="xl:hidden">
            <HeroMetrics layout="banner" />
          </div>
        </GsapHero>
      </Container>
    </section>
  );
}
