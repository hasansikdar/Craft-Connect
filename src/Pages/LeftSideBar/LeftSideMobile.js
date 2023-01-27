import React from "react";
import { FaUserFriends } from "react-icons/fa";
import {
  FcHome,
  FcAdvertising,
  FcBarChart,
  FcSteam,
  FcClapperboard,
  FcConferenceCall,
  FcNews,
} from "react-icons/fc";
import { Link } from "react-router-dom";

const LeftSideMobile = () => {
  return (
    <div className="">
      <div className=" fixed border-r h-full">
        <div className="mx-2">
          <Link to="/">
            <FcHome className="text-3xl text-cyan-500" />
          </Link>
          <Link to="/friends">
            <FaUserFriends className="text-3xl text-cyan-500 my-6" />
          </Link>
          <FcClapperboard className="text-3xl text-cyan-500 my-6" />
          <FcNews className="text-3xl text-cyan-500 my-6" />
          <FcConferenceCall className="text-3xl text-cyan-500 my-6" />
          <FcHome className="text-3xl text-cyan-500 my-6" />
          <FcSteam className="text-3xl text-cyan-500 my-6" />
          <FcAdvertising className="text-3xl text-cyan-500 my-6" />
          <FcBarChart className="text-3xl text-cyan-500 my-6" />
        </div>
      </div>
    </div>
  );
};

export default LeftSideMobile;
