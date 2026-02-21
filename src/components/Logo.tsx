"use client";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`group flex items-center ${className}`}>
      <span className="text-[15px] tracking-[0.3em] text-foreground uppercase">
        <span className="font-extralight">Boris</span>
        <span className="inline-block w-[1px] h-[10px] bg-foreground/25 mx-[0.6em] align-middle" />
        <span className="font-normal">Rozin</span>
      </span>
    </a>
  );
}
