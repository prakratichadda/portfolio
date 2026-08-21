import type { ReactNode } from "react";

type PixelPanelProps = {
  label: string;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  shadow?: boolean;
};

export function PixelPanel({
  label,
  icon = "▤",
  children,
  className = "",
  bodyClassName = "",
  shadow = true,
}: PixelPanelProps) {
  return (
    <div
      className={`relative border-4 border-black bg-panel text-panel-ink ${shadow ? "shadow-[6px_6px_0_0_var(--color-pink-dark)]" : ""} ${className}`}
    >
      <div className="flex items-center justify-between gap-2 bg-black px-3 py-2 font-pixel text-[9px] text-mint">
        <span>{label}</span>
        <span aria-hidden="true" className="font-[system-ui,sans-serif]">
          {icon}
        </span>
      </div>
      <div className={`p-5 ${bodyClassName}`}>{children}</div>
    </div>
  );
}

export function PixelPanelTitle({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3.5 font-pixel text-[11px] text-pink-dark">{children}</div>
  );
}
