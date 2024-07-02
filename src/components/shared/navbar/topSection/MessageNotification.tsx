import { IName } from "@/interface/common";
import { INotificationMessage } from "@/interface/message";
import FullName from "@/service/name.service";
import Image from "next/image";
import React from "react";
import { CiClock2 } from "react-icons/ci";

const MessageNotification: React.FC<{ notification: INotificationMessage }> = ({
  notification,
}) => {
  return (
    <div className="flex gap-2 hover:bg-gray-100 dark:hover:bg-gray-700 color-transition px-4 py-2 rounded mt-1 ">
      <Image
        src={notification.user.photo}
        className="rounded-full h-10 w-10"
        width={100}
        height={100}
        alt="user avatar"
      />
      <span>
        <h2 className="font-bold text-[14px]">
          {FullName(notification.user.name as IName)}
        </h2>
        <p className="text-gray-400 text-md  ">{notification.lastMessage}</p>
        <p className="text-gray-500 flex items-center gap-1 text-xs mt-1">
          <span className="dark:text-white">
            <CiClock2 />
          </span>
          <span className="text-slate-400 font-semibold tracking-wider ">
            {notification.time}
          </span>
        </p>
      </span>
    </div>
  );
};

export default MessageNotification;
