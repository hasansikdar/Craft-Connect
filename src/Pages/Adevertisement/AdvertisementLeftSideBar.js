import React, { useContext, useState } from "react";
import { Authcontext } from "../../Context/UserContext";
import TextStoriesContent from "./TextStoriesContent";

const AdvertisementLeftSideBar = ({ showAdvertiseText, setShowAdvertiseText, setShowAdvertiseContent }) => {
  const { user } = useContext(Authcontext);

  return (
  <div className="h-screen w-[300px] bg-gray-50 dark:bg-[#261b40] p-5 pt-[80px]">
      <h1 className="text-2xl font-bold">Create Advertisement</h1>
      <div className="users-avatar pt-5  flex gap-3 items-center">
        <img
          className="w-[60px] h-[60px] rounded-full"
          src="https://avatars.githubusercontent.com/u/94055231?v=4"
          alt=""
        />
        <h1 className="text-xl capitalize">{user.displayName}</h1>
      </div>
      <div>
        {showAdvertiseText ? (
          <TextStoriesContent setShowAdvertiseText={setShowAdvertiseText} setShowAdvertiseContent={setShowAdvertiseContent} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default AdvertisementLeftSideBar;
