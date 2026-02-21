"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Globe } from "lucide-react";
import Logo from "./Logo";
import { useApp } from "@/lib/context";
import { translations, t, type Lang } from "@/lib/translations";

const langLabels: Record<Lang, string> = { en: "EN", he: "HE", ru: "RU" };
const langOrder: Lang[] = ["en", "he", "ru"];

export default function Header() {
  const { lang, setLang, theme, setTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const navLinks = [
    { label: t(translations.nav.work, lang), href: "#portfolio" },
    { label: t(translations.nav.collections, lang), href: "#categories" },
    { label: t(translations.nav.about, lang), href: "#about" },
    { label: t(translations.nav.contact, lang), href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-16">
          <Logo />

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-muted hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3 ms-4">
              {/* Theme toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-1.5 text-muted hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              {/* Language selector */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 p-1.5 text-muted hover:text-foreground transition-colors text-[13px]"
                >
                  <Globe size={14} />
                  {langLabels[lang]}
                </button>
                {langOpen && (
                  <div className="absolute top-full end-0 mt-2 bg-card border border-border rounded-md overflow-hidden min-w-[80px] shadow-lg">
                    {langOrder.map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setLangOpen(false); }}
                        className={`block w-full text-start px-4 py-2 text-[13px] transition-colors ${
                          l === lang ? "text-foreground bg-border/50" : "text-muted hover:text-foreground hover:bg-border/30"
                        }`}
                      >
                        {l === "en" ? "English" : l === "he" ? "עברית" : "Русский"}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-1.5 text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-foreground/70 hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, i) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-lg text-foreground/70 hover:text-foreground transition-all duration-300"
            style={{
              transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
              transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
              opacity: mobileOpen ? 1 : 0,
            }}
          >
            {link.label}
          </a>
        ))}

        {/* Mobile language switcher */}
        <div className="flex gap-4 mt-4" style={{ opacity: mobileOpen ? 1 : 0, transition: "opacity 0.3s 0.3s" }}>
          {langOrder.map((l) => (
            <button
              key={l}
              onClick={() => { setLang(l); setMobileOpen(false); }}
              className={`text-sm px-3 py-1 rounded-full transition-colors ${
                l === lang ? "bg-filter-bg text-filter-text" : "text-muted hover:text-foreground"
              }`}
            >
              {l === "en" ? "EN" : l === "he" ? "עב" : "РУ"}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
