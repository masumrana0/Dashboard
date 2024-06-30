import FullName from "@/service/name.service";
import Image from "next/image";
import React, { useRef } from "react";
import { FaCamera } from "react-icons/fa";

const UploadProfilePhoto: React.FC<{ user: any }> = ({ user }) => {
  const profilePhotoRef = useRef<HTMLInputElement>(null);

  //   handle upload profile photo
  const handleUploadProfilePhoto = () => {
    if (profilePhotoRef.current) {
      profilePhotoRef.current.click();
    }
  };

  return (
    <div
      className={`flex  flex-col justify-center  items-center gap-3 p-5 bg-white  rounded-lg shadow text-center py-10 light-darkmode`}
    >
      <div className="bg-gray-200 inline-block w-[8rem] h-[8rem] rounded-full   p-2 relative">
        <Image
          src={user.photo}
          className="w-full h-full rounded-full "
          width={100}
          height={100}
          alt="user avatar"
        />
        <div className="absolute top-[70%] right-1 z-0 bg-gray-200  h-8 w-8 flex items-center justify-center  rounded-full">
          <input type="file" ref={profilePhotoRef} className="hidden" />
          <button
            onClick={handleUploadProfilePhoto}
            className="text-md text-gray-600 "
          >
            <FaCamera />
          </button>
        </div>
      </div>
      <div>
        <h2 className="font-semibold text-2xl dark:text-gray-50  text-gray-600">
          {FullName(user.name)}
        </h2>
        <p className="text-md tracking-tighter text-gray-400   capitalize dark:text-gray-50">
          {user.role}
        </p>
      </div>
    </div>
  );
};

export default UploadProfilePhoto;
