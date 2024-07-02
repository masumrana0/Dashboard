"use client";
import { useTheme } from "@/components/darkmode";
import React from "react";
import { BsSun } from "react-icons/bs";
import { PiMoon } from "react-icons/pi";

const NavDarkMode = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div>
      <button
        onClick={toggleTheme}
        className="text-gray-500 dark:text-gray-50 sm:h-[3rem] h-[2.5rem]   sm:w-[3rem] w-[2.5rem]  text-[1.5rem] sm:text-2xl flex items-center justify-center dark:hover:text-gray-500  hover:bg-slate-200 colortransition p-2 rounded-full"
      >
        {theme === "light" ? <PiMoon /> : <BsSun />}
      </button>
    </div>
  );
};

export default NavDarkMode;
