"use client";
import { motion } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";

type CardVariant = "default" | "elevated" | "bordered" | "ghost";

interface CardProps {
  children: ReactNode;
  variant?: CardVariant;
  /** Hover lift effect */
  hoverable?: boolean;
  /** Accent color for left border or top bar */
  accentColor?: string;
  accentPosition?: "left" | "top";
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
  as?: "div" | "article" | "section" | "li";
}

const variantBase: Record<CardVariant, string> = {
  default: "bg-white border border-[#d6ccbc]",
  elevated: "bg-white border border-[#d6ccbc] shadow-xl shadow-slate-100",
  bordered: "bg-[#fdfaf6] border border-[#d6ccbc]",
  ghost: "bg-[#fdfaf6]/60 border border-transparent",
};

export default function Card({
  children,
  variant = "default",
  hoverable = false,
  accentColor,
  accentPosition = "top",
  className = "",
  style,
  onClick,
  as: Tag = "div",
}: CardProps) {
  const base = [
    "relative rounded-2xl overflow-hidden transition-all duration-300",
    variantBase[variant],
    hoverable
      ? "cursor-pointer hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-100"
      : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const inner = (
    <>
      {/* Top accent bar */}
      {accentColor && accentPosition === "top" && (
        <div
          className={`absolute top-0 left-0 right-0 h-0.5 transition-transform duration-500 origin-left ${hoverable ? "scale-x-0 group-hover:scale-x-100" : "scale-x-100"}`}
          style={{
            background: `linear-gradient(90deg, ${accentColor}, ${accentColor}60)`,
          }}
        />
      )}

      {/* Left accent bar */}
      {accentColor && accentPosition === "left" && (
        <div
          className="absolute top-0 left-0 bottom-0 w-0.5"
          style={{
            background: `linear-gradient(to bottom, ${accentColor}, ${accentColor}30)`,
          }}
        />
      )}

      {children}
    </>
  );

  if (hoverable) {
    return (
      <motion.div
        className={`group ${base}`}
        style={style}
        onClick={onClick}
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        {inner}
      </motion.div>
    );
  }

  return (
    <Tag className={base} style={style} onClick={onClick}>
      {inner}
    </Tag>
  );
}

/** Convenience sub-components */
export function CardHeader({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 pt-6 pb-4 border-b border-[#ede7d9] ${className}`}>
      {children}
    </div>
  );
}

export function CardBody({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`px-6 py-5 ${className}`}>{children}</div>;
}

export function CardFooter({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`px-6 pt-4 pb-6 border-t border-[#ede7d9] ${className}`}>
      {children}
    </div>
  );
}
