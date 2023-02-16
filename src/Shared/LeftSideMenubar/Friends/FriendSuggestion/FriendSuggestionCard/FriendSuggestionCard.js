import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../../../Context/UserContext";
const FriendSuggestionCard = ({ followingUser }) => {
  const { user } = useContext(Authcontext);
  const handleFollow = (id) => {
    const followerUsers = user?.email;
    const followingUsers = id;
    const container = { followerUsers, followingUsers };

    fetch("http://localhost:5000/follow", {
      method: "PUT",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(container),
    })
      .then((result) => result.json())
      .then((data) => {
        console.log(data);
      });
  };
  // console.log("From DB", followingUser, "From Firebase", user);
  return (
    <div className="lg:mt-5">
      <div className="">
        <div className="flex gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded">
          <img
            src={followingUser?.photoURL}
            alt=""
            className="avatar rounded-full h-14 w-14"
          />
          <div className="text-black dark:text-white">
            <h2 className="font-bold text-base">
              {followingUser?.displayName}
            </h2>
            <small>100 mutual friend</small>
            <div className="flex gap-2">
              <button
                onClick={() => handleFollow(followingUser?.email)}
                className="w-[100px] h-[36px] bg-[#FF3F4A] rounded text-white"
              >
                Follow
              </button>
              <button className="w-[100px] h-[36px] bg-gray-600 rounded text-white">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendSuggestionCard;
