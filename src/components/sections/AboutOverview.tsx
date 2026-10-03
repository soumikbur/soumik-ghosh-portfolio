import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";

export function AboutOverview() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 xl:py-32 border-b border-zinc-800/80 bg-transparent relative overflow-hidden">

      <Container size="default">
        {/* Section Header */}
        <div className="mb-10 sm:mb-14">
          <p className="font-mono text-xs font-semibold tracking-wider uppercase text-gradient-emerald-cyan">
            01 · About
          </p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2 sm:mt-2.5">
            Engineering Profile
          </h2>
        </div>

        {/* Single-column narrative — clean and focused */}
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          <div className="space-y-4 sm:space-y-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
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

          {/* Compact CTA */}
          <div className="pt-4 border-t border-zinc-800/60">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-zinc-800/80 text-zinc-200 hover:bg-emerald-950/60 hover:text-emerald-300 border border-zinc-700/80 hover:border-emerald-700/60 transition-colors"
            >
              <span>Full Professional Bio</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
