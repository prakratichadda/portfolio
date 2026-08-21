function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = mulberry32(42);
const STARS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: rand() * 100,
  top: rand() * 100,
  delay: rand() * 2.4,
}));

export function Starfield() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {STARS.map((s) => (
        <div
          key={s.id}
          className="animate-twinkle absolute size-[3px] bg-gold"
          style={{ left: `${s.left}%`, top: `${s.top}%`, animationDelay: `${s.delay}s` }}
        />
      ))}
    </div>
  );
}
