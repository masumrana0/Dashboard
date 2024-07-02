"use client";
import React, { useState } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

// import { Metadata } from "next";
// components
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { companyName } from "@/content/companyName";
import { useTheme } from "@/components/darkmode";
import AuthBanner from "../ui/AuthBanner";
import { signInSchema } from "@/schema/auth.schema";
import { useSigninMutation } from "@/Redux/api/authApi";
import { setToLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storegeKey";

// interface
import { ISignInData, IValidationResponse } from "@/interface/auth";
import LoadingSpinner from "@/components/shared/lodingspinner";

// export const metadata: Metadata = {
//   title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Signin Page TailAdmin Dashboard Template",
// };

const SignIn: React.FC = () => {
  // for use darkmode in this page
  useTheme();

  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );
  const router = useRouter();

  // redux rtk
  const [setSinup, { isLoading }] = useSigninMutation();
  // handle Login
  const handleSignIn = async (data: ISignInData) => {
    const res = await setSinup(data).unwrap();
    // handling validation response and setup accessToken
    if ("validationResponse" in res) {
      setValidationMessage(res?.validationResponse?.message);
    } else if ("accessToken" in res) {
      setToLocalStorage(authKey, res?.accessToken);
      toast.success("You are Sigin successfully");
      router.back();
    }
  };

  return (
    <div className="light-darkmode h-screen overflow-hidden">
      <div className="container mx-auto overflow-hidden rounded-md border   bg-white shadow-lg   flex items-center justify-center  mt-20  darkmode ">
        {isLoading && (
          <div className="fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="absolute">
              <LoadingSpinner size="regular" />
            </div>
          </div>
        )}
        <div className="flex flex-wrap items-center ">
          <section className="hidden w-full xl:block xl:w-1/2">
            <AuthBanner />
          </section>
          <section className="w-full   xl:w-1/2 xl:border-l-2">
            <div className="w-full p-5   xl:p-17.5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-lg  md:text-2xl font-bold text-black dark:text-white  ">
                Sign In to {companyName}
              </h2>

              {/* Signin Form  */}
              <Form resolver={signInSchema} submitHandler={handleSignIn}>
                <div className="mb-4">
                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    value={"Evalles35645@gmail.com"}
                    placeholder="Enter your email"
                    className="py-3 px-4  border-gray-300"
                  />
                </div>
                <div className="mb-4">
                  <FormInput
                    label="Re-type Password"
                    type="password"
                    name="password"
                    value={"2314Mi@$@00AVUVrLfQ2CE6lE"}
                    placeholder="Enter your password"
                    className="py-3 px-4 border-gray-300"
                  />
                </div>
                {validationMessage && (
                  <p className="text-red my-3 text-sm">{validationMessage}</p>
                )}
                <div className="mb-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-3 xl:p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border   bg-gray p-4 hover:bg-opacity-50   light-darkmode dark:hover:bg-opacity-50">
                  <span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_191_13499)">
                        <path
                          d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                          fill="#4285F4"
                        />
                        <path
                          d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                          fill="#34A853"
                        />
                        <path
                          d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                          fill="#EB4335"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_191_13499">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  Sign in with Google
                </button>
                <div className="mt-6 text-center">
                  <p>
                    Don’t have any account?{" "}
                    <Link
                      href="/auth/signup"
                      className="text-primary dark:text-blue-400"
                    >
                      Sign Up
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
