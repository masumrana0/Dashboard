/**
 * Title: 'Profile Page Develop By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 25-06-2024
 *
 */

"use client";
import React, { useRef } from "react";
import Image from "next/image";
// components
import { ICommonUser } from "@/interface/common";
import FullName from "@/service/name.service";
import ProfileInfo from "@/components/profile/ProfileInfo";
import ProfileEditForm from "@/components/profile/ProfileEditForm";
import ChangeCoverPhoto from "@/components/profile/ChangeCoverPhoto";

import angela from "/public/dummy/avatar-3.jpg";

// Redux
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { setEditableProfile } from "@/Redux/slices/profileSlice";

// icons
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const ProfileComponentPage = () => {
  // redux
  const dispatch = useAppDispatch();
  const isEditAble = useAppSelector((state) => state.profileSlice.isEditable);

  const coverPhotoRef = useRef<HTMLInputElement>(null);

  // dummy user
  const user: ICommonUser = {
    name: {
      firstName: "Anna",
      lastName: "Adame",
    },
    photo: angela,
    role: "founder",
  };

  //   handle upload cover photo
  const handleUploadCoverPhoto = () => {
    if (coverPhotoRef.current) {
      coverPhotoRef.current.click();
    }
  };

  return (
    <div className="light-darkmode h-[calc(100vh-140px)] overflow-y-auto">
      <div
        className="relative p-8  "
        style={{
          background:
            "linear-gradient(rgba(64, 81, 137, 0.9), rgba(64, 81, 137, 0.9)), url('/profile/profile-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          width: "100%",
        }}
      >
        {isEditAble && <ChangeCoverPhoto />}
        {!isEditAble && (
          <div>
            {/* user info */}
            <div className={`flex   items-center gap-3`}>
              <div className="bg-white inline-block w-[6rem] h-[6rem] rounded-full overflow-hidden p-1">
                <Image
                  src={angela}
                  className="w-full h-full rounded-full "
                  width={100}
                  height={100}
                  alt="user avatar"
                />
              </div>
              <div>
                <h2 className="font-semibold text-2xl  text-gray-50">
                  {FullName(user.name)}
                </h2>
                <p className="text-md tracking-tighter text-gray-200 text-left  capitalize dark:text-gray-50">
                  {user.role}
                </p>

                <p className="text-sm font-semibold tracking-tighter flex items-center gap-1 text-gray-300 mt-2">
                  <MdOutlineLocationOn className="text-lg" /> California, United
                  States
                </p>
              </div>
            </div>

            {/* edit profile btn */}
            <button
              onClick={() => dispatch(setEditableProfile())}
              className="absolute right-10 top-48 flex gap-1 items-center text-xs px-5 py-3 rounded text-white hover:bg-[#099885] bg-[#52a89d] transition-colors duration-300  z-5"
            >
              <FaRegEdit /> Edit Profile
            </button>
          </div>
        )}
      </div>

      {isEditAble ? (
        <ProfileEditForm user={user} />
      ) : (
        <ProfileInfo user={user} />
      )}
    </div>
  );
};

export default ProfileComponentPage;
