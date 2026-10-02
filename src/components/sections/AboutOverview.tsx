import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Container } from "../ui/Container";

export function AboutOverview() {
  return (
    <section id="about" className="py-14 sm:py-24 border-b border-zinc-800/80 bg-zinc-950 relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="default">
        {/* Section Header with Numbering */}
        <div className="mb-10 sm:mb-14">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-gradient-emerald-cyan">
            01 · About
          </p>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white mt-1.5">
            Engineering Profile &amp; Focus
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-2xl leading-relaxed">
            Bridging bare-metal microcontroller firmware with connected industrial fieldbuses, cloud telemetry, and responsive operations software.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Avatar & Quick Info Card */}
          <div className="lg:col-span-4 rounded-xl border border-zinc-800/90 bg-zinc-900/50 p-5 sm:p-6 backdrop-blur-sm shadow-xl hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-emerald-800/60 bg-zinc-950 shrink-0 ring-1 ring-emerald-500/30">
                <Image
                  src="/images/soumik-ghosh.jpg"
                  alt="Soumik Ghosh"
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">Soumik Ghosh</h3>
                <p className="text-xs font-mono text-emerald-400 font-medium">
                  Embedded Software Developer
                </p>
                <p className="text-[11px] font-mono text-zinc-400 mt-1 flex items-center gap-1">
                  <MapPin className="h-3 w-3 text-cyan-400" />
                  Kolkata, West Bengal, India
                </p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-800 space-y-2.5 text-xs font-mono text-zinc-300">
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Role:</span>
                <span className="text-emerald-300 font-semibold">Embedded Developer</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Company:</span>
                <span className="text-cyan-300 font-semibold">Panorama Electronics</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Education:</span>
                <span className="text-zinc-300">Sister Nivedita Univ</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-500">Status:</span>
                <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Production
                </span>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-zinc-800">
              <Link
                href="/about"
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-lg bg-zinc-800 text-zinc-200 hover:bg-emerald-950/60 hover:text-emerald-300 hover:border-emerald-700/60 border border-zinc-700/80 transition-colors"
              >
                <span>View Full Professional Bio</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Technical Pillars */}
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed max-w-[72ch]">
              <p>
                I build practical software systems that solve real operational and business problems. Currently working as an Embedded Software Developer at <strong className="text-white font-semibold">Panorama Electronics Pvt. Ltd.</strong> in Kolkata, India.
              </p>
              <p>
                Rather than treating firmware, industrial communication, and application software as disconnected disciplines, I engineer integrated architectures—connecting physical sensors, microcontrollers, and real-time operating systems with cloud telemetry, industrial fieldbuses, and responsive operational tools.
              </p>
              <p className="text-xs sm:text-sm text-zinc-400">
                Outside industrial firmware, I design and maintain full-stack operations platforms featuring strict double-entry inventory ledgers, state-machine order workflows, and real-time analytics dashboards.
              </p>
            </div>

            {/* Key Fact Bullets (Terminal-style with Colorful Indicators) */}
            <div className="rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-4 font-mono text-xs space-y-2.5 text-zinc-300">
              <div className="flex items-start gap-2.5">
                <span className="text-emerald-400 font-bold shrink-0">▸</span>
                <span>
                  <strong className="text-emerald-300 font-semibold">Core Focus:</strong> Real-time STM32 &amp; ESP32-S3 firmware, FreeRTOS scheduling, RS-485 Modbus RTU, and Quectel 4G LTE telemetry.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold shrink-0">▸</span>
                <span>
                  <strong className="text-cyan-300 font-semibold">Domain Applications:</strong> Railway coach reservoir tracking, industrial substation asset diagnostics, and enterprise supply chain operations.
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="text-violet-400 font-bold shrink-0">▸</span>
                <span>
                  <strong className="text-violet-300 font-semibold">Direct Inquiries:</strong> Open to embedded engineering, industrial IoT, and systems firmware collaborations.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
