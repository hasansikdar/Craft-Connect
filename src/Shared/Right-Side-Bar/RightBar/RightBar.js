import React from "react";
import Advertisement from "../Advertisement/Advertisement";
import Follow from "../Follow/Follow";


const RightBar = () => {
  return (
    <div className="relative  lg:w-80 ml-auto overflow-x-hidden pb-16 h-screen hidden xl:block dark:bg-[#2A2A2A]">
      <Advertisement></Advertisement>
      <Follow></Follow>
    </div>
  );
};

export default RightBar;
