import React from "react";
import { Link } from "react-router-dom";
import Posts from "../Posts/Posts";

import GroupCard from "./GroupCard/GroupCard";

const Groups = () => {
  return (
    // <div className='h-screen flex items-center justify-center'>
    //     <h1>This is a Groups page. Thanks</h1>
    // </div>
    <div className="flex mt-5  flex-col-reverse lg:flex-row  lg:gap-10">
      {/* <div>
                <Posts></Posts>
            </div> */}
      <Posts></Posts>
      <div className="lg:mt-12 w-screen">
        <ul className="menu shadow-lg w-72 text-black dark:text-white dark:bg-[#2C2048] p-2 rounded-box">
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
  );
};

export default Groups;
