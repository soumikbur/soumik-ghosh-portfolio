"use client";

import React, { useEffect, useRef } from "react";

interface NetworkNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  parallax: number;
  pulsePhase: number;
}

// Section color palettes [R, G, B]
const SECTION_PALETTES = {
  hero: {
    primary: [16, 185, 129], // Emerald
    secondary: [6, 182, 212], // Cyan
    tertiary: [52, 211, 153], // Mint
  },
  experience: {
    primary: [6, 182, 212], // Cyan
    secondary: [59, 130, 246], // Blue
    tertiary: [14, 165, 233], // Sky
  },
  projects: {
    primary: [16, 185, 129], // Emerald
    secondary: [139, 92, 246], // Violet
    tertiary: [6, 182, 212], // Cyan
  },
  skills: {
    primary: [59, 130, 246], // Blue
    secondary: [139, 92, 246], // Violet
    tertiary: [6, 182, 212], // Cyan
  },
  contact: {
    primary: [16, 185, 129], // Emerald
    secondary: [6, 182, 212], // Cyan
    tertiary: [52, 211, 153], // Mint
  },
};

type SectionKey = keyof typeof SECTION_PALETTES;

/**
 * AmbientBackground: Subtle, continuously running ambient technical background.
 * Features:
 *  - Faint, slowly moving coordinate grid with subtle crosshair intersections.
 *  - Slowly drifting constellation network nodes and connection lines.
 *  - Soft, diffusing radial accent glow pools with section-aware color transitions.
 *  - Slow, atmospheric horizontal energy sweep wave.
 *  - Smooth scroll parallax integration.
 *  - Strict accessibility: respects prefers-reduced-motion (draws static subtle grid/glow).
 *  - High performance: single 2D canvas, capped DPR, 0 React re-renders, pauses when tab is hidden.
 */
