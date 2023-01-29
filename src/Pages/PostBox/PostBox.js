import React, { useContext, useState } from "react";
import { Authcontext } from "../../Context/UserContext";
import camera from '../../assets/icons/Svg Icons/Camera.svg';
const PostBox = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(Authcontext);
  return (
    <form className="  text-white  p-4 bg-gray-50 dark:bg-zinc-700 shadow-lg mx-auto mt-3 rounded-md">
      <div className="outline-1 flex gap-4">
        <img
         src="https://avatars.githubusercontent.com/u/94055231?v=4"
          className="h-[38px] w-[38px] object-cover rounded-full"
          alt=""
        />
        <textarea className="w-full bg-transparent  min-h-[160px] outline-none  resize-none pr-4 text-gray-200" placeholder="Share What are you thinking"></textarea>
      </div>
      <div className="add-options-message flex">
        <div className="flex">
          <img src={camera} className='' alt="" />
        </div>
      </div>
    </form>
  );
};

export default PostBox;
