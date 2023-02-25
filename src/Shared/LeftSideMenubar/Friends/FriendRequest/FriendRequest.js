import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../../../Pages/Navbar/Navbar";
import FriendRequestBar from "./FrieendRequestBar/FriendRequestBar";
import LeftsideFriendrequest from "./LeftsideFriendRequest/LeftsideFriendrequest";

const FriendRequest = () => {
  return (
    <section>
      <div className="grid grid-cols-12 max-w-screen-xl mt-[20px] bg-white dark:bg-[#2A2A2A] text-black dark:text-white">
        <div className="col-span-3 border border-slate-600 bg-gray-50 dark:bg-[#2A2A2A] h-screen">
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
