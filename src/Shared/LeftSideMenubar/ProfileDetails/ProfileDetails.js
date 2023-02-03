import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { HiSpeakerphone } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { Authcontext } from "../../../Context/UserContext";

const ProfileDetails = () => {
  const { user } = useContext(Authcontext);
  return (
    <div className="">
      <div className="card-body p-2 flex rounded-lg border-zinc-600 shadow-xl w-[300px] text-gray-500 dark:bg-[#261b40] ">
        <h1 className="ml-4 mt-4 dark:text-white text-black">Your Profile</h1>
        <div className="flex items-center flex-col">
          <img
            src={user?.photoURL}
            alt="photoURL"
            className="w-16 h-16 rounded-full mt-4 mb-2"
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
      </div>
    </div>
  );
};

export default ProfileDetails;
