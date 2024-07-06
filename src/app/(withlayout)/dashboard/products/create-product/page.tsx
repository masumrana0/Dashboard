// "use client";
// import Form from "@/components/forms/Form";
// import FormAddTagInput from "@/components/forms/FormAddTagInput";
// import DatePickerOne from "@/components/forms/FormDatePicker";
// import DatePicker from "@/components/forms/FormDatePicker";
// import FormInput from "@/components/forms/FormInput";
// import FormSelect, { IFormSelectOption } from "@/components/forms/FormSelect";
// import FormTextArea from "@/components/forms/FormTextArea";
// import ImageUploader from "@/components/forms/ImageUploader";
// import { useState } from "react";

// const CreateProductPage = () => {
//   const [storedStatus, setStatus] = useState<string>("");
//   const [storedTags, setStoredTag] = useState<string[]>([""]);
//   const [storedProductType, setProductType] = useState("");

//   // console.log(status);
//   const handleCreate = (data: any) => {
//     console.log(data);
//   };

//   const statusOptions: IFormSelectOption[] = [
//     { value: "UPCOMING", label: "UPCOMING" },
//     { value: "ONGOING", label: "ONGOING" },
//     { value: "ENDINGSOON", label: "ENDINGSOON" },
//     { value: "ENDED", label: "ENDED" },
//   ];

//   const productTypeOptions: IFormSelectOption[] = [
//     {
//       value: "Auctions",
//       label: "Auctions",
//     },
//     {
//       value: "Listings",
//       label: "Listings",
//     },
//   ];

//   return (
//     <div className="p-5 light-darkmode h-full overflow-y-auto w-full ">
//       <div>
//         <h2 className="text-lg tracking-tighter font-semibold text-gray-800 dark:text-gray-50 mb-2">
//           CREATE PRODUCT
//         </h2>
//       </div>

//       <section className="h-[calc(100vh-140px)] overflow-y-auto">
//         <Form submitHandler={handleCreate}>
//           <div className="grid grid-cols-12 gap-10 mt-5">
//             {/* Left side  */}
//             <section className="col-span-8   ">
//               <div className="md:p-10   bg-white darkmode   shadow-md rounded-md overflow-hidden space-y-3 mb-5">
//                 {/* product title  */}
//                 <div>
//                   <FormInput
//                     label="Product Title"
//                     required
//                     name="productTitle"
//                     type="text"
//                     placeholder="Enter your product title"
//                     className=""
//                   />
//                 </div>
//                 {/* product short description  */}
//                 <div>
//                   <FormTextArea
//                     label="Product Title"
//                     name="shortDescription"
//                     placeholder="Enter your product short description"
//                   />
//                 </div>
//                 {/* product short description  */}
//                 <div>
//                   <FormTextArea
//                     label="Description"
//                     required
//                     name="description"
//                     placeholder="Enter your product description"
//                     className="h-32"
//                   />
//                 </div>
//               </div>

//               <div className="md:p-10   bg-white darkmode  rounded-md overflow-hidden  w-full flex justify-between items-center gap-5 my-5">
//                 {/* Bid Price */}
//                 <FormInput
//                   label="Bid Price"
//                   required
//                   name="bidPrice"
//                   type="number"
//                   placeholder="$  bid amount"
//                 />

//                 {/*  Total Price */}
//                 <FormInput
//                   label="Total Price"
//                   required
//                   name="totalPrice"
//                   type="number"
//                   placeholder="$ total amount"
//                 />

//                 {/*  Total Price */}
//                 <FormInput
//                   label="Buy Price"
//                   required
//                   name="buyPrice"
//                   type="number"
//                   placeholder="$ buy amount"
//                 />
//               </div>
//               <div className=" p-5 bg-white darkmode  rounded-md overflow-hidden  w-full ">
//                 <h2 className="font-semibold mb-4">Upload Images </h2>
//                 <ImageUploader
//                   maxFileSize={5 * 1024 * 1024} // Optional: Max file size in bytes (default is 5MB)
//                   allowedFileTypes={["image/jpeg", "image/png", "image/gif"]} // Optional: Allowed file types
//                 />
//               </div>
//             </section>
//             {/* Right side  */}
//             <section className="col-span-4 ">
//               <div className="bg-white darkmode  shadow-md rounded-md   space-y-3 md:p-10   mb-5">
//                 <div className="mb-5">
//                   <FormSelect
//                     required
//                     label="Staus"
//                     placeholder="Select Status"
//                     defaultValue={statusOptions[0]}
//                     options={statusOptions}
//                     setOption={setStatus}
//                   />
//                 </div>
//                 {/* product type opttion  */}
//                 <div>
//                   <FormSelect
//                     required
//                     label="Product Type"
//                     placeholder="Select  type"
//                     options={productTypeOptions}
//                     setOption={setProductType}
//                   />
//                 </div>
//               </div>

//               <div className="bg-white darkmode  shadow-md rounded-md   space-y-3 md:p-10 mb-3">
//                 <h2 className="text-lg font-semibold dark:text-gray-50">
//                   Publish Date
//                 </h2>
//                 <div>
//                   <div className="mb-4">
//                     <FormInput
//                       label="Start Date"
//                       required
//                       name="startDate"
//                       type="date"
//                     />
//                   </div>

