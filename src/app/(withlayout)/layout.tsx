"use client";
import React from "react";
import Navbar from "@/components/shared/navbar/Navbar";
import Sidebar from "@/components/sidebar";
import { sidebarContent } from "@/content/sidebar";
import { ISidebarMenuItem } from "@/interface/dashboard";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen  overflow-hidden">
      {/* sidebar  */}
      <aside>
        <Sidebar
          menuGroups={sidebarContent as ISidebarMenuItem[]}
          title="Menu"
        />
      </aside>
      {/* Nav And Content */}
      <div className="w-full h-full light-darkmode">
        {/* header  */}
        <header>
          <Navbar />
        </header>

        <main className="   bg-gray-200  overflow-hidden w-full ">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashBoardLayout;
