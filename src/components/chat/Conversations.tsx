"use client";
import React, { useEffect } from "react";
import ConversationItem from "./ConversationItem";
import anna from "/public/dummy/avatar-3.jpg";
import SearchMessage from "./SearchMessage";
import { useAppDispatch } from "@/Redux/hooks";
import { setConversation } from "@/Redux/slices/chatSlice";

const Conversations = () => {
  const dispatch = useAppDispatch();

  //   all Conversation data
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const allConversations = [
    {
      conversationId: "1",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45678",
          name: { firstName: "Bob", lastName: "Deman" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T13:52:17Z",
          content: "Hey Bob, how's it going?",
        },
        {
          sender: {
            id: "45678",
            name: { firstName: "Bob", lastName: "Deman" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T10:01:00Z",
          content: "Hi Alice! I'm doing well, thanks. How about you?",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T10:02:00Z",
          content:
            "I'm good too. Just getting ready for the big meeting later.",
        },
        {
          sender: {
            id: "45678",
            name: { firstName: "Bob", lastName: "Deman" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T13:52:17Z",
          content: "Same here. Looking forward to it!",
        },
      ],
    },
    {
      conversationId: "2",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45679",
          name: { firstName: "Charlie", lastName: "Smith" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T11:00:00Z",
          content: "Good morning, Charlie!",
        },
        {
          sender: {
            id: "45679",
            name: { firstName: "Charlie", lastName: "Smith" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T11:01:00Z",
          content: "Morning, Anna! How was your weekend?",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T11:02:00Z",
          content:
            "It was great, thanks! Went hiking and relaxed a lot. How about you?",
        },
        {
          sender: {
            id: "45679",
            name: { firstName: "Charlie", lastName: "Smith" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T11:03:00Z",
          content:
            "I had a good one too. Spent time with family and did some gardening.",
        },
      ],
    },
    {
      conversationId: "3",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45680",
          name: { firstName: "Dana", lastName: "Taylor" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-25T13:00:00Z",
          content: "Hey Dana, do you have the report ready?",
        },
        {
          sender: {
            id: "45680",
            name: { firstName: "Dana", lastName: "Taylor" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T12:01:00Z",
          content: "Hi Anna, almost done. I'll send it over in an hour.",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T12:02:00Z",
          content: "Great, thanks! Let me know if you need any help.",
        },
        {
          sender: {
            id: "45680",
            name: { firstName: "Dana", lastName: "Taylor" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T12:03:00Z",
          content: "Will do. Thanks, Anna!",
        },
      ],
    },
    {
      conversationId: "4",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45681",
          name: { firstName: "Eve", lastName: "Johnson" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T13:00:00Z",
          content: "Hi Eve, did you see the latest project update?",
        },
        {
          sender: {
            id: "45681",
            name: { firstName: "Eve", lastName: "Johnson" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T13:01:00Z",
          content: "Hey Anna, yes I did. Looks like we're ahead of schedule!",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T13:02:00Z",
          content: "That's awesome news. Let's keep up the good work.",
        },
        {
          sender: {
            id: "45681",
            name: { firstName: "Eve", lastName: "Johnson" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T13:03:00Z",
          content: "Definitely! Let's aim to finish even earlier.",
        },
      ],
    },
    {
      conversationId: "5",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45682",
          name: { firstName: "Frank", lastName: "Miller" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T14:00:00Z",
          content: "Hey Frank, any updates on the new feature?",
        },
        {
          sender: {
            id: "45682",
            name: { firstName: "Frank", lastName: "Miller" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T14:01:00Z",
          content: "Hi Anna, I'm working on it. Should be done by tomorrow.",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T14:02:00Z",
          content: "Great, thanks for the update!",
        },
        {
          sender: {
            id: "45682",
            name: { firstName: "Frank", lastName: "Miller" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T14:03:00Z",
          content: "You're welcome, Anna.",
        },
      ],
    },
    {
      conversationId: "6",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45683",
          name: { firstName: "Grace", lastName: "Lee" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T15:00:00Z",
          content: "Hi Grace, did you finish the budget report?",
        },
        {
          sender: {
            id: "45683",
            name: { firstName: "Grace", lastName: "Lee" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T15:01:00Z",
          content: "Hey Anna, yes, I just sent it to your email.",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T15:02:00Z",
          content: "Got it, thanks a lot!",
        },
        {
          sender: {
            id: "45683",
            name: { firstName: "Grace", lastName: "Lee" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T15:03:00Z",
          content: "No problem, Anna. Let me know if you need anything else.",
        },
      ],
    },
    {
      conversationId: "7",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45684",
          name: { firstName: "Hank", lastName: "Wilson" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T16:00:00Z",
          content: "Hey Hank, are you free for a quick call?",
        },
        {
          sender: {
            id: "45684",
            name: { firstName: "Hank", lastName: "Wilson" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T16:01:00Z",
          content: "Hi Anna, yes, give me a minute.",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T16:02:00Z",
          content: "Sure, no rush.",
        },
        {
          sender: {
            id: "45684",
            name: { firstName: "Hank", lastName: "Wilson" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T16:03:00Z",
          content: "Okay, I'm ready. What's up?",
        },
      ],
    },
    {
      conversationId: "8",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45685",
          name: { firstName: "Ivy", lastName: "Brown" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T17:00:00Z",
          content: "Hi Ivy, are you attending the team meeting later?",
        },
        {
          sender: {
            id: "45685",
            name: { firstName: "Ivy", lastName: "Brown" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T17:01:00Z",
          content: "Hey Anna, yes, I'll be there.",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T17:02:00Z",
          content: "Great, see you there!",
        },
        {
          sender: {
            id: "45685",
            name: { firstName: "Ivy", lastName: "Brown" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T17:03:00Z",
          content: "See you, Anna.",
        },
      ],
    },
    {
      conversationId: "9",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45686",
          name: { firstName: "Jack", lastName: "Davis" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T18:00:00Z",
          content: "Hey Jack, did you get the latest sales figures?",
        },
        {
          sender: {
            id: "45686",
            name: { firstName: "Jack", lastName: "Davis" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T18:01:00Z",
          content: "Hi Anna, yes, I just sent them to your inbox.",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T18:02:00Z",
          content: "Thanks, Jack!",
        },
        {
          sender: {
            id: "45686",
            name: { firstName: "Jack", lastName: "Davis" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T18:03:00Z",
          content: "You're welcome, Anna.",
        },
      ],
    },
    {
      conversationId: "10",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45687",
          name: { firstName: "Kate", lastName: "Evans" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T19:00:00Z",
          content: "Hey Kate, are you free to review the document I sent?",
        },
        {
          sender: {
            id: "45687",
            name: { firstName: "Kate", lastName: "Evans" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T19:01:00Z",
          content: "Hi Anna, sure, I'll take a look now.",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T19:02:00Z",
          content: "Thanks, Kate. Let me know if you have any feedback.",
        },
        {
          sender: {
            id: "45687",
            name: { firstName: "Kate", lastName: "Evans" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T19:03:00Z",
          content: "Will do, Anna.",
        },
      ],
    },
    {
      conversationId: "11",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45688",
          name: { firstName: "Liam", lastName: "Garcia" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T20:00:00Z",
          content: "Hi Liam, can you check the new deployment?",
        },
        {
          sender: {
            id: "45688",
            name: { firstName: "Liam", lastName: "Garcia" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T20:01:00Z",
          content: "Hey Anna, I'm on it. Will get back to you shortly.",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T20:02:00Z",
          content: "Thanks, Liam.",
        },
        {
          sender: {
            id: "45688",
            name: { firstName: "Liam", lastName: "Garcia" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T20:03:00Z",
          content: "You're welcome, Anna.",
        },
      ],
    },
    {
      conversationId: "12",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45689",
          name: { firstName: "Mia", lastName: "Harris" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T21:00:00Z",
          content:
            "Hi Mia, do you have a moment to discuss the client feedback?",
        },
        {
          sender: {
            id: "45689",
            name: { firstName: "Mia", lastName: "Harris" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T21:01:00Z",
          content: "Hey Anna, sure. I'll call you in a few minutes.",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T21:02:00Z",
          content: "Perfect, thanks Mia!",
        },
        {
          sender: {
            id: "45689",
            name: { firstName: "Mia", lastName: "Harris" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T21:03:00Z",
          content: "No problem, Anna. Talk to you soon.",
        },
      ],
    },
    {
      conversationId: "13",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45690",
          name: { firstName: "Nick", lastName: "Jackson" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T22:00:00Z",
          content: "Hi Nick, any updates on the marketing campaign?",
        },
        {
          sender: {
            id: "45690",
            name: { firstName: "Nick", lastName: "Jackson" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T22:01:00Z",
          content: "Hey Anna, we're on track to launch next week.",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T22:02:00Z",
          content: "That's great news. Thanks, Nick!",
        },
        {
          sender: {
            id: "45690",
            name: { firstName: "Nick", lastName: "Jackson" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T22:03:00Z",
          content: "You're welcome, Anna.",
        },
      ],
    },
    {
      conversationId: "14",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45691",
          name: { firstName: "Olivia", lastName: "King" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T23:00:00Z",
          content: "Hey Olivia, do you have the design mockups ready?",
        },
        {
          sender: {
            id: "45691",
            name: { firstName: "Olivia", lastName: "King" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T23:01:00Z",
          content: "Hi Anna, yes, I'll send them over shortly.",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-26T23:02:00Z",
          content: "Thanks, Olivia. Looking forward to seeing them.",
        },
        {
          sender: {
            id: "45691",
            name: { firstName: "Olivia", lastName: "King" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-26T23:03:00Z",
          content: "No problem, Anna. Talk soon.",
        },
      ],
    },
    {
      conversationId: "15",
      participants: [
        {
          id: "1234",
          name: { firstName: "Anna", lastName: "Adame" },
          photo: anna,
        },
        {
          id: "45692",
          name: { firstName: "Paul", lastName: "Martin" },
          photo: "https://i.pravatar.cc/300",
        },
      ],
      messages: [
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-27T00:00:00Z",
          content: "Hi Paul, did you complete the testing?",
        },
        {
          sender: {
            id: "45692",
            name: { firstName: "Paul", lastName: "Martin" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-27T00:01:00Z",
          content: "Hey Anna, yes, everything is working perfectly.",
        },
        {
          sender: {
            id: "1234",
            name: { firstName: "Anna", lastName: "Adame" },
            photo: anna,
          },
          timestamp: "2024-06-27T00:02:00Z",
          content: "That's great to hear. Thanks, Paul!",
        },
        {
          sender: {
            id: "45692",
            name: { firstName: "Paul", lastName: "Martin" },
            photo: "https://i.pravatar.cc/300",
          },
          timestamp: "2024-06-27T00:03:00Z",
          content: "You're welcome, Anna.",
        },
      ],
    },
  ];

  useEffect(() => {
    dispatch(setConversation(allConversations[0]));
  }, [allConversations, dispatch]);

  return (
    <div className=" bg-white darkmode  md:rounded-md h-full overflow-hidden ">
      <section className="h-[200px]  mb-2">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-50 tracking-tighter p-5">
          Messages
        </h2>

        <div className="border-b border-gray-300 p-5  ">
          <SearchMessage />
        </div>

        <h4 className="font-semibold text-gray-800 dark:text-white text-xl my-5 px-5">
          Recent
        </h4>
      </section>

      <section className="h-[calc(100vh-190px)] md:h-[calc(100vh-320px)] pb-32 md:pb-0 overflow-y-auto overflow-hidden px-5 no-scrollbar z-50">
        {allConversations.map((conversation) => (
          <ConversationItem
            key={conversation.conversationId}
            conversation={conversation}
            active={true}
          />
        ))}
      </section>
    </div>
  );
};

export default Conversations;
