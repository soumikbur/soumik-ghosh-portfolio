"use client";

import React, { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isNavigatingRef = useRef(false);
  const previousPathnameRef = useRef(pathname);

  // Handle Entrance Transition & Scroll Reset when pathname changes
  useEffect(() => {
    isNavigatingRef.current = false;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Reset scroll to top smoothly on new route
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    if (prefersReducedMotion) {
      if (containerRef.current) {
        gsap.set(containerRef.current, { opacity: 1, y: 0 });
      }
      previousPathnameRef.current = pathname;
      return;
    }

    // If it's the very first page load, ensure clean initial visibility
    if (previousPathnameRef.current === pathname) {
      if (containerRef.current) {
        gsap.set(containerRef.current, { opacity: 1, y: 0 });
      }
      return;
    }

    previousPathnameRef.current = pathname;

    // Run Enter Transition on new page
    if (containerRef.current) {
      const isMobile = window.innerWidth < 640;
      const enterY = isMobile ? 8 : 12;
      const enterDuration = isMobile ? 0.3 : 0.35;

      const ctx = gsap.context(() => {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0, y: enterY },
          {
            opacity: 1,
            y: 0,
            duration: enterDuration,
            ease: "power2.out",
            clearProps: "transform" // clear inline transform to preserve stacking contexts
          }
        );
      }, containerRef);

      return () => ctx.revert();
    }
  }, [pathname]);

  // Intercept local link clicks for smooth Exit Transition
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      // Find closest anchor tag
      const target = e.target as HTMLElement | null;
      const link = target?.closest("a") as HTMLAnchorElement | null;
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto, tel, target="_blank", download
      if (
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        href.startsWith("http://") ||
        href.startsWith("https://") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      // Ignore modifier keys for new tabs / windows
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      // Ignore pure hash links on current page e.g. "#projects"
      if (href.startsWith("#")) return;

      try {
        const dest = new URL(link.href, window.location.origin);
        const currentPath = window.location.pathname;

        // If navigating to an anchor on current page e.g. "/#projects" — let browser handle it
        if (dest.pathname === currentPath && dest.hash) {
          return;
        }

        // If clicking link to the exact same page with no hash (e.g. logo/home click),
        // scroll to top and reset hash — don't re-animate the page transition
        if (dest.pathname === currentPath && !dest.hash) {
          e.preventDefault();
          const prefersRM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
          window.history.replaceState(null, "", dest.pathname);
          window.scrollTo({ top: 0, left: 0, behavior: prefersRM ? "instant" : "smooth" });
          return;
        }

        // Check prefers-reduced-motion
        const prefersReducedMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
          // Allow normal instantaneous navigation without animation
          return;
        }

        // Prevent instant page jump
        e.preventDefault();

        // If already navigating, prevent duplicate triggers
        if (isNavigatingRef.current) return;
        isNavigatingRef.current = true;

        const isMobile = window.innerWidth < 640;
        const exitY = isMobile ? -6 : -8;
        const exitDuration = isMobile ? 0.14 : 0.16;

        if (containerRef.current) {
          gsap.to(containerRef.current, {
            opacity: 0,
            y: exitY,
            duration: exitDuration,
            ease: "power2.inOut",
            onComplete: () => {
              router.push(href);
            }
          });
        } else {
          router.push(href);
        }
      } catch {
        // Fallback to default browser navigation if URL parsing fails
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [router]);

  return (
    <div ref={containerRef} className="w-full flex-1 flex flex-col will-change-[opacity,transform]">
      {children}
    </div>
  );
}
