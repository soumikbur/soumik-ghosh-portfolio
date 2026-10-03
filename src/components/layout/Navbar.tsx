"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, RotateCcw } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "../ui/Icons";
import { Container } from "../ui/Container";

interface NavSection {
  id: string;
  label: string;
  shortLabel: string;
  href: string;
}

const SECTIONS: NavSection[] = [
  { id: "home", label: "Home", shortLabel: "HOME", href: "/" },
  { id: "about", label: "About", shortLabel: "ABOUT", href: "/#about" },
  { id: "experience", label: "Experience", shortLabel: "EXP.", href: "/#experience" },
  { id: "projects", label: "Projects", shortLabel: "PROJECTS", href: "/#projects" },
  { id: "contact", label: "Contact", shortLabel: "CONTACT", href: "/#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();

  // Clean page reload handler using native browser reload
  const handleReload = () => {
    window.location.reload();
  };

  // Smooth scroll to target section accounting for the sticky navbar height
  const scrollToSection = useCallback(
    (e: React.MouseEvent, sectionId: string) => {
      if (pathname !== "/") {
        // On subpages, allow normal anchor/page navigation
        return;
      }

      e.preventDefault();
      setMobileMenuOpen(false);

      const prefersRM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (sectionId === "home") {
        window.history.replaceState(null, "", "/");
        window.scrollTo({ top: 0, left: 0, behavior: prefersRM ? "instant" : "smooth" });
        setActiveSection("home");
        return;
      }

      const element = document.getElementById(sectionId);
      if (element) {
        // 72px offset ensures the heading is comfortably below the 64px sticky header
        const targetTop = element.getBoundingClientRect().top + window.scrollY - 72;
        window.history.replaceState(null, "", `/#${sectionId}`);
        window.scrollTo({ top: targetTop, behavior: prefersRM ? "instant" : "smooth" });
        setActiveSection(sectionId);
      }
    },
    [pathname]
  );

  // Active section tracking and scroll adaptation
  useEffect(() => {
    if (pathname !== "/") return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;

          // Hysteresis threshold to switch between top horizontal nav and vertical side rail
          if (scrollY > 280) {
            setIsScrolled(true);
          } else if (scrollY < 220) {
            setIsScrolled(false);
          }

          // In the hero zone, active is always 'home'
          if (scrollY < 260) {
            setActiveSection("home");
            ticking = false;
            return;
          }

          // Check if user has scrolled near the bottom of the page -> 'contact'
          const scrollHeight = document.documentElement.scrollHeight;
          const clientHeight = document.documentElement.clientHeight;
          if (scrollY + clientHeight >= scrollHeight - 80) {
            setActiveSection("contact");
            ticking = false;
            return;
          }

          // Check sections in reverse order to find the currently visible one
          const navOffset = 90;
          for (let i = SECTIONS.length - 1; i >= 0; i--) {
            const sec = SECTIONS[i];
            const el = document.getElementById(sec.id);
            if (el) {
              const top = el.offsetTop - navOffset;
              if (scrollY >= top - 60) {
                setActiveSection(sec.id);
                break;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const isCurrentActive = (sectionId: string, href: string) => {
    if (pathname === "/") {
      return activeSection === sectionId;
    }
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
    <>
      {/* Primary Sticky Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md transition-colors duration-200">
        <Container size="default">
          <div className="flex h-16 items-center justify-between">
            {/* Left Brand Area: Dedicated Refresh Button + Soumik Ghosh Name */}
            <div className="flex items-center gap-3">
              {/* Dedicated Refresh / Reload Button */}
              <div className="relative group/refresh">
                <button
                  type="button"
                  onClick={handleReload}
                  aria-label="Reload page"
                  title="Reload page"
                  className="flex h-8 w-8 items-center justify-center rounded border border-zinc-700 bg-zinc-900 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/60 hover:bg-zinc-850 hover:shadow-[0_0_12px_rgba(16,185,129,0.25)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 cursor-pointer"
                >
                  <RotateCcw className="h-3.5 w-3.5 transition-transform duration-300 group-hover/refresh:-rotate-90 group-active/refresh:rotate-180" />
                  <span className="sr-only">Reload page</span>
                </button>

                {/* Accessible Tooltip */}
                <div
                  role="tooltip"
                  className="pointer-events-none absolute -bottom-8 left-0 z-50 whitespace-nowrap rounded border border-zinc-800 bg-zinc-900/95 px-2 py-0.5 text-[10px] font-mono text-zinc-300 opacity-0 shadow-lg transition-opacity duration-150 group-hover/refresh:opacity-100 group-focus-within/refresh:opacity-100"
                >
                  Reload page
                </div>
              </div>

              {/* Developer Brand / Home Link */}
              <Link
                href="/"
                onClick={(e) => scrollToSection(e, "home")}
                className="group flex flex-col cursor-pointer"
                aria-label="Soumik Ghosh — Back to Home"
              >
                <span className="text-sm font-semibold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
                  Soumik Ghosh
                </span>
                <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider">
                  Embedded Software Developer
                </span>
              </Link>

              {/* Compact Active Section Indicator on Mobile when scrolled */}
              {isScrolled && pathname === "/" && activeSection !== "home" && (
                <span className="md:hidden text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-900/60 flex items-center gap-1 shrink-0 ml-1">
                  <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                  {SECTIONS.find((s) => s.id === activeSection)?.shortLabel || activeSection.toUpperCase()}
                </span>
              )}
            </div>

            {/* Desktop Navigation: Horizontal Links in Top Header (fades out smoothly when scrolled on homepage) */}
            <nav
              aria-label="Main section navigation"
              className={`hidden md:flex items-center gap-1 font-mono text-xs transition-all duration-200 ease-out motion-reduce:transition-none ${
                isScrolled && pathname === "/"
                  ? "opacity-0 -translate-y-1 pointer-events-none scale-95"
                  : "opacity-100 translate-y-0 pointer-events-auto scale-100"
              }`}
            >
              {SECTIONS.map((section) => {
                const active = isCurrentActive(section.id, section.href);
                return (
                  <Link
                    key={section.id}
                    href={section.href}
                    onClick={(e) => scrollToSection(e, section.id)}
                    tabIndex={isScrolled && pathname === "/" ? -1 : 0}
                    aria-current={active ? "true" : undefined}
                    aria-label={`Go to ${section.label} section`}
                    className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
                      active
                        ? "text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 font-semibold"
                        : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60 border border-transparent"
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400`}
                  >
                    {section.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA & Status Badge */}
            <div className="hidden md:flex items-center gap-2.5">
              <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded border border-emerald-900/60 bg-emerald-950/40 text-[11px] font-mono text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Panorama Electronics</span>
              </div>
              <a
                href="https://github.com/soumikbur"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Soumik Ghosh GitHub"
                title="GitHub Profile"
              >
                <GithubIcon className="h-3.5 w-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/soumik-ghosh-883a1a22b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded border border-zinc-800 bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                aria-label="Soumik Ghosh LinkedIn"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="h-3.5 w-3.5 text-[#0a66c2]" />
              </a>
              <Link
                href="/#contact"
                onClick={(e) => scrollToSection(e, "contact")}
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-1.5 rounded bg-emerald-500 text-zinc-950 hover:bg-emerald-400 shadow-sm shadow-emerald-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 cursor-pointer"
              >
                <span>Contact</span>
                <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-zinc-100 cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation Drawer */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-zinc-800 py-3 px-2 space-y-1 bg-zinc-950 animate-[slideDown_0.2s_ease-out]">
              {SECTIONS.map((section) => (
                <Link
                  key={section.id}
                  href={section.href}
                  onClick={(e) => scrollToSection(e, section.id)}
                  className={`block px-4 py-3 text-sm font-mono rounded-md min-h-[44px] flex items-center justify-between ${
                    isCurrentActive(section.id, section.href)
                      ? "text-emerald-400 bg-emerald-950/40 border border-emerald-900/60 font-semibold"
                      : "text-zinc-300 hover:text-white hover:bg-zinc-900"
                  }`}
                >
                  <span>{section.label}</span>
                  {isCurrentActive(section.id, section.href) && (
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  )}
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
                  onClick={(e) => scrollToSection(e, "contact")}
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

      {/* Vertical Side Tab System — Desktop & Tablet only on Homepage */}
      {pathname === "/" && (
        <aside
          aria-label="Section navigation rail"
          className={`hidden md:flex fixed right-3 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end transition-all duration-300 ease-out motion-reduce:transition-none ${
            isScrolled
              ? "opacity-100 translate-x-0 pointer-events-auto scale-100"
              : "opacity-0 translate-x-4 pointer-events-none scale-95"
          }`}
        >
          <div className="flex flex-col gap-1 p-1.5 rounded-xl border border-zinc-800/90 bg-zinc-950/90 backdrop-blur-md shadow-2xl shadow-black/60 ring-1 ring-white/5">
            {/* Rail Micro-Header */}
            <div className="px-2.5 py-1 flex items-center justify-between border-b border-zinc-800/60 mb-0.5">
              <span className="font-mono text-[9px] uppercase tracking-wider text-zinc-400 font-semibold">
                Nav
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            {/* Vertical Section Tabs */}
            {SECTIONS.map((section) => {
              const active = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={(e) => scrollToSection(e, section.id)}
                  tabIndex={isScrolled ? 0 : -1}
                  aria-current={active ? "true" : undefined}
                  aria-label={`Jump to ${section.label} section`}
                  className={`group relative flex items-center justify-between gap-3 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-150 cursor-pointer min-w-[104px] ${
                    active
                      ? "bg-emerald-950/70 text-emerald-300 border border-emerald-700/70 font-semibold shadow-[0_0_12px_-2px_rgba(16,185,129,0.3)]"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/80 border border-transparent"
                  } focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-1 focus-visible:ring-offset-zinc-950`}
                >
                  <span className="tracking-wider">{section.shortLabel}</span>
                  <span
                    className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                      active
                        ? "bg-emerald-400 scale-100 shadow-[0_0_6px_#10b981]"
                        : "bg-zinc-700 scale-75 group-hover:bg-zinc-400"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </aside>
      )}
    </>
  );
}
