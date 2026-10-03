"use client";

import React, { useRef, useEffect, useCallback } from "react";

export type TiltAccentColor = "emerald" | "cyan" | "blue" | "violet" | "amber" | "neutral" | "none";

export interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  maxTilt?: number; // In degrees, default: 1.5 (subtle, text-readable range)
  scale?: number; // Hover scale, default: 1.005 (barely perceptible)
  perspective?: number; // Perspective distance in px, default: 1000
  glare?: boolean; // Enable cursor-following specular sheen
  glareMaxOpacity?: number; // Specular highlight opacity, default: 0.14
  accentGlow?: TiltAccentColor; // Ambient accent glow color
  reverse?: boolean; // Invert tilt direction
  disabled?: boolean;
}

const GLOW_COLORS: Record<TiltAccentColor, string> = {
  emerald: "rgba(16, 185, 129, 0.20)",
  cyan: "rgba(6, 182, 212, 0.20)",
  blue: "rgba(59, 130, 246, 0.20)",
  violet: "rgba(139, 92, 246, 0.20)",
  amber: "rgba(245, 158, 11, 0.20)",
  neutral: "rgba(255, 255, 255, 0.08)",
  none: "transparent",
};

/**
 * TiltCard: High-performance cursor-position-based 3D tilt interaction component.
 * Uses requestAnimationFrame interpolation (lerp) and direct CSS transforms without triggering
 * React re-renders during mouse movements. Automatically disabled on touch & reduced-motion.
 */
