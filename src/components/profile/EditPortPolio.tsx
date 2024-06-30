import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const EditPortPolio = () => {
  return (
    <div className=" p-5 bg-white  rounded-lg shadow mt-10  light-darkmode ">
      <h3 className="text-xl text-gray-800 font-semibold  mb-10 dark:text-gray-50">
        Portfolio
      </h3>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <FaGithub className=" text-lg bg-sky-400 rounded-full !text-white  p-3" />
          <input
            placeholder="@daveadame"
            className="w-full border border-gray-300 py-[7px] px-2 rounded  outline-none hover:border-blue-500 light-darkmode"
            type="text"
          />
        </div>

        <div className="flex items-center gap-3">
          <FaLinkedin className=" text-lg bg-red-300 rounded-full !text-white  p-3" />
          <input
            placeholder="www.velzon.com"
            className="w-full border border-gray-300 py-[7px] px-2 rounded  outline-none   hover:border-blue-500 light-darkmode"
            type="text"
          />
        </div>

        <div className="flex items-center gap-3">
          <BsFacebook className=" text-lg bg-blue-400 rounded-full !text-white  p-3" />
          <input
            placeholder="masumrana0"
            className="w-full border border-gray-300 py-[7px] px-2 rounded  outline-none   hover:border-blue-500 light-darkmode"
            type="text"
          />
        </div>

        <div className="flex items-center gap-3">
          <AiOutlineGlobal className=" text-lg bg-green-400 rounded-full !text-white  p-3" />
          <input
            placeholder="masumrana0"
            className="w-full border border-gray-300 py-[7px] px-2 rounded  outline-none  hover:border-blue-500 light-darkmode"
            type="text"
          />
        </div>
      </div>
    </div>
  );
};

export default EditPortPolio;
