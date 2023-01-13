import React from "react";
import { Link } from "react-router-dom";

const FriendsList = () => {
  return (
    <div className="p-2 py-5 rounded-lg border-zinc-600 shadow-xl w-11/12 m-auto my-5 text-gray-500 dark:bg-gray-700">
      <ul className=" menu p-2 py-5 flex rounded-lg border-zinc-600 shadow-xl w-11/12 m-auto my-5 text-gray-500">
        <h1 className="text-white ml-4 mb-2">Contacts</h1>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-8">
              <img
                src="https://placeimg.com/192/192/people"
                className="rounded-full"
                alt="frnd"
              />
            </div>
            <p className="text-white">Muhammad Hasan</p>
          </Link>
        </li>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-8">
              <img
                src="https://placeimg.com/192/192/people"
                className="rounded-full"
                alt="frnd"
              />
            </div>
            <p className="text-white">Maruf Rahman</p>
          </Link>
        </li>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-8">
              <img
                src="https://placeimg.com/192/192/people"
                className="rounded-full"
                alt="frnd"
              />
            </div>
            <p className="text-white">Rahat Kabir Ifty</p>
          </Link>
        </li>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-8">
              <img
                src="https://placeimg.com/192/192/people"
                className="rounded-full"
                alt="frnd"
              />
            </div>
            <p className="text-white">Md. Abdullah Al Mamun</p>
          </Link>
        </li>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-8">
              <img
                src="https://placeimg.com/192/192/people"
                className="rounded-full"
                alt="frnd"
              />
            </div>
            <p className="text-white">Mohammed Ali Jinnah</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FriendsList;
