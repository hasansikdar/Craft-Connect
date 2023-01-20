import React, { useContext, useState } from "react";
import { Authcontext } from "../../Context/UserContext";
import TextStoriesContent from "./TextStoriesContent";

const StoriesLeftSideBar = ({ showTextStories, setShowTextStories, setTextStoryContent }) => {
  const { user } = useContext(Authcontext);
  
  return (
    <div className="h-full w-[300px] bg-zinc-700 p-5">
      <h1 className="text-2xl font-bold">Yours Stories</h1>
      <div className="users-avatar pt-5  flex gap-3 items-center">
        <img
          className="w-[60px] h-[60px] rounded-full"
          src="https://avatars.githubusercontent.com/u/94055231?v=4"
          alt=""
        />
        <h1 className="text-xl capitalize">{user.displayName}</h1>
      </div>
      <div>
        {showTextStories ? (
          <TextStoriesContent setShowTextStories={setShowTextStories} setTextStoryContent={setTextStoryContent} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default StoriesLeftSideBar;
