import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "light" | "dark" | "flat" | "elevated" | "liquid";
  hoverEffect?: boolean;
}

export function GlassCard({
  className,
  variant = "liquid",
  hoverEffect = true,
  children,
  ...props
}: GlassCardProps) {
  const variantStyles = {
    light: "bg-[#191918]/70 backdrop-blur-xl border border-white/10 text-[#F5F1E9] shadow-lg shadow-black/30",
    dark: "bg-[#161615]/75 backdrop-blur-2xl border border-white/[0.08] text-[#F5F1E9] shadow-[0_12px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.08)]",
    flat: "bg-[#161615]/75 backdrop-blur-xl border border-white/[0.08] text-[#F5F1E9]",
    elevated:
      "bg-[#181716]/80 backdrop-blur-2xl border border-white/[0.1] text-[#F5F1E9] shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_1.5px_rgba(255,255,255,0.1)]",
    liquid:
      "liquid-glass-card text-[#F5F1E9]",
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 transition-all duration-300",
        variantStyles[variant],
        hoverEffect && "hover:border-[#D97745]/50 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(217,119,69,0.15)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
