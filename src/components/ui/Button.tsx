"use client";
import { motion } from "framer-motion";
import { forwardRef } from "react";
import type { ReactNode, MouseEvent } from "react";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  href?: string;
  target?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "bg-emerald-600 text-white border-transparent hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-200 focus-visible:ring-emerald-400",
  secondary:
    "bg-white text-ink border-[#d6ccbc] hover:border-emerald-400 hover:text-emerald-700 focus-visible:ring-emerald-300",
  ghost:
    "bg-transparent text-slate-500 border-transparent hover:bg-[#ede7d9] hover:text-ink focus-visible:ring-slate-300",
  danger:
    "bg-red-50 text-red-600 border-red-200 hover:bg-red-100 hover:border-red-300 focus-visible:ring-red-300",
};

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-xs gap-1.5 rounded-lg",
  md: "px-5 py-2.5 text-sm gap-2 rounded-xl",
  lg: "px-7 py-3.5 text-base gap-2.5 rounded-xl",
};

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      disabled = false,
      loading = false,
      leftIcon,
      rightIcon,
      href,
      target,
      onClick,
      className = "",
      type = "button",
      "aria-label": ariaLabel,
    },
    _ref,
  ) => {
    const base = [
      "inline-flex items-center justify-center font-medium border transition-all duration-200",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
      "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
      variantStyles[variant],
      sizeStyles[size],
      className,
    ].join(" ");

    const Spinner = () => (
      <motion.span
        className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full flex-shrink-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
      />
    );

    const content = (
      <>
        {loading ? <Spinner /> : leftIcon}
        <span style={{ fontFamily: "var(--font-body)" }}>{children}</span>
        {!loading && rightIcon}
      </>
    );

    if (href) {
      return (
        <motion.a
          href={href}
          target={target}
          rel={target === "_blank" ? "noreferrer" : undefined}
          onClick={onClick as (e: MouseEvent<HTMLAnchorElement>) => void}
          aria-label={ariaLabel}
          className={base}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.97 }}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        type={type}
        disabled={disabled || loading}
        onClick={onClick as (e: MouseEvent<HTMLButtonElement>) => void}
        aria-label={ariaLabel}
        className={base}
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
      >
        {content}
      </motion.button>
    );
  },
);

Button.displayName = "Button";
export default Button;
