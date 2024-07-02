"use client";
import React from "react";
// Redux
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { toggleLayoutSidebar } from "@/Redux/slices/layoutSlice";
// components
import ColorScheme from "./ui/ColorScheme";
import LayoutChanger from "./ui/LayoutChanger";

// icons
import { RxCross2 } from "react-icons/rx";

const LayoutSidebar = () => {
  // Redux
  const isSidebarOpen = useAppSelector(
    (state) => state.layoutSlice.isOpenLayoutSidbar
  );
  const dispatch = useAppDispatch();

  return (
    <div
      className={`${
        isSidebarOpen ? "right-0" : " -right-[30rem]  pointer-events-none  "
      } lg:w-[23rem] w-[15rem] !transition-all !ease-in-out  !duration-300 h-full  absolute  top-0   z-[9999999999]  darkmode text-[1rem]  text-gray-300 bg-white overflow-hidden `}
    >
      {/* when Open sitebar then overlay will be visible hole page */}
      <div
        className={`${
          isSidebarOpen
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } transition-opacity ease-in-out duration-300 fixed inset-0 bg-black`}
        onClick={() => dispatch(toggleLayoutSidebar(false))}
        // Close sidebar when clicking on the overlay
      ></div>

      {/* Sidebar */}
      <div
        className={` lg:w-[23rem] w-[15rem]   h-full darkmode text-[1rem] absolute top-0  text-gray-300 bg-white overflow-hidden   `}
      >
        {/* Sidebar header  */}
        <header className="bg-brandcolor flex items-center justify-between py-3 px-4">
          <h2 className="font-bold text-gray-200 text-lg">Theme Customizer</h2>
          <button
            onClick={() => dispatch(toggleLayoutSidebar(false))}
            className="text-xl text-gray-300"
          >
            <RxCross2 />
          </button>
        </header>
        {/* Sidebar content here */}

        {/* layout Section  */}
        <LayoutChanger />
        {/* Color Scheme  */}
        <ColorScheme />
      </div>
    </div>
  );
};

export default LayoutSidebar;
