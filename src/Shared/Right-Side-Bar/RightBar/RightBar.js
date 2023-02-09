import React from "react";
import Advertisement from "../Advertisement/Advertisement";
import Follow from "../Follow/Follow";
import FriendsList from "../FriendsList/FriendsList";

const RightBar = () => {
  return (
    <div className="relative  lg:w-80 ml-auto overflow-x-hidden pb-16 h-screen hidden xl:block dark:bg-[#2C2048]">
      <Advertisement></Advertisement>
      <Follow></Follow>
      <FriendsList></FriendsList>
    </div>
  );
};

export default RightBar;
