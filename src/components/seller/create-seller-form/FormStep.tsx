"use client";
import { useAppSelector } from "@/Redux/hooks";
import React from "react";

const FormStep = () => {
  const step = useAppSelector((state) => state.formStepSlice.step);
  console.log(step)
  return (
    <div className="flex items-center gap-1 md:gap-3 lg:gap-5">
      {/* Step 1 */}
      <div className="flex items-center gap-1 md:flex-row flex-col">
        <span className="w-5 h-5 md:w-8 md:h-8 rounded-full font-semibold md:text-lg sm:text-sm text-xs text-white bg-brandcolorlighter flex items-center justify-center">
          1
        </span>
        <h3 className="md:text-base sm:text-sm text-xs font-semibold text-gray-800 dark:text-gray-50 flex items-center gap-1">
          Personal <span className="hidden md:block">Information</span>
          <span className="md:hidden">Info</span>
        </h3>
      </div>

      {/* line  */}
      <div
        className={`w-full border-t  transition-colors duration-300   ${
          step > 1 ? "border-brandcolorlighter" : "border-gray-400"
        }`}
      ></div>

      {/* Step 2 */}
      <div className="flex items-center gap-1 md:flex-row flex-col">
        <span className="w-5 h-5 md:w-8 md:h-8 rounded-full font-semibold md:text-lg sm:text-sm text-xs text-white bg-brandcolorlighter flex items-center justify-center">
          2
        </span>
        <h3 className="md:text-base sm:text-sm text-xs font-semibold text-gray-800 dark:text-gray-50 flex items-center gap-1">
          Authentication <span className="hidden md:block">Information</span>
          <span className="md:hidden">Info</span>
        </h3>
      </div>
      {/* line  */}
      <div
        className={`w-full border-t  transition-colors duration-300    ${
          step > 2 ? "border-brandcolorlighter" : "border-gray-400"
        }`}
      ></div>
      {/* Step 3 */}
      <div className="flex items-center gap-1 md:flex-row flex-col">
        <span className="w-5 h-5 md:w-8 md:h-8 rounded-full font-semibold md:text-lg sm:text-sm text-xs text-white bg-brandcolorlighter flex items-center justify-center">
          3
        </span>
        <h3 className="md:text-base sm:text-sm text-xs font-semibold text-gray-800 dark:text-gray-50 flex items-center gap-1">
          Address <span className="hidden md:block">Information</span>
          <span className="md:hidden">Info</span>
        </h3>
      </div>
    </div>
  );
};

export default FormStep;
