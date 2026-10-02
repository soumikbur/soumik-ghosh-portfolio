"use client";

import React, { useState } from "react";
import { Mail, CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [projectType, setProjectType] = useState("Full-Stack Business Application");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="relative py-16 sm:py-24 lg:py-28 xl:py-32 2xl:py-36 bg-transparent text-zinc-100 overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <Container size="default" className="relative z-10">
        <SectionHeader
          badge="Direct Inquiries"
          badgeVariant="emerald"
          title="Get in Touch"
          description="Have an embedded software project, internal business application, telemetry system, or backend infrastructure to engineer? Contact me directly or submit a project message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Message Form */}
          <div className="lg:col-span-7 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 sm:p-8 backdrop-blur-sm">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4 font-mono text-xs">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-sans font-semibold text-zinc-100">
                  Message Sent
                </h3>
                <p className="text-zinc-400 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. I review all technical inquiries and reply promptly via email.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2">
                    Project / Inquiry Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      "Full-Stack Business Application",
                      "Inventory & Fulfillment System",
                      "Dashboard / Analytics Platform",
                      "Embedded Software & Systems"
                    ].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`p-3 rounded border text-left transition-colors cursor-pointer ${
                          projectType === type
                            ? "border-emerald-500/80 bg-emerald-950/20 text-emerald-200 font-medium"
                            : "border-zinc-800 bg-zinc-950/60 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Alex Miller"
                      className="w-full rounded border border-zinc-800 bg-zinc-950/80 px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-600 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      className="w-full rounded border border-zinc-800 bg-zinc-950/80 px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:border-zinc-600 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="problem"
                    className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-1.5"
                  >
                    System Details or Requirements
                  </label>
                  <textarea
                    id="problem"
                    required
                    rows={4}
                    placeholder="Describe what you are looking to build: e.g. system architecture, inventory/order logic, database needs, APIs, or embedded requirements..."
                    className="w-full rounded border border-zinc-800 bg-zinc-950/80 px-3.5 py-2.5 text-xs text-zinc-100 placeholder:text-zinc-600 focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 focus:outline-none resize-none leading-relaxed transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 rounded bg-emerald-500 py-3 text-xs font-semibold text-zinc-950 hover:bg-emerald-400 shadow-md shadow-emerald-500/20 transition-all cursor-pointer"
                >
                  <span>Submit Message</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Channels & Engineering Commitments */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-6 space-y-4 font-mono text-xs">
              <div className="text-zinc-300 font-semibold uppercase tracking-wider flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                <span>Direct Channels</span>
              </div>
              <div className="space-y-3 text-zinc-400">
                <a
                  href="mailto:soumik.bur@gmail.com"
                  className="flex items-center gap-2.5 text-zinc-200 hover:text-cyan-300 transition-colors group"
                >
                  <Mail className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <span>soumik.bur@gmail.com</span>
                </a>
                <a
                  href="https://github.com/soumikbur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-zinc-200 hover:text-violet-300 transition-colors group"
                >
                  <GithubIcon className="h-4 w-4 text-violet-400 group-hover:scale-110 transition-transform" />
                  <span>github.com/soumikbur</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-zinc-200 hover:text-emerald-300 transition-colors min-w-0 group"
                >
                  <LinkedinIcon className="h-4 w-4 text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="truncate">linkedin.com/in/soumik-ghosh</span>
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 sm:p-6 space-y-4">
              <div className="flex items-center gap-2 text-zinc-300 font-mono text-xs uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>Engineering Standards</span>
              </div>
              <ul className="space-y-3 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-100">Practical Problem Solving:</strong> Systems engineered to solve specific operational bottlenecks without unnecessary framework bloat.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-100">Reliable Architectures:</strong> ACID database transactions, relational constraints, and explicit role permissions.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-zinc-100">Automated Testing:</strong> Browser-based Playwright suites and unit validation to prevent regressions.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
