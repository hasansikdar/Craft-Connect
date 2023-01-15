import React from "react";
import CreatePost from "./CreatePost";

const PostBox = () => {
  return (
    <>
      <div className="justify-center outline-1 flex items-center dark:text-white text-black gap-4 p-4 bg-white dark:bg-zinc-700 container mx-auto mt-3 rounded-md ">
        {/* image source is hardcode now */}
        <img
          src="https://avatars.githubusercontent.com/u/94055231?v=4"
          className="h-[48px] w-[48px] object-cover rounded-full"
          alt=""
        />
        <label
          htmlFor="postModal"
          className="text-lg text-[#696969]  text-left block w-full cursor-pointer dark:bg-zinc-800 bg-zinc-100 px-3 py-3 max-[380px]:rounded-[30px] rounded-full pl-4 sm:rounded-full transition-all duration-200  outline-none"
        >
          What's on your mind, Maruf?
        </label>
      </div>
      <CreatePost postModal={"postModal"} />
    </>
  );
};

export default PostBox;
