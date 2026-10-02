"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../ui/Icons";
import { Container } from "../ui/Container";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/#projects" && (pathname === "/projects" || pathname.startsWith("/projects/"))) {
      return true;
    }
    if (href === "/#about" && pathname === "/about") {
      return true;
    }
    if (href === "/#contact" && pathname === "/contact") {
      return true;
    }
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
      <Container size="default">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded border border-zinc-700 bg-zinc-900 group-hover:border-zinc-500 transition-colors">
              <Terminal className="h-4 w-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight">
                Soumik Ghosh
              </span>
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                Embedded Software Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation: Clean Section Links */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    active
                      ? "text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 font-semibold"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Status Badge */}
          <div className="hidden md:flex items-center gap-2.5">
            <div className="flex items-center gap-2 px-2.5 py-1 rounded border border-emerald-900/60 bg-emerald-950/40 text-[11px] font-mono text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Panorama Electronics</span>
            </div>
            <a
              href="https://github.com/soumikbur"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Soumik Ghosh GitHub"
              title="GitHub Profile"
            >
              <GithubIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Soumik Ghosh LinkedIn"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-sm shadow-emerald-500/20 transition-all"
            >
              <span>Contact</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-800 py-3 px-2 space-y-1 bg-zinc-950 animate-[slideDown_0.2s_ease-out]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-mono rounded-md min-h-[44px] flex items-center ${
                  isActive(link.href)
                    ? "text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 font-semibold"
                    : "text-zinc-300 hover:text-white hover:bg-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-zinc-800 mt-2 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://github.com/soumikbur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-xs font-mono px-3 py-2.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white min-h-[44px]"
                >
                  <GithubIcon className="h-3.5 w-3.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 text-xs font-mono px-3 py-2.5 rounded border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white min-h-[44px]"
                >
                  <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
                  <span>LinkedIn</span>
                </a>
              </div>
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold px-4 py-3 rounded bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-sm shadow-emerald-500/20 min-h-[44px] transition-all"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
