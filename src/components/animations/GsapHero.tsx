"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface GsapHeroProps {
  children: React.ReactNode;
}

export function GsapHero({ children }: GsapHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Strict prefers-reduced-motion check
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      // In reduced motion mode, make sure everything is visible without motion
      gsap.set(
        containerRef.current.querySelectorAll(
          ".gsap-hero-badge, .gsap-hero-photo, .gsap-hero-title, .gsap-hero-role, .gsap-hero-desc, .gsap-hero-cta, .gsap-hero-visual"
        ),
        { opacity: 1, y: 0, scale: 1 }
      );
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      tl.fromTo(
        ".gsap-hero-badge",
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.35 }
      )
        .fromTo(
          ".gsap-hero-photo",
          { opacity: 0, scale: 0.94 },
          { opacity: 1, scale: 1, duration: 0.45 },
          "-=0.15"
        )
        .fromTo(
          ".gsap-hero-title",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.25"
        )
        .fromTo(
          ".gsap-hero-role",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.35 },
          "-=0.2"
        )
        .fromTo(
          ".gsap-hero-desc",
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.4 },
          "-=0.2"
        )
        .fromTo(
          ".gsap-hero-cta",
          { opacity: 0, y: 8 },
          { opacity: 1, y: 0, duration: 0.35 },
          "-=0.2"
        )
        .fromTo(
          ".gsap-hero-visual",
          { opacity: 0, scale: 0.98, y: 14 },
          { opacity: 1, scale: 1, y: 0, duration: 0.55 },
          "-=0.15"
        );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
