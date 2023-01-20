import React from "react";
import Navbar from "../../../../Pages/Navbar/Navbar";
import AllFriendLeftBar from "./AllFriendLeftBar/AllFriendLeftBar";
import AllFriendProfile from "./AllFriendProfile/AllFriendProfile";

const AllFriends = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 mt-[60px] bg-white dark:bg-black text-black dark:text-white max-w-screen-xl">
        <div className="col-span-3 dark:bg-black h-screen">
          <AllFriendLeftBar></AllFriendLeftBar>
        </div>
        <div className="col-span-9">
          <AllFriendProfile></AllFriendProfile>
        </div>
      </div>
    </section>
  );
};

export default AllFriends;
