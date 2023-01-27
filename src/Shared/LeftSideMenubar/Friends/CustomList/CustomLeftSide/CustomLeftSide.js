import React from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaStar } from "react-icons/fa";
import { BsArrowLeftShort } from "react-icons/bs";

const CustomLeftSide = () => {
  return (
    <div className="p-4">
      <div className="">
        <div className="flex items-center gap-4 ">
          <Link
            to="/friends"
            className="text-2xl hover:bg-gray-100 dark:hover:bg-gray-600  text-black rounded-full dark:text-white"
          >
            <BsArrowLeftShort></BsArrowLeftShort>
          </Link>
          <div className="leading-3">
            <small>Friends</small>
            <h2 className="text-2xl font-bold">Custom Lists</h2>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4">
          <div className=" flex gap-x-3 items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900">
            <div className=" text-2xl dark:bg-gray-800 bg-gray-200 h-[60px] w-[60px] flex items-center justify-center rounded-full">
              <FaStar className=" dark:text-white"></FaStar>
            </div>
            <h2 className="text-xl font-semibold">Close friends</h2>
          </div>
          <div className=" flex gap-x-3 items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-900">
            <div className="text-2xl dark:bg-gray-800 bg-gray-200 h-[60px] w-[60px] flex items-center justify-center rounded-full">
              <FaPlus className="text-blue-600"></FaPlus>
            </div>
            <h2 className="text-xl font-semibold">Create List</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomLeftSide;
