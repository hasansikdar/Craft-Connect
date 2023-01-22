import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";

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
            <h2 className="text-2xl font-bold">All Friends</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomLeftSide;
