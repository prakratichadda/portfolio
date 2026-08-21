export function Flagpole() {
  return (
    <div aria-hidden="true" className="relative mx-auto h-[150px] w-[6px] bg-black">
      <div
        className="absolute left-[6px] top-0 h-[38px] w-[60px]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #000 0 10px, var(--color-gold) 10px 20px)",
          clipPath: "polygon(0 0, 100% 50%, 0 100%)",
        }}
      />
    </div>
  );
}
