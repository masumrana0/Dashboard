"use client";
import React, { useState } from "react";
import FormStep from "./FormStep";
import { useAppSelector } from "@/Redux/hooks";
import SPersonalInfo from "./SPersonalInfo";
import SAuthInfo from "./SAuthInfo";
import SAddressInfo from "./SAddressInfo";

const CreateSellerComponentPage = () => {
  const [personalInfo, setPersonalInfo] = useState({});
  const [authInfo, setAuthInfo] = useState({});
  const [addressInfo, setAddressInfo] = useState({});
  const step = useAppSelector((state) => state.formStepSlice.step);

  const handleSubmit = () => {
    if (
      Object.keys(personalInfo).length > 0 &&
      Object.keys(authInfo).length > 0 &&
      Object.keys(addressInfo).length > 0
    ) {
      const allData: any = { ...personalInfo, ...authInfo, ...addressInfo };
      console.log(allData);
    }
  };

  return (
    <div className="container mx-auto ">
      <h2 className="text-2xl font-bold my-4">Create Seller</h2>

      {/* Step */}
      <FormStep />

      <section className="mt-5 ">
        {(step === 0 || step === 1) && (
          <SPersonalInfo setData={setAddressInfo} />
        )}
        {step === 2 && <SAuthInfo setData={setAddressInfo} />}
        {step === 3 && <SAddressInfo setData={setAddressInfo} />}
        {step >= 3 && <button onClick={handleSubmit}>Submit</button>}
      </section>
    </div>
  );
};

export default CreateSellerComponentPage;
