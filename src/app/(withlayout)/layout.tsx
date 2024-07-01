"use client";
import React from "react";
// components
import Navbar from "@/components/shared/navbar/Navbar";
import Sidebar from "@/components/sidebar";

// Redux
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { toggleLayoutSidebar } from "@/Redux/slices/layoutSlice";
import LayoutSidebar from "@/components/layoutSidebar/LayoutSidebar";

// icons
import { CiSettings } from "react-icons/ci";
import { sidebarContent } from "@/content/sidebar";
import { INavMenuItem } from "@/interface/dashboard";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  // Redux
  const dispatch = useAppDispatch();
  const layoutState = useAppSelector((state) => state.layoutSlice.layoutState);

  return (
    <div className="flex h-screen  overflow-hidden relative">
      {/* sidebar  */}
      <aside className={`${layoutState && "md:hidden"}`}>
        <Sidebar menuGroups={sidebarContent as INavMenuItem[]} title="Menu" />
      </aside>

      {/* Nav And Content */}
      <section className="w-full h-full overflow-hidden light-darkmode">
        {/* header  */}
        <header className="darkmode">
          <Navbar />
        </header>

        <main className=" bg-gray-200  overflow-hidden     ">
          <div className="absolute bottom-10 right-10 bg-[#4396c7] h-12 w-12 rounded-full flex items-center justify-center ">
            <button
              onClick={() => dispatch(toggleLayoutSidebar(true))}
              className="  text-white  text-3xl animate-spin  "
            >
              <CiSettings />
            </button>
          </div>
          {children}
        </main>
      </section>

      <aside className="overflow-hidden   ">
        <LayoutSidebar />
      </aside>
    </div>
  );
};

export default DashBoardLayout;
