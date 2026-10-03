import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../ui/Icons";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { GsapHero } from "../animations/GsapHero";
import { TelemetryPipeline } from "./TelemetryPipeline";
import { HeroMetrics } from "./HeroMetrics";

export function Hero() {
  return (
    <section id="home" className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-32 xl:pt-28 xl:pb-40 border-b border-zinc-800/80 bg-transparent overflow-hidden">
      <Container size="hero">
        <GsapHero>
          {/* Top Identity Block: Grid with Text/CTAs on Left, Clean Standalone Portrait on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 items-center relative z-10">
            {/* Left 7 cols: Name, Role, Statement, CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Eyebrow / Role Badge — single clear signal */}
              <div className="gsap-hero-badge mb-4 sm:mb-5 lg:mb-6">
                <Badge variant="emerald" size="md">
                  Embedded Software Developer
                </Badge>
              </div>

              {/* Developer Name */}
              <h1 className="gsap-hero-title text-3xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                SOUMIK GHOSH
              </h1>

              {/* Professional Title with Dual Gradient Accent */}
              <div className="gsap-hero-role mt-2.5 sm:mt-3 lg:mt-4 font-mono text-sm sm:text-base text-zinc-300 uppercase tracking-wider font-semibold flex flex-wrap items-center gap-2">
                <span className="text-emerald-400">&gt;</span>
                <span className="text-gradient-emerald-cyan font-bold">Firmware</span>
                <span className="text-zinc-600">&amp;</span>
                <span className="text-cyan-400">Industrial IoT</span>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <span className="text-violet-400 hidden sm:inline">Full-Stack Systems</span>
              </div>

              {/* Single concise positioning statement */}
              <p className="gsap-hero-desc mt-6 sm:mt-7 lg:mt-8 text-base sm:text-lg xl:text-xl text-zinc-200 leading-relaxed max-w-[54ch] font-medium">
                I build practical embedded systems, industrial firmware, and connected operational software where real-world timing, hardware reliability, and data integrity are non-negotiable.
              </p>

              {/* CTAs & Compact Social Links */}
              <div className="gsap-hero-cta mt-8 sm:mt-10 lg:mt-12 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Button href="#projects" variant="emerald" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                  Explore Projects
                </Button>
                <Button href="#contact" variant="outline-cyan" size="md" icon={<ArrowUpRight className="h-4 w-4" />}>
                  Get in Touch
                </Button>

                {/* Icon-only social links — compact, non-competing */}
                <div className="flex items-center gap-2 ml-1">
                  <a
                    href="https://github.com/soumikbur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-400 hover:text-white transition-colors"
                    title="GitHub Profile"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-blue-600/70 text-zinc-400 hover:text-white transition-colors"
                    title="LinkedIn Profile"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="h-4 w-4" />
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

          {/* Systems UI Preview & Verification Metrics — kept as the single authoritative benchmark location */}
          <div className="mt-14 sm:mt-18 lg:mt-24 xl:mt-28 w-full">
            <HeroMetrics layout="banner" />
          </div>
        </GsapHero>
      </Container>
    </section>
  );
}
