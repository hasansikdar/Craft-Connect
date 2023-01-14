import React from "react";
import { Link } from "react-router-dom";
import ad1 from "../../../assets/rightbar/ad (1).jpg";
import ad2 from "../../../assets/rightbar/ad (2).jpg";

const Advertisement = () => {
  return (
    <div>
      <ul className="menu p-2 py-5 flex rounded-lg border-zinc-600 shadow-xl w-11/12 m-auto my-5 text-gray-500 dark:bg-gray-700">
        <h1 className="text-white ml-4 mb-2">Sponsored</h1>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link to="/sellerpro">
            <div className="w-40">
              <img src={ad1} className="rounded" alt="frnd" />
            </div>
            <div>
              <h1 className="text-black dark:text-white text-sm font-bold mb-2">
                Hand Made Craft
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Buy your favorite Crafts
              </p>
            </div>
          </Link>
        </li>
        <li className="hover:bg-zinc-600 duration-300 rounded-lg">
          <Link>
            <div className="w-40">
              <img src={ad2} className="rounded" alt="frnd" />
            </div>
            <div>
              <h1 className="text-black dark:text-white text-sm font-bold mb-2">
                Dian Handicraft
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                Best products made by hand
              </p>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Advertisement;
