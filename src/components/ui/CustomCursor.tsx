"use client";

import React, { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "card">("default");
  const [isClicking, setIsClicking] = useState(false);

  const ringRef = useRef<HTMLDivElement>(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop devices with fine pointer (mouse/trackpad) and hover capability
    const hasFinePointer = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    setMounted(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisible) {
        setIsVisible(true);
        ringPos.current.x = e.clientX;
        ringPos.current.y = e.clientY;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select, .touch-target, [data-cursor="pointer"]'
      );
      const isCard = target.closest(
        'article, [data-cursor="card"], .glow-card-emerald, .glow-card-cyan'
      );

      if (isInteractive) {
        setCursorType("pointer");
      } else if (isCard) {
        setCursorType("card");
      } else {
        setCursorType("default");
      }
    };

    const onMouseLeaveWindow = () => setIsVisible(false);
    const onMouseEnterWindow = () => setIsVisible(true);

    // Smooth physics loop for the understated follower
    const renderLoop = () => {
      // Gentle linear interpolation (lerp: 0.15 for subtle, silky lag)
      const lerp = 0.15;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        let scale = 1;
        if (cursorType === "pointer") scale = 1.2;
        else if (cursorType === "card") scale = 1.1;

        if (isClicking) scale *= 0.9;

        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${scale})`;
      }

      rafId.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseleave", onMouseLeaveWindow);
    document.addEventListener("mouseenter", onMouseEnterWindow);

    rafId.current = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", onMouseLeaveWindow);
      document.removeEventListener("mouseenter", onMouseEnterWindow);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible, cursorType, isClicking]);

  if (!mounted) return null;

  // Understated micro-interaction styling
  const ringVariantStyles = {
    default: "border-emerald-500/30 bg-emerald-500/[0.02] shadow-[0_0_8px_rgba(16,185,129,0.18)]",
    pointer: "border-cyan-400/50 bg-cyan-400/[0.06] shadow-[0_0_12px_rgba(6,182,212,0.25)]",
    card: "border-emerald-400/40 bg-emerald-500/[0.04] shadow-[0_0_10px_rgba(16,185,129,0.2)]",
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 custom-cursor-container"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Small, understated follower aura (20px diameter) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 h-5 w-5 rounded-full border transition-[border-color,background-color,box-shadow] duration-200 ease-out will-change-transform ${ringVariantStyles[cursorType]}`}
      />
    </div>
  );
}
