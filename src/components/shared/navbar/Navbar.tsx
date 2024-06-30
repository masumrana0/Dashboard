"use client";
import React from "react";
import "./Navbar.css";
import SearchBar from "./ui/SearchBar";
import Language from "./ui/Language";
import MyCart from "./ui/MyCart";
import ScreenMode from "./ui/ScreenMode";

// icons
import { CgMenuLeft } from "react-icons/cg";
import { HiArrowLongRight } from "react-icons/hi2";

import DarkMode from "./ui/DarkMode";
import NavProfile from "./ui/NavProfile";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setOpenSidebar } from "@/Redux/slices/layoutSlice";
import MobileSearchBar from "./ui/MobileSearchBar";
import NavNotification from "./ui/Notification";

const Navbar: React.FC<{}> = () => {
  // redux
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.layoutSlice.isOpenSideBar);

  return (
    <div className="w-full  h-[5rem] flex items-center  justify-center lg:justify-between color-transition  darkmode bg-white lg:px-5 ">
      {/* Left section  */}
      <section className="h-full  flex items-center  sm:gap-2  mr-2 ">
        <button
          className="text-2xl lg:text-3xl sm:block md:hidden lg:block "
          onClick={() => dispatch(setOpenSidebar())}
        >
          {isOpen ? (
            <span className="  text-gray-500">
              <HiArrowLongRight />
            </span>
          ) : (
            <span className=" text-gray-500">
              <CgMenuLeft />
            </span>
          )}
        </button>

        <SearchBar />
        <MobileSearchBar />
      </section>

      {/* Right Section */}

      <section className="flex items-center  sm:gap-2 ">
        {/* Language Dropdown */}

        <Language />
        <NavNotification />
        <MyCart />
        <ScreenMode />
        <DarkMode />

        <NavProfile />
      </section>
    </div>
  );
};

export default Navbar;
