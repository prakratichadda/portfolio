export function Console({ label = "PC" }: { label?: string }) {
  return (
    <div className="mx-auto w-full max-w-[260px] rounded-[16px_16px_34px_34px] border-4 border-black bg-pink p-4 shadow-[6px_6px_0_0_#000]">
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden border-4 border-black bg-[#0B2D1A]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(0,0,0,0.2) 0 2px, transparent 2px 4px)",
          }}
        />
        <span
          className="relative z-[1] font-pixel text-[34px] text-mint"
          style={{ textShadow: "0 0 10px var(--color-mint)" }}
        >
          {label}
        </span>
      </div>

      <div className="mt-3.5 flex items-center justify-between">
        <div aria-hidden="true" className="relative size-[34px]">
          <div className="absolute left-1/2 top-0 h-full w-[11px] -translate-x-1/2 rounded-[2px] bg-black" />
          <div className="absolute left-0 top-1/2 h-[11px] w-full -translate-y-1/2 rounded-[2px] bg-black" />
        </div>
        <div aria-hidden="true" className="flex items-center gap-2">
          <span className="size-4 rounded-full bg-mint" />
          <span className="size-4 rounded-full bg-pink" />
        </div>
      </div>
    </div>
  );
}
