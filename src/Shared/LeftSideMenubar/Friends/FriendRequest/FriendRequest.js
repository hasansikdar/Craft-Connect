import React from "react";
import Navbar from "../../../../Pages/Navbar/Navbar";
import FriendRequestBar from "./FrieendRequestBar/FriendRequestBar";
import LeftsideFriendrequest from "./LeftsideFriendRequest/LeftsideFriendrequest";

const FriendRequest = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 mt-[60px] bg-white dark:bg-black text-black dark:text-white">
        <div className="col-span-3 border border-red-600">
          <FriendRequestBar></FriendRequestBar>
        </div>
        <div className="col-span-9">
          <LeftsideFriendrequest></LeftsideFriendrequest>
        </div>
      </div>
    </section>
  );
};

export default FriendRequest;
