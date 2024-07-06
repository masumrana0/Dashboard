import * as yup from "yup";

export const signUpSchema = yup.object().shape({
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

export const resetPasswordSchema = yup.object().shape({
  newPassword: yup
    .string()
    .required("New Password is required")
    .min(6, "Password must be at least 8 characters long")
    .matches(/[A-z]/, "Password must contain at least one  letter")
    .matches(/[0-9]/, "Password must contain at least one number"),
  // .matches(
  //   /[!@#$%^&*(),.?":{}|<>]/,
  //   "Password must contain at least one special character"
  // ),
  confirmNewPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("newPassword"), ""], "Passwords must match"),
});
