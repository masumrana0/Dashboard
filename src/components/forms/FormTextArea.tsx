import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  height?: string;
};

const FormTextArea = ({
  name,
  label,
  value,
  placeholder,
  height,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`flex flex-col  w-full`}>
      <div className="flex items-center ">
        {label ? (
          <span className="font-semibold text-nowrap block mb-1">{label} </span>
        ) : null}
      </div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <textarea
            className={`${
              height ? { height } : "h-32"
            }  light-darkmode px-4 py-2 border border-gray-300 hover:border-blue-500    color-transition   text-sm  rounded outline-none `}
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
