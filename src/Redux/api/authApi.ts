import { ISignInData, ISignUpData } from "@/interface/auth";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: (signupdata: ISignUpData) => ({
        url: "/auth/register",
        method: "POST",
        data: signupdata,
      }),
    }),
    signin: build.mutation({
      query: (signinData: ISignInData) => ({
        url: "/auth/login",
        method: "POST",
        data: signinData,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useSigninMutation, useSignupMutation } = authApi;
