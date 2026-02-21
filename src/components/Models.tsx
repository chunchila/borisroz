"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useApp } from "@/lib/context";
import { translations, t, type Lang } from "@/lib/translations";

const photoKeys = [
  "elegantPose", "goldenHour", "urbanStyle", "naturalBeauty",
  "softLight", "classicPortrait", "bohemianDream", "timelessGrace",
  "autumnMood",
] as const;

const photoData = [
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80" },
  { src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80" },
  { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&q=80" },
  { src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80" },
  { src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&q=80" },
  { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80" },
  { src: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&q=80" },
  { src: "https://images.unsplash.com/photo-1464863979621-258859e62245?w=800&q=80" },
  { src: "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?w=800&q=80" },
];

function getPhotos(lang: Lang) {
  return photoData.map((p, i) => ({
    src: p.src,
    title: t(translations.models.photos[photoKeys[i]], lang),
  }));
}

export default function Models() {
  const { lang } = useApp();
  const photos = getPhotos(lang);
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null);

  return (
    <section id="models" className="py-28 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-[0.04em]">
            {t(translations.models.title, lang)}
          </h2>
          <p className="mt-4 text-sm text-muted font-light max-w-lg">
            {t(translations.models.subtitle, lang)}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
          <AnimatePresence mode="popLayout">
            {photos.map((photo, i) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <div
                  className={`group relative overflow-hidden cursor-pointer bg-card ${
                    i === 0 ? "aspect-[3/4] sm:row-span-2" : "aspect-[3/4]"
                  }`}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="text-white text-sm font-light">{photo.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors z-50"
              onClick={() => setSelectedPhoto(null)}
              aria-label={t(translations.models.close, lang)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src.replace("w=800", "w=1600")}
                alt={selectedPhoto.title}
                width={1200}
                height={1600}
                className="w-full h-auto max-h-[85vh] object-contain"
                sizes="100vw"
              />
              <div className="mt-4">
                <p className="text-sm text-white/70 font-light">{selectedPhoto.title}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
