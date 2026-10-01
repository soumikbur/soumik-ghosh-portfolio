import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, ShieldCheck, Mail } from "lucide-react";
import { LinkedinIcon } from "../ui/Icons";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { GsapHero } from "../animations/GsapHero";

export function Hero() {
  return (
    <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 border-b border-zinc-800/80 bg-zinc-950 overflow-hidden bg-tech-grid">
      <Container size="default">
        <GsapHero>
          {/* Top Identity Block: Grid with Text/CTAs on Left, Profile Photo on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left 8 cols: Name, Role, Statement, CTAs */}
            <div className="lg:col-span-8 flex flex-col items-start">
              {/* Eyebrow / Availability Badge */}
              <div className="gsap-hero-badge flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="technical" size="md">
                  Embedded Software Developer
                </Badge>
                <span className="text-zinc-600 font-mono text-xs">•</span>
                <span className="text-emerald-400 font-mono text-xs flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Panorama Electronics Pvt. Ltd.
                </span>
                <span className="text-zinc-600 font-mono text-xs">•</span>
                <span className="text-zinc-400 font-mono text-xs">
                  Kolkata, India
                </span>
              </div>

              {/* Developer Name */}
              <h1 className="gsap-hero-title text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]">
                SOUMIK GHOSH
              </h1>

              {/* Role */}
              <div className="gsap-hero-role mt-2 font-mono text-sm sm:text-base text-zinc-400 uppercase tracking-wider font-semibold">
                Embedded Software Developer
              </div>

              {/* Short Positioning Statement */}
              <p className="gsap-hero-desc mt-5 text-lg sm:text-xl text-zinc-200 leading-relaxed max-w-2xl font-medium">
                I build practical software systems that solve real operational and business problems.
              </p>

              <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-2xl">
                Engineering reliable embedded software, industrial IoT systems, connected telemetry, and operational full-stack applications.
              </p>

              {/* CTAs */}
              <div className="gsap-hero-cta mt-8 flex flex-wrap items-center gap-3">
                <Button href="#projects" variant="primary" size="md" icon={<ArrowRight className="h-4 w-4" />}>
                  View Projects
                </Button>
                <Button href="/contact" variant="outline" size="md" icon={<ArrowUpRight className="h-4 w-4" />}>
                  Contact Me
                </Button>
                <a
                  href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors py-2 ml-1"
                >
                  <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:soumik.bur@gmail.com"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors py-2 ml-1"
                >
                  <Mail className="h-3.5 w-3.5 text-zinc-400" />
                  <span>soumik.bur@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Right 4 cols: Profile Photo Frame */}
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <div className="gsap-hero-photo flex flex-col items-start lg:items-end">
                <div className="relative rounded-2xl border border-zinc-700/80 bg-zinc-900 p-2 shadow-2xl ring-1 ring-zinc-800">
                  <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-48 md:h-48 rounded-xl overflow-hidden bg-zinc-950">
                    <Image
                      src="/images/soumik-ghosh.jpg"
                      alt="Soumik Ghosh — Embedded Software Developer"
                      width={384}
                      height={384}
                      priority
                      className="w-full h-full object-cover object-center"
                      sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 192px"
                    />
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-2 text-[11px] font-mono text-zinc-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Soumik Ghosh • Production Engineer</span>
                </div>
              </div>
            </div>
          </div>

          {/* Real Production System UI Preview */}
          <div className="gsap-hero-visual mt-12 sm:mt-16 w-full rounded-xl border border-zinc-800 bg-zinc-900/70 p-3 sm:p-4 backdrop-blur-md shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800/80 pb-2.5 mb-3 text-xs font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                  <span className="h-2 w-2 rounded-full bg-zinc-700" />
                </div>
                <span className="text-zinc-300 font-medium ml-1">
                  apexflow.production.telemetry
                </span>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="text-emerald-400 flex items-center gap-1 font-mono">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  ACTIVE PRODUCTION SYSTEM
                </span>
              </div>
            </div>

            {/* Real UI Screenshot Asset */}
            <div className="relative w-full rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950">
              <Image
                src="/images/apexflow_preview.jpg"
                alt="ApexFlow Enterprise Inventory & Order Management Platform UI"
                width={1280}
                height={720}
                priority
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Architectural Highlights Bar beneath preview */}
            <div className="mt-3 pt-3 border-t border-zinc-800/60 grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] font-mono text-zinc-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3 text-emerald-400 shrink-0" />
                <span>Append-Only Ledger</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3 text-emerald-400 shrink-0" />
                <span>5-Stage State Machine</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3 text-emerald-400 shrink-0" />
                <span>ACID DB Transactions</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-3 w-3 text-emerald-400 shrink-0" />
                <span>4-Tier Role Security</span>
              </div>
            </div>
          </div>
        </GsapHero>
      </Container>
    </section>
  );
}
