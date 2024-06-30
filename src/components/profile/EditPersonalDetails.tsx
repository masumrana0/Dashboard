/**
 * Title: 'Edit Personal Details Page Maked By Masum Rana'
 * Description: ''
 * Author: 'Masum Rana'
 * Date: 24-06-2024
 *
 */

import React from "react";
import FormInput from "../forms/FormInput";
import FormTextArea from "../forms/FormTextArea";

import { useAppDispatch } from "@/Redux/hooks";
import { setEditableProfile } from "@/Redux/slices/profileSlice";

const EditPersonalDetails: React.FC<{}> = () => {
  // redux
  const dispatch = useAppDispatch();

  return (
    <div className="light-darkmode">
      <div className="flex flex-col sm:flex-row items-center gap-5 mb-2">
        <FormInput type="text" name={"name.firstName"} label="First Name" />
        <FormInput type="text" name={"name.lastName"} label="Last Name" />
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-5 mb-2">
        <FormInput type="text" name={"phoneNumber"} label="Phone Number" />
        <FormInput type="email" name={"email"} label="Email Address" />
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-5 mb-2">
        <FormInput type="text" name={"country"} label="Country" />
        <FormInput type="text" name={"state"} label="State" />
      </div>
      <div className="mb-2">
        <FormInput type="text" name={"designation"} label="Designation" />
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-5 mb-2">
        <FormInput type="text" name={"City"} label="City" />
        <FormInput type="text" name={"street"} label="Street" />
      </div>
      <div className="flex flex-col sm:flex-row items-center   gap-5 mb-2  ">
        <FormInput type="number" name={"zipCode"} label="ZipCode" />
      </div>

      <div className="flex flex-col sm:flex-row items-center   gap-5 mb-2  ">
        <FormTextArea name="description" label="Description" />
      </div>

      <div className="flex items-center gap-2 justify-end mt-20">
        <button
          className="px-5 py-2 rounded-md text-md font-semibold border bg-brandcolorlighter hover:bg-brandcolor color-transition text-white "
          type="submit"
        >
          Updates
        </button>

        <button
          onClick={() => dispatch(setEditableProfile())}
          className="px-5 py-2 rounded-md text-md font-semibold border bg-green-200 hover:text-white hover:bg-green-400 text-green-600  color-transition   "
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EditPersonalDetails;
