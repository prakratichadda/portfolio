"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";

function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type Star = { id: number; left: number; top: number; delay: number };

function makeStars(seed: number, count: number): Star[] {
  const rand = mulberry32(seed);
  // Spread vertically across a taller virtual band (-20% to 120%) so the
  // parallax drift never reveals an empty edge inside the viewport.
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: rand() * 100,
    top: rand() * 140 - 20,
    delay: rand() * 2.4,
  }));
}

const FAR = makeStars(11, 22);
const MID = makeStars(42, 16);
const NEAR = makeStars(97, 10);

function StarLayer({
  stars,
  size,
  opacity,
  y,
  className = "",
}: {
  stars: Star[];
  size: number;
  opacity: number;
  y: MotionValue<number>;
  className?: string;
}) {
  return (
    <motion.div
      className={`absolute inset-0 ${className}`}
      style={{ y, opacity }}
    >
      {stars.map((s) => (
        <div
          key={s.id}
          className="animate-twinkle absolute rounded-[1px] bg-gold"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: size,
            height: size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </motion.div>
  );
}

export function Starfield() {
  const { scrollYProgress } = useScroll();
  const farY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const midY = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const nearY = useTransform(scrollYProgress, [0, 1], [0, -170]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <StarLayer stars={FAR} size={2} opacity={0.4} y={farY} />
      <StarLayer stars={MID} size={3} opacity={0.7} y={midY} />
      <StarLayer stars={NEAR} size={4} opacity={1} y={nearY} className="hidden sm:block" />
    </div>
  );
}
