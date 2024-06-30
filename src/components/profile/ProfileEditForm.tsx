"use client";
import React, { useState } from "react";
import EditPortPolio from "./EditPortPolio";
import EditPersonalDetails from "./EditPersonalDetails";
import Form from "../forms/Form";
import ChangePassword from "./ChangePassword";
import UploadProfilePhoto from "./UploadProfilePhoto";

const ProfileEditForm: React.FC<{
  user: any;
}> = ({ user }) => {
  const [updateState, setUpdateState] = useState(1);

  // handle Update Profile Info
  const handleUpdateProfile = (value: any) => {
    console.log(value);
  };

  // handle Change Password
  const handleChangePassword = (value: any) => {
    console.log(value);
  };

  return (
    <div className="darkmode">
      {/* upload cover photo  */}
      <div className="relative top-[-6rem] mx-3 sm:mx-5 md:mx-10 grid grid-cols-12 gap-5  ">
        <section className="col-span-12 lg:col-span-3   ">
          {/* upload profile photo  */}
          <div>
            <UploadProfilePhoto user={user} />
          </div>

          {/* add  Portfolio  or Social meida link */}
          <div>
            <EditPortPolio />
          </div>
        </section>

        {/* Form Edit State */}
        <section className="col-span-12 lg:col-span-9    ">
          <div className="  bg-white light-darkmode  rounded-lg shadow w-full ">
            <div className="flex items-center gap-10">
              <button
                onClick={() => setUpdateState(1)}
                className={`tracking-tighter font-semibold ${
                  updateState == 1 && " border-b-2"
                } border-[#0bbea6] text-md py-3 px-5`}
              >
                Personal Details
              </button>
              <button
                onClick={() => setUpdateState(2)}
                className={`tracking-tighter font-semibold ${
                  updateState == 2 && " border-b-2"
                } border-[#0bbea6] text-md py-3 px-5`}
              >
                Change Password
              </button>
            </div>
            <div className="p-5">
              {updateState == 1 && (
                <Form submitHandler={handleUpdateProfile}>
                  <EditPersonalDetails />
                </Form>
              )}

              {updateState == 2 && (
                <Form submitHandler={handleChangePassword}>
                  <ChangePassword />
                </Form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProfileEditForm;
