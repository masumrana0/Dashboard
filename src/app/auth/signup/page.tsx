"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// import { Metadata } from "next";
// components
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import { companyName } from "@/content/companyName";

import { ISignInData, ISignUpData } from "@/interface/auth";
import { useTheme } from "@/components/darkmode";
import AuthBanner from "../ui/AuthBanner";
import { signUpSchema } from "@/schema/auth.schema";

// export const metadata: Metadata = {
//   title: "Next.js SignIn Page | TailAdmin - Next.js Dashboard Template",
//   description: "This is Next.js Signin Page TailAdmin Dashboard Template",
// };

const SignUp: React.FC = () => {
  // for use darkmode in this page
  useTheme();
  // handle Login
  const handleSignUp = (data: ISignUpData) => {
    console.log(data);
  };

  return (
    <div className="light-darkmode h-screen overflow-hidden">
      <div className="container mx-auto overflow-y-auto max-h-full rounded-md border   bg-white shadow-lg   flex items-center justify-center  mt-5 md:mt-10  darkmode ">
        <div className="flex flex-wrap items-center ">
          <section className="hidden w-full xl:block xl:w-1/2">
            <AuthBanner />
          </section>
          <section className="w-full   xl:w-1/2 xl:border-l-2">
            <div className="w-full p-5   xl:px-17.5 xl:py-5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-lg  md:text-2xl font-bold text-black dark:text-white  ">
                Sign In to {companyName}
              </h2>

              {/* Signin Form  */}
              <Form resolver={signUpSchema} submitHandler={handleSignUp}>
                {/* Name  */}
                <div className="mb-4">
                  <FormInput
                    label="First Name"
                    type="text"
                    name="name.firstName"
                    placeholder="Enter your firstName"
                    className="py-3 px-4  border-gray-300 "
                  />
                </div>
                <div className="mb-4">
                  <FormInput
                    label="Last Name"
                    type="text"
                    name="name.lastName"
                    placeholder="Enter your lastName"
                    className="py-3 px-4  border-gray-300  "
                  />
                </div>

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
