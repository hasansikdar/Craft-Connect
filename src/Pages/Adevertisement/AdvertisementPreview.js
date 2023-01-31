import React, { useState } from "react";

const AdvertisementPreview = ({ preview, showAdvertiseContent }) => {
  return (
    <div className="pt-14 h-min-full overflow-hidden">
      <div className="p-5 rounded-md h-min-full w-[30vw]  bg-gray-50 dark:bg-[#261b40]">
        <h1>Preview</h1>
        <div className="text-white text-lg text-center my-2 h-[75vh] rounded-md items-center overflow-x-hidden">
          <img
            src={preview}
            className="mb-2 rounded-md"
            alt=""
          />
          <div className="h-[280px] w-full  font-base text-xl whitespace-pre-line overflow-x-hidden overflow-y-auto">
            {showAdvertiseContent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementPreview;
