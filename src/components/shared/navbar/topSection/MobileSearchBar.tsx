import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

const MobileSearchBar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);
  const [searchData, setSearchData] = useState("");

  const searchBarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSearch = (value: string) => {
    setSearchData(value);
    // Additional search logic here
  };

  const handleToggleOpen = () => {
    setOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Additional submit logic here
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="lg:hidden" ref={searchBarRef}>
      <button
        ref={buttonRef}
        onClick={handleToggleOpen}
        className={`  text-gray-500 sm:h-[3rem] h-[2rem]   sm:w-[3rem] w-[2rem] text-2xl flex items-center justify-center p-1 sm:p-2 rounded-full dark:text-white dark:hover:text-gray-500 ${
          isOpen ? "bg-slate-200" : ""
        } hover:bg-slate-200 colortransition`}
      >
        <CiSearch />
      </button>

      {/* Mobile Search Bar */}
      <div
        className={` darkmode bg-white w-screen h-[5rem] py-5 absolute ${
          isOpen ? "top-16 opacity-100" : "top-28 opacity-0"
        } !transition-all !duration-500 left-0 right-0 px-10 md:px-32`}
      >
        <form
          onSubmit={handleSubmit}
          className={`flex items-center gap-2 px-3 py-2 rounded text-gray-500 bg-gray-100 dark:bg-gray-600 dark:text-gray-200 color-transition`}
        >
          <span className="text-xs">
            <FaSearch />
          </span>
          <input
            onChange={(e) => handleSearch(e.target.value)}
            value={searchData}
            className="w-full outline-none bg-inherit z-10"
            placeholder="Search...."
          />
          {searchData.length > 3 && (
            <button
              type="button"
              onClick={() => setSearchData("")}
              className="darkmode p-0.5 rounded-full bg-gray-500 text-white text-lg"
            >
              <IoCloseOutline />
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default MobileSearchBar;
