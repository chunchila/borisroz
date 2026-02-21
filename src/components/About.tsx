"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useApp } from "@/lib/context";
import { translations, t } from "@/lib/translations";

export default function About() {
  const { lang } = useApp();

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
                alt="Boris Rozin"
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
              {t(translations.about.title, lang)}
            </h2>
            <div className="space-y-6 text-muted text-[15px] leading-[1.8]">
              <p>{t(translations.about.bio1, lang)}</p>
              <p>{t(translations.about.bio2, lang)}</p>
              <p>{t(translations.about.bio3, lang)}</p>
            </div>

            <div className="flex gap-14 mt-14 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-extralight text-foreground">12+</p>
                <p className="text-xs text-muted mt-1">{t(translations.about.years, lang)}</p>
              </div>
              <div>
                <p className="text-2xl font-extralight text-foreground">85+</p>
                <p className="text-xs text-muted mt-1">{t(translations.about.awards, lang)}</p>
              </div>
              <div>
                <p className="text-2xl font-extralight text-foreground">40+</p>
                <p className="text-xs text-muted mt-1">{t(translations.about.countries, lang)}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
