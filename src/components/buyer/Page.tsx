import React from 'react';
import Table from '../custom/table';

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

const  BuyerPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <Table data={userData} columns={columns} />
    </div>
  );
};

export default  BuyerPage;