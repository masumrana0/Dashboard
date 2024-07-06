"use client";
import Image from "next/image";
import React, { useState, ChangeEvent, DragEvent } from "react";
import toast from "react-hot-toast";
import { RiCloseLine } from "react-icons/ri";

interface ImageUploaderProps {
  maxFileSize?: number; // in bytes
  allowedFileTypes?: string[];
}

interface ImageFile {
  file: File;
  preview: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
  maxFileSize = 5 * 1024 * 1024, // Default 5MB
  allowedFileTypes = ["image/jpeg", "image/png", "image/gif"],
}) => {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  //   image validation
  const validateFile = (file: File): boolean => {
    if (!allowedFileTypes.includes(file.type)) {
      toast.error("File type not allowed");
      setError("File type not allowed");
      return false;
    }
    if (file.size > maxFileSize) {
      toast.error("File size exceeds the limit");
      setError("File size exceeds the limit");
      return false;
    }
    return true;
  };

  const handleFiles = (files: FileList) => {
    setError(null);
    const validFiles: ImageFile[] = [];
    Array.from(files).forEach((file) => {
      if (validateFile(file)) {
        validFiles.push({ file, preview: URL.createObjectURL(file) });
      }
    });
    setImages((prevImages) => [...prevImages, ...validFiles]);
  };

  //   handle drag and drop
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      handleFiles(files);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="bg-white darkmode">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed p-4 rounded-md !cursor-pointer  h-32 ${
          isDragging
            ? "border-blue-500 bg-blue-100  "
            : "border-gray-300 bg-gray-50 dark:bg-gray-600"
        }`}
      >
        <input
          type="file"
          multiple
          onChange={handleChange}
          className="hidden"
          id="imageUpload"
          accept={allowedFileTypes.join(",")}
        />
        <label
          htmlFor="imageUpload"
          className={`text-center flex items-center justify-center h-full text-lg transition-all duration-200  ${
            isDragging && "font-bold text-blue-700"
          } `}
        >
          Drag and drop images here or click to upload
        </label>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 max-h-[30rem] overflow-y-auto  ">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <Image
              width={500}
              height={500}
              src={image.preview}
              alt={`uploaded ${index}`}
              className="w-full h-auto object-cover rounded-md"
            />
            <button
              onClick={() => handleRemoveImage(index)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
            >
              <RiCloseLine />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;
