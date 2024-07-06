import cn from "@/lib/cn";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;

  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  defaultValue?: string;
  className?: string;
};

const FormTextArea = ({
  name,
  label,
  value,
  placeholder,
  defaultValue,
  required,
  className,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col  w-full`}>
      <div className="flex items-center">
        {label ? (
          <span className="font-[500] text-sm sm:text-md md:text-base text-nowrap block mb-1">
            {label}
          </span>
        ) : null}
        {required ? <span className="text-red-500">*</span> : null}
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            className={cn(
              "h-18  outline-none w-full border border-gray-300 hover:border-blue-500 light-darkmode rounded flex items-center py-[7px] px-3",
              className
            )}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
