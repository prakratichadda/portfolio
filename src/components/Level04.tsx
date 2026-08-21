import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { SectionHead } from "./SectionHead";
import { PixelPanel, PixelPanelTitle } from "./PixelPanel";
import { ExchangeHighlight } from "./ExchangeHighlight";
import { AchievementBadge } from "./AchievementBadge";
import { inventory, education } from "@/lib/data";

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
              <StaggerGroup className="mb-5 flex flex-wrap gap-3">
                {education.topCerts.map((cert) => (
                  <StaggerItem key={cert.label}>
                    <AchievementBadge {...cert} size="lg" />
                  </StaggerItem>
                ))}
              </StaggerGroup>

              <div className="mb-2 font-pixel text-[9px] text-pink-dark">ALSO COMPLETED</div>
              <StaggerGroup className="flex flex-wrap gap-2">
                {education.alsoCerts.map((cert) => (
                  <StaggerItem key={cert.label}>
                    <AchievementBadge {...cert} size="sm" />
                  </StaggerItem>
                ))}
              </StaggerGroup>
            </div>
          </PixelPanel>
        </Reveal>
      </div>
    </section>
  );
}
