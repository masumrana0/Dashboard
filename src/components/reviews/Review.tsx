import { IReview } from "@/interface/review";
import FullName from "@/service/name.service";
import Image from "next/image";
import React from "react";
import DisplayRating from "../custom/Rating";

const Review: React.FC<{ review: IReview }> = ({ review }) => {
  const name = FullName(review.user.name);

  return (
    <div className="darkmode bg-white rounded-lg shadow-lg h-[12rem] w-[17rem]  lg:w-[25rem] p-4 relative">
      <h3 className="absolute -top-4 right-5 z-50 bg-white rounded-full overflow-hidden">
        <svg
          fill="#1592d1"
          height="30px"
          width="30px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 310.28 310.28"
          stroke="#1592d1"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M155.142,0C69.597,0,0,69.597,0,155.142s69.597,155.142,155.142,155.142s155.142-69.597,155.142-155.142 S240.688,0,155.142,0z M79.171,231.401c-1.746,1.182-6.129,2.222-8.693-0.625l-4.731-5.95c-2.288-3.869,0.483-7.457,2.277-8.945 c8.529-7.075,14.731-12.548,18.601-16.419c7.589-7.981,13.199-15.97,16.903-23.935c0.847-1.821-1.315-2.977-2.438-3.345 c-27.967-9.166-41.955-25.325-41.955-48.474c0-13.639,4.53-24.722,13.585-33.242c9.059-8.525,20.407-12.785,34.041-12.785 c12.146,0,22.909,5.539,32.283,16.621c9.165,10.438,13.744,21.735,13.744,33.881C152.789,163.78,128.251,198.185,79.171,231.401z M185.61,231.401c-1.746,1.182-6.129,2.222-8.693-0.625l-4.731-5.95c-2.288-3.869,0.483-7.457,2.277-8.945 c8.528-7.075,14.731-12.548,18.601-16.419c7.589-7.981,13.199-15.97,16.904-23.935c0.847-1.821-1.315-2.977-2.438-3.345 c-27.967-9.166-41.955-25.325-41.955-48.474c0-13.639,4.53-24.722,13.585-33.242c9.06-8.525,20.407-12.785,34.041-12.785 c12.146,0,22.909,5.539,32.283,16.621c9.164,10.438,13.744,21.735,13.744,33.881C259.228,163.78,234.69,198.185,185.61,231.401z"></path>{" "}
          </g>
        </svg>
      </h3>
      {/* user info */}
      <div className="flex items-center gap-2 ">
        <Image
          src={review.user.photo}
          className="rounded-full h-12 w-12 object-cover  overflow-hidden"
          width={100}
          height={100}
          alt="user avatar"
        />
        <div>
          <h2 className="text-brandcolor dark:text-brandcolorlighter font-bold text-md ">
            {name}
          </h2>
          <p className="text-[12px] text-gray-400 dark:text-gray-50 tracking-tighter font-semibold ">
            CEO OF NORJA
          </p>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-600 dark:text-gray-50">
        {review.review}
      </p>
      <div className="flex items-center justify-between ">
        <h2 className="flex items-center gap-1 text-gray-500 dark:text-gray-50 ">
          <span className=" text-xs md:text-md  ">Rating</span>:
          {<DisplayRating rating={3.5} />}
        </h2>
        <div className="">
          <p className="text-gray-500 dark:text-gray-50 text-xs font-bold">
            2 days ago
          </p>
          <h4 className="font-bold text-brandcolorlighter text-xs">{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Review;
