"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface GsapRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function GsapReveal({
  children,
  delay = 0,
  className = ""
}: GsapRevealProps) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elRef.current) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      return;
    }

    const element = elRef.current;
    let observer: IntersectionObserver | null = null;
    let ctx: gsap.Context | null = null;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && element) {
            ctx = gsap.context(() => {
              gsap.fromTo(
                element,
                { opacity: 0, y: 16 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  delay,
                  ease: "power2.out"
                }
              );
            });
            if (observer) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold: 0.08 }
    );

    observer.observe(element);

    return () => {
      if (observer) observer.disconnect();
      if (ctx) ctx.revert();
    };
  }, [delay]);

  return (
    <div ref={elRef} className={className}>
      {children}
    </div>
  );
}
