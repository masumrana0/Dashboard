"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchMessage = () => {
  const [searchData, setSearchData] = useState("");

  // Handle Search Message
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
    // e.preventDefault(); // Remove this line
    // Additional submit logic here if needed
  };

  return (
    <span
      className={`flex items-center gap-2 px-3 rounded text-gray-500 bg-gray-100 dark:bg-gray-600 dark:text-gray-200 color-transition z-10`}
    >
      <input
        onChange={(e) => handleSearch(e)}
        value={searchData}
        className="w-full outline-none bg-inherit py-2 px-2 z-10"
        placeholder="Search Chat"
      />
      <span className="text-xs">
        <FaSearch />
      </span>
    </span>
  );
};

export default SearchMessage;
