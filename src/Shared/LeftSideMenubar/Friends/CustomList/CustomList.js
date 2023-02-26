import React from "react";
import Navbar from "../../../../Pages/Navbar/Navbar";
import CustomFriendProfile from "./CustomFriendProfile/CustomFriendProfile";
import CustomLeftSide from "./CustomLeftSide/CustomLeftSide";

const CustomList = () => {
  return (
    <section>
      {/* <Navbar></Navbar> */}
      <div className="grid grid-cols-12 mt-[10px] bg-white dark:bg-[#2A2A2A] text-black dark:text-white max-w-screen-xl">
        <div className="col-span-3 dark:bg-[#2A2A2A] h-screen">
          <CustomLeftSide></CustomLeftSide>
        </div>
        <div className="col-span-9">
          <CustomFriendProfile></CustomFriendProfile>
        </div>
      </div>
    </section>
  );
};

export default CustomList;
