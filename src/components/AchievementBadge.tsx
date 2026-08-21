import type { Cert } from "@/lib/data";

export function AchievementBadge({ icon, label, featured = false }: Cert) {
  return (
    <span
      className={`inline-flex items-center gap-2 border-2 border-black px-3 py-2 font-pixel text-[8px] leading-relaxed ${
        featured
          ? "bg-gold text-black shadow-[3px_3px_0_0_var(--color-pink)]"
          : "bg-white text-black shadow-[3px_3px_0_0_#8a8a94]"
      }`}
    >
      <span aria-hidden="true">{icon}</span>
      {label}
    </span>
  );
}
