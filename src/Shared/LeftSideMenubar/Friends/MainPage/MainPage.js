import React, { useEffect, useState } from "react";
import FriendRequestBar from "../FriendRequest/FrieendRequestBar/FriendRequestBar";
import FriendRequestCard from "../FriendRequest/FrieendRequestBar/FriendRequestCard";
import FriendSuggestionCard from "../FriendSuggestion/FriendSuggestionCard/FriendSuggestionCard";
import AddFriendCard from "./AddFriendCard/AddFriendCard";
import MainPageCard from "./MainPageCard/MainPageCard";

const MainPage = () => {
  const [allUser, setAllUser] = useState();

  useEffect(() => {
    fetch("https://craft-connect-server-blond.vercel.app/allusers")
      .then((result) => result.json())
      .then((data) => setAllUser(data));
  }, []);
  return (
    <section className="pb-20">
      <div className="hidden">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold dark:text-white text-black">
          Friend Requests
        </h2>
        {/* <button className="text-[#FF3F4A] hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded">
          See All
        </button> */}
      </div>
      <div className="grid grid-cols-3 py-2 mx-auto px-4 gap-5 mt-5">
        <FriendRequestCard></FriendRequestCard>
        <FriendRequestCard></FriendRequestCard>
        <FriendRequestCard></FriendRequestCard>
        <FriendRequestCard></FriendRequestCard>
        <FriendRequestCard></FriendRequestCard>
        <FriendRequestCard></FriendRequestCard>
      </div>
      <hr className="mt-10 w-[1100px] text-2xl" />
      </div>

      <div>
        <div className="flex items-center justify-between mt-10">
          <h2 className="text-xl font-bold dark:text-white text-black">
            People You May Know
          </h2>
          {/* <button className="text-[#FF3F4A] hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded">
            See All
          </button> */}
        </div>
        <div className="grid grid-cols-3 py-2 mx-auto px-4 gap-5 mt-5">
          {allUser?.map((followingUser) => (
            <FriendSuggestionCard
              followingUser={followingUser}
              key={followingUser?._id}
            ></FriendSuggestionCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainPage;
