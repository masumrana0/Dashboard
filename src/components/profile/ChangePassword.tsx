/**
 * Title: 'Change Password  Develop By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 25-06-2024
 *
 */

"use client";
import React, { useState } from "react";
import FormInput from "../forms/FormInput";
import Link from "next/link";
import Form from "../forms/Form";
import { IChangePassword } from "@/interface/auth";
import { useChangePasswordMutation } from "@/Redux/api/authApi";
import toast from "react-hot-toast";

const ChangePassword: React.FC = () => {
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );
  const [changePassword, { isLoading, isError }] = useChangePasswordMutation();

  const handleChange = async (data: IChangePassword) => {
    const { confirmPassword, ...otherPasswords } = data;
    const payloadPassword = { ...otherPasswords };

    try {
      const res = await changePassword(payloadPassword).unwrap();
      if (res && "validationResponse" in res) {
        setValidationMessage(res.validationResponse.message);
      } else {
        toast.success("Password has been changed successfully.");
      }
    } catch (error) {
      setValidationMessage("An error occurred while changing the password.");
    }
  };

  return (
    <div>
      <Form
        submitHandler={(data: IChangePassword, e: React.FormEvent) => {
          e.preventDefault(); // Prevent page refresh
          handleChange(data);
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-5">
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
          {validationMessage && (
            <p className="text-red-500 my-3 text-sm md:text-md">
              {validationMessage}
            </p>
          )}
        </div>
        <Link
          className="underline text-green-700 hover:text-green-800 light-darkmode"
          href={"/auth/forgot-password"}
        >
          Forgot Password?
        </Link>
        <div className="mt-10 flex items-center justify-end">
          <button
            type="submit"
            className="px-4 py-2 rounded hover:bg-[#099885] bg-[#0bbea6] color-transition text-white text-sm"
          >
            Change Password
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ChangePassword;
