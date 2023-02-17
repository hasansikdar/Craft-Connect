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
import { BiNotification } from "react-icons/bi";
import { Link } from "react-router-dom";

const LeftSide = () => {
  return (
    <div className="p-5 dark:bg-[#2C2048] bg-white h-screen fixed z-[1000] top-[72px] w-[360px]">
      <div className="flex justify-between items-center text-black dark:text-white">
        <h2 className="text-xl font-bold">Friends</h2>

        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0}>
            <FcSettings className="cursor-pointer"></FcSettings>
          </label>
          <div
            tabIndex={0}
            className="dropdown-content menu p-4 shadow-xl bg-white dark:bg-[#2C2048] rounded-box w-[330px] "
          >
            <div>
              <h2 className="text-xl font-bold">Notification settings</h2>
              <p className="text-[12px]">
                You can manage how you are notified about Friends updates.
              </p>
            </div>
            <hr className="mt-2" />
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <BiNotification></BiNotification>
                <p>Show notification dots</p>
              </div>
              <input
                type="checkbox"
                className="toggle toggle-md bg-blue-500"
                checked
              />
            </div>
          </div>
        </div> */}
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <div className="flex items-center gap-x-4 bg-[#FF3F4A] px-2 py-4 rounded  cursor-pointer">
          <button className="text-xl bg-[#5a0307] p-1 rounded-full text-white">
            <FaUserFriends></FaUserFriends>
          </button>
          <h2 className="text-xl font-medium text-white">Home</h2>
        </div>
        <Link to="/friends/requests">
          <div className="flex justify-between items-center hover:bg-[#FF3F4A] hover:text-white px-2 py-4 rounded dark:hover:bg-[#FF3F4A] cursor-pointer">
            <div className="flex items-center gap-x-4">
              <button className="text-xl bg-[#5a0307] p-1 rounded-full text-white">
                <RiUserShared2Fill></RiUserShared2Fill>
              </button>
              <h2 className="text-xl font-medium cursor-pointer text-black dark:text-white">
                Followers
              </h2>
            </div>

            <button className="text-xl dark:text-white text-black">
              <FaAngleRight></FaAngleRight>
            </button>
          </div>
        </Link>
        <Link to="/friends/suggestion">
          <div className="flex justify-between items-center hover:bg-[#FF3F4A] px-2 py-4 rounded dark:hover:bg-[#FF3F4A] cursor-pointer">
            <div className="flex items-center gap-x-4">
              <button className="text-xl bg-[#5a0307] p-1 rounded-full text-white">
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
        </Link>

        <Link to="/friends/list">
          <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-4 rounded dark:hover:bg-gray-600 cursor-pointer">
            <div className="flex items-center gap-x-4">
              <button className="text-xl bg-[#5a0307] p-1 rounded-full text-white">
                <CgUserList></CgUserList>
              </button>
              <h2 className="text-xl font-medium cursor-pointer text-black dark:text-white">
                All Followers
              </h2>
            </div>
            <button className="text-xl dark:text-white text-black">
              <FaAngleRight></FaAngleRight>
            </button>
          </div>
        </Link>

        {/* <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-4 rounded dark:hover:bg-gray-600 cursor-pointer">
          <div className="flex items-center gap-x-4">
            <button className="text-xl bg-gray-500 p-1 rounded-full text-white">
              <FaGift></FaGift>
            </button>
            <h2 className="text-xl font-medium cursor-pointer text-black dark:text-white">
              Birthdays
            </h2>
          </div>
        </div> */}

        <Link to="/friends/friendList">
          {/* <div className="flex justify-between items-center hover:bg-gray-100 px-2 py-4 rounded dark:hover:bg-gray-600 cursor-pointer">
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
          </div> */}
        </Link>
      </div>

      {/* notification modal for settings  */}
    </div>
  );
};

export default LeftSide;
