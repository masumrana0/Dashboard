"use client";

import Image from "next/image";
import React, { useState, useRef } from "react";
import { FaCamera } from "react-icons/fa";
import toast from "react-hot-toast";

interface ProfilePictureUploaderProps {
  onFileChange?: (file: File | null) => void;
  maxSizeInBytes?: number;
}

const ProfilePictureUploader: React.FC<ProfilePictureUploaderProps> = ({
  onFileChange,
  maxSizeInBytes = 1048576, // 1MB default
}) => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dropAreaRef = useRef<HTMLDivElement | null>(null);

  const validateFile = (file: File): boolean => {
    if (file.size > maxSizeInBytes) {
      toast.error("File size exceeds the maximum limit of 1MB");
      return false;
    }
    if (!file.type.startsWith("image/")) {
      toast.error("Invalid file type. Please select an image.");
      return false;
    }
    return true;
  };

  const handleFile = (file: File) => {
    if (validateFile(file)) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      if (onFileChange) {
        onFileChange(file);
      }
    } else {
      setFile(null);
      setPreview(null);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center p-4 rounded-lg">
      <div
        ref={dropAreaRef}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={() => document.getElementById("fileInput")?.click()}
        className={`w-32 h-32 ${
          isDragging
            ? "border-4 border-blue-500 bg-blue-100"
            : "border-2 border-dashed border-gray-300 dark:bg-gray-700 bg-gray-50 "
        } rounded-full mb-4 flex items-center justify-center text-gray-500 cursor-pointer relative`}
      >
        <span className="absolute bottom-2 right-2 z-10 h-8 w-8 rounded-full bg-white flex items-center justify-center text-lg">
          <FaCamera />
        </span>
        {preview ? (
          <Image
            width={128}
            height={128}
            src={preview}
            alt="Profile Preview"
            className="w-full h-full rounded-full object-cover"
          />
        ) : (
          <div
            className={`text-center text-sm p-3 ${
              isDragging ? "text-white" : "text-gray-500 dark:text-gray-50"
            }`}
          >
            Drag & drop or select a picture
          </div>
        )}
      </div>
      <input
        id="fileInput"
        type="file"
        className="hidden"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ProfilePictureUploader;
