import { IForgotPassword, ISignInData, ISignUpData } from "@/interface/auth";
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signup: build.mutation({
      query: (signupdata: ISignUpData) => ({
        url: "/users/create-buyer",
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
    forgotPassword: build.mutation({
      query: (email: IForgotPassword) => ({
        url: "/auth/forget-password",
        method: "POST",
        data: email,
      }),
    }),
    resetPassword: build.mutation({
      query: ({ data, token }) => ({
        url: `/auth/reset-password/${token}`,
        method: "PATCH",
        data: { newPassword: data.newPassword },
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useSigninMutation,
  useSignupMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
} = authApi;
