"use client";
import React from "react";
import { store } from "@/Redux/store";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <Toaster /> {children}
    </Provider>
  );
};

export default Providers;
