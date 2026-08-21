import type { ReactNode } from "react";

/**
 * Press Start 2P has sparse glyph coverage — dingbats like ★ ▸ ▶ render as
 * tofu/dots. Force a system font for these so the symbol itself is legible.
 */
export function Sym({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`font-[system-ui,sans-serif] ${className}`} aria-hidden="true">
      {children}
    </span>
  );
}
