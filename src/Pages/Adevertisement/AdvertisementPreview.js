import React, { useState } from "react";

const AdvertisementPreview = ({showAdvertiseContent}) => {
  return (
    <div className="py-12 h-min-full overflow-hidden">
      <div className="p-5 bg-zinc-700 rounded-md h-min-full w-[25vw]">
        <h1>Preview</h1>
        <div className="text-white text-lg text-center  p-3 my-2 bg-zinc-500 flex justify-center h-[75vh] rounded-md items-center overflow-x-hidden">
            <p className="min-h-[250px] w-full  font-bold text-xl mx-[50px] whitespace-pre-line">{showAdvertiseContent}</p>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementPreview;
