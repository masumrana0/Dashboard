import {
  IChangePassword,
  IForgotPassword,
  ISignInData,
  ISignUpData,
} from "@/interface/auth";
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
    changePassword: build.mutation({
      query: (data: IChangePassword) => ({
        url: `/auth/change-password`,
        method: "PATCH",
        data: data,
      }),
    }),
    verifyEmail: build.mutation({
      query: (token: string) => ({
        url: `/auth/verify-email/${token}`,
        method: "PATCH",
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
  useVerifyEmailMutation,
  useChangePasswordMutation,
} = authApi;
