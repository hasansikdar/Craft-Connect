import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../Context/UserContext";
import AdvertiseContent from "./AdvertiseContent";

const AdvertisementLeftSideBar = ({
  showAdvertiseText,
  setShowAdvertiseText,
  setShowAdvertiseContent,
  setPreview,
  preview,
  selectedFile,
  setSelectedFile,
}) => {
  const { user } = useContext(Authcontext);
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const selectedFIles = [];
    const targetFilesObject = [...selectedFile];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });

    setPreview(selectedFIles);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(selectedFIles);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files?.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files);
  };
  return (
    <div className="h-screen w-[300px] bg-gray-50 dark:bg-[#261b40] p-5 pt-[80px] overflow-y-auto overflwo-x-hidden">
      <h1 className="text-2xl font-bold">Create Advertisement</h1>
      <div className="users-avatar pt-5  flex gap-3 items-center">
        <img
          className="w-[60px] h-[60px] rounded-full"
          src="https://avatars.githubusercontent.com/u/94055231?v=4"
          alt=""
        />
        <h1 className="text-xl capitalize">{user.displayName}</h1>
      </div>
      <div>
        {showAdvertiseText ? (
          <AdvertiseContent
            setShowAdvertiseText={setShowAdvertiseText}
            setShowAdvertiseContent={setShowAdvertiseContent}
            setPreview={setPreview}
            preview={preview}
            onSelectFile={onSelectFile}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AdvertisementLeftSideBar;
