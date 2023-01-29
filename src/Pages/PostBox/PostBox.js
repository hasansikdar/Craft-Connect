import React, { useContext, useState } from "react";
import { Authcontext } from "../../Context/UserContext";
import CreatePost from "./CreatePost";
const PostBox = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(Authcontext);
  return (
    <>
      <div className=" outline-1 flex  text-white gap-4 p-4 bg-gray-50 dark:bg-zinc-700 shadow-lg container mx-auto mt-3 rounded-md">
        {/* image source is hardcode now */}
        <img
         src="https://avatars.githubusercontent.com/u/94055231?v=4"
          className="h-[38px] w-[38px] object-cover rounded-full"
          alt=""
        />
        <textarea className="w-full overflow-y-scroll min-h-[80px] bg-transparent outline-none w-full  resize-none pr-4 text-gray-200" placeholder="Share What are you thinking"></textarea>
        {/* <label
          onClick={() => setOpen(true)}
          className="text-lg text-[#696969]  text-left block w-full cursor-pointer bg-white dark:bg-zinc-800 border px-3 py-3 max-[380px]:rounded-[30px] rounded-full pl-4 sm:rounded-full transition-all duration-200  outline-none dark:hover:bg-zinc-900"
        >
          What's on your mind, {user?.displayName}
        </label> */}
      </div>
      {/* <CreatePost postModal={"postModal"} open={open} setOpen={setOpen} /> */}
    </>
  );
};

export default PostBox;
