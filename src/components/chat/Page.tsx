"use client";
import React from "react";
import Conversations from "./Conversations";
import Messages from "./Messages";
import { useAppSelector } from "@/Redux/hooks";
import MessageSender from "./MessageSender";

const ChatComponentPage = () => {
  const isOpenMessage = useAppSelector(
    (state) => state.chatSlice.isOpenMessage
  );

  return (
    <div className="h-full   overflow-hidden ">
      <div className="light-darkmode p-3 hidden md:grid grid-cols-12 gap-5   text-gray-200    ">
        {/* Conversations  */}
        <section className="md:col-span-4 lg:col-span-3">
          <Conversations />
        </section>

        {/* Message */}
        <section className="md:col-span-8 lg:col-span-9    relative  ">
          <Messages />
        </section>
      </div>
      {/* it's for only mobile divice  */}
      <div className="md:hidden">
        {isOpenMessage ? <Messages /> : <Conversations />}
      </div>
    </div>
  );
};

export default ChatComponentPage;
