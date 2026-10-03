import React from "react";
import { Mail, ArrowRight, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function ContactCTA() {
  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-28 xl:py-32 bg-transparent relative overflow-hidden">
      <Container size="default">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 sm:p-10 lg:p-12 xl:p-14 backdrop-blur-md shadow-2xl relative overflow-hidden">
          {/* Subtle multi-color background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl space-y-5 sm:space-y-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-wider text-gradient-emerald-cyan">
              05 · Contact
            </p>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
              Let&apos;s build something <span className="text-gradient-emerald-cyan">reliable</span>.
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              If your team needs dependable embedded firmware, industrial IoT, or full-stack systems engineering — let&apos;s discuss.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
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
                Contact Form
              </Button>
            </div>

            {/* Compact social links */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400 pt-2">
              <a
                href="https://github.com/soumikbur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-100 transition-colors flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-zinc-600"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>GitHub</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </a>
              <a
                href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-100 transition-colors flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-zinc-950 border border-zinc-800 hover:border-blue-700/60 text-blue-300/90"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </a>

              <span className="text-zinc-500 text-[11px] ml-2 hidden sm:inline">
                Typically replies within 24 hours
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
