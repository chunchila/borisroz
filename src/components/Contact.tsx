"use client";

import { motion } from "framer-motion";
import { useApp } from "@/lib/context";
import { translations, t } from "@/lib/translations";

export default function Contact() {
  const { lang } = useApp();

  return (
    <section id="contact" className="py-28 px-6 lg:px-10">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extralight tracking-[0.04em] mb-4">
            {t(translations.contact.title, lang)}
          </h2>
          <p className="text-muted text-[15px] mb-14">
            {t(translations.contact.subtitle, lang)}
          </p>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <label className="text-xs text-muted block mb-2">
                  {t(translations.contact.name, lang)}
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                />
              </div>
              <div>
                <label className="text-xs text-muted block mb-2">
                  {t(translations.contact.email, lang)}
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-foreground/40 transition-colors duration-300"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted block mb-2">
                {t(translations.contact.subject, lang)}
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-foreground/40 transition-colors duration-300"
              />
            </div>
            <div>
              <label className="text-xs text-muted block mb-2">
                {t(translations.contact.message, lang)}
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent border-b border-border pb-3 text-sm text-foreground focus:outline-none focus:border-foreground/40 transition-colors duration-300 resize-none"
              />
            </div>
            <button
              type="submit"
              className="text-[13px] text-foreground/60 hover:text-foreground border-b border-foreground/20 hover:border-foreground pb-1 transition-all duration-300"
            >
              {t(translations.contact.send, lang)}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