export function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);

  // Animation & state refs to avoid React re-renders
  const nodesRef = useRef<NetworkNode[]>([]);
  const scrollTargetRef = useRef(0);
  const scrollCurrentRef = useRef(0);
  const lastSectionCheckRef = useRef(0);
  const currentSectionRef = useRef<SectionKey>("hero");

  // Interpolated colors [R, G, B]
  const currentPrimaryRef = useRef<[number, number, number]>([16, 185, 129]);
  const currentSecondaryRef = useRef<[number, number, number]>([6, 182, 212]);
  const currentTertiaryRef = useRef<[number, number, number]>([52, 211, 153]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = 1;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      // Cap DPR to 1.5 to eliminate excessive fill-rate GPU overhead on 4K/retina displays
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Re-populate network nodes for current viewport size
      const isMobile = width < 640;
      const nodeCount = isMobile ? 22 : 36;
      const nodes: NetworkNode[] = [];

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.28,
          vy: (Math.random() - 0.5) * 0.22,
          radius: 1.0 + Math.random() * 1.3,
          baseAlpha: 0.18 + Math.random() * 0.28,
          parallax: 0.03 + Math.random() * 0.07,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }

      nodesRef.current = nodes;

      // If reduced motion, draw once and exit
      if (prefersReducedMotion) {
        drawStaticBackground();
      }
    };

    const drawStaticBackground = () => {
      ctx.clearRect(0, 0, width, height);

      // Soft static radial glow
      const r1 = Math.max(width, height) * 0.55;
      const grad = ctx.createRadialGradient(width * 0.7, height * 0.3, 0, width * 0.7, height * 0.3, r1);
      grad.addColorStop(0, "rgba(16, 185, 129, 0.07)");
      grad.addColorStop(0.5, "rgba(6, 182, 212, 0.025)");
      grad.addColorStop(1, "rgba(9, 9, 11, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Subtle static grid
      const gridSize = 56;
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.025)";
      ctx.beginPath();
      for (let x = 0; x < width; x += gridSize) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
      }
      ctx.stroke();
    };

    const detectActiveSection = (): SectionKey => {
      const scrollY = window.scrollY;
      const viewportMid = scrollY + window.innerHeight * 0.45;

      const contactEl = document.getElementById("contact");
      if (contactEl && contactEl.offsetTop <= viewportMid) {
        return "contact";
      }

      const skillsEl = document.getElementById("skills");
      if (skillsEl && skillsEl.offsetTop <= viewportMid) {
        return "skills";
      }

      const projectsEl = document.getElementById("projects");
      if (projectsEl && projectsEl.offsetTop <= viewportMid) {
        return "projects";
      }

      const expEl = document.getElementById("experience");
      if (expEl && expEl.offsetTop <= viewportMid) {
        return "experience";
      }

      return "hero";
    };

    const onScroll = () => {
      scrollTargetRef.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize, { passive: true });

    // Initialize dimensions and nodes
    resize();

    if (prefersReducedMotion) {
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", resize);
      };
    }

    // Continuous Animation Loop
    let animationRunning = true;

    const render = (time: number) => {
      if (!animationRunning) return;

      // Smooth scroll parallax lerp
      scrollCurrentRef.current += (scrollTargetRef.current - scrollCurrentRef.current) * 0.08;
      const scrollVal = scrollCurrentRef.current;

      // Periodically check section (every ~200ms)
      if (time - lastSectionCheckRef.current > 200) {
        lastSectionCheckRef.current = time;
        currentSectionRef.current = detectActiveSection();
      }

      // Smooth continuous color morphing toward active section palette
      const targetPalette = SECTION_PALETTES[currentSectionRef.current];
      const lerpFactor = 0.028;

      for (let i = 0; i < 3; i++) {
        currentPrimaryRef.current[i] +=
          (targetPalette.primary[i] - currentPrimaryRef.current[i]) * lerpFactor;
        currentSecondaryRef.current[i] +=
          (targetPalette.secondary[i] - currentSecondaryRef.current[i]) * lerpFactor;
        currentTertiaryRef.current[i] +=
          (targetPalette.tertiary[i] - currentTertiaryRef.current[i]) * lerpFactor;
      }

      const pR = Math.round(currentPrimaryRef.current[0]);
      const pG = Math.round(currentPrimaryRef.current[1]);
      const pB = Math.round(currentPrimaryRef.current[2]);

      const sR = Math.round(currentSecondaryRef.current[0]);
      const sG = Math.round(currentSecondaryRef.current[1]);
      const sB = Math.round(currentSecondaryRef.current[2]);

      const tR = Math.round(currentTertiaryRef.current[0]);
      const tG = Math.round(currentTertiaryRef.current[1]);
      const tB = Math.round(currentTertiaryRef.current[2]);

      ctx.clearRect(0, 0, width, height);

      // 1. Soft Atmospheric Radial Glow Pools (Section-Aware & Slow Diffusing)
      // Glow 1: Top-Right primary accent pool (Emerald / Cyan / Blue)
      const glow1X = width * 0.72 + Math.sin(time * 0.00032) * (width * 0.08);
      const glow1Y =
        height * 0.28 + Math.cos(time * 0.00026) * (height * 0.08) - scrollVal * 0.035;
      const r1 = Math.max(width, height) * 0.48;
      const grad1 = ctx.createRadialGradient(glow1X, glow1Y, 0, glow1X, glow1Y, r1);
      grad1.addColorStop(0, `rgba(${pR}, ${pG}, ${pB}, 0.08)`);
      grad1.addColorStop(0.45, `rgba(${pR}, ${pG}, ${pB}, 0.028)`);
      grad1.addColorStop(1, "rgba(9, 9, 11, 0)");
      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(glow1X, glow1Y, r1, 0, Math.PI * 2);
      ctx.fill();

      // Glow 2: Bottom-Left secondary accent pool (Cyan / Blue / Violet)
      const glow2X = width * 0.25 + Math.cos(time * 0.00028) * (width * 0.07);
      const glow2Y =
        height * 0.75 + Math.sin(time * 0.00022) * (height * 0.07) - scrollVal * 0.025;
      const r2 = Math.max(width, height) * 0.52;
      const grad2 = ctx.createRadialGradient(glow2X, glow2Y, 0, glow2X, glow2Y, r2);
      grad2.addColorStop(0, `rgba(${sR}, ${sG}, ${sB}, 0.07)`);
      grad2.addColorStop(0.5, `rgba(${sR}, ${sG}, ${sB}, 0.02)`);
      grad2.addColorStop(1, "rgba(9, 9, 11, 0)");
      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(glow2X, glow2Y, r2, 0, Math.PI * 2);
      ctx.fill();

      // Glow 3: Center-Left tertiary soft diffusion pool (Mint / Sky / Violet)
      const glow3X = width * 0.48 + Math.sin(time * 0.0002) * (width * 0.12);
      const glow3Y =
        height * 0.5 + Math.cos(time * 0.00018) * (height * 0.12) - scrollVal * 0.02;
      const r3 = Math.max(width, height) * 0.55;
      const grad3 = ctx.createRadialGradient(glow3X, glow3Y, 0, glow3X, glow3Y, r3);
      grad3.addColorStop(0, `rgba(${tR}, ${tG}, ${tB}, 0.045)`);
      grad3.addColorStop(0.5, `rgba(${tR}, ${tG}, ${tB}, 0.012)`);
      grad3.addColorStop(1, "rgba(9, 9, 11, 0)");
      ctx.fillStyle = grad3;
      ctx.beginPath();
      ctx.arc(glow3X, glow3Y, r3, 0, Math.PI * 2);
      ctx.fill();

      // 2. Slow-Moving Atmospheric Energy Wave Sweep
      const sweepPeriod = 24000; // 24 seconds
      const sweepProgress = (time % sweepPeriod) / sweepPeriod;
      const sweepY = sweepProgress * (height + 300) - 150;
      const waveGrad = ctx.createLinearGradient(0, sweepY - 90, 0, sweepY + 90);
      waveGrad.addColorStop(0, `rgba(${pR}, ${pG}, ${pB}, 0)`);
      waveGrad.addColorStop(0.5, `rgba(${pR}, ${pG}, ${pB}, 0.025)`);
      waveGrad.addColorStop(1, `rgba(${pR}, ${pG}, ${pB}, 0)`);
      ctx.fillStyle = waveGrad;
      ctx.fillRect(0, sweepY - 90, width, 180);

      // 3. Faint Moving Technical Coordinate Grid
      const gridSize = 56;
      const gridOffsetX = (time * 0.004) % gridSize;
      const gridOffsetY = (time * 0.008 + scrollVal * 0.05) % gridSize;

      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.022)";
      ctx.beginPath();

      for (let x = -gridOffsetX; x < width + gridSize; x += gridSize) {
        const lineX = Math.floor(x) + 0.5;
        ctx.moveTo(lineX, 0);
        ctx.lineTo(lineX, height);
      }
      for (let y = -gridOffsetY; y < height + gridSize; y += gridSize) {
        const lineY = Math.floor(y) + 0.5;
        ctx.moveTo(0, lineY);
        ctx.lineTo(width, lineY);
      }
      ctx.stroke();

      // Subtle Crosshair Intersections (+) every 2 grid intervals
      const crossStep = gridSize * 2;
      const crossStartX = -((time * 0.004) % crossStep);
      const crossStartY = -((time * 0.008 + scrollVal * 0.05) % crossStep);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.04)";
      ctx.beginPath();
      for (let x = crossStartX; x < width + crossStep; x += crossStep) {
        for (let y = crossStartY; y < height + crossStep; y += crossStep) {
          const cx = Math.floor(x) + 0.5;
          const cy = Math.floor(y) + 0.5;
          ctx.moveTo(cx - 3, cy);
          ctx.lineTo(cx + 3, cy);
          ctx.moveTo(cx, cy - 3);
          ctx.lineTo(cx, cy + 3);
        }
      }
      ctx.stroke();

      // 4. Drifting Network Nodes & Constellation Lines
      const nodes = nodesRef.current;
      const maxDistance = 120;
      const maxDistSq = maxDistance * maxDistance;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        // Seamless wrap around edges
        if (node.x < -20) node.x = width + 20;
        if (node.x > width + 20) node.x = -20;
        if (node.y < -20) node.y = height + 20;
        if (node.y > height + 20) node.y = -20;

        // Parallax position
        const renderY = (node.y - scrollVal * node.parallax + height * 10) % height;
        const pulse = Math.sin(time * 0.0015 + node.pulsePhase) * 0.25 + 0.75;
        const alpha = node.baseAlpha * pulse;

        // Draw node dot
        ctx.fillStyle = `rgba(${pR}, ${pG}, ${pB}, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(node.x, renderY, node.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const otherRenderY = (other.y - scrollVal * other.parallax + height * 10) % height;
          const dx = node.x - other.x;
          const dy = renderY - otherRenderY;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxDistance) * 0.06 * pulse;
            ctx.strokeStyle = `rgba(${sR}, ${sG}, ${sB}, ${lineAlpha.toFixed(3)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(node.x, renderY);
            ctx.lineTo(other.x, otherRenderY);
            ctx.stroke();
          }
        }
      }

      rafRef.current = requestAnimationFrame(render);
    };

    const startLoop = () => {
      if (rafRef.current === null) {
        animationRunning = true;
        rafRef.current = requestAnimationFrame(render);
      }
    };

    const stopLoop = () => {
      animationRunning = false;
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    // Pause when browser tab is inactive to preserve 100% CPU/battery
    const onVisibilityChange = () => {
      if (document.hidden) {
        stopLoop();
      } else {
        startLoop();
      }
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    startLoop();

    return () => {
      stopLoop();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
