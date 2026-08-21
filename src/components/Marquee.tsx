import { Sym } from "./Sym";

export function Marquee({ items }: { items: string[] }) {
  const track = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap border-y-4 border-black bg-mint py-2.5">
      <div className="animate-marquee inline-block font-pixel text-[10px] text-black">
        {track.map((item, i) => (
          <span key={i} className="mx-6">
            {item}
            <Sym className="ml-6 text-pink-dark">★</Sym>
          </span>
        ))}
      </div>
    </div>
  );
}
