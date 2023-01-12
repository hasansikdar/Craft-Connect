import React from "react";
import CreatePost from "./CreatePost";

const PostBox = () => {
  return (
    <>
      <div className="justify-center outline-1 flex items-center text-white gap-4 p-4 bg-zinc-700 container mx-auto mt-3 rounded-md ">
          {/* image source is hardcode now */}
          <img
            src="https://avatars.githubusercontent.com/u/94055231?v=4"
            className="h-[48px] w-[48px] object-cover rounded-full"
            alt=""
          />
          <label
            htmlFor="postModal"
            className="text-lg text-[#696969]  text-left block w-full cursor-pointer bg-zinc-800 px-3 py-3 max-[380px]:rounded-[30px] rounded-full pl-4 sm:rounded-full transition-all duration-200  outline-none hover:bg-zinc-900"
          >
            What's on your mind, Maruf?
          </label>

      </div>
      <CreatePost postModal={"postModal"} />
    </>
  );
};

export default PostBox;
