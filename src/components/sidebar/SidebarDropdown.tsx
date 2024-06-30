"use client";
import Link from "next/link";
import React, { useState } from "react";
// icons
import { MdKeyboardArrowRight } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";

interface IChildrenMenu {
  icon?: React.ReactNode;
  label: string;
  route: string;
}

interface IMenuItem {
  icon: React.ReactNode;
  label: string;
  children: IChildrenMenu[];
  isSidebarOpen: boolean;
}

const SidebarDropdown: React.FC<IMenuItem> = ({
  icon,
  label,
  children,
  isSidebarOpen,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div
      className={`${
        isOpen ? "max-h-32" : "max-h-6 "
      } transition-all duration-200 ease-in  
      }   w-full overflow-hidden`}
    >
      {/* Collapse button  */}
      <button
        onClick={() => setOpen(!isOpen)}
        className="flex items-center justify-between  w-full gap-8 "
      >
        <div className="flex items-center gap-2 ">
          <span className={`${!isSidebarOpen && "text-2xl"}`}>
            {icon && icon}
          </span>
          <span className={`${!isSidebarOpen && "hidden"}`}>{label}</span>
        </div>
        <span
          className={`${!isSidebarOpen && "hidden"} ${
            isOpen && "rotate-180 transition-transform duration-500 "
          } text-md`}
        >
          <RiArrowDownSLine />
        </span>
      </button>

      {/* Collapse content */}
      <div
        className={`${
          !isSidebarOpen && "hidden"
        }    text-md ml-7 mt-3 space-y-2`}
      >
        {children.map((menu: IChildrenMenu, index: number) => (
          <Link
            key={index}
            className="flex items-center   text-sm gap-3 hover:text-white color-transition"
            href={menu.route}
          >
            <span className={`text-md `}>
              {menu.icon ? menu.icon : <MdKeyboardArrowRight />}
            </span>{" "}
            <span className={`${!isOpen && "hidden"}`}>{menu.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarDropdown;
