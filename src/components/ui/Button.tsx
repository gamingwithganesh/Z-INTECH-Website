import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "glass" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      href,
      variant = "primary",
      size = "md",
      icon,
      iconPosition = "right",
      ...props
    },
    ref
  ) => {
    const sizeClasses = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-7 py-3.5 gap-2.5",
    };

    const variantClasses = {
      primary: "btn-cinematic-primary inline-flex items-center justify-center font-medium",
      secondary: "btn-cinematic-secondary inline-flex items-center justify-center font-medium",
      glass:
        "rounded-full bg-[#191918]/80 text-[#F5F1E9] border border-white/10 hover:border-white/25 backdrop-blur-md inline-flex items-center justify-center font-medium transition-all",
      outline:
        "inline-flex items-center justify-center rounded-full border border-[#353431] bg-transparent text-[#F5F1E9] hover:bg-[#1C1C1A] hover:border-[#D97745]/50 font-medium transition-all",
      ghost:
        "inline-flex items-center justify-center rounded-full text-[#A6A39C] hover:text-[#F5F1E9] hover:bg-[#1C1C1A] font-medium transition-all",
    };

    const content = (
      <>
        {icon && iconPosition === "left" && (
          <span className="shrink-0 transition-transform group-hover:-translate-x-0.5">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="shrink-0 transition-transform group-hover:translate-x-0.5">
            {icon}
          </span>
        )}
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          className={cn(
            "group inline-flex select-none items-center justify-center transition-all focus-visible:outline-2 focus-visible:outline-blue-600",
            variantClasses[variant],
            sizeClasses[size],
            className
          )}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex select-none items-center justify-center transition-all disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-2 focus-visible:outline-blue-600",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = "Button";
