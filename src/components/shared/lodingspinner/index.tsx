"use client";
import React from "react";
type SpinnerType = "regular" | "small" | "large";
const LoadingSpinner: React.FC<{ size?: SpinnerType }> = ({
  size = "small",
}) => {
  const spinnerClasses: Record<
    SpinnerType,
    {
      parant: string;
      children: string;
    }
  > = {
    small: {
      parant: "flex justify-center items-center mt-10 ",
      children:
        "animate-spin rounded-full   w-5 h-5  border-t-2 border-b-2 border-brandcolor dark:brandcolorlighter shadow-lg",
    },
    regular: {
      parant: "flex justify-center items-center mt-10",
      children:
        "animate-spin rounded-full   w-12 h-12  border-t-4 border-b-4 border-brandcolor dark:brandcolorlighter shadow-lg",
    },
    large: {
      parant: "flex justify-center items-center mt-10",
      children:
        "animate-spin rounded-full   w-16 h-16  border-t-4 border-b-4 border-brandcolor dark:brandcolorlighter shadow-lg",
    },
  };

  return (
    <div className={spinnerClasses[size].parant}>
      <div className={spinnerClasses[size].children}></div>
    </div>
  );
};

export default LoadingSpinner;
