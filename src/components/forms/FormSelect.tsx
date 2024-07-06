"use client";
import React, { useState, SetStateAction } from "react";
// components
import cn from "@/lib/cn";
import ClickOutside from "../custom/ClickOutSide";
// icon
import { RiArrowDownSLine } from "react-icons/ri";

// interface
export interface IFormSelectOption {
  value: string;
  label: string | React.ReactNode;
}

interface CustomSelectProps {
  required?: boolean;
  label?: string;
  placeholder?: string;
  options: IFormSelectOption[];
  setOption: React.Dispatch<SetStateAction<string>>;
  defaultValue?: IFormSelectOption;
  dropdownOverlayStyle?: string;
  triggerButtonStyle?: string;
  optionStyle?: string;
}

const FormSelect: React.FC<CustomSelectProps> = ({
  label,
  options,
  setOption,
  defaultValue,
  placeholder,
  required,
  dropdownOverlayStyle,
  triggerButtonStyle,
  optionStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<IFormSelectOption | null>(defaultValue || null);

  // if defaultValue existed then it's show set defaultValue
  if (defaultValue) {
    setOption(defaultValue.value);
  }

  const handleOptionClick = (option: IFormSelectOption) => {
    setSelectedOption(option);
    setOption(option.value);
    setIsOpen(false);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ClickOutside onClick={() => setIsOpen(false)} className="relative w-full">
      {/* input Labal  */}
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
        <button
          type="button"
          className={cn(
            "w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 hover:border-blue-500 rounded-md shadow-sm   focus:outline-none light-darkmode",
            triggerButtonStyle
          )}
          onClick={handleDropdownToggle}
        >
          {selectedOption ? (
            selectedOption.label
          ) : (
            <span>{placeholder ? placeholder : "Select an option"}</span>
          )}
          <span
            className={`  ${
              isOpen &&
              "rotate-180 transition-transform duration-500 ease-in-out "
            } text-md`}
          >
            <RiArrowDownSLine />
          </span>
        </button>

        {/* Selection content */}
        {isOpen && (
          <div
            className={cn(
              "absolute z-10 w-full mt-1 max-h-44 overflow-y-auto no-scrollbar bg-white light-darkmode border border-gray-300 rounded-md shadow-lg",
              dropdownOverlayStyle
            )}
          >
            {/* option button  */}
            {options.map((option, index) => (
              <button
                type="button"
                key={index}
                className={cn(
                  "px-4 py-2 block hover:bg-gray-100 dark:hover:bg-gray-500 w-full text-left",
                  optionStyle
                )}
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </ClickOutside>
  );
};

export default FormSelect;
