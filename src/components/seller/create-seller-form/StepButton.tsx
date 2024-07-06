"use client";
import React from "react";
import { useAppDispatch } from "@/Redux/hooks";
import { goPreviousStep, nextStep } from "@/Redux/slices/FormStepSlice";
const StepButton = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="w-full flex items-center justify-between mt-5">
      <button
        onClick={() => dispatch(goPreviousStep())}
        type="button"
        className="text-gray-800 dark:text-gray-50 px-3 py-2 border rounded text-base"
      >
        Previous
      </button>
      <button
        onClick={() => dispatch(nextStep())}
        className="text-gray-800 dark:text-gray-50 px-3 py-2 border rounded text-base"
      >
        Next
      </button>
    </div>
  );
};

export default StepButton;
