import React, {   useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { Authcontext } from "../../../Context/UserContext";
import useClickOutside from "../../../Components/helpers/clickOutside";

const UserProfileInfo = ({userDetails}) => {

  console.log(userDetails);

  const [showCoverMenu, setShowCoverMenu] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setShowCoverMenu(false));

  const { user } = useContext(Authcontext);

  return (
    <div>
      <div className="hidden md:flex justify-evenly  items-center mt-[90px]  pb-2 w-[900px] md:w-[1084px] mx-auto  ">
        <div>
          <Link>Timeline</Link>
        </div>
        <div>
          <Link>About</Link>
        </div>
        <div>
          <Link>Friends</Link>
        </div>
        <div>
          <Link className="text-3xl hover:text-orange-600 duration-300">
            {userDetails.fullname}
          </Link>
          <p className="text-center">Dhaka, Bangladesh</p>
        </div>
        <div>
          <Link>Photos</Link>
        </div>
        <div>
          <Link>Videos</Link>
        </div>
        <div>
          <button onClick={() => setShowCoverMenu(!showCoverMenu)}>
            <BsThreeDots className="text-3xl" />
          </button>
        </div>
      </div>
      {showCoverMenu && (
        <div
          className="bg-white absolute top-0 ml-[800px] mt-[410px] p-[10px] w-[200px] rounded-[10px] shadow-md z-[999]"
          ref={menuRef}
        >
          <div className="cursor-pointer p-2 mt-2 hover:bg-[#cc323b] text-black  hover:text-white duration-300 rounded-md text-center">
            <p className="text-black">Report this user</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfileInfo;