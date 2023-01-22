import React from "react";
import { FaSearch } from "react-icons/fa";
import Navbar from "../../../Pages/Navbar/Navbar";
import FriendRequestCard from "./FriendRequest/FrieendRequestBar/FriendRequestCard";
import LeftSide from "./LeftSide/LeftSide";
import MainPage from "./MainPage/MainPage";

const Friends = () => {
  return (
    <section className="bg-white dark:bg-black">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className=" hidden lg:block">
        <div className="grid grid-cols-12">
          <div className="col-span-3 hidden lg:block ">
            <LeftSide></LeftSide>
          </div>
          <div className="col-span-9">
            <MainPage></MainPage>
          </div>
        </div>
      </div>

      {/* For Mobile device  */}
      <div className="max-w-lg mt-[60px] h-screen">
        <div className="flex justify-between items-center px-4 dark:text-white text-black">
          <h2 className="font-bold text-2xl"> Friends</h2>
          <FaSearch className="text-2xl"></FaSearch>
        </div>

        <div className="flex gap-5 px-4 my-4 dark:text-white text-black font-semibold">
          <span className="bg-gray-200 dark:bg-gray-900 px-2 py-1 rounded-full">
            Suggestions
          </span>
          <span className="bg-gray-200 dark:bg-gray-900 px-2 py-1 rounded-full">
            Your Friends
          </span>
        </div>

        <div className="dark:text-white text-black flex justify-between px-4">
          <h2 className="text-xl font-bold">Friend requests</h2>
          <button className="text-blue-700">See all</button>
        </div>
        <FriendRequestCard></FriendRequestCard>
      </div>
    </section>
  );
};

export default Friends;
