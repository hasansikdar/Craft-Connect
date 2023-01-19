import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import FriendRequestCard from "./FriendRequestCard";
const FriendRequestBar = () => {
  return (
    <div className="p-4">
      <div className="flex items-center gap-4">
        <div className="text-2xl">
          <BsArrowLeftShort></BsArrowLeftShort>
        </div>
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

      <div>
        <FriendRequestCard></FriendRequestCard>
      </div>
    </div>
  );
};

export default FriendRequestBar;
