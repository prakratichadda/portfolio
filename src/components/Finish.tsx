import { Reveal, StaggerGroup, StaggerItem } from "./Reveal";
import { Flagpole } from "./Flagpole";
import { PixelButton } from "./PixelButton";
import { finish } from "@/lib/data";

export function Finish() {
  return (
    <section id="contact" className="relative z-[1] px-4 pb-10 pt-[100px] text-center sm:px-7">
      <div className="mx-auto max-w-[1040px]">
        <Reveal>
          <Flagpole />
        </Reveal>

        <Reveal delay={0.08}>
          <h2
            className="mb-2.5 mt-[26px] font-pixel text-[clamp(18px,3vw,28px)] text-mint"
            style={{ textShadow: "3px 3px 0 var(--color-pink-dark)" }}
          >
            {finish.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mx-auto mb-[30px] max-w-[480px] text-[17px] text-ink-dim">
            {finish.subtext}
          </p>
        </Reveal>

        <StaggerGroup className="flex flex-wrap justify-center gap-3.5">
          {finish.buttons.map((btn) => (
            <StaggerItem key={btn.href}>
              <PixelButton
                href={btn.href}
                variant="pink"
                target={btn.href.startsWith("http") ? "_blank" : undefined}
                rel={btn.href.startsWith("http") ? "noopener" : undefined}
              >
                {btn.label}
              </PixelButton>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <footer className="mt-[70px] text-sm text-ink-dim">{finish.footer}</footer>
      </div>
    </section>
  );
}
