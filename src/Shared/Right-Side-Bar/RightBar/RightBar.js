import React from "react";
import Advertisement from "../Advertisement/Advertisement";
import Follow from "../Follow/Follow";
import FriendsList from "../FriendsList/FriendsList";
import ProfileDetails from "../ProfileDetails/ProfileDetails";

const RightBar = () => {
  return (
    <div className="lg:w-80 ml-auto overflow-x-hidden pb-16 h-screen hidden xl:block bg-white dark:bg-black">
      <Advertisement></Advertisement>
      <ProfileDetails></ProfileDetails>
      <Follow></Follow>
      <FriendsList></FriendsList>
    </div>
  );
};

export default RightBar;
