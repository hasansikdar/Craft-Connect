import React from "react";
import {
  FaAngleRight,
  FaGift,
  FaUserFriends,
  FaUserPlus,
} from "react-icons/fa";
import { FcSettings } from "react-icons/fc";
import { RiUserShared2Fill } from "react-icons/ri";
import { CgUserList } from "react-icons/cg";

const LeftSide = () => {
  return (
    <div className="p-5 dark:bg-gray-800 bg-white">
      <div className="flex justify-between items-center text-black dark:text-white">
        <h2 className="text-xl font-bold">Friends</h2>
        <button className="text-xl">
          <FcSettings></FcSettings>
        </button>
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <div className="flex items-center gap-x-4 bg-gray-100 px-2 py-4 rounded dark:bg-gray-600 cursor-pointer">
          <button className="text-xl bg-blue-500 p-1 rounded-full text-white">
            <FaUserFriends></FaUserFriends>
          </button>
          <h2 className="text-xl font-medium text-black dark:text-white">
            Home
          </h2>
        </div>

        <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-4 rounded dark:hover:bg-gray-600 cursor-pointer">
          <div className="flex items-center gap-x-4">
            <button className="text-xl bg-gray-500 p-1 rounded-full text-white">
              <RiUserShared2Fill></RiUserShared2Fill>
            </button>
            <h2 className="text-xl font-medium cursor-pointer text-black dark:text-white">
              Friend Requests
            </h2>
          </div>
          <button className="text-xl dark:text-white text-black">
            <FaAngleRight></FaAngleRight>
          </button>
        </div>

        <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-4 rounded dark:hover:bg-gray-600 cursor-pointer">
          <div className="flex items-center gap-x-4">
            <button className="text-xl bg-gray-500 p-1 rounded-full text-white">
              <FaUserPlus></FaUserPlus>
            </button>
            <h2 className="text-xl font-medium cursor-pointer text-black dark:text-white">
              Suggestions
            </h2>
          </div>
          <button className="text-xl dark:text-white text-black">
            <FaAngleRight></FaAngleRight>
          </button>
        </div>

        <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-4 rounded dark:hover:bg-gray-600 cursor-pointer">
          <div className="flex items-center gap-x-4">
            <button className="text-xl bg-gray-500 p-1 rounded-full text-white">
              <CgUserList></CgUserList>
            </button>
            <h2 className="text-xl font-medium cursor-pointer text-black dark:text-white">
              All Friends
            </h2>
          </div>
          <button className="text-xl dark:text-white text-black">
            <FaAngleRight></FaAngleRight>
          </button>
        </div>

        <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-4 rounded dark:hover:bg-gray-600 cursor-pointer">
          <div className="flex items-center gap-x-4">
            <button className="text-xl bg-gray-500 p-1 rounded-full text-white">
              <FaGift></FaGift>
            </button>
            <h2 className="text-xl font-medium cursor-pointer text-black dark:text-white">
              Birthdays
            </h2>
          </div>
        </div>

        <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-4 rounded dark:hover:bg-gray-600 cursor-pointer">
          <div className="flex items-center gap-x-4">
            <button className="text-xl bg-gray-500 p-1 rounded-full text-white">
              <CgUserList></CgUserList>
            </button>
            <h2 className="text-xl font-medium cursor-pointer text-black dark:text-white">
              Custom Lists
            </h2>
          </div>
          <button className="text-xl dark:text-white text-black">
            <FaAngleRight></FaAngleRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
