import React, { useRef } from 'react';
import { MdOutlinePhotoLibrary } from 'react-icons/md';

const ChangeCoverPhoto = () => {
  // uploading photo refreence
  const coverPhotoRef = useRef<HTMLInputElement>(null);

  //   handle upload cover photo
  const handleUploadCoverPhoto = () => {
    if (coverPhotoRef.current) {
      coverPhotoRef.current.click();
    }
  };
  return (
    <div className="absolute right-5 top-5 md:top-12">
      <input type="file" ref={coverPhotoRef} className="hidden" />
      <button
        onClick={handleUploadCoverPhoto}
        className=" flex gap-1 items-center text-xs md:text-sm md:px-5 md:py-3 px-3 py-2 rounded text-gray-800 hover:bg-gray-100 bg-gray-50  transition-colors duration-300 font-semibold "
      >
        <MdOutlinePhotoLibrary /> Change Cover
      </button>
    </div>
  );
};

export default ChangeCoverPhoto;