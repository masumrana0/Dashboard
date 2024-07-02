"use client";
import React, { useState } from "react";
import angela from "/public/dummy/avatar-3.jpg";
import Image from "next/image";
import { ICommonUser } from "@/interface/common";
import FullName from "@/service/name.service";
import Link from "next/link";

// icons
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineMessage } from "react-icons/md";
import { IoHelpBuoySharp, IoSettingsSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

const NavProfile = () => {
  const [isOpen, setOpen] = useState(false);
  // dummy user
  const user: ICommonUser = {
    name: {
      firstName: "Anna",
      lastName: "Adame",
    },
    photo: angela,
    role: "founder",
  };

  return (
    <div className="relative" onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!isOpen)}
        className=" mx-2 flex items-center justify-center gap-2  md:px-5 md:py-2 dark:bg-gray-700 dark:hover:bg-gray-800 bg-gray-200 hover:bg-gray-300  color-transition  rounded-full md:rounded-none   "
      >
        <Image
          src={angela}
          className="rounded-full h-10 w-10 object-cover  overflow-hidden"
          width={100}
          height={100}
          alt="user avatar"
        />
        <div className="hidden md:block">
          <h2 className="font-semibold text-md dark:text-gray-50 ">
            {FullName(user.name)}
          </h2>
          <p className="text-xs text-gray-500 text-left  capitalize dark:text-gray-50">
            {user.role}
          </p>
        </div>
      </button>

      <div
        className={` absolute right-0 bg-white py-2 rounded-lg shadow-lg    w-[13rem]  transform transition-all duration-500 ease-in-out ${
          isOpen
            ? "translate-y-0 opacity-100 z-999999"
            : "translate-y-4 opacity-0 pointer-events-none"
        } dark:bg-gray-800 dark:text-white`}
      >
        <h3 className="font-semibold text-gray-500 dark:!text-gray-300  p-4">
          Welcome {user.name.firstName}
        </h3>

        <div className="mt-5">
          <Link
            className="flex items-center gap-1 font-semibold  px-4 py-2 hover:bg-slate-100  text-gray-500 dark:!text-gray-300 dark:hover:!text-blue-600"
            href={"/dashboard/profile"}
          >
            <FaUserCircle /> Profile
          </Link>
          <Link
            className="flex items-center gap-1 font-semibold   px-4 py-2 hover:bg-slate-100 text-gray-500 dark:!text-gray-300  dark:hover:!text-blue-600"
            href={"/dashboard/chat"}
          >
            <MdOutlineMessage /> Messages
          </Link>
          <Link
            className="flex items-center gap-1 font-semibold   px-4 py-2 hover:bg-slate-100 text-gray-500 dark:!text-gray-300 dark:hover:!text-blue-600 "
            href={"/messages"}
          >
            <IoHelpBuoySharp /> Help
          </Link>
        </div>

        <hr className="border-t my-3" />

        <div>
          <Link
            className="flex items-center gap-1 font-semibold   px-4 py-2 hover:bg-slate-100 text-gray-500 dark:!text-gray-300 dark:hover:!text-blue-600 "
            href={"/messages"}
          >
            <IoSettingsSharp /> Settings
          </Link>
          <Link
            className="flex items-center gap-1 font-semibold   px-4 py-2 hover:bg-slate-100 text-gray-500 dark:!text-gray-300 dark:hover:!text-blue-600 mb-5 "
            href={"/messages"}
          >
            <TbLogout /> Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavProfile;
