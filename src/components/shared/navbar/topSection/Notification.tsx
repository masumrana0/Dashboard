"use client";
import React, { useState } from "react";
// icons
import { IoMdNotificationsOutline } from "react-icons/io";
import angela from "/public/dummy/avatar-2.jpg";
import MessageNotification from "./MessageNotification";
import AltertNotification from "./AltertNotification";
import { INotificationMessage } from "@/interface/message";
import EmtyNotifications from "./EmtyNotifications";
import ClickOutside from "@/components/custom/ClickOutSide";

const NavNotification = () => {
  const [isOpen, setOpen] = useState(false);
  const [notificationState, setNotificationState] = useState(1);

  // dummy notifications
  const notifications: INotificationMessage[] = [
    {
      type: "message",
      user: {
        name: {
          firstName: "Angela",
          lastName: "Bernier",
        },
        photo: angela,
      },
      lastMessage:
        "Answered to your comment on the cash flow forecast's graph 😊",
      time: "48 MIN AGO",
    },
    {
      type: "message",
      user: {
        name: {
          firstName: "Maureen",
          lastName: "Gibson",
        },
        photo: angela,
      },
      lastMessage: "We talking about a project on linkedin.",
      time: "4 HRS AGO",
    },
    {
      type: "message",
      user: {
        name: {
          firstName: "Maureen",
          lastName: "Gibson",
        },
        photo: angela,
      },
      lastMessage: "We talking about a project on linkedin.",
      time: "4 HRS AGO",
    },
    {
      type: "message",
      user: {
        name: {
          firstName: "Maureen",
          lastName: "Gibson",
        },
        photo: angela,
      },
      lastMessage: "We talking about a project on linkedin.",
      time: "4 HRS AGO",
    },
  ];

  //   filtering notifications
  const messageNotifications = notifications.filter(
    (notification) => notification.type === "message"
  );

  const altertNotifications = notifications.filter(
    (notification) => notification.type === "alert"
  );

  return (
    <ClickOutside onClick={() => setOpen(false)}>
      <div className="md:relative    ">
        {/* dropdown button  */}
        <button
          onClick={() => setOpen(!isOpen)}
          className={`relative text-gray-500 sm:h-[3rem] h-[2.5rem]   sm:w-[3rem] w-[2.5rem]  text-[1.5rem] sm:text-2xl  dark:text-white dark:hover:text-gray-50 flex items-center justify-center  p-2 rounded-full     ${
            isOpen && "bg-slate-200"
          } hover:bg-slate-200 colortransition`}
        >
          <IoMdNotificationsOutline />
          {notifications.length > 0 && (
            <span className=" absolute p-1 sm:p-2 sm:w-5 sm:h-5 w-5 h-5 flex items-center justify-center rounded-full bg-orange-400 text-xs text-white font-semibold -top-1 -right-0">
              {notifications.length}
            </span>
          )}
        </button>

        {/* Dropdown  */}
        <div
          className={` absolute right-0 bg-white py-2 rounded-lg shadow-lg w-screen max-h-[440px] md:max-w-[22rem] xl:max-w-[25rem] transform transition-all duration-500 ease-in-out ${
            isOpen
              ? "translate-y-0 opacity-100 z-999999"
              : "translate-y-4 opacity-0 pointer-events-none"
          } dark:bg-gray-800 dark:text-white`}
        >
          {/* dropdown head  */}
          <div className="bg-brandcolor px-4 pt-4">
            <div className="flex items-center justify-between  text-white  ">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <span className="bg-white py-0.5 px-2 rounded font-semibold text-gray-600">
                5 New
              </span>
            </div>
            {/* Select Notification  */}
            <div className="mt-7 flex items-center">
              <button
                onClick={() => setNotificationState(1)}
                className={`px-5 py-2 rounded-t ${
                  notificationState == 1 &&
                  "bg-white darkmode dark:!text-white !text-brandcolor"
                } font-semibold text-slate-200 text-md tracking-tighter  `}
              >
                All (5)
              </button>

              <button
                onClick={() => setNotificationState(2)}
                className={`px-5 py-2 rounded-t ${
                  notificationState == 2 &&
                  "bg-white darkmode dark:!text-white !text-brandcolor"
                } font-semibold text-slate-200 text-md tracking-tighter `}
              >
                Messages
              </button>

              <button
                onClick={() => setNotificationState(3)}
                className={`px-5 py-2 rounded-t ${
                  notificationState == 3 &&
                  "bg-white darkmode dark:!text-white !text-brandcolor"
                } font-semibold text-slate-200 text-md tracking-tighter `}
              >
                Alerts
              </button>
            </div>
          </div>

          {/*  dropdown Content */}
          <div className="p-1 max-h-[20rem] overflow-y-auto no-scrollbar">
            {/* ALL notifications */}
            {notificationState === 1 && (
              <div>
                {notifications.length === 0 ? (
                  <EmtyNotifications />
                ) : (
                  notifications.map((notification, index) => (
                    <div key={index}>
                      {notification.type === "message" ? (
                        <MessageNotification notification={notification} />
                      ) : (
                        <AltertNotification notification={notification} />
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* for message notification */}
            {notificationState === 2 && (
              <div>
                {messageNotifications.length === 0 ? (
                  <EmtyNotifications />
                ) : (
                  messageNotifications.map((notification, index) => (
                    <MessageNotification
                      key={index}
                      notification={notification}
                    />
                  ))
                )}
              </div>
            )}

            {/*for altert notification   */}
            {notificationState === 3 && (
              <div>
                {altertNotifications.length === 0 ? (
                  <EmtyNotifications />
                ) : (
                  altertNotifications.map((notification, index) => (
                    <AltertNotification
                      key={index}
                      notification={notification}
                    />
                  ))
                )}
              </div>
            )}
          </div>

          {/* Dropdown Footer - Total Amount and Checkout Button */}
          <div className="p-4"></div>
        </div>
      </div>
    </ClickOutside>
  );
};

export default NavNotification;
