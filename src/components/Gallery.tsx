"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    title: "Golden Horizons",
    category: "Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
    title: "Forest Cathedral",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=800&q=80",
    title: "Ocean Dreams",
    category: "Seascape",
  },
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
    title: "Urban Geometry",
    category: "Architecture",
  },
  {
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&q=80",
    title: "Cascade Whispers",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
    title: "Mountain Solitude",
    category: "Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=800&q=80",
    title: "Ember Skies",
    category: "Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=800&q=80",
    title: "Silent Paths",
    category: "Nature",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    title: "Starlit Peaks",
    category: "Astrophotography",
  },
  {
    src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80",
    title: "Verdant Valley",
    category: "Landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?w=800&q=80",
    title: "Tropical Bliss",
    category: "Seascape",
  },
  {
    src: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80",
    title: "Dawn's Embrace",
    category: "Landscape",
  },
];

const filters = ["All", "Landscape", "Nature", "Seascape", "Architecture", "Astrophotography"];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[0] | null>(null);

  const filtered = activeFilter === "All"
    ? photos
    : photos.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-28 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-[0.04em]">
            Selected Work
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[13px] px-4 py-1.5 rounded-full transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-white text-black"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
          <AnimatePresence mode="popLayout">
            {filtered.map((photo) => (
              <motion.div
                key={photo.src}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer bg-card"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                    <p className="text-white text-sm font-light">
                      {photo.title}
                    </p>
                    <p className="text-white/50 text-xs mt-0.5">
                      {photo.category}
                    </p>
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
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-6xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedPhoto.src.replace("w=800", "w=1600")}
                alt={selectedPhoto.title}
                width={1600}
                height={1000}
                className="w-full h-auto max-h-[85vh] object-contain"
                sizes="100vw"
              />
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-white/70 font-light">
                  {selectedPhoto.title}
                </p>
                <p className="text-xs text-white/30">
                  {selectedPhoto.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
