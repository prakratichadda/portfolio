"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "motion/react";
import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { PixelPanel, PixelPanelTitle } from "./PixelPanel";
import { Sym } from "./Sym";
import { quest, secondQuest, type QuestStatus } from "@/lib/data";

function StarBullet() {
  return (
    <span
      aria-hidden="true"
      className="absolute left-0 top-0 font-[system-ui,sans-serif] text-gold"
      style={{ WebkitTextStroke: "1px black", paintOrder: "stroke fill" }}
    >
      ★
    </span>
  );
}

const STATUS_COLOR: Record<QuestStatus, string> = {
  done: "text-[#1a7a3d]",
  active: "text-pink-dark",
  locked: "text-black/45",
};

function escapeRegExp(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function highlight(text: string, bold?: string) {
  if (!bold) return text;
  const parts = text.split(new RegExp(`(${escapeRegExp(bold)})`, "g"));
  return parts.map((part, i) =>
    part === bold ? (
      <b key={i} className="bg-gold px-[3px]">
        {part}
      </b>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

function ImpactBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-2.5 border-[3px] border-black bg-white p-3.5 text-base text-panel-ink shadow-[4px_4px_0_0_var(--color-mint)]">
      <span aria-hidden="true">⚡</span> <b className="text-pink-dark">IMPACT:</b> {children}
    </div>
  );
}

const objectivesContainer: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const objectiveItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3 } },
};

export function Level02() {
  return (
    <section id="level02" className="px-4 py-[60px] sm:px-7 sm:py-[90px]">
      <div className="mx-auto max-w-[1040px]">
        <SectionHead tag="LEVEL 02" heading="CURRENT QUEST — COREOPS.AI" />

        <Reveal>
          <PixelPanel
            label={`quest_log — ${quest.role}`}
            icon={
              <>
                <Sym>▶</Sym> ACTIVE
              </>
            }
            bodyClassName="p-6"
          >
            <PixelPanelTitle>AGENT ROSTER — AGENTCORE STUDIO</PixelPanelTitle>
            <StaggerGroup className="mb-[22px] flex flex-col gap-2.5">
              {quest.roster.map((agent) => {
                const glyph = agent.label[0];
                const rest = agent.label.slice(2);
                const isLocked = agent.status === "locked";
                return (
                  <StaggerItem key={agent.name}>
                    <motion.div
                      className="flex flex-wrap items-center justify-between gap-2 border-2 border-black bg-black/[0.06] px-3 py-2.5 text-[16.5px]"
                      {...(isLocked
                        ? {
                            whileInView: { x: [0, -2, 2, -2, 0] },
                            viewport: { once: true },
                            transition: { duration: 0.4 },
                          }
                        : {})}
                    >
                      <span>{agent.name}</span>
                      <span className={`font-pixel text-[8px] ${STATUS_COLOR[agent.status]}`}>
                        {glyph === "●" || glyph === "▶" ? (
                          <>
                            {agent.status === "active" ? (
                              <motion.span
                                className="inline-block"
                                animate={{ opacity: [1, 0.4, 1] }}
                                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                              >
                                <Sym>{glyph}</Sym>
                              </motion.span>
                            ) : (
                              <Sym>{glyph}</Sym>
                            )}{" "}
                            {rest}
                          </>
                        ) : (
                          agent.label
                        )}
                      </span>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>

            <PixelPanelTitle>QUEST OBJECTIVES COMPLETED</PixelPanelTitle>
            <motion.ul
              className="flex flex-col gap-3"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              variants={objectivesContainer}
            >
              {quest.objectives.map((obj) => (
                <motion.li
                  key={obj.text}
                  variants={objectiveItem}
                  className="relative pl-[22px] text-[17px] leading-relaxed"
                >
                  <StarBullet />
                  {obj.emoji && <span aria-hidden="true">{obj.emoji} </span>}
                  {highlight(obj.text, obj.bold)}
                  {obj.impact && <ImpactBox>{obj.impact}</ImpactBox>}
                </motion.li>
              ))}
            </motion.ul>
          </PixelPanel>
        </Reveal>

        <Reveal delay={0.08} className="mt-[18px]">
          <PixelPanel
            label={`quest_log — ${secondQuest.role} · ${secondQuest.org} · ${secondQuest.date}`}
            icon={
              <>
                <Sym>✔</Sym> COMPLETE
              </>
            }
            bodyClassName="p-6"
          >
            <ul className="flex flex-col gap-3">
              {secondQuest.bullets.map((text) => (
                <li key={text} className="relative pl-[22px] text-[17px] leading-relaxed">
                  <StarBullet />
                  {text}
                </li>
              ))}
            </ul>
          </PixelPanel>
        </Reveal>
      </div>
    </section>
  );
}
