"use client";
import { useTheme } from "@/components/darkmode";
import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const ColorScheme = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };
  return (
    <div className="p-4">
      <div className="flex flex-col justify-center items-left lg:px-7">
        <h2 className="text-brandcolor dark:text-brandcolorlighter font-semibold text-sm  ">
          COLOR SCHEME
        </h2>
        <h4 className="text-gray-500 dark:text-gray-50 tracking-tighter   text-sm ">
          Choose Light or Dark Scheme.
        </h4>
      </div>

      <section className="flex flex-wrap items-center justify-center gap-5 mt-3">
        {/*  Light */}
        <button onClick={toggleTheme}>
          <div
            className={`border ${
              theme === "light" ? "border-brandcolor" : "border-gray-400"
            } w-32 h-20   rounded grid grid-cols-12 overflow-hidden relative bg-white`}
          >
            {theme == "light" && (
              <span className="text-2xl text-brandcolor absolute right-2 top-1 ">
                <IoCheckmarkCircle />
              </span>
            )}
            <span className="col-span-4 bg-gray-100 overflow-hidden p-2 space-y-2">
              <span className="w-full h-2 mb-4  bg-gray-300 block"></span>
              <span className="w-full h-1.5  bg-gray-300 block"></span>
              <span className="w-full h-1.5  bg-gray-300 block"></span>
              <span className="w-full h-1.5  bg-gray-300 block"></span>
            </span>
            <span className="col-span-8  h-full flex flex-col justify-between   ">
              <span className="flex items-center gap-2 bg-gray-100 h-3 w-full px-2">
                <span className="w-full h-1  bg-gray-300 block"></span>
                <span className="w-full h-1  bg-gray-300 block"></span>
                <span className="w-full h-1  bg-gray-300 block"></span>
                <span className="w-full h-1  bg-gray-300 block"></span>
              </span>
              <span className="mx-2 space-y-3">
                <span className="w-full h-1.5  bg-gray-200 block"></span>
                <span className="w-full h-1.5  bg-gray-200 block"></span>
              </span>
              <span className="flex items-center gap-2 bg-gray-100 w-full h-3"></span>
            </span>
          </div>
          <h2 className=" text-gray-800 dark:text-gray-50 text-center text-sm mt-1">
            Light
          </h2>
        </button>

        {/*  Dark  */}
        <button onClick={toggleTheme}>
          <div
            className={`border ${
              theme === "dark" ? "border-brandcolorlighter" : "border-gray-400"
            } w-32 h-20   rounded grid grid-cols-12 overflow-hidden relative `}
          >
            {theme == "dark" && (
              <span className="text-2xl text-gray-50 absolute right-2 top-1 ">
                <IoCheckmarkCircle />
              </span>
            )}
            <span className="col-span-4 bg-gray-800   overflow-hidden p-2 space-y-2">
              <span className="w-full h-2 mb-4  bg-gray-600 block"></span>
              <span className="w-full h-1.5  bg-gray-600   block"></span>
              <span className="w-full h-1.5  bg-gray-600 block"></span>
              <span className="w-full h-1.5  bg-gray-600 block"></span>
            </span>
            <span className="col-span-8  h-full flex flex-col justify-between bg-gray-800  ">
              <span className="flex items-center gap-2 bg-gray-800 h-3 w-full px-2">
                <span className="w-full h-1  bg-gray-600 block"></span>
                <span className="w-full h-1  bg-gray-600 block"></span>
                <span className="w-full h-1  bg-gray-600 block"></span>
                <span className="w-full h-1  bg-gray-600 block"></span>
              </span>
              <span className="mx-2 space-y-3">
                <span className="w-full h-1.5  bg-gray-600 block  "></span>
                <span className="w-full h-1.5  bg-gray-600 block  "></span>
              </span>
              <span className="flex items-center gap-2 bg-gray-800 w-full h-3"></span>
            </span>
          </div>
          <h2 className="text-gray-800 dark:text-gray-50 text-center text-sm mt-1">
            Dark
          </h2>
        </button>
      </section>
    </div>
  );
};

export default ColorScheme;
