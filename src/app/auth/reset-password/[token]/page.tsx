"use client";
import { useTheme } from "@/components/darkmode";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import LoadingSpinner from "@/components/shared/lodingspinner";
import { IResetPassword } from "@/interface/auth";
import { useResetPasswordMutation } from "@/Redux/api/authApi";
import { resetPasswordSchema } from "@/schema/auth.schema";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ResetPassword: React.FC = () => {
  // it's of darkmode
  useTheme();
  //   for validation responsive
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );
  // redux rkt
  const [resetPassword, { isLoading, isError }] = useResetPasswordMutation();

  const param = useParams();
  const token = param.token;

  useEffect(() => {
    if (isError) {
      setValidationMessage(
        "Invalid or expired Link!.Please Reset Password again"
      );
    }
  }, [isError]);
  const router = useRouter();
  const handleSubmit = async (data: IResetPassword) => {
    const res = await resetPassword({ data, token }).unwrap();

    if (res && "validationResponse" in res) {
      setValidationMessage(res?.validationResponse?.message);
    } else {
      setValidationMessage("Password has been reset successfully.");
      toast.success(
        "The reset link is either invalid or has expired. Please request a new password reset link again."
      );
      router.push("/auth/signin");
    }
  };

  return (
    <div className="min-h-screen light-darkmode flex items-center justify-center  ">
      <div className="bg-white  p-8 rounded-xl shadow-xl max-w-md w-full darkmode">
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="absolute">
              <LoadingSpinner size="small" />
            </div>
          </div>
        )}
        <div className="mb-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mt-4 dark:text-gray-50">
            Reset Password
          </h2>
          <p className="text-gray-600 mt-2 dark:text-gray-50">
            Enter your new password below.
          </p>
        </div>
        {validationMessage && (
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4">
            {validationMessage}
          </div>
        )}
        <Form resolver={resetPasswordSchema} submitHandler={handleSubmit}>
          <div className="mb-4">
            <FormInput
              name="newPassword"
              type="password"
              label="New password"
              id="newPassword"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline light-darkmode"
              required
            />
          </div>
          <div className="mb-4">
            <FormInput
              label="Confirm New Password"
              name="confirmNewPassword"
              type="password"
              id="confirmPassword"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline light-darkmode"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline transition duration-150"
            >
              Reset Password
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResetPassword;
