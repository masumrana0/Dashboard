"use client";
import { IConversation } from "@/interface/chat";
import { IName } from "@/interface/common";
import FullName from "@/service/name.service";
import Image from "next/image";
import React from "react";
import { truncateText } from "../custom/TruncateText";
import TimestampDisplay from "../custom/FormatDate";
import { useAppDispatch } from "@/Redux/hooks";
import { setConversation, setOpenMessage } from "@/Redux/slices/chatSlice";

const ConversationItem: React.FC<{
  active: boolean;
  conversation: IConversation;
}> = ({ active = true, conversation }) => {
  // redux
  const dispatch = useAppDispatch();

  // Extract data
  const { participants, messages } = conversation;
  const author_account_id = "1234";
  const lastMessage = messages[messages.length - 1];

  const oppositeParticipant = participants.find(
    (participant) => participant.id !== author_account_id
  );

  // Perticient full Name
  const oppositeParticipant_fullName = FullName(
    oppositeParticipant?.name as IName
  );
  // dispatch
  const handleOpenMessage = () => {
    dispatch(setConversation(conversation));
    dispatch(setOpenMessage(true));
  };

  return (
    <button
      onClick={handleOpenMessage}
      className="w-full text-left flex  justify-between py-3 px-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded z-10"
    >
      <div className="flex items-center gap-2">
        <div className="relative">
          <Image
            width={100}
            height={100}
            className="rounded-full h-10 w-10"
            src={oppositeParticipant?.photo as string}
            alt="avatar"
          />
          <span className="absolute top-7 right-0 h-2 w-2 rounded-full bg-green-500"></span>
        </div>
        <span>
          <h3 className="font-semibold dark:text-gray-50 text-gray-800 text-sm">
            {oppositeParticipant_fullName}
          </h3>
          <p className="text-gray-500 dark:text-gray-100 text-xs">
            {truncateText(lastMessage.content, 25)}
          </p>
        </span>
      </div>

      <div>
        <span className="  truncate text-gray-600 dark:text-gray-100 text-xs">
          {TimestampDisplay(lastMessage.timestamp)}
        </span>
      </div>
    </button>
  );
};

export default ConversationItem;
