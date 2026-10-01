import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export function Card({
  children,
  className = "",
  hoverable = false
}: CardProps) {
  return (
    <div
      className={`rounded-lg border border-zinc-800/80 bg-zinc-900/40 p-6 backdrop-blur-sm transition-all duration-200 ${
        hoverable
          ? "hover:border-zinc-700 hover:bg-zinc-900/70 hover:shadow-lg hover:shadow-black/20"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
