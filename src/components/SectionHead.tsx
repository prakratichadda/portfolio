import { Reveal } from "./Reveal";

export function SectionHead({ tag, heading }: { tag: string; heading: string }) {
  return (
    <div className="mb-11">
      <Reveal>
        <span className="mb-2.5 block font-pixel text-[10px] text-pink">{tag}</span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-pixel text-[clamp(16px,2.6vw,24px)] leading-relaxed text-mint">
          {heading}
        </h2>
      </Reveal>
    </div>
  );
}
