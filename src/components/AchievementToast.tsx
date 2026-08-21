"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";

const HOLD_MS = 2200;

export function AchievementToast({ message }: { message: string }) {
  const sentinelRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sentinelRef, { once: true, amount: 0.3 });
  const [hidden, setHidden] = useState(false);
  const show = inView && !hidden;

  useEffect(() => {
    if (!inView) return;
    const timeout = setTimeout(() => setHidden(true), HOLD_MS);
    return () => clearTimeout(timeout);
  }, [inView]);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className="h-4 w-full" />
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ x: 120, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 120, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed bottom-5 right-4 z-[150] max-w-[280px] border-4 border-black bg-panel px-4 py-3 shadow-[6px_6px_0_0_var(--color-gold)] sm:right-6"
          >
            <div className="mb-1.5 font-pixel text-[8px] text-mint">
              🏆 ACHIEVEMENT UNLOCKED
            </div>
            <div className="font-pixel text-[9px] leading-relaxed text-panel-ink">{message}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
