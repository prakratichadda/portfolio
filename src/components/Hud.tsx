"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { levels } from "@/lib/data";

const SEGMENTS = 10;

const LABELS: Record<(typeof levels)[number], string> = {
  hero: "TITLE",
  level01: "LEVEL 01",
  level02: "LEVEL 02",
  level03: "LEVEL 03",
  level04: "LEVEL 04",
  contact: "FINISH",
};

export function Hud() {
  const [filled, setFilled] = useState(0);
  const [levelLabel, setLevelLabel] = useState<string>(LABELS.hero);
  const tickingRef = useRef(false);

  useEffect(() => {
    function updateFill() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollTop / docHeight)) : 0;
      setFilled(Math.round(pct * SEGMENTS));
      tickingRef.current = false;
    }

    function onScroll() {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(updateFill);
    }

    updateFill();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateFill);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateFill);
    };
  }, []);

  useEffect(() => {
    const els = levels
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id as (typeof levels)[number];
            setLevelLabel(LABELS[id] ?? LABELS.hero);
          }
        });
      },
      { threshold: 0.4 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between gap-3 border-b-4 border-pink bg-black px-3 py-2.5 font-pixel text-[7px] sm:px-5 sm:text-[9px]">
      <span className="whitespace-nowrap text-mint">‹ {levelLabel}</span>

      <div className="flex max-w-[120px] flex-1 gap-[3px] sm:max-w-[280px]">
        {Array.from({ length: SEGMENTS }, (_, i) => {
          const isFilled = i < filled;
          return (
            <motion.div
              key={`${i}-${isFilled}`}
              initial={isFilled ? { scaleY: 0.7 } : false}
              animate={{ scaleY: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 20 }}
              className={`h-3 flex-1 border-2 border-black ${isFilled ? "bg-mint" : "bg-[#2A2A38]"}`}
            />
          );
        })}
      </div>

      <span className="flex items-center gap-1.5 whitespace-nowrap text-pink">
        <motion.span
          aria-hidden="true"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          ♥
        </motion.span>
        PLAYER 01
      </span>
    </div>
  );
}
