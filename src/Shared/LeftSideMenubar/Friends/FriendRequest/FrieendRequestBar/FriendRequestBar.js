import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
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
      <hr className="mt-2" />
    </div>
  );
};

export default FriendRequestBar;
