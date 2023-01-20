import React from "react";
import Navbar from "../../../../Pages/Navbar/Navbar";

const AllFriends = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 mt-[60px] bg-white dark:bg-black text-black dark:text-white max-w-screen-xl">
        <div className="col-span-3 dark:bg-black h-screen">
          <h2>Left side here</h2>
        </div>
        <div className="col-span-9">
          <h2>main page here</h2>
        </div>
      </div>
    </section>
  );
};

export default AllFriends;
