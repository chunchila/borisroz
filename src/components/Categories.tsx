"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const categories = [
  {
    name: "Landscapes",
    count: 48,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
  },
  {
    name: "Portraits",
    count: 32,
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
  },
  {
    name: "Street",
    count: 27,
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
  },
  {
    name: "Nature",
    count: 56,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80",
  },
  {
    name: "Architecture",
    count: 19,
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80",
  },
  {
    name: "Black & White",
    count: 23,
    image: "https://images.unsplash.com/photo-1445251836269-d158eaa028a6?w=600&q=80",
  },
];

export default function Categories() {
  return (
    <section id="categories" className="py-28 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-extralight tracking-[0.04em]">
            Collections
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-3 gap-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.5 } },
              }}
              className="group relative overflow-hidden cursor-pointer aspect-[3/2]"
            >
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white text-sm font-light">{cat.name}</p>
                <p className="text-white/40 text-xs mt-0.5">{cat.count} photos</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
