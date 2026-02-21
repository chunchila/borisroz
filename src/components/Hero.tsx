"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useApp } from "@/lib/context";
import { translations, t } from "@/lib/translations";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
    alt: "Mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80",
    alt: "Misty forest valley",
  },
  {
    src: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1920&q=80",
    alt: "Serene lake reflection",
  },
];

export default function Hero() {
  const { lang } = useApp();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {heroImages.map((img, i) => (
        <div
          key={img.src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            className="object-cover scale-105"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s", opacity: 0 }}>
          <h1 className="flex flex-col items-center leading-[0.85] text-white/90 uppercase">
            <span className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-[0.35em]">Boris</span>
            <span className="text-5xl md:text-7xl lg:text-8xl font-light tracking-[0.35em]">Rozin</span>
          </h1>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.5s", opacity: 0 }}>
          <p className="mt-6 text-[15px] text-white/50 font-light tracking-[0.15em]">
            {t(translations.hero.subtitle, lang)}
          </p>
        </div>
        <div className="animate-fade-in-up" style={{ animationDelay: "0.8s", opacity: 0 }}>
          <a
            href="#portfolio"
            className="mt-16 text-[13px] text-white/40 hover:text-white/80 transition-colors duration-500 tracking-wider"
          >
            {t(translations.hero.cta, lang)} &darr;
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-700 rounded-full ${
              i === current
                ? "w-6 h-1 bg-white/70"
                : "w-1 h-1 bg-white/20 hover:bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
