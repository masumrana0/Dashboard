"use client";
import React, {
  useState,
  SetStateAction,
  ChangeEvent,
  KeyboardEvent,
} from "react";
// components
import cn from "@/lib/cn";
import ClickOutside from "../custom/ClickOutSide";
// icon
import { RiArrowDownSLine } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

interface CustomSelectProps {
  required?: boolean;
  label?: string;
  setTags: React.Dispatch<SetStateAction<string[]>>;
  dropdownOverlayStyle?: string;
  triggerButtonStyle?: string;
  optionStyle?: string;
}

const FormAddTagInput: React.FC<CustomSelectProps> = ({
  label,
  required,
  setTags,
  dropdownOverlayStyle,
  triggerButtonStyle,
  optionStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [storedTags, setStoreTag] = useState<string[]>([]);
  const [selectedTag, setSelectTag] = useState<string | null>(null);

  //   handle dropdown open
  const handleOpenDropdown = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectTag(e.target.value);

    if (e.target.value.length > 3) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  //   handle add tag
  const handleAddTag = () => {
    if (selectedTag && selectedTag?.length > 3) {
      const tagIndex = storedTags.indexOf(selectedTag);
      if (tagIndex > -1) {
        // Replace the existing tag
        const updatedTags = [...storedTags];
        updatedTags[tagIndex] = selectedTag;
        setStoreTag(updatedTags);
      } else {
        // Add the new tag
        setStoreTag([...storedTags, selectedTag]);
      }
      setSelectTag(null);
      setIsOpen(false);
    }
  };

  //   handle delete tag
  const handleDeleteTag = (tag: string) => {
    const updatedTags = storedTags.filter((t) => t !== tag);
    setStoreTag(updatedTags);
  };

  //   handle enter key press
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAddTag();
    }
  };

  return (
    <ClickOutside onClick={() => setIsOpen(false)} className="relative">
      {/* input Label */}
      <span className="flex items-center">
        {label ? (
          <span className="font-[500] text-sm sm:text-md md:text-base text-nowrap block mb-1">
            {label}
          </span>
        ) : null}
        {required ? <span className="text-red-500">*</span> : null}
      </span>
      <div className="inline-block relative w-full light-darkmode">
        {/* Select Trigger button  */}
        <div className="flex items-center justify-between px-3 py-1 bg-white border border-gray-300 hover:border-blue-500 rounded-md shadow-sm focus:outline-none light-darkmode">
          <div>
            {storedTags.length > 1 && (
              <button
                onClick={() => setStoreTag([])}
                className="text-lg text-red-500 hover:text-red-700 absolute right-2 top-2 "
                type="button"
              >
                <RxCross2 />
              </button>
            )}
            <div className="flex items-center flex-wrap max-h-32 overflow-y-auto no-scrollbar">
              {storedTags.length > 0 &&
                storedTags.map((tag, index) => (
                  <div key={index} className={cn(" ", triggerButtonStyle)}>
                    {tag}
                    <button
                      onClick={() => handleDeleteTag(tag)}
                      className="text-sm text-red-500  hover:text-red-700 "
                      type="button"
                    >
                      <RxCross2 />
                    </button>
                  </div>
                ))}
            </div>

            <input
              onChange={handleOpenDropdown}
              onKeyDown={handleKeyDown}
              type="text"
              value={selectedTag || ""}
              className="px-2 py-2 outline-none bg-inherit"
              placeholder="add tag"
            />
          </div>

          <span
            className={`${
              isOpen &&
              "rotate-180 transition-transform duration-500 ease-in-out absolute right-0"
            } text-md`}
          >
            <RiArrowDownSLine />
          </span>
        </div>

        {/* Selection content */}
        {isOpen && (
          <div
            className={cn(
              "absolute z-10 w-full mt-1  bg-white light-darkmode border border-gray-300 rounded-md shadow-lg",
              dropdownOverlayStyle
            )}
          >
            {/* option button */}
            <button
              type="button"
              className={cn(
                "px-4 py-2 block hover:bg-gray-100 dark:hover:bg-gray-500 w-full text-left",
                optionStyle
              )}
              onClick={handleAddTag}
            >
              {selectedTag}
            </button>
          </div>
        )}
      </div>
    </ClickOutside>
  );
};

export default FormAddTagInput;
