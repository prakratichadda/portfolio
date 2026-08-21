import { Hud } from "@/components/Hud";
import { Starfield } from "@/components/Starfield";
import { Hero } from "@/components/Hero";
import { Level01 } from "@/components/Level01";
import { Level02 } from "@/components/Level02";
import { Level03 } from "@/components/Level03";
import { Level04 } from "@/components/Level04";
import { Finish } from "@/components/Finish";
import { Ground } from "@/components/Ground";

const MID_GROUND_DECOR = [
  { left: "15%", symbol: "☁️" },
  { left: "50%", symbol: "☁️" },
  { left: "82%", symbol: "⭐" },
];

const LOW_GROUND_DECOR = [
  { left: "20%", symbol: "🌼" },
  { left: "45%", symbol: "🪙" },
  { left: "70%", symbol: "🌼" },
  { left: "88%", symbol: "🪙" },
];

export default function Home() {
  return (
    <>
      <Starfield />
      <Hud />
      <main>
        <Hero />
        <Level01 />
        <Ground decorations={MID_GROUND_DECOR} />
        <Level02 />
        <Level03 />
        <Level04 />
        <Ground decorations={LOW_GROUND_DECOR} />
        <Finish />
      </main>
    </>
  );
}
