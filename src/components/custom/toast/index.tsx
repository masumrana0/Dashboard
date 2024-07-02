"use client";
import React, { useState, useEffect } from "react";
import {
  MdCheckCircle,
  MdErrorOutline,
  MdInfoOutline,
  MdClose,
} from "react-icons/md";

interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
  position?:
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right";
  duration?: number; // Duration in milliseconds
  onClose?: () => void;
}

const Toast: React.FC<ToastProps> = ({
  message,
  type,
  position = "top-center",
  duration = 3000,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <MdCheckCircle className="w-6 h-6 text-green-500" />;
      case "error":
        return <MdErrorOutline className="w-6 h-6 text-red-500" />;
      case "info":
      default:
        return <MdInfoOutline className="w-6 h-6 text-blue-500" />;
    }
  };

  let toastPosition = "";
  switch (position) {
    case "top-left":
      toastPosition = "top-4 left-4";
      break;
    case "top-center":
      toastPosition = "top-4 left-1/2 transform -translate-x-1/2";
      break;
    case "top-right":
      toastPosition = "top-4 right-4";
      break;
    case "bottom-left":
      toastPosition = "bottom-4 left-4";
      break;
    case "bottom-center":
      toastPosition = "bottom-4 left-1/2 transform -translate-x-1/2";
      break;
    case "bottom-right":
    default:
      toastPosition = "bottom-4 right-4";
      break;
  }

  const handleClose = () => {
    setVisible(false);
    // onClose();
  };

  return (
    <>
      {visible && (
        <div className={`fixed ${toastPosition} z-50`}>
          <div className="bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5">
            <div className="flex-1 w-0 p-4">
              <div className="flex items-start">
                <div className="flex-shrink-0">{getIcon()}</div>
                <div className="ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900">{message}</p>
                </div>
              </div>
            </div>
            <div className="flex border-l border-gray-200">
              <button
                onClick={handleClose}
                className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <MdClose className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
