import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Follow = () => {
  return (
    <div className="p-2 py-5 rounded-lg border-zinc-600 shadow-xl w-11/12 m-auto my-5 text-gray-500 dark:bg-gray-700">
      <h1 className="dark:text-white text-black ml-4 mb-2">Follow Now</h1>
      <ul className="">
        <li className="flex items-center justify-between py-3 px-4 hover:bg-zinc-600 duration-300 rounded-lg">
          <div className="flex items-center">
            <img
              src="https://placeimg.com/192/192/people"
              className="rounded-full w-8"
              alt="frnd"
            />
            <p className="ml-2 dark:text-white text-black">1st Page</p>
          </div>

          <div className="text-center">
            <button className="text-white btn btn-sm border-0 bg-inherit hover:bg-zinc-500 hover:text-white rounded">
              <Link>
                <FaPlus></FaPlus>
              </Link>
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between py-3 px-4 hover:bg-zinc-600 duration-300 rounded-lg">
          <div className="flex items-center">
            <img
              src="https://placeimg.com/192/192/people"
              className="rounded-full w-8"
              alt="frnd"
            />
            <p className="ml-2 dark:text-white text-black">2nd Page</p>
          </div>

          <div className="text-center">
            <button className="text-white btn btn-sm border-0 bg-inherit hover:bg-zinc-500 hover:text-white rounded">
              <Link>
                <FaPlus></FaPlus>
              </Link>
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between py-3 px-4 hover:bg-zinc-600 duration-300 rounded-lg">
          <div className="flex items-center">
            <img
              src="https://placeimg.com/192/192/people"
              className="rounded-full w-8"
              alt="frnd"
            />
            <p className="ml-2 dark:text-white text-black">3rd Page</p>
          </div>

          <div className="text-center">
            <button className="text-white btn btn-sm border-0 bg-inherit hover:bg-zinc-500 hover:text-white rounded">
              <Link>
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
