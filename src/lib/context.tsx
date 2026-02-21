"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type Lang, isRTL } from "./translations";

type Theme = "dark" | "light";

interface AppContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  dir: "ltr" | "rtl";
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const savedLang = localStorage.getItem("borisrozin-lang") as Lang | null;
    const savedTheme = localStorage.getItem("borisrozin-theme") as Theme | null;
    if (savedLang && ["en", "he", "ru"].includes(savedLang)) setLangState(savedLang);
    if (savedTheme && ["dark", "light"].includes(savedTheme)) setThemeState(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL(lang) ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("borisrozin-lang", l);
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("borisrozin-theme", t);
  };

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, dir: isRTL(lang) ? "rtl" : "ltr" }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
