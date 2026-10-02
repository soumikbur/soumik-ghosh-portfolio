import React from "react";
import { Mail, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function ContactCTA() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 xl:py-32 2xl:py-36 bg-zinc-950 relative overflow-hidden">
      <Container size="default">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-10 lg:p-12 xl:p-14 2xl:p-16 backdrop-blur-md shadow-2xl relative overflow-hidden">
          {/* Subtle multi-color background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start relative z-10">
            {/* Left 7 cols: Pitch, CTAs, Links */}
            <div className="xl:col-span-7 space-y-5 sm:space-y-6">
              <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gradient-emerald-cyan">
                05 · Contact
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                Let&apos;s build something <span className="text-gradient-emerald-cyan">reliable</span>.
              </h2>
              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-[62ch]">
                I engineer deterministic embedded firmware, industrial SCADA systems, connected IoT telemetry, and operational full-stack applications. If your team needs dependable systems engineering with zero-compromise timing and data integrity, let&apos;s discuss.
              </p>

              <div className="pt-2 flex flex-wrap gap-2.5 sm:gap-3 text-xs font-mono text-zinc-300">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>Deterministic Firmware</span>
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span>Modbus &amp; Cellular Fieldbuses</span>
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800">
                  <CheckCircle2 className="h-3.5 w-3.5 text-violet-400 shrink-0" />
                  <span>ACID Ledger Guarantees</span>
                </span>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 sm:gap-4">
                <Button
                  href="mailto:soumik.bur@gmail.com"
                  variant="emerald"
                  size="lg"
                  icon={<Mail className="h-4 w-4" />}
                  external
                >
                  soumik.bur@gmail.com
                </Button>
                <Button href="/contact" variant="outline-cyan" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                  Detailed Contact Form
                </Button>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3.5 sm:gap-4 text-xs font-mono text-zinc-400">
                <a
                  href="https://github.com/soumikbur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-100 transition-colors flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-600"
                >
                  <GithubIcon className="h-3.5 w-3.5 text-zinc-400" />
                  <span>github.com/soumikbur</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
                <a
                  href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-100 transition-colors flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-blue-700/60 text-blue-300/90"
                >
                  <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </a>
              </div>
            </div>

            {/* Right 5 cols: Availability & Engineering Scope Panel (Visible on xl) */}
            <div className="xl:col-span-5 rounded-xl border border-zinc-800/90 bg-zinc-950/70 p-5 space-y-4 font-mono text-xs shadow-xl">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800/80">
                <span className="text-zinc-400 font-semibold uppercase tracking-wider text-[11px]">
                  Direct Inquiries &amp; Availability
                </span>
                <span className="text-emerald-400 flex items-center gap-1.5 font-semibold text-[10px] bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  OPEN
                </span>
              </div>

              <div className="space-y-2 text-zinc-300">
                <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">Location:</span>
                  <span className="text-zinc-200">Kolkata, West Bengal, India</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">Current Role:</span>
                  <span className="text-emerald-300 font-medium">Embedded Software Dev</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">Company:</span>
                  <span className="text-cyan-300 font-medium">Panorama Electronics</span>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-zinc-900">
                  <span className="text-zinc-500">Typical Reply:</span>
                  <span className="text-zinc-300 font-medium">Within 24 Hours</span>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-2 font-semibold">
                  Preferred Technical Engagements:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                    STM32 &amp; ESP32 Firmware
                  </span>
                  <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                    Modbus RTU / Fieldbuses
                  </span>
                  <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                    4G LTE Telemetry
                  </span>
                  <span className="px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-300">
                    Qt 6 SCADA &amp; Web Apps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
