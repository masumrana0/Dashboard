import Image from "next/image";
import React from "react";

const NotificationComponentPage = () => {
  return (
    <div className="p-5 light-darkmode  w-full overflow-hidden  ">
      <h2 className="text-gray-700 dark:text-gray-50 text-xl font-bold">
        Notifications
      </h2>

      <section className="mt-10 flex flex-col items-center w-full overflow-y-auto overflow-x-hidden  pb-5 h-[calc(100vh-150px)]  md:h-[calc(100vh-250px)] no-scrollbar ">
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="darkmode shadow-lg flex justify-between items-center bg-white w-full lg:w-1/2 px-5 py-3 my-2 rounded-lg border-l-4 border-brandcolor dark:border-blue-500"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-3">
                <Image
                  width={100}
                  height={100}
                  className="rounded-full h-12 w-12"
                  src="https://i.pravatar.cc/300"
                  alt="avatar"
                />
                <div>
                  <h2 className="text-gray-700 font-semibold dark:text-gray-50 text-md">
                    Emperio
                  </h2>
                  <p className="text-gray-600 text-xs md:text-sm dark:text-gray-50">
                    Admin and other team accepted your work request
                  </p>
                  <p className="text-gray-600 text-xs mt-1 dark:text-gray-100">
                    12 mins ago
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-xs tracking-tighter p-1 bg-slate-200 dark:bg-gray-700 dark:text-gray-50 text-gray-600 rounded text-nowrap">
                  24, Oct 2022
                </span>
              </div>
            </div>
          ))}
      </section>
    </div>
  );
};

export default NotificationComponentPage;
