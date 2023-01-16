import React from "react";
import { FcSettings } from "react-icons/fc";
const LeftSide = () => {
  return (
    <div className="p-5">
      <div className="flex justify-between items-center text-black dark:text-white">
        <h2 className="text-xl font-bold">Friends</h2>
        <button className="text-xl">
          <FcSettings></FcSettings>
        </button>
      </div>
    </div>
  );
};

export default LeftSide;
