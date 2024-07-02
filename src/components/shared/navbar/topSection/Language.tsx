import React, { useState } from "react";

// Countries Flag
import us from "/public/flags/united-states.png";
import span from "/public/flags/spain.png";
import germany from "/public/flags/germany.png";
import italy from "/public/flags/italy.png";
import russia from "/public/flags/russia.png";
import china from "/public/flags/china.png";
import france from "/public/flags/france.png";
import arab from "/public/flags/united-arab-emirates.png";
import Image from "next/image";
import ClickOutside from "@/components/custom/ClickOutSide";

interface ILanguage {
  flag: any;
  language: string;
}
// Language data with Flag
const Languages: ILanguage[] = [
  {
    flag: us,
    language: "English",
  },
  {
    flag: span,
    language: "Española",
  },
  {
    flag: germany,
    language: "Deutsche",
  },
  {
    flag: italy,
    language: "Italiana",
  },
  {
    flag: russia,
    language: "русский",
  },

  {
    flag: china,
    language: "中国人",
  },
  {
    flag: france,
    language: "français",
  },
  {
    flag: arab,
    language: "Arabic",
  },
];

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(Languages[0]);

  const [isOpen, setOpen] = useState(false);

  const handleLanguageChange = (language: ILanguage) => {
    setSelectedLanguage(language);
    // Optionally, perform other actions based on the selected language
  };

  return (
    <ClickOutside onClick={() => setOpen(false)}>
      <div className="relative ">
        <button
          onClick={() => setOpen(!isOpen)}
          className={`  sm:h-[3rem] h-[2.5rem]   sm:w-[3rem] w-[2.5rem] p-2 rounded-full   overflow-hidden ${
            isOpen && "bg-slate-200"
          } hover:bg-slate-200 color-transition `}
        >
          <Image
            className="w-full h-full rounded-full"
            src={selectedLanguage.flag}
            width={100}
            height={100}
            alt={`${selectedLanguage.language}'s Language with Flag`}
          />
        </button>

        <div
          className={`absolute right-0 bg-white py-2 rounded-b-lg shadow-lg    w-[10rem] sm:w-[11rem]   transform transition-all duration-500 ease-in-out ${
            isOpen
              ? "translate-y-0 opacity-100 z-99999"
              : "translate-y-4 opacity-0 pointer-events-none"
          } dark:bg-gray-800 dark:text-white`}
        >
          {Languages.map((language: ILanguage, index: number) => (
            <button
              onClick={(event) => {
                handleLanguageChange(language);
                event.stopPropagation();
              }}
              key={index}
              className="  flex items-center gap-2 px-4 py-1 mb-1   w-full dark:hover:bg-gray-600 hover:bg-slate-200 transition-all"
            >
              <Image
                className="h-[25px] w-[20px] rounded-full"
                src={language.flag}
                width={50}
                height={50}
                alt={`${language.language} flag`}
              />
              <span className="text-gray-800 dark:text-gray-50">
                {language.language}
              </span>
            </button>
          ))}
        </div>
      </div>
    </ClickOutside>
  );
};

export default Language;
