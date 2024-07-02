import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string(),
  }),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /[a-zA-Z]/,
      "Password must contain at least one alphabetic character"
    )
    .notOneOf(
      ["123456"],
      "This password is too common. Please choose a more secure password."
    )
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
