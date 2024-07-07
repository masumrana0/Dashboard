"use client";
import Table from "@/components/custom/table";
import React, { useState, useMemo } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

// Sample initial data
const initialUsers = [
  {
    email: "user1@example.com",
    role: "Admin",
    profile: "Profile 1",
    createdAt: "2023-07-01",
  },
  {
    email: "user2@example.com",
    role: "User",
    profile: "Profile 2",
    createdAt: "2023-07-02",
  },
  // Add more sample data as needed
];

interface User {
  email: string;
  role: string;
  profile: string;
  createdAt: string;
}

const userData = [
  {
    email: "user1@example.com",
    role: "Admin",
    profile: "Profile 1",
    createdAt: "2023-07-01",
  },
  {
    email: "user2@example.com",
    role: "User",
    profile: "Profile 2",
    createdAt: "2023-07-02",
  },
  // Add more sample data as needed
];

const columns = [
  { label: "Email", key: "email" },
  { label: "Role", key: "role" },
  { label: "Profile", key: "profile" },
  { label: "Created at", key: "createdAt" },
];
const BuyerPage = () => {
  return (
    <div>
      <Table data={userData} columns={columns} />
    </div>
  );
};

export default BuyerPage;
