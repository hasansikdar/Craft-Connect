import React from "react";
import AdvertisementPreview from "./AdvertisementPreview";

const CreateAdvertisement = ({
  setShowAdvertiseText,
  showAdvertiseText,
  showAdvertiseContent,
  showImageStories,
  setPreview,
  preview,
}) => {
  const toggleTextStoriesContent = () => {
    setShowAdvertiseText(true);
  };
  return (
    <>
      {showAdvertiseText ? (
        <AdvertisementPreview
          showAdvertiseContent={showAdvertiseContent}
          setPreview={setPreview}
          preview={preview}
        />
      ) : (
        <>
          {showImageStories ? (
            <div className="flex h-screen justify-center items-center gap-5 flex-wrap select-none ">
              <div
                onClick={toggleTextStoriesContent}
                className="flex items-center justify-center w-[180px] h-[250px] rounded-md bg-gradient-to-tr from-cyan-500 via-green-500  to-blue-500 cursor-pointer"
              >
                <h1 className="font-bold text-lg text-center">
                  Create Advertisement
                </h1>
              </div>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
};

export default CreateAdvertisement;
