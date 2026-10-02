import React from "react";
import Link from "next/link";
import { Terminal, Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800/80 bg-zinc-950/90 py-10 sm:py-16 text-zinc-400">
      <Container size="default">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-12">
          {/* Column 1: Moniker & Positioning */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-zinc-100">
              <div className="flex h-7 w-7 items-center justify-center rounded border border-zinc-700 bg-zinc-900">
                <Terminal className="h-3.5 w-3.5 text-emerald-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-tight">
                  Soumik Ghosh
                </span>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                  Embedded Software Developer
                </span>
              </div>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Engineering practical software systems across real-time embedded firmware, industrial SCADA, Quectel 4G LTE telemetry, and operational full-stack platforms.
            </p>
            <p className="text-[11px] font-mono text-zinc-400">
              // Deterministic firmware · Reliable telemetry · Zero-compromise engineering.
            </p>
          </div>

          {/* Column 2: Navigation Sections */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Sections
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/#about" className="hover:text-emerald-400 transition-colors">
                  01 · About
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-emerald-400 transition-colors">
                  02 · Experience
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-emerald-400 transition-colors">
                  03 · Projects
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="hover:text-emerald-400 transition-colors">
                  04 · Skills
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-emerald-400 transition-colors">
                  05 · Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Systems */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Verified Systems
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/projects/panorama-water-tank"
                  className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1"
                >
                  Panorama Water Tank (ESP32 / SCADA)
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/railway-telemetry-wli"
                  className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1"
                >
                  Railway Telemetry Unit (STM32)
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/apexflow"
                  className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1"
                >
                  ApexFlow Inventory Platform
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects/business-dashboard"
                  className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1"
                >
                  Business Analytics Dashboard
                  <ArrowUpRight className="h-3 w-3 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-300">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="mailto:soumik.bur@gmail.com"
                  className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="h-3.5 w-3.5 text-zinc-400" />
                  soumik.bur@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/soumikbur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <GithubIcon className="h-3.5 w-3.5 text-zinc-400" />
                  github.com/soumikbur
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-zinc-200 transition-colors inline-flex items-center gap-1.5"
                >
                  <LinkedinIcon className="h-3.5 w-3.5 text-zinc-400" />
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[11px] font-mono text-zinc-400">
          <div>Soumik Ghosh — Embedded Software Developer @ Panorama Electronics</div>
          <div>Next.js 16 · TypeScript · Tailwind CSS · GSAP</div>
        </div>
      </Container>
    </footer>
  );
}
