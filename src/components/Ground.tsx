type Decoration = { left: string; symbol: string };

export function Ground({ decorations = [] }: { decorations?: Decoration[] }) {
  return (
    <div
      aria-hidden="true"
      className="relative h-14 overflow-hidden border-y-4 border-black"
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, #2ecc71 0 22px, #21a85c 22px 44px)",
      }}
    >
      {decorations.map((d, i) => (
        <span key={i} className="absolute bottom-2 text-xl" style={{ left: d.left }}>
          {d.symbol}
        </span>
      ))}
    </div>
  );
}
