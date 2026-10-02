import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  alignment = "left",
  className = ""
}: SectionHeaderProps) {
  const alignClasses =
    alignment === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  return (
    <div className={`flex flex-col mb-8 sm:mb-14 max-w-3xl ${alignClasses} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant="technical">{badge}</Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-100">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-[65ch]">
          {description}
        </p>
      )}
    </div>
  );
}
