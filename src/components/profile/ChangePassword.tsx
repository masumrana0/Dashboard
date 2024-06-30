/**
 * Title: 'Change Password  Develop By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 25-06-2024
 *
 */

import React from "react";
import FormInput from "../forms/FormInput";
import Link from "next/link";

const ChangePassword = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3  items-center gap-5">
        <FormInput
          type="password"
          name="oldPassword"
          placeholder="Enter your old password"
          label="Old Password"
          required
        />
        <FormInput
          type="password"
          name="newPassword"
          placeholder="Enter your new password"
          label="New Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          placeholder="Enter your confirm password"
          label="Confirm Password"
          required
        />
      </div>
      <Link
        className="underline text-green-700 hover:text-green-800 light-darkmode"
        href={"/"}
      >
        Forgot Password ?
      </Link>
      <div className="mt-10  flex items-center justify-end">
        <button
          type="submit"
          className="px-4 py-2 border-rounded hover:bg-[#099885] bg-[#0bbea6]   color-transition text-white text-sm  rounded "
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
