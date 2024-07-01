"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import MessageSender from "./MessageSender";
import { useAppSelector } from "@/Redux/hooks";
import FullName from "@/service/name.service";
import { IName } from "@/interface/common";
import formatTimestamp from "../custom/FormatTimestamp";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { setOpenMessage } from "@/Redux/slices/chatSlice";
import Conversations from "./Conversations";

const Messages = () => {
  // Redux
  const dispatch = useDispatch();
  const conversation = useAppSelector((state) => state.chatSlice.conversation);
  // Extract data

  const author_account_id = "1234";
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

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  return (
    <div className="w-full  h-full  md:rounded-md  overflow-hidden">
      {/* Chat Section */}
      <section className="  overflow-y-auto h-[calc(100vh-150px)] md:h-[calc(100vh-250px)]   darkmode  bg-white ">
        {/* Top section with profile info */}
        <section className="flex items-center  p-2 bg-brandcolor sticky top-0">
          <button
            onClick={() => dispatch(setOpenMessage(false))}
            className="text-xl sm:text-2xl md:hidden px-2 mr-3 text-white"
          >
            <FaArrowLeftLong />
          </button>
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
        {/* Message section  */}
        <section className="p-4 space-y-4 pb-10">
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

          <div ref={messagesEndRef} />
        </section>
      </section>
      <section className="h-[50px]   md:h-[100px] overflow-hidden ">
        <MessageSender />
      </section>
      {/* Message sender  */}
    </div>
  );
};

export default Messages;
