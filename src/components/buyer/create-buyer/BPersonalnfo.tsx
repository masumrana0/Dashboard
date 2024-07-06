"use client";
import Form from "@/components/forms/Form";
import FormInput from "@/components/forms/FormInput";
import FormSelect from "@/components/forms/FormSelect";
import ProfilePictureUploader from "@/components/forms/ProfilePictureUploader";

import React, { SetStateAction, useState } from "react";
import { useAppDispatch } from "@/Redux/hooks";
import { nextStep } from "@/Redux/slices/FormStepSlice";
import StepButton from "@/components/seller/create-seller-form/StepButton";

interface IProps {
  setData: React.Dispatch<SetStateAction<any>>;
}

const BPersonalInfo: React.FC<IProps> = ({ setData }) => {
  const [gender, setGender] = useState<string | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  const dispatch = useAppDispatch();
  const handleSubmitPersonalnfo = (data: any) => {
    if (data && gender) {
      const allData = { ...data, gender };
      setData(allData);
      dispatch(nextStep());
    }

    // const formData = new FormData();
    // formData.append("firstName", data.firstName);
    // formData.append("lastName", data.lastName);
    // formData.append("gender", gender);
    // formData.append("contactNo", data.contactNo);
    // if (profilePhoto) {
    //   formData.append("profilePhoto", profilePhoto);
    // }
    // console.log(formData);
  };

  return (
    <section className="container mx-auto h-full">
      <Form submitHandler={handleSubmitPersonalnfo}>
        <div className="w-full flex flex-col gap-5 justify-center  items-center bg-white darkmode shadow-lg sm:p-10">
          <section className="w-full p-5 sm:p-10  shadow-lg rounded-lg">
            <div className="flex  flex-wrap gap-5 md:flex-nowrap  items-center justify-center md:mb-10 w-full">
              <FormInput
                name="name.firstName"
                type="text"
                label="First Name"
                required
                placeholder="Enter your FirstName"
              />
              <FormInput
                type="text"
                name="name.lastName"
                label="Last Name"
                required
                placeholder="Enter your LastName"
                className="mb-5 md:mb-0 "
              />
            </div>
            <div className="flex  flex-wrap gap-5 md:flex-nowrap  items-center justify-center mb-2 w-full">
              <FormSelect
                setOption={setGender}
                options={[
                  { label: "Male", value: "male" },
                  { label: "Female", value: "Female" },
                  { label: "Others", value: "Others" },
                ]}
                label="Gender"
                required
                placeholder="Select your Gender"
              />
              <FormInput
                type="number"
                name="contactNo"
                label="Contact No."
                required
                placeholder="Enter your Contact No."
                className="mb-5 md:mb-0 "
              />
            </div>
          </section>
          <div className="lg:w-[20rem] lg:h-[20rem] md:h-[15rem]  md:py-0 py-10    w-screen      flex flex-col items-center justify-center   darkmode bg-white shadow-lg rounded">
            <h2 className="font-semibold text-lg mb-3">
              Upload Profile Picture{" "}
            </h2>
            <ProfilePictureUploader
              onFileChange={(File) => setProfilePhoto(File)}
            />
          </div>
        </div>
        <StepButton />
      </Form>
    </section>
  );
};

export default BPersonalInfo;
