import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import FriendRequestCard from "./FriendRequestCard";
const FriendRequestBar = () => {
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
            <h2 className="text-2xl font-bold">Friend Requests</h2>
          </div>
        </div>
        <hr className="my-2" />

        <div className="flex flex-col">
          <h2 className="text-xl font-medium">100 Friend requests</h2>
          <small className="cursor-pointer text-blue-700">
            View sent requests
          </small>
        </div>
      </div>
      <div>
        <FriendRequestCard></FriendRequestCard>
      </div>
    </div>
  );
};

export default FriendRequestBar;
