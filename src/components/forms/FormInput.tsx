"use client";
import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
// components
import cn from "@/lib/cn";
import { getErrorMessageByPropertyName } from "@/utils/schema-validator";
// icon
import { FaRegEye } from "react-icons/fa6";

// Input Interface
interface IInput {
  name: string;
  type?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  className?: string;
}

const FormInput = ({
  name,
  type,
  value,
  placeholder,
  validation,
  label,
  required,
  className,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const [isVisible, setVisable] = useState<boolean>(false);
  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="w-full">
      <div className="flex items-center">
        {label ? (
          <span className="font-[500] text-sm sm:text-md md:text-base text-nowrap block mb-1">{label}</span>
        ) : null}
        {required ? <span className="text-red-500">*</span> : null}
      </div>
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <div
              className={cn(
                "my-2 w-full border border-gray-300 hover:border-blue-500 light-darkmode rounded flex items-center py-[7px] px-2",
                className
              )}
            >
              <input
                type={isVisible ? "text" : "password"}
                placeholder={placeholder}
                className="outline-none w-full bg-inherit"
                {...field}
              />
              <button type="button" onClick={() => setVisable(!isVisible)}>
                <FaRegEye className={`${isVisible && "text-gray-400"}`} />
              </button>
            </div>
          ) : (
            <input
              type={type}
              className={cn(
                "w-full border border-gray-300 py-[7px] px-2 rounded outline-none hover:border-blue-500 light-darkmode",
                className
              )}
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
