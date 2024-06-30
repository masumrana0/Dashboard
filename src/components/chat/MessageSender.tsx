/**
 * Title: 'message sending with emoji picker define done'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 06-03-2024
 *
 */

"use client";

import { IMessage } from "@/interface/chat";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import React, { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { FaRegSmile } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const MessageSender: React.FC = () => {
  // essential state
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("");

  //   handle clicking and adding emoji in input
  const onEmojiClick = (e: any) => {
    // make string to array for copy text
    const textArray = textAreaValue.split(" ");
    // add  new emoji
    const message = [...textArray, e.native];
    // set message value as sting with emoji
    setTextAreaValue(message.join(""));
  };

  const handleChange = (e: any) => {};

  const handleSendMessage = async () => {
    const data = {
      content: textAreaValue,
      //   receiver: participantId as string,
    };
    console.log(data);
    // const res = await sendMessage(data);
    // if (res) {
    //   setTextAreaValue("");
    // }
  };

  return (
    <div className="flex items-center p-4   bg-white   darkmode lg:px-32 h-full     w-full border-t-2 border-gray-200">
      <div className="flex justify-center items-center gap-2 mx-4 relative">
        <div
          onMouseLeave={() => setPickerVisible(!isPickerVisible)}
          className={`absolute top-[-27rem] ${!isPickerVisible && "hidden"}`}
        >
          <Picker
            previewPosition="none"
            onEmojiSelect={onEmojiClick}
            data={data}
          />
        </div>
        <button
          onClick={() => setPickerVisible(!isPickerVisible)}
          className="w-10 h-10 text-sky-700 text-xl rounded-full bg-gray-200 flex justify-center items-center"
        >
          <FaRegSmile />
        </button>

        <button className="w-10 h-10 text-sky-700 text-xl rounded-full bg-gray-200 flex justify-center items-center">
          <FaPlus />
        </button>
      </div>

      <textarea
        className="w-full h-12 border rounded-md px-3 py-2 outline-none hover:border-blue-300 light-darkmode "
        placeholder="Type your message..."
        value={textAreaValue}
        onChange={(e) => setTextAreaValue(e.target.value)}
      />

      <button
        className="ml-4  px-4  py-2  rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
        // disabled={textAreaValue == ""}
        onClick={handleSendMessage}
      >
        {/* {isLoading ? (
          <LoadingSpinner type="small" />
        ) : (
         
        )} */}
        <AiOutlineSend className="h-6 w-6" />
      </button>
    </div>
  );
};

export default MessageSender;
