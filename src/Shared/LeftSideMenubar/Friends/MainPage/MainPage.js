import React from "react";
import AddFriendCard from "./AddFriendCard/AddFriendCard";
import MainPageCard from "./MainPageCard/MainPageCard";

const MainPage = () => {
  return (
    <section className="p-10 mt-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold dark:text-white text-black">
          Friend Requests
        </h2>
        <button className="text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded">
          See All
        </button>
      </div>
      <div className="grid grid-cols-3 py-2 mx-auto px-4 gap-5 mt-5">
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
        <MainPageCard></MainPageCard>
      </div>
      <hr className="mt-10 w-[1100px] text-2xl" />

      <div>
        <div className="flex items-center justify-between mt-10">
          <h2 className="text-xl font-bold dark:text-white text-black">
            People You May Know
          </h2>
          <button className="text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded">
            See All
          </button>
        </div>
        <div className="grid grid-cols-3 py-2 mx-auto px-4 gap-5 mt-5">
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
          <AddFriendCard></AddFriendCard>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
