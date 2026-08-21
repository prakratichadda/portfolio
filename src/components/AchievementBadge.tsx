"use client";

import { motion } from "motion/react";
import type { Cert } from "@/lib/data";

type AchievementBadgeProps = Cert & { size?: "lg" | "sm" };

export function AchievementBadge({
  icon,
  label,
  href,
  featured = false,
  size = "lg",
}: AchievementBadgeProps) {
  const quiet = size === "sm";

  const restShadow = featured
    ? "3px 3px 0 0 var(--color-pink)"
    : quiet
      ? "2px 2px 0 0 #8a8a9450"
      : "3px 3px 0 0 #8a8a94";
  const hoverShadow = featured
    ? "6px 6px 0 0 var(--color-pink)"
    : quiet
      ? "4px 4px 0 0 #8a8a9450"
      : "6px 6px 0 0 #8a8a94";
  const lift = quiet ? -1 : -2;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      initial={{ boxShadow: restShadow }}
      whileHover={{ x: lift, y: lift, boxShadow: hoverShadow }}
      transition={{ duration: 0.15 }}
      className={`inline-flex cursor-pointer items-center gap-2 border-2 border-black font-pixel leading-relaxed ${
        quiet ? "px-2 py-1.5 text-[7px]" : "px-3 py-2 text-[8px]"
      } ${featured ? "bg-gold text-black" : "bg-white text-black"}`}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </motion.a>
  );
}
