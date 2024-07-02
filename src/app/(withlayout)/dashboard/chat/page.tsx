"use client";
import React from "react";
// import ChatComponentPage from "@/components/chat/Page";
import dynamic from "next/dynamic";
const ChatComponent = dynamic(() => import("@/components/chat/Page"), {
  ssr: false,
});
const ChatPage = () => {
  return (
    <>
      <ChatComponent />
    </>
  );
};

export default ChatPage;
