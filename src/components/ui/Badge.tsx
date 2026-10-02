import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?:
    | "neutral"
    | "technical"
    | "accent"
    | "success"
    | "emerald"
    | "cyan"
    | "violet"
    | "amber"
    | "blue";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "technical",
  size = "sm",
  className = "",
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center font-mono font-medium rounded border uppercase tracking-wider";

  const sizeClasses = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
  };

  const variantClasses = {
    technical: "bg-zinc-900/90 text-zinc-300 border-zinc-800",
    neutral: "bg-zinc-950 text-zinc-400 border-zinc-800/80",
    accent: "bg-zinc-800 text-zinc-100 border-zinc-700",
    success: "bg-emerald-950/60 text-emerald-300 border-emerald-800/60",
    emerald: "bg-emerald-950/50 text-emerald-300 border-emerald-800/60 shadow-[0_0_12px_-3px_rgba(16,185,129,0.2)]",
    cyan: "bg-cyan-950/50 text-cyan-300 border-cyan-800/60 shadow-[0_0_12px_-3px_rgba(6,182,212,0.2)]",
    violet: "bg-violet-950/50 text-violet-300 border-violet-800/60 shadow-[0_0_12px_-3px_rgba(139,92,246,0.2)]",
    amber: "bg-amber-950/50 text-amber-300 border-amber-800/60 shadow-[0_0_12px_-3px_rgba(245,158,11,0.2)]",
    blue: "bg-blue-950/50 text-blue-300 border-blue-800/60 shadow-[0_0_12px_-3px_rgba(59,130,246,0.2)]",
  };

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
