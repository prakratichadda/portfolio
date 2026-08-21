import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { PixelPanel, PixelPanelTitle } from "./PixelPanel";
import { Console } from "./Console";
import { Badge } from "./Badge";
import { player, missionBriefing } from "@/lib/data";

export function Level01() {
  return (
    <section id="level01" className="px-4 py-[60px] sm:px-7 sm:py-[90px]">
      <div className="mx-auto max-w-[1040px]">
        <SectionHead tag="LEVEL 01" heading="MEET THE PLAYER" />

        <Reveal className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[260px_1fr]">
          <Console label="PC" />

          <div className="flex flex-col gap-[18px]">
            <PixelPanel label="dialogue.exe" icon="■ ■ ■">
              <p className="font-semibold">{player.dialogue.hello}</p>
              <div className="mt-2.5 flex flex-col gap-1">
                {player.dialogue.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </PixelPanel>

            <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
              <PixelPanel label="tech_stack">
                <PixelPanelTitle>TECH STACK</PixelPanelTitle>
                <StaggerGroup className="flex flex-wrap gap-2">
                  {player.techStack.map((t) => (
                    <StaggerItem key={t}>
                      <Badge>{t}</Badge>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </PixelPanel>

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
            </div>

            <PixelPanel label="special_ability" icon="★">
              <PixelPanelTitle>SPECIAL ABILITY</PixelPanelTitle>
              <ul className="flex flex-col gap-2.5">
                {player.specialAbility.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-pink-dark" aria-hidden="true">
                      &gt;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </PixelPanel>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="mt-[18px]">
          <PixelPanel label="mission_briefing.txt" icon="📋">
            <PixelPanelTitle>PROFESSIONAL SUMMARY</PixelPanelTitle>
            <div className="flex flex-col gap-3">
              {missionBriefing.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </PixelPanel>
        </Reveal>
      </div>
    </section>
  );
}
