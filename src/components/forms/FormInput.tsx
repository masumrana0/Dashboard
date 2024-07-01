"use client";

import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
 
import { useState } from "react";

import { useFormContext, Controller } from "react-hook-form";
import { FaRegEye } from "react-icons/fa6";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
}

const FormInput = ({
  name,
  type,
  value,
  placeholder,
  validation,
  label,
  required,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [isVisible, setVisable] = useState<boolean>(false);
  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="w-full">
      <div className="flex items-center ">
        {label ? (
          <span className="font-semibold text-nowrap block mb-1">{label} </span>
        ) : null}
        {required ? <span className="text-red-500">*</span> : null}
      </div>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <div className="my-2 w-full  border border-gray-300 hover:border-blue-500 rounded flex items-center py-[7px] px-2">
              <input
                type={`${isVisible ? "text" : "password"}`}
                placeholder={placeholder}
                className="outline-none w-full bg-inherit   "
                name="password"
                id=""
              />
              <button type="button" onClick={() => setVisable(!isVisible)}>
                <FaRegEye className={`${isVisible && "text-gray-400"}`} />
              </button>
            </div>
          ) : (
            <input
              type={type}
              className="w-full border border-gray-300 py-[7px] px-2 rounded  outline-none hover:border-blue-500 light-darkmode"
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
            />
          )
        }
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </div>
  );
};

export default FormInput;
