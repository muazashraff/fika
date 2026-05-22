"use client";

import Link from "next/link";
import { ReactNode } from "react";

type Variant = "filled" | "outline" | "ghost";

const variants: Record<Variant, string> = {
  filled:
    "bg-gold text-navy hover:scale-105 hover:shadow-[0_0_24px_rgba(201,168,76,0.45)] focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-navy",
  outline:
    "border-2 border-gold text-gold bg-transparent hover:bg-gold/10 hover:scale-105 focus:ring-2 focus:ring-gold",
  ghost: "text-gold hover:text-cream underline-offset-4 hover:underline",
};

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  external?: boolean;
}

export default function Button({
  href,
  onClick,
  variant = "filled",
  children,
  className = "",
  type = "button",
  disabled = false,
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 font-sans text-sm font-semibold tracking-wide transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
