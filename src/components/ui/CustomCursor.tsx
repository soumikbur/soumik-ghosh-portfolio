"use client";

import React, { useEffect, useState, useRef, useSyncExternalStore } from "react";

function subscribePointerMatch(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mqFine = window.matchMedia("(pointer: fine) and (hover: hover)");
  const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  mqFine.addEventListener("change", callback);
  mqMotion.addEventListener("change", callback);
  return () => {
    mqFine.removeEventListener("change", callback);
    mqMotion.removeEventListener("change", callback);
  };
}

function getPointerSnapshot() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia("(pointer: fine) and (hover: hover)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

function getServerSnapshot() {
  return false;
}

export function CustomCursor() {
  const isDesktop = useSyncExternalStore(
    subscribePointerMatch,
    getPointerSnapshot,
    getServerSnapshot
  );

  const [isVisible, setIsVisible] = useState(false);
  const [cursorType, setCursorType] = useState<"default" | "pointer" | "card">("default");

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const cursorTypeRef = useRef<"default" | "pointer" | "card">("default");
  const isClickingRef = useRef(false);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!isDesktop) return;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      setIsVisible((prev) => {
        if (!prev) {
          ringPos.current.x = e.clientX;
          ringPos.current.y = e.clientY;
          return true;
        }
        return prev;
      });
    };

    const onMouseDown = () => {
      isClickingRef.current = true;
    };

    const onMouseUp = () => {
      isClickingRef.current = false;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = target.closest(
        'a, button, [role="button"], input, textarea, select, .touch-target, [data-cursor="pointer"]'
      );
      const isCard = target.closest(
        'article, [data-cursor="card"], .glow-card-emerald, .glow-card-cyan'
      );

      let nextType: "default" | "pointer" | "card" = "default";
      if (isInteractive) {
        nextType = "pointer";
      } else if (isCard) {
        nextType = "card";
      }

      if (cursorTypeRef.current !== nextType) {
        cursorTypeRef.current = nextType;
        setCursorType(nextType);
      }
    };

    const onMouseLeaveWindow = () => setIsVisible(false);
    const onMouseEnterWindow = () => setIsVisible(true);

    // Smooth physics loop for the visible follower and central dot
    const renderLoop = () => {
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      const currentType = cursorTypeRef.current;
      const clicking = isClickingRef.current;

      if (ringRef.current) {
        let ringScale = 1;
        if (currentType === "pointer") ringScale = 1.38;
        else if (currentType === "card") ringScale = 1.2;

        if (clicking) ringScale *= 0.85;

        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      }

      if (dotRef.current) {
        let dotScale = 1;
        if (currentType === "pointer") dotScale = 1.25;
        if (clicking) dotScale = 0.8;

        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%) scale(${dotScale})`;
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
  }, [isDesktop]);

  if (!isDesktop) return null;

  // Noticeable yet elegant styling using emerald & cyan portfolio accents
  const ringVariantStyles = {
    default: "border-emerald-400/60 bg-emerald-500/10 shadow-[0_0_12px_rgba(16,185,129,0.35)]",
    pointer: "border-cyan-400 bg-cyan-400/20 shadow-[0_0_18px_rgba(6,182,212,0.55)] ring-1 ring-cyan-400/40",
    card: "border-emerald-400/80 bg-emerald-500/15 shadow-[0_0_14px_rgba(16,185,129,0.4)]",
  };

  const dotVariantStyles = {
    default: "bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.9)]",
    pointer: "bg-cyan-300 shadow-[0_0_10px_rgba(6,182,212,1)]",
    card: "bg-emerald-300 shadow-[0_0_8px_rgba(16,185,129,0.9)]",
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-300 custom-cursor-container"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      {/* Noticeable Trailing Follower Ring (32px diameter) */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 h-8 w-8 rounded-full border transition-[border-color,background-color,box-shadow] duration-200 ease-out will-change-transform ${ringVariantStyles[cursorType]}`}
      />

      {/* Small Central Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 h-1.5 w-1.5 rounded-full transition-[background-color,box-shadow] duration-150 will-change-transform ${dotVariantStyles[cursorType]}`}
      />
    </div>
  );
}
