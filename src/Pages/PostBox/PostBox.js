import React, { useContext, useState } from "react";
import { Authcontext } from "../../Context/UserContext";
import camera from "../../assets/icons/Svg Icons/Camera.svg";
import tagFriends from "../../assets/icons/Svg Icons/TagFriends.svg";
import locations from "../../assets/icons/Svg Icons/Locations.svg";
const PostBox = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(Authcontext);
  return (
    <form className="  text-white  bg-gray-50 dark:bg-[#261b40] shadow-lg mx-auto mt-3 rounded-md">
      <div className="outline-1 flex gap-4  p-8">
        <img
          src="https://avatars.githubusercontent.com/u/94055231?v=4"
          className="h-[38px] w-[38px] object-cover rounded-full"
          alt=""
        />
        <textarea
          className="w-full bg-transparent  min-h-[160px] outline-none text-gray-900 caret-gray-900 dark:caret-[#FF3F4A] resize-none pr-4 dark:text-gray-200"
          placeholder="Share What are you thinking"
        ></textarea>
      </div>
    <div className="divide"></div>
      <div className="add-options-message flex justify-between items-center py-3 p-8 pb-5">
        <div className="flex gap-3">
          <div>
            <img src={camera} className="w-6 h-6" alt="" />
          </div>
          <div>
            <img src={tagFriends} className="w-6 h-6" alt="" />
          </div>
          <div>
            <img src={locations} className="w-6 h-6" alt="" />
          </div>
          <div></div>
        </div>
        <div className="flex">
          <button className="border-[#a1a1aa] border dark:text-white text-black text-base  py-2 px-4 rounded mr-3">
            Preview
          </button>
          <button className="bg-[#FF3F4A] hover:bg-[#cc323b] text-white  py-2 text-base px-4 rounded">
            Post Status
          </button>
        </div>
      </div>
    </form>
  );
};

export default PostBox;
