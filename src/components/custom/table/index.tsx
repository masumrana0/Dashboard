import React, { useState, useMemo } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface Column {
  label: string;
  key: string;
}

interface TableProps<T> {
  data: T[];
  columns: Column[];
}

const Table = <T extends Record<string, any>>({
  data,
  columns,
}: TableProps<T>) => {
  const [sortConfig, setSortConfig] = useState<{
    key: keyof T;
    direction: "ascending" | "descending";
  } | null>(null);

  const sortedData = useMemo(() => {
    if (sortConfig !== null) {
      return [...data].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return data;
  }, [data, sortConfig]);

  const requestSort = (key: keyof T) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="px-4 py-2 text-left">
               
              </th>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-4 py-2 text-left text-gray-700 dark:text-gray-300 font-semibold"
                >
                  <button
                    onClick={() => requestSort(column.key as keyof T)}
                    className="flex items-center"
                  >
                    {column.label}
                    {sortConfig?.key === column.key &&
                      (sortConfig.direction === "ascending" ? (
                        <FaArrowUp className="w-4 h-4 ml-1" />
                      ) : (
                        <FaArrowDown className="w-4 h-4 ml-1" />
                      ))}
                  </button>
                </th>
              ))}
              <th className="px-4 py-2 text-left text-gray-700 dark:text-gray-300 font-semibold">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedData.length > 0 ? (
              sortedData.map((row, index) => (
                <tr
                  key={index}
                  className="border-t dark:border-gray-700 even:bg-gray-50 dark:even:bg-gray-800"
                >
                  
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className="px-4 py-2 text-gray-700 dark:text-gray-300"
                    >
                      {row[column.key]}
                    </td>
                  ))}
                  <td className="px-4 py-2 flex">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + 2}
                  className="text-center py-4 text-gray-500 dark:text-gray-400"
                >
                  <div className="flex justify-center items-center flex-col">
                    <svg
                      className="w-12 h-12 mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      ></path>
                    </svg>
                    <span>No data</span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
