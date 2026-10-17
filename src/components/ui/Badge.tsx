import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "blue" | "cyan" | "dark" | "outline";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  dot = true,
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default:
      "bg-[#1C1C1A] text-[#F5F1E9] border-[#2B2A27] hover:border-[#353431]",
    blue: "bg-[#1C1C1A] text-[#D97745] border-[#2B2A27] shadow-xs",
    cyan: "bg-[#1C1C1A] text-[#38bdf8] border-[#2B2A27] shadow-xs",
    dark: "bg-[#151514] text-[#F5F1E9] border-[#2B2A27] shadow-xs",
    outline: "bg-transparent text-[#A6A39C] border-[#353431] hover:text-[#F5F1E9]",
  };

  const dotColors = {
    default: "bg-[#78756F]",
    blue: "bg-[#D97745] animate-pulse",
    cyan: "bg-[#38bdf8] animate-pulse",
    dark: "bg-emerald-400",
    outline: "bg-[#D97745]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-xs transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && <span className={cn("h-1.5 w-1.5 rounded-full shrink-0", dotColors[variant])} />}
      {children}
    </span>
  );
}
