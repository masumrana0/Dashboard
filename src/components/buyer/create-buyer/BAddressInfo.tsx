"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import React, { SetStateAction } from "react";
import { FaInfoCircle } from "react-icons/fa";

import { useAppDispatch } from "@/Redux/hooks";
import { nextStep } from "@/Redux/slices/FormStepSlice";
import StepButton from "@/components/seller/create-seller-form/StepButton";

interface IProps {
  setData: React.Dispatch<SetStateAction<any>>;
}
const BAddressInfo: React.FC<IProps> = ({ setData }) => {
  const dispatch = useAppDispatch();
  const handleSubmit = (data: any) => {
    if (data) {
      setData(data);
      dispatch(nextStep());
    }
  };
  return (
    <div className="container mx-auto">
      <Form submitHandler={handleSubmit}>
        <div className="w-full flex flex-col gap-5 justify-center  items-center sm:p-10 ">
          <section className="w-full p-5 sm:p-10 bg-white darkmode shadow-lg sm:rounded-lg">
            <h2 className="text-xl flex items-center gap-2 font-bold mb-10">
              <FaInfoCircle /> Address Info
            </h2>
            <div className="flex  flex-wrap gap-5 md:flex-nowrap  items-center justify-center md:mb-10 w-full">
              <FormInput
                name="country"
                type="text"
                label="Country"
                required
                placeholder="Enter your country name"
              />
              <FormInput
                type="text"
                name="state"
                label="State"
                required
                placeholder="Enter your state"
                className="mb-5 md:mb-0 "
              />
            </div>
            <div className="flex  flex-wrap gap-5 md:flex-nowrap  items-center justify-center mb-2 w-full">
              <FormInput
                type="text"
                name="city"
                label="City"
                required
                placeholder="Enter your email"
                className="mb-5 md:mb-0 "
              />
              <FormInput
                type="number"
                name="zipCode"
                label="Zip Code"
                required
                placeholder="Enter your zip Code "
                className="mb-5 md:mb-0 "
              />
            </div>
          </section>
        </div>
        <StepButton />
      </Form>
    </div>
  );
};

export default BAddressInfo;
