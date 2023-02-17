import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import page1 from "../../../assets/rightbar/page1.jpg";
import page2 from "../../../assets/rightbar/page2.jpg";
import page3 from "../../../assets/rightbar/page3.jpg";
import { Authcontext } from "../../../Context/UserContext";
import { useQuery } from "@tanstack/react-query";

const Follow = () => {
  const { myPro } = useContext(Authcontext);
  const { data: allusers = [] } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allusers");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="p-2 py-5 rounded-lg border-zinc-600 shadow-xl w-11/12 m-auto my-5 dark:text-gray-500 text-black bg-white dark:bg-[#261b40]">
      <h1 className="dark:text-white text-black ml-4 mb-2">Recent Followers</h1>
      <ul className="h-[250px] overflow-y-auto">
        {allusers.slice(0, 8).map(users => {
          return <>
            <Link to={`/user/${users.email}`} className="flex items-center justify-between py-3 px-4 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white duration-300 rounded-lg cursor-pointer">
              <div className="flex items-center cursor-pointer">
                <img src={users.photoURL} className="rounded-full w-8 h-8 object-cover" alt="frnd" />
                <p className="ml-2">{users.displayName}</p>
              </div>
            </Link>
          </>
        })}

      </ul>
    </div>
  );
};

export default Follow;
