"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Terminal } from "lucide-react";
import { LinkedinIcon } from "../ui/Icons";
import { Container } from "../ui/Container";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Overview", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/projects") {
      return pathname === "/projects" || pathname.startsWith("/projects/");
    }
    return pathname === href;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-md">
      <Container size="default">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-zinc-100 hover:text-white transition-colors"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded border border-zinc-700 bg-zinc-900 group-hover:border-zinc-500 transition-colors">
              <Terminal className="h-4 w-4 text-zinc-300 group-hover:text-white transition-colors" />
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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    active
                      ? "text-zinc-100 bg-zinc-800/90 border border-zinc-700/70"
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
              href="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded bg-zinc-100 text-zinc-950 hover:bg-white transition-colors font-semibold"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 cursor-pointer"
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
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium rounded-md ${
                  isActive(link.href)
                    ? "text-zinc-100 bg-zinc-800"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-zinc-800 mt-2 space-y-2">
              <a
                href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold px-4 py-3 rounded border border-zinc-800 bg-zinc-900 text-zinc-300 hover:text-white"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </a>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 text-xs font-semibold px-4 py-3 rounded bg-zinc-100 text-zinc-950 hover:bg-white"
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
