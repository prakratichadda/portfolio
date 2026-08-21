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
            <span className="text-mint">{hero.headlineLine1}</span>
            <br />
            <span className="text-pink">{hero.headlineLine2}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[480px] text-[17px] text-ink-dim">
            {hero.subtext}
          </p>
          <div className="mt-[34px]">
            <PixelButton href={hero.startHref}>START &gt;</PixelButton>
          </div>
        </Reveal>
      </div>

      <Ground decorations={GROUND_DECOR} />
      <Marquee items={hero.marquee} />
    </section>
  );
}
