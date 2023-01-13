import React from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

const Follow = () => {
  return (
    <div className="p-2 py-5 rounded-lg bg-white  dark:bg-gray-700 dark:text-white shadow-xl w-11/12 m-auto my-5 text-gray-500">
      <h1 className="text-black ml-4 mb-2">Follow Now</h1>
      <ul className="">
        <li className="flex items-center justify-between py-3 px-4 cursor-pointer duration-300 rounded-lg">
          <div className="flex items-center">
            <img
              src="https://placeimg.com/192/192/people"
              className="rounded-full w-8"
              alt="frnd"
            />
            <p className="ml-2">1st Page</p>
          </div>

          <div className="text-center">
            <button className="btn btn-sm border-0 bg-inherit hover:bg-sky-500 text-gray-500 hover:text-white rounded">
              <Link>
                <FaPlus></FaPlus>
              </Link>
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between py-3 px-4 cursor-pointer duration-300 rounded-lg">
          <div className="flex items-center">
            <img
              src="https://placeimg.com/192/192/people"
              className="rounded-full w-8"
              alt="frnd"
            />
            <p className="ml-2">2nd Page</p>
          </div>

          <div className="text-center">
            <button className="btn btn-sm border-0 bg-inherit hover:bg-sky-500 text-gray-500 hover:text-white rounded">
              <Link>
                <FaPlus></FaPlus>
              </Link>
            </button>
          </div>
        </li>
        <li className="flex items-center justify-between py-3 px-4 cursor-pointer duration-300 rounded-lg">
          <div className="flex items-center">
            <img
              src="https://placeimg.com/192/192/people"
              className="rounded-full w-8"
              alt="frnd"
            />
            <p className="ml-2">3rd Page</p>
          </div>

          <div className="text-center">
            <button className="btn btn-sm border-0 bg-inherit hover:bg-sky-500 text-gray-500 hover:text-white rounded">
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
