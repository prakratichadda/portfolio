"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

type PixelButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "mint" | "pink" | "white";
  size?: "md" | "sm";
  target?: string;
  rel?: string;
  /** Looping idle attention-pulse (e.g. the hero START button). */
  pulse?: boolean;
  /** Extra scale-down on tap, layered on top of the base press feedback. */
  tapScale?: number;
};

const VARIANT_BG: Record<NonNullable<PixelButtonProps["variant"]>, string> = {
  mint: "bg-mint",
  pink: "bg-pink",
  white: "bg-white",
};

export function PixelButton({
  href,
  children,
  variant = "mint",
  size = "md",
  target,
  rel,
  pulse = false,
  tapScale,
}: PixelButtonProps) {
  const sizeClasses =
    size === "md"
      ? "px-7 py-3.5 text-[12px] border-4 shadow-[5px_5px_0_0_#000]"
      : "px-3 py-2 text-[8px] border-2 shadow-[4px_4px_0_0_#000]";

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      animate={
        pulse
          ? {
              scale: [1, 1.04, 1],
              transition: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
            }
          : undefined
      }
      whileHover={{ x: -2, y: -2, boxShadow: "8px 8px 0 0 #000" }}
      whileTap={{
        x: 0,
        y: 0,
        boxShadow: "3px 3px 0 0 #000",
        ...(tapScale ? { scale: tapScale } : {}),
      }}
      transition={{ duration: 0.12 }}
      className={`inline-flex cursor-pointer items-center gap-1.5 border-black font-pixel text-black ${VARIANT_BG[variant]} ${sizeClasses}`}
    >
      {children}
    </motion.a>
  );
}
