import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "neutral" | "technical" | "accent" | "success";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "technical",
  size = "sm",
  className = ""
}: BadgeProps) {
  const baseClasses =
    "inline-flex items-center font-mono font-medium rounded border uppercase tracking-wider";

  const sizeClasses = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1"
  };

  const variantClasses = {
    technical: "bg-zinc-900/90 text-zinc-300 border-zinc-800",
    neutral: "bg-zinc-950 text-zinc-400 border-zinc-800/80",
    accent: "bg-zinc-800 text-zinc-100 border-zinc-700",
    success: "bg-emerald-950/60 text-emerald-300 border-emerald-800/60"
  };

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
