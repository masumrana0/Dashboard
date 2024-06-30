"use client";
import React, { useEffect, useState } from "react";
import { BsFillMoonFill, BsSun } from "react-icons/bs";
import { PiMoon } from "react-icons/pi";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // access  to system theme mode
  const darkQuery = window.matchMedia("(prefers-color-scheme:dark)");
  // access element
  const element = document.documentElement;

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };
  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  return (
    <div>
      {theme == "light" ? (
        <button
          onClick={() => setTheme("dark")}
          className="text-gray-500 sm:h-[3rem] h-[2.5rem]   sm:w-[3rem] w-[2.5rem]  text-[1.5rem] sm:text-2xl flex items-center justify-center   hover:bg-slate-200 colortransition p-2 rounded-full"
        >
          <PiMoon />
        </button>
      ) : (
        <button
          onClick={() => setTheme("light")}
          className="text-gray-500 sm:h-[3rem] h-[2.5rem]   sm:w-[3rem] w-[2.5rem]  text-[1.5rem] sm:text-2xl flex items-center justify-center dark:hover:text-gray-500 hover:bg-slate-200  colortransition p-2 rounded-full dark:text-white"
        >
          <BsSun />
        </button>
      )}
    </div>
  );
};

export default DarkMode;
