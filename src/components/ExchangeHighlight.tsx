export function ExchangeHighlight({
  title,
  subtitle,
  date,
}: {
  title: string;
  subtitle: string;
  date: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-4 border-[3px] border-black bg-white p-4 text-black shadow-[5px_5px_0_0_var(--color-mint)]">
      <span
        aria-hidden="true"
        className="font-[system-ui,sans-serif] text-[32px] leading-none text-gold"
        style={{ WebkitTextStroke: "1px black", paintOrder: "stroke fill" }}
      >
        ★
      </span>
      <div className="min-w-[180px] flex-1">
        <div className="font-pixel text-[11px] leading-relaxed">{title}</div>
        <div className="mt-1.5 text-[17px] text-black/70">{subtitle}</div>
      </div>
      <div className="ml-auto font-pixel text-[9px] text-pink-dark">{date}</div>
    </div>
  );
}
