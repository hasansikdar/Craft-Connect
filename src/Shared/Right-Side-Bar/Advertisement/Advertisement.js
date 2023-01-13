import React from "react";
import { Link } from "react-router-dom";

const Advertisement = () => {
  return (
    <div>
      <ul className="menu p-2 py-5 flex rounded-lg border-zinc-600 shadow-xl w-11/12 m-auto my-5 text-gray-500 dark:bg-gray-700">
        <h1 className="dark:text-white text-black ml-4 mb-2">Sponsored</h1>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-40">
              <img
                src="https://placeimg.com/192/192/people"
                className="rounded"
                alt="frnd"
              />
            </div>
            <div className="">
              <h1 className="dark:text-white text-black text-sm font-bold mb-2">
                This is 1st Product
              </h1>
              <p className="text-xs dark:text-white text-gray-600 hover:text-gray-100">
                Where you can see our products details
              </p>
            </div>
          </Link>
        </li>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-40">
              <img
                src="https://placeimg.com/192/192/people"
                className="rounded"
                alt="frnd"
              />
            </div>
            <div>
              <h1 className="dark:text-white text-black text-sm font-bold mb-2">
                This is 2nd Product
              </h1>
              <p className="text-xs dark:text-white text-gray-600 hover:text-gray-100">
                Where you can see our products details
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Advertisement;
