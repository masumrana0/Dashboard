/**
 * Title: 'Navbar develop By Masum Rana'
 * Description: ''
 * Email:'masum.rana6267@gmail.com'
 * Author: 'Masum Rana'
 * Date: 01-07-2024
 *
 */

"use client";
import React from "react";

// redux
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setOpenSidebar } from "@/Redux/slices/layoutSlice";

// Components
import DarkMode from "./topSection/NavDarkMode";
import NavProfile from "./topSection/NavProfile";
import MobileSearchBar from "./topSection/MobileSearchBar";
import NavNotification from "./topSection/Notification";
import SearchBar from "./topSection/SearchBar";
import Language from "./topSection/Language";
import MyCart from "./topSection/MyCart";
import ScreenMode from "./topSection/ScreenMode";

// icons
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";
import NavBottomSection from "./bottomSection/NavBottomSection";

const Navbar: React.FC<{}> = () => {
  // redux
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.layoutSlice.isOpenSideBar);
  const layoutState = useAppSelector((state) => state.layoutSlice.layoutState);
  // console.log(layoutState);

  return (
    <div className={`   `}>
      {/* Nav Top Section  */}
      <section
        className={`${
          layoutState && "container mx-auto px-0 "
        } w-full  h-[5rem] px-10 flex items-center  justify-center lg:justify-between color-transition  darkmode bg-white `}
      >
        {/* Left section  */}
        <section className="h-full  flex items-center  sm:gap-2  mr-2 ">
          <button
            className={`text-3xl sm:block md:hidden lg:block ${
              layoutState && "lg:hidden"
            }`}
            onClick={() => dispatch(setOpenSidebar())}
          >
            {isOpen ? (
              <span className="  text-gray-500">
                <CgMenuRight />
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
      </section>
      {/* Nav Bottom Section. IT's for only Horizontal laout  */}
      <section
        className={`${
          !layoutState && "md:hidden"
        } hidden md:block border-t dark:border-gray-700  `}
      >
        <NavBottomSection />
      </section>
    </div>
  );
};

export default Navbar;
