"use client";
import React, { useRef, useState } from "react";
import ClickOutside from "@/components/custom/ClickOutSide";

interface IDropdownProps {
  triggerButton: React.ReactNode;
  dropdownContent: React.ReactNode;
}

const Dropdown: React.FC<IDropdownProps> = ({
  triggerButton,
  dropdownContent,
}) => {
  const [isOpen, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <ClickOutside exceptionRef={contentRef} onClick={() => setOpen(false)}>
      <div className="md:relative  ">
        {/* dropdown button  */}
        <button
          onClick={() => setOpen(!isOpen)}
          className={`relative text-gray-500 sm:h-[3rem] h-[2.5rem]   sm:w-[3rem] w-[2.5rem]  text-[1.5rem] sm:text-2xl  dark:text-white dark:hover:text-gray-50 flex items-center justify-center  p-2 rounded-full     ${
            isOpen && "bg-slate-200"
          } hover:bg-slate-200 color-transition`}
        >
          {triggerButton}
        </button>

        {/* Dropdown  */}
        <main
          ref={contentRef}
          className={`absolute right-0   bg-white py-2  rounded-lg shadow-lg  w-screen md:w-[22rem]  max-h-[30rem]   ${
            isOpen
              ? "top-16  md:top-12 opacity-100"
              : "top-20 md:top-16 opacity-0"
          } !transition-all   !duration-500 bg-white shadow-md  darkmode `}
        >
          {dropdownContent}
        </main>
      </div>
    </ClickOutside>
  );
};

export default Dropdown;
