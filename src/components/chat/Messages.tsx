"use client";
import Image from "next/image";
import React from "react";
import MessageSender from "./MessageSender";
import { useAppSelector } from "@/Redux/hooks";
import FullName from "@/service/name.service";
import { IConversation } from "@/interface/chat";
import { IName } from "@/interface/common";
import { consumers } from "stream";
import formatTimestamp from "../custom/FormatTimestamp";

const Messages = () => {
  const conversation = useAppSelector((state) => state.chatSlice.conversation);
  // Extract data

  const author_account_id = "1234";
  const lastMessage = conversation?.messages[conversation?.messages.length - 1];

  const oppositeParticipant = conversation?.participants.find(
    (participant) => participant.id !== author_account_id
  );

  const particiepent_messages = conversation?.messages.filter(
    (message) => message.sender.id !== author_account_id
  );

  const author_messages = conversation?.messages.filter(
    (message) => message.sender.id == author_account_id
  );

  // Perticient full Name
  const oppositeParticipant_fullName = FullName(
    oppositeParticipant?.name as IName
  );

  return (
    <div className="w-full  h-full  rounded-md  overflow-hidden">
      {/* Top Section  */}
      <section className="flex items-center  p-2 bg-brandcolor sticky top-0">
        <div className="border rounded-full border-white p-1/2">
          <Image
            width={200}
            height={200}
            className="w-14 h-14 rounded-full"
            src={oppositeParticipant?.photo as string}
            alt="avatar"
          />
        </div>

        <div className="flex-grow p-2">
          {/* Perticient Name */}
          <h2 className="text-md text-gray-50 font-semibold">
            {oppositeParticipant_fullName}
          </h2>
          {/* online / OfLine Symbol */}
          <div className="flex items-center">
            <span className="w-2 h-2 bg-green-300 rounded-full"></span>
            <h3 className="text-xs text-gray-50 ml-1">Online</h3>
          </div>
        </div>
      </section>

      {/* Chat Section */}
      <section className="h-[50%] overflow-y-auto p-4 space-y-4 darkmode  bg-white ">
        {particiepent_messages?.map((message, index) => (
          <div key={index} className="flex items-end space-x-2">
            <Image
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
              src={message.sender.photo as string}
              alt="avatar"
            />
            <div className="bg-blue-500 text-white p-3 rounded-2xl rounded-bl-none shadow-md">
              <p>{message.content}</p>
              <span className="text-xs text-gray-200 flex justify-end mt-1">
                {formatTimestamp(message?.timestamp)}
              </span>
            </div>
          </div>
        ))}

        {author_messages?.map((message, index) => (
          <div key={index} className="flex items-end justify-end space-x-2">
            <div className="bg-purple-500 text-white p-3 rounded-2xl rounded-br-none shadow-md">
              <p>{message.content}</p>
              <span className="text-xs text-gray-200 flex justify-end mt-1">
                {formatTimestamp(message?.timestamp)}
              </span>
            </div>
            <Image
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
              src={message.sender.photo as string}
              alt="avatar"
            />
          </div>
        ))}
      </section>
      <section className="h-[10%]">
        <MessageSender />
      </section>
      {/* Message sender  */}
    </div>
  );
};

export default Messages;
