import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import useClickOutside from "../../Components/helpers/clickOutside";
import { useContext } from "react";
import { Authcontext } from "../../Context/UserContext";
import { useEffect } from "react";
import UpdateCoverImg from "./UpdateProfileImage/UpdateCoverImg";
import UpdateProfileImage from "./UpdateProfileImage/UpdateProfileImage";

const ProfileInfo = ({ myProfile }) => {
  const [showCoverMenu, setShowCoverMenu] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setShowCoverMenu(false));

  // const { user } = useContext(Authcontext);

  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="hidden md:flex justify-evenly  items-center mt-[7%]  pb-2 w-full  mx-auto text-black dark:text-white">
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
            {myProfile?.displayName}
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
          <div
            onClick={() => setOpenModal(true)}
            className="cursor-pointer p-2 hover:bg-[#cc323b] text-black  hover:text-white duration-300 rounded-md text-center"
          >
            <p className="">Update Profile Picture</p>
          </div>
          <div
            onClick={() => setOpen(true)}
            className="cursor-pointer p-2 mt-2 hover:bg-[#cc323b] text-black  hover:text-white duration-300 rounded-md text-center"
          >
            <p className="">Upload Cover photo</p>
          </div>
        </div>
      )}
      <UpdateCoverImg
        myProfile={myProfile}
        open={open}
        setOpen={setOpen}
      ></UpdateCoverImg>
      <UpdateProfileImage
        myProfile={myProfile}
        openModal={openModal}
        setOpenModal={setOpenModal}
      ></UpdateProfileImage>
    </>
  );
};

export default ProfileInfo;
