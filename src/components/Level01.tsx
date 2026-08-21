"use client";

import { motion, type Variants } from "motion/react";
import { Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { PixelPanel, PixelPanelTitle } from "./PixelPanel";
import { Console } from "./Console";
import { player, missionBriefing } from "@/lib/data";

const charContainer: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.02 } } };
const charVariant: Variants = { hidden: { opacity: 0 }, show: { opacity: 1 } };

const lineContainer: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.4 } } };
const lineVariant: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
};

const cascadeContainer: Variants = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const cascadeItem: Variants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export function Level01() {
  const helloChars = player.dialogue.hello.split("");

  return (
    <section id="level01" className="px-4 py-[60px] sm:px-7 sm:py-[90px]">
      <div className="mx-auto max-w-[1040px]">
        <SectionHead tag="LEVEL 01" heading="MEET THE PLAYER" />

        <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[260px_1fr]">
          <Console label="PC" />

          <PixelPanel label="dialogue.exe" icon="■ ■ ■">
            <motion.p
              className="font-semibold"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={charContainer}
            >
              {helloChars.map((ch, i) => (
                <motion.span key={i} variants={charVariant}>
                  {ch === " " ? " " : ch}
                </motion.span>
              ))}
            </motion.p>
            <motion.div
              className="mt-2.5 flex flex-col gap-1"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={lineContainer}
            >
              {player.dialogue.lines.map((line) => (
                <motion.p key={line} variants={lineVariant}>
                  {line}
                </motion.p>
              ))}
            </motion.div>
          </PixelPanel>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={cascadeContainer}
          className="mt-[18px] flex flex-col gap-[18px]"
        >
          <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
            <motion.div variants={cascadeItem}>
              <PixelPanel label="training_log">
                <PixelPanelTitle>TRAINING LOG</PixelPanelTitle>
                <p>
                  {player.trainingLog.map((line, i) => (
                    <span key={line}>
                      {line}
                      {i < player.trainingLog.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </PixelPanel>
            </motion.div>

            <motion.div variants={cascadeItem}>
              <PixelPanel label="special_ability" icon="★">
                <PixelPanelTitle>SPECIAL ABILITY</PixelPanelTitle>
                <p>{player.specialAbility}</p>
              </PixelPanel>
            </motion.div>
          </div>

          <motion.div variants={cascadeItem}>
            <PixelPanel label="mission_briefing.txt" icon="📋">
              <PixelPanelTitle>PROFESSIONAL SUMMARY</PixelPanelTitle>
              <div className="flex flex-col gap-3">
                {missionBriefing.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </PixelPanel>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
