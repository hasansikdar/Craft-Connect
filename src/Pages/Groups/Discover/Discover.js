import React from "react";
import { Link } from "react-router-dom";
import DiscoverCard from "./DiscoverCard";

const Discover = () => {
  return (
    <div className="mt-[70px]">
      <div className="flex mt-5  flex-col-reverse lg:flex-row  lg:gap-10">
        <div className="w-[650px]">
          <DiscoverCard></DiscoverCard>
        </div>

        <div className="">
          <ul className="menu shadow-lg w-[250px] text-black dark:text-white p-2 rounded-box dark:bg-gray-800">
            <p className="font-medium text-lg pl-3 my-1">Gropes</p>

            <li className="hover-bordered">
              <Link to="/feature/groups">Your Feed</Link>
            </li>
            <li className="hover-bordered">
              <Link to="/feature/groups/discover">Discover</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Discover;
