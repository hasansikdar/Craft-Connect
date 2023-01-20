import React from "react";
import Bottom from "../Bottom/Bottom";
import Top from "../Top/Top";

const LeftSideBar = () => {
  return (
    <div className="hidden overflow-x-hidden h-[600px] lg:block w-[300px] p-3 dark:bg-zinc-800 dark:text-white bg-white text-black">
      <Top></Top>
      <Bottom></Bottom>
    </div>
  );
};

export default LeftSideBar;
