import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import AllFriendCard from "./AllFriendCard";

const AllFriendLeftBar = () => {
  return (
    <div className="p-4">
      <div className="">
        <div className="flex items-center gap-4 ">
          <Link
            to="/friends"
            className="text-2xl hover:bg-gray-100 dark:hover:bg-gray-600  text-black rounded-full dark:text-white"
          >
            <BsArrowLeftShort></BsArrowLeftShort>
          </Link>
          <div className="leading-3">
            <small>Friends</small>
            <h2 className="text-2xl font-bold">All Friends</h2>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center  border border-zinc-600 rounded-full px-3 bg-gray-100  dark:bg-zinc-900 hover:bg-zinc-200 my-2">
          <i className="dark:text-white">
            <BiSearchAlt2></BiSearchAlt2>
          </i>
          <input
            type="text"
            placeholder="Search"
            className="mx-2 md:mx-0 pl-3 py-1 dark:text-white w-full bg-gray-100 dark:bg-zinc-900 hover:bg-zinc-200"
          />
        </div>

        <hr className="mt-2" />

        <h2 className=" font-medium pt-2">100 friends</h2>
      </div>
      <div>
        <AllFriendCard></AllFriendCard>
      </div>
    </div>
  );
};

export default AllFriendLeftBar;
