import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../../../Pages/Navbar/Navbar";
import FriendRequestBar from "./FrieendRequestBar/FriendRequestBar";
import LeftsideFriendrequest from "./LeftsideFriendRequest/LeftsideFriendrequest";

const FriendRequest = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 max-w-screen-xl mt-[60px] bg-white dark:bg-[#2C2048] text-black dark:text-white">
        <div className="col-span-3 border border-slate-600 bg-gray-50 dark:bg-[#2C2048] h-screen">
          <FriendRequestBar></FriendRequestBar>
        </div>
        <div className="col-span-9 hidden lg:block">
          <LeftsideFriendrequest></LeftsideFriendrequest>
        </div>
      </div>
    </section>
  );
};

export default FriendRequest;
