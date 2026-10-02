import React from "react";
import { Mail, ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function ContactCTA() {
  return (
    <section id="contact" className="py-14 sm:py-24 bg-zinc-950">
      <Container size="default">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-emerald-400">
              05 · Contact
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-2">
              Let&apos;s build something <span className="text-emerald-400">reliable</span>.
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
              I engineer deterministic embedded firmware, industrial SCADA systems, connected IoT telemetry, and operational full-stack applications. If your team needs dependable systems engineering with zero-compromise timing and data integrity, let&apos;s discuss.
            </p>

            <div className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                Deterministic Firmware
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                Modbus &amp; Cellular Fieldbuses
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                ACID Ledger Guarantees
              </span>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <Button
                href="mailto:soumik.bur@gmail.com"
                variant="primary"
                size="lg"
                icon={<Mail className="h-4 w-4" />}
                external
              >
                soumik.bur@gmail.com
              </Button>
              <Button href="/contact" variant="outline" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Detailed Contact Form
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono text-zinc-400">
              <a
                href="https://github.com/soumikbur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-100 transition-colors flex items-center gap-1.5 py-1 px-2 rounded bg-zinc-950 border border-zinc-800"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>github.com/soumikbur</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </a>
              <a
                href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-100 transition-colors flex items-center gap-1.5 py-1 px-2 rounded bg-zinc-950 border border-zinc-800"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
