"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const SEGMENTS = 14;
const FILL_DURATION_MS = 1100;
const HOLD_MS = 220;

export function BootScreen() {
  const reduceMotion = useReducedMotion();
  const [loading, setLoading] = useState(!reduceMotion);
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const stepTime = FILL_DURATION_MS / SEGMENTS;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setFilled(i);
      if (i >= SEGMENTS) {
        clearInterval(interval);
        setTimeout(() => setLoading(false), HOLD_MS);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [reduceMotion]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-7 bg-black"
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <motion.div
            className="font-pixel text-[13px] tracking-widest text-mint sm:text-[16px]"
            animate={{ opacity: [1, 0.35, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
          >
            LOADING...
          </motion.div>
          <div className="flex gap-[4px]">
            {Array.from({ length: SEGMENTS }, (_, i) => (
              <div
                key={i}
                className={`h-4 w-[10px] border-2 border-mint sm:h-5 sm:w-3 ${
                  i < filled ? "bg-mint" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
