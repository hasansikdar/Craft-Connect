import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import page1 from "../../../assets/rightbar/page1.jpg";
import page2 from "../../../assets/rightbar/page2.jpg";
import page3 from "../../../assets/rightbar/page3.jpg";

const Follow = () => {
  return (
    <div className="p-2 py-5 rounded-lg border-zinc-600 shadow-xl w-11/12 m-auto my-5 dark:text-gray-500 text-black dark:bg-gray-700">
      <h1 className="dark:text-white text-black ml-4 mb-2">Follow Now</h1>
      <ul className="">
        <li className="flex items-center justify-between py-3 px-4 hover:bg-zinc-600 duration-300 rounded-lg cursor-pointer">
          <div className="flex items-center cursor-pointer">
            <img src={page1} className="rounded-full w-8" alt="frnd" />
            <p className="ml-2 dark:text-white text-black hover:text-white">
              1st Page
            </p>
          </div>

          <div className="text-center">
            <button className="dark:text-white text-black btn btn-sm border-0 bg-inherit hover:bg-zinc-500 hover:text-white rounded">
              <Link to="/pages">
                <FaPlus></FaPlus>
              </Link>
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between py-3 px-4 hover:bg-zinc-600 duration-300 rounded-lg cursor-pointer">
          <div className="flex items-center cursor-pointer">
            <img src={page2} className="rounded-full w-8" alt="frnd" />
            <p className="ml-2 dark:text-white text-black hover:text-white">
              2nd Page
            </p>
          </div>

          <div className="text-center">
            <button className="dark:text-white text-black btn btn-sm border-0 bg-inherit hover:bg-zinc-500 hover:text-white rounded">
              <Link to="/pages">
                <FaPlus></FaPlus>
              </Link>
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between py-3 px-4 hover:bg-zinc-600 duration-300 rounded-lg cursor-pointer">
          <div className="flex items-center cursor-pointer">
            <img src={page3} className="rounded-full w-8" alt="frnd" />
            <p className="ml-2 dark:text-white text-black hover:text-white">
              Crafty  page
            </p>
          </div>

          <div className="text-center">
            <button className="dark:text-white text-black btn btn-sm border-0 bg-inherit hover:bg-zinc-500 hover:text-white rounded">
              <Link to="/pages">
                <FaPlus></FaPlus>
              </Link>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Follow;
