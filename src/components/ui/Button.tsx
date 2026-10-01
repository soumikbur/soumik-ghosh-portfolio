import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
  external?: boolean;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  icon,
  external = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-150 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

  const sizeClasses = {
    sm: "text-xs px-3 py-1.5 gap-1.5 h-8",
    md: "text-sm px-4 py-2 gap-2 h-10",
    lg: "text-base px-5 py-2.5 gap-2.5 h-11"
  };

  const variantClasses = {
    primary:
      "bg-zinc-100 text-zinc-950 hover:bg-white active:bg-zinc-200 border border-zinc-200 shadow-sm",
    secondary:
      "bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-white border border-zinc-800 active:bg-zinc-850",
    outline:
      "bg-transparent text-zinc-300 border border-zinc-700/80 hover:border-zinc-500 hover:text-white hover:bg-zinc-900/40",
    ghost:
      "bg-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/60"
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
          {icon && <span className="shrink-0">{icon}</span>}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
}
