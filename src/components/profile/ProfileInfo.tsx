/**
 * Title: 'Profile Info Page Define By masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 24-06-2024
 *
 */

import React from "react";
import Link from "next/link";
// icons
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const ProfileInfo: React.FC<{ user: any }> = ({ user }) => {
  return (
    <div className=" -translate-y-18  mx-3 sm:mx-5 md:mx-10 grid grid-cols-12 gap-5    ">
      {/* user profile info */}
      <section className="col-span-12 lg:col-span-3   rounded-lg">
        {/* info */}
        <div className=" p-5 sm:p-8 bg-white  rounded-lg shadow  darkmode dark:text-gray-50">
          <h2 className="text-xl text-gray-800 dark:text-gray-50 font-bold mb-10">
            Info
          </h2>
          <div className="space-y-5">
            <div className="flex mb-4  text-sm md:text-md">
              <div className="font-bold w-36  text-sm md:text-md">
                Full Name :
              </div>
              <div className="text-gray-600 dark:text-gray-50   ">
                Anna Adame
              </div>
            </div>
            <div className="flex mb-4  text-sm md:text-md">
              <div className="font-bold w-36 ">Mobile :</div>
              <div className="text-gray-600 dark:text-gray-50">
                +(1) 987 6543
              </div>
            </div>
            <div className="flex mb-4  text-sm md:text-md">
              <div className="font-bold w-36">E-mail :</div>
              <div className="text-gray-600 dark:text-gray-50">
                daveadame@velzon.com
              </div>
            </div>
            <div className="flex mb-4  text-sm md:text-md">
              <div className="font-bold w-36">Location :</div>
              <div className="text-gray-600 dark:text-gray-50">
                California, United States
              </div>
            </div>
            <div className="flex mb-4  text-sm md:text-md">
              <div className="font-bold w-36">Joining Date :</div>
              <div className="text-gray-600 dark:text-gray-50">24 Nov 2021</div>
            </div>
          </div>
        </div>

        {/* Portfolio */}
        <div className=" p-5 bg-white  rounded-lg shadow mt-10  darkmode ">
          <h3 className="text-xl text-gray-800 dark:text-gray-50 font-semibold  mb-10">
            Portfolio
          </h3>
          <div className="flex justify-around items-center text-3xl   py-3">
            <Link className="text-white" href="/">
              <FaLinkedin className=" bg-sky-400 rounded-full p-2" />
            </Link>
            <Link className="text-white" href={"/"}>
              <FaGithub className=" bg-green-500  rounded-full p-2" />
            </Link>

            <Link className="text-white" href={"/"}>
              <AiOutlineGlobal className=" bg-red-300  rounded-full p-2" />
            </Link>
            <Link className="text-white" href={"/"}>
              <BsFacebook className=" bg-blue-600 rounded-full p-2" />
            </Link>
          </div>
        </div>
      </section>
      {/* about */}
      <section className=" col-span-12 lg:col-span-9  darkmode  rounded-lg ">
        <div className=" p-5 bg-white  rounded-lg shadow w-full  darkmode ">
          <h2 className="text-xl text-gray-800 dark:text-gray-50 font-semibold mb-10">
            About
          </h2>
          <div className="text-gray-800 dark:text-gray-50 space-y-4  tracking-tighter  text-sm md:text-md ">
            <p>
              Hi I&apos;m Anna Adame, It will be as simple as Occidental; in
              fact, it will be Occidental. To an English person, it will seem
              like simplified English, as a skeptical Cambridge friend of mine
              told me what Occidental is European languages are members of the
              same family.
            </p>
            <p>
              You always want to make sure that your fonts work well together
              and try to limit the number of fonts you use to three or less.
              Experiment and play around with the fonts that you already have in
              the software you’re working with reputable font websites. This may
              be the most commonly encountered tip I received from the designers
              I spoke with. They highly encourage that you use different fonts
              in one design, but do not over-exaggerate and go overboard.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileInfo;
