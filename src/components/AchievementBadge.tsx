"use client";

import { motion } from "motion/react";
import type { Cert } from "@/lib/data";

export function AchievementBadge({ icon, label, href, featured = false }: Cert) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener"
      initial={{
        boxShadow: featured
          ? "3px 3px 0 0 var(--color-pink)"
          : "3px 3px 0 0 #8a8a94",
      }}
      whileHover={{
        x: -2,
        y: -2,
        boxShadow: featured
          ? "6px 6px 0 0 var(--color-pink)"
          : "6px 6px 0 0 #8a8a94",
      }}
      transition={{ duration: 0.15 }}
      className={`inline-flex cursor-pointer items-center gap-2 border-2 border-black px-3 py-2 font-pixel text-[8px] leading-relaxed ${
        featured ? "bg-gold text-black" : "bg-white text-black"
      }`}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </motion.a>
  );
}
