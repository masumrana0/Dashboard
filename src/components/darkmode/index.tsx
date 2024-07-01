"use client";
import { ITheme } from "@/interface/common";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setThemeState] = useState<ITheme | string>(() => {
    return localStorage.getItem("theme") || "light";
  });

  const setTheme = (theme: ITheme | string) => {
    setThemeState(theme);
    localStorage.setItem("theme", theme as string);
    applyTheme(theme);
  };

  const applyTheme = (theme: ITheme | string) => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  return { theme, setTheme };
};
