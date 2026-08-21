"use client";

import { motion, type Variants } from "motion/react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { PixelPanel, PixelPanelTitle } from "./PixelPanel";
import { ExchangeHighlight } from "./ExchangeHighlight";
import { AchievementBadge } from "./AchievementBadge";
import { inventory, education, type Cert } from "@/lib/data";

const badgeContainer: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const badgeItem: Variants = {
  hidden: { opacity: 0, scale: 0, rotate: -8 },
  show: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
};

function BadgeRow({ certs, size }: { certs: Cert[]; size: "lg" | "sm" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={badgeContainer}
      className="flex flex-wrap gap-3"
    >
      {certs.map((cert) => (
        <motion.div key={cert.label} variants={badgeItem}>
          <AchievementBadge {...cert} size={size} />
        </motion.div>
      ))}
    </motion.div>
  );
}

export function Level04() {
  return (
    <section id="level04" className="px-4 py-[60px] sm:px-7 sm:py-[90px]">
      <div className="mx-auto max-w-[1040px]">
        <SectionHead tag="LEVEL 04" heading="INVENTORY — SKILLS" />

        <Reveal>
          <PixelPanel label="inventory.dat">
            <div className="flex flex-col gap-[18px]">
              {inventory.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 gap-2 border-t-2 border-dashed border-panel-ink/15 pt-[18px] first:border-t-0 first:pt-0 sm:grid-cols-[160px_1fr] sm:gap-5"
                >
                  <div className="font-pixel text-[9px] text-pink-dark">{row.label}</div>
                  <div className="flex flex-wrap gap-2">
                    {row.chips.map((chip) => (
                      <span
                        key={chip}
                        className="border-2 border-black bg-panel px-3 py-1 text-[15px] text-panel-ink"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </PixelPanel>
        </Reveal>

        <Reveal delay={0.08} className="mt-7">
          <PixelPanel label="achievements.log" icon="🏆">
            <ExchangeHighlight
              title={education.exchange.title}
              subtitle={education.exchange.subtitle}
              date={education.exchange.date}
            />

            <div className="mt-6">
              <PixelPanelTitle>UNLOCKED ACHIEVEMENTS</PixelPanelTitle>

              <div className="mb-2 font-pixel text-[9px] text-pink-dark">TOP ACHIEVEMENTS</div>
              <div className="mb-5">
                <BadgeRow certs={education.topCerts} size="lg" />
              </div>

              <div className="mb-2 font-pixel text-[9px] text-pink-dark">ALSO COMPLETED</div>
              <BadgeRow certs={education.alsoCerts} size="sm" />
            </div>
          </PixelPanel>
        </Reveal>
      </div>
    </section>
  );
}
