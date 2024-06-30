/* eslint-disable react/no-children-prop */
import React from "react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/Redux/hooks";
import { sidebarToggle } from "@/Redux/slices/layoutSlice";
import SidebarDropdown from "./SidebarDropdown";
import { ISidebarMenuItem } from "@/interface/dashboard";

// icons
import { CgMenuLeft } from "react-icons/cg";
import { HiArrowLongLeft } from "react-icons/hi2";
import { usePathname } from "next/navigation";

// sidebar props interface
interface ISidebarProps {
  title?: string;
  menuGroups: ISidebarMenuItem[];
}

const Sidebar: React.FC<ISidebarProps> = ({ menuGroups, title }) => {
  // redux
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(
    (state) => state.layoutSlice.isOpenSideBar
  );

  const pathname = usePathname();

  return (
    <aside
      className={`${
        isSidebarOpen
          ? "lg:w-[18rem] w-[15rem]"
          : "md:w-[5rem]  opacity-0  pointer-events-none   md:pointer-events-auto md:opacity-100     "
      } !transition-all !ease-in-out  !duration-300 h-full  absolute md:sticky top-0 left-0  z-[9999999999] bg-brandcolor darkmode text-[1rem]  text-gray-300 `}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        {/* Company logo  */}
        <Link href="/">
          {/* <Image
            width={176}
            height={32}
            src={"/images/logo/logo.svg"}
            alt="Logo"
            priority
          /> */}
          Logo
        </Link>

        {/* it's for only mobile and tablet divice  */}
        <button
          className="absolute left-1/3 text-3xl  top-4  lg:hidden"
          onClick={() => dispatch(sidebarToggle())}
        >
          {isSidebarOpen ? (
            <span>
              <HiArrowLongLeft />
            </span>
          ) : (
            <span className="md:block hidden">
              <CgMenuLeft />
            </span>
          )}
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto h-[90%] duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <section className="mt-5 px-4 py-4 lg:mt-9 lg:px-6">
          {/*  Sidebar Menu title  */}
          {!!title && isSidebarOpen && (
            <h3 className="mb-4 ml-4 text-sm font-semibold text-white">
              {title}
            </h3>
          )}

          {/* Sidebar Menu Nav  */}
          <nav className="space-y-4">
            {menuGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                {group.children ? (
                  <SidebarDropdown
                    isSidebarOpen={isSidebarOpen}
                    children={group.children as []}
                    icon={group.icon}
                    label={group.label}
                  />
                ) : (
                  <Link
                    className="flex items-center   gap-2 hover:text-white color-transition"
                    href={group.route || "/"}
                  >
                    <span className={`${!isSidebarOpen && "text-2xl"}`}>
                      {group.icon && group.icon}
                    </span>
                    <span className={`${!isSidebarOpen && "hidden"}`}>
                      {group.label}
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </section>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
