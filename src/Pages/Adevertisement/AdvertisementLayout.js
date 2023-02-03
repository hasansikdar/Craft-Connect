import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import AdvertisementLeftSideBar from "./AdvertisementLeftSideBar";
import CreateAdvertisement from "./CreateAdvertisement";

const AdvertisementLayout = () => {
  const [showAdvertiseText, setShowAdvertiseText] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [showAdvertiseContent, setShowAdvertiseContent] = useState("Add Text");
  const [showImageStories, setShowImageStories] = useState(true);
  const [preview, setPreview] = useState([]);
  return (
    <div>
      <Navbar />
      <div className="lg:flex">
        <div className="xl:mr-auto lg:w-[300px] lg:none">
          <AdvertisementLeftSideBar
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
            setShowImageStories={setShowImageStories}
            showAdvertiseText={showAdvertiseText}
            setShowAdvertiseContent={setShowAdvertiseContent}
            setShowAdvertiseText={setShowAdvertiseText}
            setPreview={setPreview}
            preview={preview}
          />
        </div>
        <div className="lg:w-[600px] xl:mr-auto flex items-center justify-center h-screen">
          <CreateAdvertisement
            setShowAdvertiseText={setShowAdvertiseText}
            showAdvertiseText={showAdvertiseText}
            showAdvertiseContent={showAdvertiseContent}
            showImageStories={showImageStories}
            setPreview={setPreview}
            preview={preview}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvertisementLayout;
