"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// import { Metadata } from "next";
// components
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { companyName } from "@/content/companyName";
import { ISignUpData } from "@/interface/auth";
import { useTheme } from "@/components/darkmode";
import AuthBanner from "../ui/AuthBanner";
import { signUpSchema } from "@/schema/auth.schema";
import { useSignupMutation } from "@/Redux/api/authApi";
import { setToLocalStorage } from "@/utils/local-storage";
import { authKey } from "@/constants/storegeKey";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/shared/lodingspinner";

// export const metadata: Metadata = {
//   title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Signin Page TailAdmin Dashboard Template",
// };

const SignUp: React.FC = () => {
  // for use darkmode in this page
  useTheme();
  const [validationMessage, setValidationMessage] = useState<string | null>(
    null
  );

  const router = useRouter();
  //   Redux rtk
  const [setSignup, { isLoading }] = useSignupMutation();

  //   const []=use
  // handle Login
  const handleSignUp = async (data: ISignUpData) => {
    const { confirmPassword, ...otherData } = data;
    const res = await setSignup(otherData).unwrap();
    // handling validation response and setup accessToken
    if (res && "validationResponse" in res) {
      setValidationMessage(res?.validationResponse?.message);
    } else if ("accessToken" in res) {
      setToLocalStorage(authKey, res?.accessToken);
      toast.success(
        "You are Sigup successfully.Please check your email inbox."
      );
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }
  };

  return (
    <div className="light-darkmode h-screen overflow-hidden">
      <div className="container mx-auto overflow-y-auto max-h-full rounded-md border   bg-white shadow-lg   flex items-center justify-center  mt-5 md:mt-10  darkmode ">
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
            <div className="w-full p-5   xl:px-17.5 xl:py-5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-lg  md:text-2xl font-bold text-black dark:text-white  ">
                Sign Un to {companyName}
              </h2>

              {/* Signin Form  */}
              <Form resolver={signUpSchema} submitHandler={handleSignUp}>
                {/* Name  */}
                {/* <div className="mb-4">
                  <FormInput
                    label="First Name"
                    type="text"
                    name="name.firstName"
                    placeholder="Enter your firstName"
                    className="py-3 px-4  border-gray-300 "
                  />
                </div> */}
                {/* <div className="mb-4">
                  <FormInput
                    label="Last Name"
                    type="text"
                    name="name.lastName"
                    placeholder="Enter your lastName"
                    className="py-3 px-4  border-gray-300  "
                  />
                </div> */}

                {/* input input  */}
                <div className="mb-4">
                  <FormInput
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="py-3 px-4  border-gray-300"
                  />
                </div>

                <div className="mb-4">
                  <FormInput
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter your  password"
                    className="py-3 px-4 border-gray-300  "
                  />
                </div>
                <div className="mb-4">
                  <FormInput
                    label="Re-type Password"
                    type="password"
                    name="confirmPassword"
                    placeholder="Enter your confirm password"
                    className="py-3 px-4 border-gray-300"
                  />
                </div>
                {validationMessage && (
                  <p className="text-red-500 my-3 text-sm">
                    {validationMessage}
                  </p>
                )}

                <div className="my-5 ">
                  <input
                    type="submit"
                    value="Sign Up"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-3 xl:p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <div className="mt-6 text-center">
                  <p>
                    Already have an account?
                    <Link
                      href="/auth/signin"
                      className="text-primary dark:text-blue-400"
                    >
                      Sign in
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

export default SignUp;
