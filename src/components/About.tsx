"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 px-6 lg:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-card">
              <Image
                src="/images/photographer.png"
                alt="Борис Ро — Фотограф"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-extralight tracking-[0.04em] mb-10">
              Обо мне
            </h2>
            <div className="space-y-6 text-muted text-[15px] leading-[1.8]">
              <p>
                С острым чувством света и композиции, borisRo запечатлевает моменты,
                выходящие за рамки обыденного. Специализируясь на пейзажной
                и художественной фотографии, каждый снимок рассказывает уникальную
                историю о захватывающей красоте нашего мира.
              </p>
              <p>
                От суровых вершин Патагонии до безмятежных храмов Киото —
                этот путь был неустанным стремлением к идеальному кадру.
                Каждая фотография — это свидетельство терпения, страсти
                и непоколебимой преданности своему делу.
              </p>
              <p>
                Публикации в National Geographic, журнале Aperture, выставки
                в галереях Нью-Йорка, Лондона и Токио.
              </p>
            </div>

            <div className="flex gap-14 mt-14 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-extralight text-foreground">12+</p>
                <p className="text-xs text-muted mt-1">Лет опыта</p>
              </div>
              <div>
                <p className="text-2xl font-extralight text-foreground">85+</p>
                <p className="text-xs text-muted mt-1">Наград</p>
              </div>
              <div>
                <p className="text-2xl font-extralight text-foreground">40+</p>
                <p className="text-xs text-muted mt-1">Стран</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
