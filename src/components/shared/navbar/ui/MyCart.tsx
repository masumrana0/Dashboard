"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// icons
import productImg from "/public/icons/img-1.png";
import { IoBagOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import ClickOutside from "@/components/custom/ClickOutSide";
import Link from "next/link";

const MyCart = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleToggleOpen = () => {
    setDropdownOpen(!dropdownOpen);
  };

  //! dummy data
  const products = [
    {
      productName: "Product 1",
      img: productImg,
      price: 100,
      quantity: 10,
    },
    {
      productName: "Product 2",
      img: productImg,
      price: 200,
      quantity: 20,
    },
    {
      productName: "Product 3",
      img: productImg,
      price: 300,
      quantity: 30,
    },
    {
      productName: "Product 4",
      img: productImg,
      price: 400,
      quantity: 40,
    },
    {
      productName: "Product 5",
      img: productImg,
      price: 500,
      quantity: 50,
    },
    {
      productName: "Product 6",
      img: productImg,
      price: 600,
      quantity: 60,
    },
    {
      productName: "Product 7",
      img: productImg,
      price: 700,
      quantity: 70,
    },
    {
      productName: "Product 8",
      img: productImg,
      price: 800,
      quantity: 80,
    },
    {
      productName: "Product 9",
      img: productImg,
      price: 900,
      quantity: 90,
    },
    {
      productName: "Product 10",
      img: productImg,
      price: 1000,
      quantity: 100,
    },
  ];

  // Calculate the total price of all products considering the quantity
  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <ClickOutside
      exceptionRef={dropdownRef}
      onClick={() => setDropdownOpen(false)}
      className="relative"
    >
      <div ref={dropdownRef} className="md:relative    ">
        {/* dropdown button  */}
        <button
          // onBlur={() => setOpen(false)}

          onClick={handleToggleOpen}
          className={`relative text-gray-500 sm:h-[3rem] h-[2.5rem]   sm:w-[3rem] w-[2.5rem]  text-[1.5rem] sm:text-2xl flex items-center justify-center  p-2 rounded-full dark:text-white dark:hover:text-gray-500     ${
            dropdownOpen && "bg-slate-200"
          } hover:bg-slate-200 colortransition`}
        >
          <IoBagOutline />
          {products.length > 0 && (
            <span className="absolute p-2 w-5 h-5 flex items-center justify-center rounded-full bg-blue-400 text-xs text-white font-semibold -top-1 -right-0">
              {products.length}
            </span>
          )}
        </button>

        {/* Dropdown  */}
        <div
          className={` absolute right-0 bg-white py-2 rounded-lg shadow-lg w-screen   md:max-w-[22rem] xl:max-w-[25rem] transform transition-all duration-500 ease-in-out ${
            dropdownOpen
              ? "translate-y-0 opacity-100 z-999999"
              : "translate-y-4 opacity-0 pointer-events-none"
          } dark:bg-gray-800 dark:text-white`}
        >
          {/* dropdown head  */}
          <div className="flex items-center justify-between  p-4">
            <h2 className="text-lg font-semibold">My Cart</h2>
            <span className="bg-orange-100 p-1 px-2 rounded  font-bold text-orange-400">
              {products.length} Items
            </span>
          </div>
          <hr className="border-t  " />

          {/*  dropdown Content */}
          <div className="p-4 max-h-[20rem] overflow-y-auto no-scrollbar">
            {products?.map((product, index) => (
              <div
                className="py-1 flex items-center justify-between"
                key={index}
              >
                {/* product img , name and quantity */}
                <div className="flex items-center gap-2">
                  <Image
                    className="bg-slate-100 rounded-full p-2"
                    src={product?.img}
                    width={50}
                    height={400}
                    alt="product img"
                  />
                  <span>
                    <h2 className="font-semibold text-lg">
                      {product.productName}
                    </h2>
                    <p className="text-xs text-gray-500 darkmode">
                      Quantity: {product.quantity} x ${product.price}{" "}
                    </p>
                  </span>
                </div>

                {/*price and cencel button   */}
                <div className="flex items-center gap-5">
                  <h2 className="font-bold text-md text-gray-400 darkmode">
                    ${product.price}
                  </h2>
                  <button className="text-green-700 dark:text-green-400  text-lg">
                    <RxCross2 />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Dropdown Footer - Total Amount and Checkout Button */}
          <div className="p-4">
            <div className=" flex items-center justify-between ">
              <h2 className="text-lg text-gray-500 font-semibold darkmode">
                Total:
              </h2>
              <span className="text-lg text-gray-500 darkmode font-bold">
                ${totalPrice.toLocaleString()}
              </span>
            </div>

            <button className="text-center  text-white rounded bg-green-500 color-transition hover:bg-green-700  py-2 mt-5 font-semibold  w-full">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </ClickOutside>
  );
};
//
export default MyCart;
