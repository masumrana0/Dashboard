import { IName } from "./common";

export interface ISignInData {
  email: string;
  password: string;
}
export interface ISignUpData {
  name: {
    firstName: string;
    lastName?: string;
  };
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IValidationResponse {
  message?: string;
}
