import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "hero";
}

export function Container({
  children,
  className = "",
  size = "default"
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl lg:max-w-5xl",
    default: "max-w-6xl lg:max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1620px]",
    wide: "max-w-7xl xl:max-w-[1480px] 2xl:max-w-[1720px]",
    hero: "max-w-6xl lg:max-w-7xl xl:max-w-[1480px] 2xl:max-w-[1660px]",
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-14 w-full ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
