import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../../../Pages/Navbar/Navbar";
import AllFriendCard from "./AllFriendLeftBar/AllFriendCard";
import AllFriendLeftBar from "./AllFriendLeftBar/AllFriendLeftBar";
import AllFriendProfile from "./AllFriendProfile/AllFriendProfile";

const AllFriends = () => {
  return (
    <section>
      {/* <Navbar></Navbar> */}
      <div className="grid grid-cols-12 mt-[20px] bg-white dark:bg-[#2A2A2A] text-black dark:text-white max-w-screen-xl">
        <div className="col-span-3 dark:bg-[#2A2A2A] h-screen  hidden lg:block">
          <AllFriendLeftBar></AllFriendLeftBar>
        </div>
        <div className="col-span-9 hidden lg:block">
          <AllFriendProfile></AllFriendProfile>
        </div>
      </div>

      {/* For Mobile device  */}
      <div className="max-w-xl h-screen">
        <div className="dark:text-white text-black flex items-center gap-2 px-4">
          <Link
            to="/friends"
            className="text-2xl hover:bg-gray-100 dark:hover:bg-gray-600  text-black rounded-full dark:text-white"
          >
            <BsArrowLeftShort></BsArrowLeftShort>
          </Link>
          <h2 className="text-xl font-bold">Your Friends</h2>
        </div>
        <hr className="mt-2" />

        <div className="px-2 flex flex-col gap-2">
          <div className="flex justify-center items-center  border border-zinc-600 rounded-full px-3 bg-gray-100  dark:bg-zinc-900 hover:bg-zinc-200 my-2">
            <i className="dark:text-white">
              <BiSearchAlt2></BiSearchAlt2>
            </i>
            <input
              type="text"
              placeholder="Search"
              className="mx-2 md:mx-0 pl-3 py-1 dark:text-white w-full bg-gray-100 dark:bg-zinc-900 hover:bg-zinc-200"
            />
          </div>
          <div className="w-full">
            <AllFriendCard></AllFriendCard>
            <AllFriendCard></AllFriendCard>
            <AllFriendCard></AllFriendCard>
            <AllFriendCard></AllFriendCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllFriends;
