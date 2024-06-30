import React, { useState } from "react";
// icons
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TiArrowRight } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [isOpen, setOpen] = useState(false);
  const [searchData, setSearchData] = useState<string>("");
  const [isOpenRecentSearch, setOpenRecentSerach] = useState<boolean>(false);

  const handleSearch = (data: string) => {
    setSearchData(data);
    // handle opeing Search Dropdown
    if (searchData && searchData.length == 5) {
      setOpenRecentSerach(true);
    }
  };

  // handle Open dropdown
  const handleCloseDrodown = () => {
    setSearchData("");
    setOpenRecentSerach(false);
  };
  return (
    <div className="relative hidden lg:block ">
      {/* Searbar input */}
      <form
        className={`flex items-center  gap-2 px-3 py-2    w-[15rem] rounded text-gray-500 bg-gray-100 dark:bg-gray-600 dark:text-gray-200  color-transition`}
      >
        <span className="text-xs">
          <FaMagnifyingGlass />
        </span>
        <input
          value={searchData}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full outline-none bg-inherit  "
          placeholder="Search...."
        />
        {isOpenRecentSearch && (
          <button
            onClick={handleCloseDrodown}
            className="darkmode p-0.5 rounded-full"
          >
            <IoCloseOutline />
          </button>
        )}
      </form>

      {/* Suggestion dropdown */}
      <div
        className={`absolute w-[21rem] ${
          isOpenRecentSearch ? "top-10" : "top-16"
        } transition-all   duration-500 p-4 darkmode bg-white shadow-md ${
          !isOpenRecentSearch ? "opacity-0" : "opacity-100"
        }`}
      >
        <h2 className="text-gray-500 text-xs font-semibold darkmode ">
          RECENT SEARCHES
        </h2>
        {/* hot to setup  and buttons  */}
        <div className="flex items-center gap-3 mt-5">
          <button className="flex items-center gap-1   px-3 py-0.5 bg-blue-100 hover:bg-blue-600 text-blue-500 hover:text-white rounded-full  colortransition ">
            <span>how to setup </span>
            <span className="text-[8px] ">
              <FaMagnifyingGlass />
            </span>
          </button>
          <button className="flex items-center gap-1   px-3 py-0.5 bg-blue-100 hover:bg-blue-600 text-blue-500 hover:text-white rounded-full  colortransition ">
            <span>buttons</span>
            <span className="text-[8px] ">
              <FaMagnifyingGlass />
            </span>
          </button>
        </div>

        <h2 className="text-gray-500 text-xs font-semibold my-5 darkmode">
          PAGES
        </h2>
        <h2 className="text-gray-500 text-xs font-semibold darkmode">
          MEMBERS
        </h2>

        <div className="flex justify-center mt-10">
          <button className="text-white bg-blue-900 dark:blue-300 px-3 py-1.5 text-xs flex items-center gap-1 rounded   ">
            View All Results{" "}
            <span className="text-sm">
              <TiArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
