import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../../../Context/UserContext";
const FriendSuggestionCard = ({ followingUser }) => {
  const { user, myProUpdate } = useContext(Authcontext);
  const [follow, setFollow] = useState(false);

  const handleFollow = (id) => {
    const followerUsers = user?.email;
    const followingUsers = id;
    const container = { followerUsers, followingUsers };

    fetch("https://craft-connect-server-blond.vercel.app/follow", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(container),
    })
      .then((result) => result.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          setFollow(true);
          myProUpdate();
        }
      });
  };
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
              {follow ? (
                <button className="w-[100px] h-[36px] bg-[#FF3F4A] rounded text-white">
                  Follow Back
                </button>
              ) : (
                <button
                  onClick={() => handleFollow(followingUser?.email)}
                  className="w-[100px] h-[36px] bg-[#FF3F4A] rounded text-white"
                >
                  Follow
                </button>
              )}

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
