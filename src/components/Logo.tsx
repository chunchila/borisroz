"use client";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" className={`group flex items-center gap-3 ${className}`}>
      <span className="text-[22px] tracking-[0.25em] text-foreground font-light uppercase">
        boris<span className="font-medium">Rozin</span>
      </span>
    </a>
  );
}