export function TiltCard({
  children,
  className = "",
  as: Component = "div",
  maxTilt = 1.5,
  scale = 1.005,
  perspective = 1000,
  glare = true,
  glareMaxOpacity = 0.14,
  accentGlow = "emerald",
  reverse = false,
  disabled = false,
  ...restProps
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Animation state in mutable refs to avoid React re-render lag
  const targetRef = useRef({
    rotX: 0,
    rotY: 0,
    scale: 1,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
    isHovering: false,
  });

  const currentRef = useRef({
    rotX: 0,
    rotY: 0,
    scale: 1,
    glareX: 50,
    glareY: 50,
    glareOpacity: 0,
  });

  const rafId = useRef<number | null>(null);

  const startLoop = useCallback(() => {
    if (rafId.current !== null) return;

    const render = () => {
      const target = targetRef.current;
      const current = currentRef.current;

      // Easing interpolation factor: 0.14 for fluid, organic damping without jitter or lag
      const lerp = 0.14;
      current.rotX += (target.rotX - current.rotX) * lerp;
      current.rotY += (target.rotY - current.rotY) * lerp;
      current.scale += (target.scale - current.scale) * lerp;
      current.glareX += (target.glareX - current.glareX) * lerp;
      current.glareY += (target.glareY - current.glareY) * lerp;
      current.glareOpacity += (target.glareOpacity - current.glareOpacity) * lerp;

      // Apply 3D transform directly to DOM
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(${perspective}px) rotateX(${current.rotX.toFixed(
          2
        )}deg) rotateY(${current.rotY.toFixed(2)}deg) scale3d(${current.scale.toFixed(
          3
        )}, ${current.scale.toFixed(3)}, 1)`;
      }

      // Update cursor-following specular sheen
      if (glareRef.current && glare) {
        glareRef.current.style.opacity = current.glareOpacity.toFixed(3);
        glareRef.current.style.background = `radial-gradient(circle 340px at ${current.glareX.toFixed(
          1
        )}% ${current.glareY.toFixed(1)}%, rgba(255, 255, 255, 0.18) 0%, transparent 75%)`;
      }

      // Update subtle colored accent glow
      if (glowRef.current && accentGlow !== "none") {
        glowRef.current.style.opacity = (current.glareOpacity * 1.4).toFixed(3);
        glowRef.current.style.background = `radial-gradient(circle 420px at ${current.glareX.toFixed(
          1
        )}% ${current.glareY.toFixed(1)}%, ${GLOW_COLORS[accentGlow]} 0%, transparent 80%)`;
      }

      // Check if animation has settled back to flat resting state
      const isResting =
        !target.isHovering &&
        Math.abs(target.rotX - current.rotX) < 0.02 &&
        Math.abs(target.rotY - current.rotY) < 0.02 &&
        Math.abs(target.scale - current.scale) < 0.002 &&
        current.glareOpacity < 0.005;

      if (isResting) {
        current.rotX = 0;
        current.rotY = 0;
        current.scale = 1;
        current.glareOpacity = 0;
        if (cardRef.current) {
          cardRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        }
        if (glareRef.current) {
          glareRef.current.style.opacity = "0";
        }
        if (glowRef.current) {
          glowRef.current.style.opacity = "0";
        }
        rafId.current = null;
        return;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);
  }, [perspective, glare, accentGlow]);

  useEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl || disabled) return;

    // Check device capabilities (disable on touch / coarse pointers and reduced motion)
    const isFinePointer = window.matchMedia("(pointer: fine) and (hover: hover)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!isFinePointer || prefersReducedMotion) {
      return;
    }

    const onPointerEnter = () => {
      targetRef.current.isHovering = true;
      targetRef.current.scale = scale;
      startLoop();
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!targetRef.current.isHovering) {
        targetRef.current.isHovering = true;
        targetRef.current.scale = scale;
        startLoop();
      }

      const rect = cardEl.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const clientX = e.clientX;
      const clientY = e.clientY;

      const relX = clientX - rect.left;
      const relY = clientY - rect.top;

      // Normalized coordinates from -1 to 1:
      // normX: -1 (left) to 1 (right)
      // normY: -1 (top) to 1 (bottom)
      const normX = Math.max(-1, Math.min(1, (relX / rect.width - 0.5) * 2));
      const normY = Math.max(-1, Math.min(1, (relY / rect.height - 0.5) * 2));

      // Default: Card rotates toward cursor position (faces cursor direction)
      // Cursor ↑ left  -> rotX negative, rotY positive -> tilts toward upper-left
      // Cursor ↑ right -> rotX negative, rotY negative -> tilts toward upper-right
      // Cursor ↓ left  -> rotX positive, rotY positive -> tilts toward lower-left
      // Cursor ↓ right -> rotX positive, rotY negative -> tilts toward lower-right
      const dir = reverse ? -1 : 1;
      targetRef.current.rotX = normY * maxTilt * dir;
      targetRef.current.rotY = -normX * maxTilt * dir;

      // Cursor position in percentage for glare / ambient light reflection
      targetRef.current.glareX = Math.round((relX / rect.width) * 100);
      targetRef.current.glareY = Math.round((relY / rect.height) * 100);
      targetRef.current.glareOpacity = glareMaxOpacity;
    };

    const onPointerLeave = () => {
      targetRef.current.isHovering = false;
      targetRef.current.rotX = 0;
      targetRef.current.rotY = 0;
      targetRef.current.scale = 1;
      targetRef.current.glareOpacity = 0;
      startLoop();
    };

    cardEl.addEventListener("pointerenter", onPointerEnter, { passive: true });
    cardEl.addEventListener("pointermove", onPointerMove, { passive: true });
    cardEl.addEventListener("pointerleave", onPointerLeave, { passive: true });

    return () => {
      cardEl.removeEventListener("pointerenter", onPointerEnter);
      cardEl.removeEventListener("pointermove", onPointerMove);
      cardEl.removeEventListener("pointerleave", onPointerLeave);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };
  }, [disabled, maxTilt, scale, reverse, glareMaxOpacity, startLoop]);

  return (
    <Component
      ref={cardRef as unknown as React.Ref<HTMLDivElement>}
      data-cursor="card"
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
      }}
      className={`relative will-change-transform transform-gpu ${className}`}
      {...restProps}
    >
      {/* Specular Glare / Reflection Layer */}
      {glare && (
        <div
          ref={glareRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] overflow-hidden opacity-0 transition-opacity duration-150"
        />
      )}

      {/* Subtle Color Accent Ambient Glow Layer */}
      {accentGlow !== "none" && (
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] overflow-hidden opacity-0 transition-opacity duration-150"
        />
      )}

      {/* Card Content (z-20 ensures all links, buttons, and text remain fully clickable) */}
      <div className="relative z-20 h-full flex flex-col justify-between">
        {children}
      </div>
    </Component>
  );
}
