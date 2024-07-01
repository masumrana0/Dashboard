"use client";
import Link from "next/link";
import React from "react";

import BottomSectionDropdown from "./BottomSectionDropdown";
import { navContent } from "@/content/navbar";

const NavBottomSection = () => {
  return (
    <div
      className={`container mx-auto h-12 py-2  shadow-xl text-sm lg:text-base  flex items-center md:justify-center lg:justify-start gap-3 lg:gap-10 `}
    >
      {navContent.map((menu, index) => (
        <div className="z-99999" key={index}>
          {menu.children ? (
            <BottomSectionDropdown
              icon={menu.icon}
              label={menu.label}
              // eslint-disable-next-line react/no-children-prop
              children={menu.children as []}
            />
          ) : (
            <Link
              className="flex items-center gap-1   "
              href={menu.route as string}
            >
              {menu?.icon}
              {menu?.label}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default NavBottomSection;
