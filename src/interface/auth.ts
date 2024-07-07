import { IName } from "./common";

export interface ISignInData {
  email: string;
  password: string;
}
export interface ISignUpData {
  email: string;
  password: string;
  confirmPassword?: string;
}

export interface IValidationResponse {
  message?: string;
}

export interface IForgotPassword {
  email: string;
}

export interface IResetPassword {
  newPassword: string;
  newConfirmPassword?: string;
}

export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
  confirmPassword?: string;
}
