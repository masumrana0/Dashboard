"use client";
import { useTheme } from "@/components/darkmode";
import LoadingSpinner from "@/components/shared/lodingspinner";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useVerifyEmailMutation } from "@/Redux/api/authApi";

const EmailVerificationLink: React.FC = () => {
  useTheme();
  const [emailVerificationLink, { isLoading, isError }] =
    useVerifyEmailMutation();
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );

  const router = useRouter();
  const { token } = useParams();

  useEffect(() => {
    const verifyEmail = async () => {
      await emailVerificationLink(token as string).unwrap();

      if (isError) {
        setValidationMessage(
          "The verification link is either invalid or has expired. Please request a new verification link."
        );
      } else {
        setValidationMessage(
          "Congratulation . Your email verification is successful."
        );
      }
    };

    verifyEmail();
  }, [token, emailVerificationLink, router, isError]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r  ">
      <div className="bg-white   p-8 rounded-lg shadow-lg max-w-md w-full ">
        <div className="mb-6 text-center ">
          {validationMessage && (
            <div
              className={`p-4 mb-4 border-l-4 ${
                isError
                  ? "bg-red-100 border-red-500 text-red-700"
                  : "bg-green-100 border-green-500 text-green-700"
              }`}
            >
              {validationMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationLink;
