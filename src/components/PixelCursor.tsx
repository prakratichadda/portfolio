"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function PixelCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 32, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 500, damping: 32, mass: 0.3 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    function activate() {
      setEnabled(true);
    }
    activate();

    document.documentElement.classList.add("pixel-cursor-active");

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.documentElement.classList.remove("pixel-cursor-active");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[300]"
      style={{ x: springX, y: springY }}
    >
      <div className="relative -ml-2.5 -mt-2.5 size-5">
        <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-mint" />
        <div className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-mint" />
        <div className="absolute left-1/2 top-1/2 size-[5px] -translate-x-1/2 -translate-y-1/2 bg-pink" />
      </div>
    </motion.div>
  );
}
