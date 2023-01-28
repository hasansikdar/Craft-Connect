import React, { useContext, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import profileImg from "../../assets/profile.jpg";
import useClickOutside from "../../Components/helpers/clickOutside";
import { Authcontext } from "../../Context/UserContext";

const ProfileImgMobile = () => {
  const { user } = useContext(Authcontext);
  const [showCoverMenu, setShowCoverMenu] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setShowCoverMenu(false));

  return (
    <div>
      <div className="block md:hidden absolute top-[20%] left-[20%]">
        <div className="">
          <img
            className="w-[70px] h-[70px] rounded-full"
            src={user?.photoURL}
            alt=""
          />
        </div>
      </div>
      <div className="ml-[58px] mt-12">
        <p className="text-2xl">Rahat Kabir Ifty</p>
        <p>Dhaka, Bangladesh</p>
      </div>
      <div className="flex justify-evenly items-center absolute top-[35%] left-[11%] w-[320px]">
        <div className="text-xs">
          <Link>Timeline</Link>
        </div>
        <div className="text-xs">
          <Link>About</Link>
        </div>
        <div className="text-xs">
          <Link>Friends</Link>
        </div>
        <div className="text-xs">
          <Link>Photos</Link>
        </div>
        <div className="text-xs">
          <Link>Videos</Link>
        </div>
        <div>
          <p onClick={() => setShowCoverMenu(!showCoverMenu)}>
            <BsThreeDots className="text-2xl" />
          </p>
        </div>
      </div>
      {showCoverMenu && (
        <div
          className="bg-white absolute top-0 ml-[190px] mt-[320px] p-[10px] w-[150px] rounded-[10px] shadow-md z-[999]"
          ref={menuRef}
        >
          <div className="text-xs">
            <p className="">Update Profile Picture</p>
          </div>
          <div className="text-xs">
            <p className="">Upload Cover photo</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileImgMobile;
