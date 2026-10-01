import React from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/Icons";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-zinc-950">
      <Container size="default">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-8 sm:p-12 backdrop-blur-md">
          <div className="max-w-3xl">
            <span className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              Direct Contact
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-zinc-100 mt-2">
              Have a software system that needs to be built?
            </h2>
            <p className="mt-4 text-base text-zinc-400 leading-relaxed">
              I build practical software systems that solve real operational and business problems.
              Whether you need full-stack business applications, backend REST APIs, inventory and order fulfillment portals, or embedded software engineering, get in touch to discuss your technical requirements.
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Practical System Architecture
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                ACID Database Integrity
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Automated Testing & Delivery
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" icon={<ArrowRight className="h-4 w-4" />}>
                Send a Message
              </Button>
              <Button
                href="mailto:soumik.bur@gmail.com"
                variant="outline"
                size="lg"
                icon={<Mail className="h-4 w-4" />}
                external
              >
                soumik.bur@gmail.com
              </Button>
            </div>

            <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center gap-6 text-xs text-zinc-400">
              <a
                href="https://github.com/soumikbur"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-200 transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="h-3.5 w-3.5" />
                <span>github.com/soumikbur</span>
              </a>
              <a
                href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-zinc-200 transition-colors flex items-center gap-1.5"
              >
                <LinkedinIcon className="h-3.5 w-3.5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