//                   <div>
//                     <FormInput
//                       label="End Date"
//                       required
//                       name="endDate"
//                       type="date"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="bg-white darkmode  shadow-md rounded-md   space-y-3 md:p-10  ">
//                 <FormAddTagInput setTags={setStoredTag} />
//               </div>
//             </section>
//           </div>
//         </Form>
//       </section>
//     </div>
//   );
// };

// export default CreateProductPage;

"use client";
import Form from "@/components/forms/Form";
import FormAddTagInput from "@/components/forms/FormAddTagInput";
import FormInput from "@/components/forms/FormInput";
import FormSelect, { IFormSelectOption } from "@/components/forms/FormSelect";
import FormTextArea from "@/components/forms/FormTextArea";
import ImageUploader from "@/components/forms/ImageUploader";
import { useState } from "react";

const CreateProductPage = () => {
  const [storedStatus, setStatus] = useState<string>("");
  const [storedTags, setStoredTag] = useState<string[]>([""]);
  const [storedProductType, setProductType] = useState("");
  const [uploadedImages, setUploadedImages] = useState<ImageFile[]>([]);

  const handleCreate = (data: any) => {
    const formData = {
      ...data,
      images: uploadedImages.map((image) => image.file), // Add images to form data
    };
    console.log(formData);
  };

  const statusOptions: IFormSelectOption[] = [
    { value: "UPCOMING", label: "UPCOMING" },
    { value: "ONGOING", label: "ONGOING" },
    { value: "ENDINGSOON", label: "ENDINGSOON" },
    { value: "ENDED", label: "ENDED" },
  ];

  const productTypeOptions: IFormSelectOption[] = [
    {
      value: "Auctions",
      label: "Auctions",
    },
    {
      value: "Listings",
      label: "Listings",
    },
  ];

  return (
    <div className="p-5 light-darkmode h-full overflow-y-auto w-full">
      <div>
        <h2 className="text-lg tracking-tighter font-semibold text-gray-800 dark:text-gray-50 mb-2">
          CREATE PRODUCT
        </h2>
      </div>

      <section className="h-[calc(100vh-140px)] overflow-y-auto">
        <Form submitHandler={handleCreate}>
          <div className="grid grid-cols-12 gap-10 mt-5">
            {/* Left side  */}
            <section className="col-span-8">
              <div className="md:p-10 bg-white darkmode shadow-md rounded-md overflow-hidden space-y-3 mb-5">
                {/* product title  */}
                <div>
                  <FormInput
                    label="Product Title"
                    required
                    name="productTitle"
                    type="text"
                    placeholder="Enter your product title"
                    className=""
                  />
                </div>
                {/* product short description  */}
                <div>
                  <FormTextArea
                    label="Product Title"
                    name="shortDescription"
                    placeholder="Enter your product short description"
                  />
                </div>
                {/* product description  */}
                <div>
                  <FormTextArea
                    label="Description"
                    required
                    name="description"
                    placeholder="Enter your product description"
                    className="h-32"
                  />
                </div>
              </div>

              <div className="md:p-10 bg-white darkmode rounded-md overflow-hidden w-full flex justify-between items-center gap-5 my-5">
                {/* Bid Price */}
                <FormInput
                  label="Bid Price"
                  required
                  name="bidPrice"
                  type="number"
                  placeholder="$ bid amount"
                />

                {/* Total Price */}
                <FormInput
                  label="Total Price"
                  required
                  name="totalPrice"
                  type="number"
                  placeholder="$ total amount"
                />

                {/* Buy Price */}
                <FormInput
                  label="Buy Price"
                  required
                  name="buyPrice"
                  type="number"
                  placeholder="$ buy amount"
                />
              </div>
              <div className="p-5 bg-white darkmode rounded-md overflow-hidden w-full">
                <h2 className="font-semibold mb-4">Upload Images</h2>
                <ImageUploader
                  maxFileSize={5 * 1024 * 1024} // Optional: Max file size in bytes (default is 5MB)
                  allowedFileTypes={["image/jpeg", "image/png", "image/gif"]} // Optional: Allowed file types
                  // onUpload={setUploadedImages} // Handle uploaded images
                />
              </div>
            </section>
            {/* Right side  */}
            <section className="col-span-4">
              <div className="bg-white darkmode shadow-md rounded-md space-y-3 md:p-10 mb-5">
                <div className="mb-5">
                  <FormSelect
                    required
                    label="Status"
                    placeholder="Select Status"
                    defaultValue={statusOptions[0]}
                    options={statusOptions}
                    setOption={setStatus}
                  />
                </div>
                {/* product type option */}
                <div>
                  <FormSelect
                    required
                    label="Product Type"
                    placeholder="Select type"
                    options={productTypeOptions}
                    setOption={setProductType}
                  />
                </div>
              </div>

              <div className="bg-white darkmode shadow-md rounded-md space-y-3 md:p-10 mb-3">
                <h2 className="text-lg font-semibold dark:text-gray-50">
                  Publish Date
                </h2>
                <div>
                  <div className="mb-4">
                    <FormInput
                      label="Start Date"
                      required
                      name="startDate"
                      type="date"
                    />
                  </div>

                  <div>
                    <FormInput
                      label="End Date"
                      required
                      name="endDate"
                      type="date"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-white darkmode shadow-md rounded-md space-y-3 md:p-10">
                <FormAddTagInput setTags={setStoredTag} />
              </div>
            </section>
          </div>
        </Form>
      </section>
    </div>
  );
};

export default CreateProductPage;
