import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiSpeakerphone } from "react-icons/hi";
import { FaEdit, FaWifi, FaUserCheck } from "react-icons/fa";
import { Authcontext } from "../../../Context/UserContext";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const ProfileDetails = () => {
  const { user } = useContext(Authcontext);
  return (
    <div className="">
      <div className="card-body p-2 flex rounded-lg border-zinc-600 shadow-xl w-[300px] text-gray-500 bg-white dark:bg-[#261b40] overflow-scroll home border border-[#FF3F4A]">
        <h1 className="ml-4 mt-4 dark:text-white text-black">Your Profile</h1>
        <div className="flex items-center flex-col">
          <img
            src={user?.photoURL}
            alt="photoURL"
            className="w-16 h-16 object-cover rounded-full mt-4 mb-2"
          />
          <Link to="/feature/profile">
            <h1 className="dark:text-white text-gray-700 font-bold text-xl hidden lg:block">
              {user?.displayName}
            </h1>
          </Link>
          <p className="dark:text-gray-300 text-gray-700">
            Professional Artist
          </p>
        </div>
        <div>
          <ul className="menu">
            <div className="hover:bg-[#FF3F4A] hover:text-white dark:text-white text-gray-700 duration-200 rounded-md px-5 py-2">
              <Link to="/editprofile" className="justify-between flex">
                <p>Edit Profile</p> <FaEdit></FaEdit>
              </Link>
            </div>
            <div className="hover:bg-[#FF3F4A] hover:text-white dark:text-white text-gray-700 duration-200 rounded-md px-5 py-2">
              <Link to="/advertisement/create" className="justify-between flex">
                Create Advertisement <HiSpeakerphone></HiSpeakerphone>
              </Link>
            </div>
          </ul>
        </div>
        <div className="divider m-0"></div>
        <div>
          <Link className="justify-between flex dark:text-white text-gray-700 duration-200 rounded-md px-2 py-2">
            Followed by{" "}
            <span className="flex items-center">
              <FaWifi className="mr-2"></FaWifi> 487 people{" "}
            </span>
          </Link>
        </div>
        <div>
          <Link className="justify-between flex dark:text-white text-gray-700 duration-200 rounded-md px-2 py-2">
            Friendlists{" "}
            <span className="flex items-center">
              <FaUserCheck className="mr-2"></FaUserCheck> 492 friends{" "}
            </span>
          </Link>
        </div>
        <div className="divider m-0"></div>
        <div className="px-2">
          <p className="font-bold dark:text-white text-gray-700 ml-2 mb-2">
            Social Networks:
          </p>
          <button className="flex items-center justify-center py-2 w-full rounded-md gap-2 bg-[#FF3F4A] mb-2 px-2">
            <BsFacebook className="text-white text-xl" />
            <p className="font-bold text-white">Facebook</p>
          </button>
          <button className="flex items-center justify-center py-2 w-full rounded-md gap-2 bg-[#FF3F4A] mb-2 px-2">
            <BsLinkedin className="text-white  text-xl" />
            <p className="font-bold text-white">Linkedin</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
