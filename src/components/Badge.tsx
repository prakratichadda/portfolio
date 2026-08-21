export function Badge({ children }: { children: string }) {
  return (
    <span className="border-2 border-black bg-white px-2 py-1.5 font-pixel text-[8px] text-black">
      {children}
    </span>
  );
}
