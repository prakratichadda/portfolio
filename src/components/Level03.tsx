"use client";

import { motion } from "motion/react";
import { StaggerGroup, StaggerItem, Reveal } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { PixelPanel } from "./PixelPanel";
import { PixelButton } from "./PixelButton";
import { projects, sideQuest, type Project } from "@/lib/data";

function ProjectCard({ project }: { project: Project }) {
  return (
    <StaggerItem>
      <motion.div
        initial={{ boxShadow: "6px 6px 0 0 var(--color-pink-dark)" }}
        whileHover={{ x: -3, y: -3, boxShadow: "10px 10px 0 0 var(--color-pink-dark)" }}
        transition={{ duration: 0.15 }}
        className="h-full"
      >
        <PixelPanel label={project.fileName} icon="▶" shadow={false} className="h-full">
          <span className="mb-3 inline-block bg-black px-2 py-1 font-pixel text-[9px] text-mint">
            {project.num}
          </span>
          <h3 className="mb-2.5 font-pixel text-[12px] leading-relaxed">{project.title}</h3>
          <div className="mb-2.5 text-base">{project.desc}</div>
          <div className="mb-3 text-[15px] text-panel-ink/80">{project.detail}</div>
          <div className="mb-3 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <span
                key={s}
                className="border-2 border-black bg-panel px-2.5 py-1 text-[13px] text-panel-ink"
              >
                {s}
              </span>
            ))}
          </div>
          {project.link && (
            <PixelButton href={project.link} target="_blank" rel="noopener" variant="pink" size="sm">
              VIEW REPO &gt;
            </PixelButton>
          )}
        </PixelPanel>
      </motion.div>
    </StaggerItem>
  );
}

export function Level03() {
  return (
    <section id="level03" className="px-4 py-[60px] sm:px-7 sm:py-[90px]">
      <div className="mx-auto max-w-[1040px]">
        <SectionHead tag="LEVEL 03" heading="SIDE QUESTS — PROJECTS" />

        <StaggerGroup className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.fileName} project={p} />
          ))}
        </StaggerGroup>

        <Reveal
          delay={0.1}
          className="mt-[22px] border-2 border-dashed border-ink-dim px-[18px] py-3.5 text-[15.5px] text-ink-dim"
        >
          {sideQuest.split("VILIP Fashion Fabrics").map((chunk, i, arr) => (
            <span key={i}>
              {chunk}
              {i < arr.length - 1 && <b className="text-ink">VILIP Fashion Fabrics</b>}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
