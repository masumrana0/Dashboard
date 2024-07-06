"use client";
import React, { useState } from "react";

import { useAppSelector } from "@/Redux/hooks";
import FormStep from "@/components/seller/create-seller-form/FormStep";
import BPersonalInfo from "./BPersonalnfo";
import BAuthInfo from "./BAuthInfo";
import BAddressInfo from "./BAddressInfo";

const CreateBuyerComponentPage = () => {
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
    <div className="container mx-auto md:px-0 px-5 ">
      <h2 className="text-2xl font-bold my-4">Create Buyer</h2>

      {/* Step */}
      <FormStep />

      <section className="mt-5 ">
        {(step === 0 || step === 1) && (
          <BPersonalInfo setData={setAddressInfo} />
        )}
        {step === 2 && <BAuthInfo setData={setAddressInfo} />}
        {step === 3 && <BAddressInfo setData={setAddressInfo} />}
        {step >= 3 && <button onClick={handleSubmit}>Submit</button>}
      </section>
    </div>
  );
};

export default CreateBuyerComponentPage;
