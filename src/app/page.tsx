import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h3 className="text-center py-5 text-xl">Dashboard Made By Masum Rana</h3>
      <div className="flex items-center justify-center gap-2">
        Go to dashboard 
        <Link href={"/dashboard"} className="font-semibold underline text-sm text-blue-500 hover:text-blue-700 ">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
