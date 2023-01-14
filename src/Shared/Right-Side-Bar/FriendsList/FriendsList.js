import React from "react";
import { Link } from "react-router-dom";
import pro1 from "../../../assets/rightbar/pro1.jpg";
import pro2 from "../../../assets/rightbar/pro2.jpg";
import pro3 from "../../../assets/rightbar/pro3.jpg";
import pro4 from "../../../assets/rightbar/pro4.jpg";
import pro5 from "../../../assets/rightbar/pro5.jpg";

const FriendsList = () => {
  return (
    <div>
      <ul className=" menu p-2 py-5 flex rounded-lg border-zinc-600 shadow-xl w-11/12 m-auto my-5 text-gray-500 dark:bg-gray-700">
        <h1 className="dark:text-white text-black ml-4 mb-2">Contacts</h1>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-8">
              <img src={pro1} className="rounded-full w-8 h-8" alt="frnd" />
            </div>
            <p className="dark:text-white text-black hover:text-white">
              Muhammad Hasan
            </p>
          </Link>
        </li>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-8">
              <img src={pro2} className="rounded-full w-8 h-8" alt="frnd" />
            </div>
            <p className="dark:text-white text-black hover:text-white">
              Maruf Rahman
            </p>
          </Link>
        </li>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-8">
              <img src={pro3} className="rounded-full w-8 h-8" alt="frnd" />
            </div>
            <p className="dark:text-white text-black hover:text-white">
              Rahat Kabir Ifty
            </p>
          </Link>
        </li>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-8">
              <img src={pro4} className="rounded-full w-8 h-8" alt="frnd" />
            </div>
            <p className="dark:text-white text-black hover:text-white">
              Md. Abdullah Al Mamun
            </p>
          </Link>
        </li>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-8">
              <img src={pro5} className="rounded-full w-8 h-8" alt="frnd" />
            </div>
            <p className="dark:text-white text-black hover:text-white">
              Mohammed Ali Jinnah
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FriendsList;
