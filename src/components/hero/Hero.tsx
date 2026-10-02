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
import { TiltCard } from "../ui/TiltCard";

export function Hero() {
  return (
    <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32 xl:pt-28 xl:pb-40 border-b border-zinc-800/80 bg-zinc-950 overflow-hidden bg-tech-grid">
      {/* Ambient Radial Color Meshes */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="hero">
        <GsapHero>
          {/* Top Identity Block: Grid with Text/CTAs on Left, Clean Standalone Portrait on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center relative z-10">
            {/* Left 7 cols: Name, Role, Statement, CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Eyebrow / Availability Badge with Color Accents */}
              <div className="gsap-hero-badge flex flex-wrap items-center gap-x-2.5 gap-y-1.5 mb-4 sm:mb-5 lg:mb-6">
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
              <div className="gsap-hero-role mt-2.5 sm:mt-3 lg:mt-4 font-mono text-sm sm:text-base text-zinc-300 uppercase tracking-wider font-semibold flex flex-wrap items-center gap-2">
                <span className="text-emerald-400">&gt;</span>
                <span className="text-gradient-emerald-cyan font-bold">Embedded Software Developer</span>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <span className="text-cyan-400">Firmware</span>
                <span className="text-zinc-600">&amp;</span>
                <span className="text-violet-400">Industrial IoT</span>
              </div>

              {/* Short Technical Positioning Statement (constrained line-length for optimal readability) */}
              <p className="gsap-hero-desc mt-6 sm:mt-7 lg:mt-8 text-base sm:text-lg xl:text-xl text-zinc-200 leading-relaxed max-w-[54ch] font-medium">
                I build practical embedded systems, industrial firmware, and connected operational software where real-world timing, hardware reliability, and data integrity are non-negotiable.
              </p>

              <p className="mt-3 sm:mt-3.5 lg:mt-4 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-[58ch]">
                Engineering deterministic FreeRTOS task schedules, industrial RS-485 Modbus RTU fieldbuses, Quectel 4G LTE cellular telemetry nodes, and full-stack operational platforms.
              </p>

              {/* CTAs & Developer Links */}
              <div className="gsap-hero-cta mt-8 sm:mt-10 lg:mt-12 flex flex-wrap items-center gap-3.5 sm:gap-4 lg:gap-5">
                <Button href="#projects" variant="emerald" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                  Explore Projects
                </Button>
                <Button href="#contact" variant="outline-cyan" size="md" icon={<ArrowUpRight className="h-4 w-4" />}>
                  Get in Touch
                </Button>

                <div className="flex items-center gap-2 sm:gap-2.5 w-full sm:w-auto mt-2 sm:mt-0 flex-wrap">
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

            {/* Right 5 cols: Clean Standalone Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <div className="gsap-hero-photo relative group">
                {/* Subtle ambient accent glow behind photo */}
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-emerald-500/10 blur-2xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none" />

                {/* Clean subtle border/frame */}
                <div className="relative rounded-2xl sm:rounded-3xl border border-zinc-800/90 bg-zinc-900/60 p-2.5 sm:p-3 backdrop-blur-md shadow-2xl ring-1 ring-zinc-700/50 glow-card-emerald">
                  <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80 2xl:w-88 2xl:h-88 rounded-xl sm:rounded-2xl overflow-hidden bg-zinc-950">
                    <Image
                      src="/images/soumik-ghosh.jpg"
                      alt="Soumik Ghosh — Embedded Software Developer"
                      width={400}
                      height={400}
                      priority
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 240px, (max-width: 768px) 288px, (max-width: 1024px) 320px, (max-width: 1280px) 288px, (max-width: 1536px) 320px, 352px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Hardware-to-Cloud Telemetry Pipeline */}
          <div className="mt-16 sm:mt-20 lg:mt-28 xl:mt-32 w-full">
            <TelemetryPipeline />
          </div>

          {/* Systems UI Preview & Verification Metrics Grid */}
          <div className="mt-14 sm:mt-18 lg:mt-24 xl:mt-28 grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
            {/* Left 7 cols: Real Production System UI Preview */}
            <div className="xl:col-span-7 flex flex-col">
              <TiltCard
                maxTilt={3.2}
                scale={1.01}
                accentGlow="emerald"
                className="gsap-hero-visual h-full w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 sm:p-6 lg:p-7 xl:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between"
              >
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3 mb-4 text-xs font-mono text-zinc-400">
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
                <div className="relative w-full rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex-1 min-h-[240px] sm:min-h-[300px] lg:min-h-[340px]">
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
                <div className="mt-4 pt-4 sm:mt-5 sm:pt-5 border-t border-zinc-800/60 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-[11px] font-mono text-zinc-300">
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
              </TiltCard>
            </div>

            {/* Right 5 cols: Widescreen 2x2 Performance Metrics */}
            <div className="hidden xl:flex xl:col-span-5 flex-col">
              <HeroMetrics layout="grid2x2" />
            </div>
          </div>

          {/* Banner layout for mobile/tablet (< xl) */}
          <div className="xl:hidden mt-8 sm:mt-10">
            <HeroMetrics layout="banner" />
          </div>
        </GsapHero>
      </Container>
    </section>
  );
}
