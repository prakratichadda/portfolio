"use client";

import { motion } from "motion/react";
import { Reveal } from "./Reveal";
import { Ground } from "./Ground";
import { Marquee } from "./Marquee";
import { PixelButton } from "./PixelButton";
import { hero } from "@/lib/data";

const GROUND_DECOR = [
  { left: "8%", symbol: "☁️" },
  { left: "32%", symbol: "⭐" },
  { left: "58%", symbol: "🌳" },
  { left: "78%", symbol: "☁️" },
  { left: "90%", symbol: "⭐" },
];

const powerUpSpring = { type: "spring" as const, stiffness: 300, damping: 15 };

export function Hero() {
  return (
    <section id="hero" className="relative z-[1] pt-[90px]">
      <div className="mx-auto max-w-[1040px] px-4 sm:px-7">
        <Reveal
          className="relative my-8 rounded-[4px] border-4 border-mint px-5 py-12 text-center sm:py-[50px]"
        >
          <div className="mb-[18px] font-pixel text-[10px] text-ink-dim">
            {hero.eyebrow}
          </div>
          <h1
            className="font-pixel text-[clamp(22px,5.4vw,42px)] leading-[1.5]"
            style={{ textShadow: "3px 3px 0 var(--color-pink-dark)" }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={powerUpSpring}
              className="block text-mint"
            >
              {hero.headlineLine1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...powerUpSpring, delay: 0.15 }}
              className="block text-pink"
            >
              {hero.headlineLine2}
            </motion.span>
          </h1>
          <p className="mx-auto mt-5 max-w-[480px] text-[17px] text-ink-dim">
            {hero.subtext}
          </p>
          <div className="mt-[34px]">
            <PixelButton href={hero.startHref} pulse tapScale={0.92}>
              START &gt;
            </PixelButton>
          </div>
        </Reveal>
      </div>

      <Ground decorations={GROUND_DECOR} />
      <Marquee items={hero.marquee} />
    </section>
  );
}
