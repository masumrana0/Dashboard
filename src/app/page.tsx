import { useTheme } from "@/components/darkmode";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h3 className="text-center py-5 text-xl">Dashboard Made By Masum Rana</h3>
      <section className="flex items-center justify-center gap-2">
        <span>Go to dashboard</span>
        <Link
          href="/dashboard"
          className="font-semibold underline text-sm text-blue-500 hover:text-blue-700"
        >
          Dashboard
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
