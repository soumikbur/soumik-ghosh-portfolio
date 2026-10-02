import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?:
    | "neutral"
    | "technical"
    | "accent"
    | "success"
    | "emerald"
    | "cyan"
    | "violet"
    | "amber"
    | "blue";
  title: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeader({
  badge,
  badgeVariant = "emerald",
  title,
  description,
  alignment = "left",
  className = "",
  as = "h2",
}: SectionHeaderProps) {
  const alignClasses =
    alignment === "center" ? "text-center items-center mx-auto" : "text-left items-start";

  const HeadingTag = as;

  return (
    <div className={`flex flex-col mb-10 sm:mb-16 max-w-3xl ${alignClasses} ${className}`}>
      {badge && (
        <div className="mb-3.5">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <HeadingTag className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-100">
        {title}
      </HeadingTag>
      {description && (
        <p className="mt-3.5 text-sm sm:text-base text-zinc-400 leading-relaxed max-w-[65ch]">
          {description}
        </p>
      )}
    </div>
  );
}
