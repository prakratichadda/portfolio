"use client";

import { useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";
import { levels } from "@/lib/data";

const LABELS: Record<(typeof levels)[number], string> = {
  hero: "•",
  level01: "01",
  level02: "02",
  level03: "03",
  level04: "04",
  contact: "★",
};

const TRACK_HEIGHT = 220;

export function LevelMap() {
  const { scrollYProgress } = useScroll();
  const markerY = useTransform(scrollYProgress, [0, 1], [0, TRACK_HEIGHT]);
  const [progress, setProgress] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => setProgress(v));

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-6 top-1/2 z-[90] hidden -translate-y-1/2 lg:block"
      style={{ height: TRACK_HEIGHT }}
    >
      <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-ink-dim/25" />

      {levels.map((id, i) => {
        const frac = i / (levels.length - 1);
        const passed = progress >= frac - 0.02;
        return (
          <div
            key={id}
            className={`absolute left-1/2 flex size-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 border-black font-pixel text-[5px] transition-colors duration-300 ${
              passed ? "bg-mint text-black" : "bg-[#2A2A38] text-ink-dim"
            }`}
            style={{ top: `${frac * TRACK_HEIGHT}px` }}
          >
            {LABELS[id]}
          </div>
        );
      })}

      <motion.div
        className="absolute left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-black bg-pink shadow-[2px_2px_0_0_#000]"
        style={{ top: markerY }}
      />
    </div>
  );
}
