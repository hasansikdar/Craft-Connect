import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { Tooltip } from "react-tooltip";
import useClickOutside from "../../Components/helpers/clickOutside";

const ProfileInfo = () => {

  const [showCoverMenu, setShowCoverMenu] = useState(false);
  const menuRef = useRef(null);
  useClickOutside(menuRef, () => setShowCoverMenu(false));

    return (
      <div>
        <div className="flex justify-evenly  items-center mt-[75px] ">
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
              Rahat Kabir Ifty
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
            <div>
              <p className="text-black">Update Profile Picture</p>
            </div>
            <div>
              <p className="text-black">Upload Cover photo</p>
            </div>
          </div>
        )}
      </div>
    );
};

export default ProfileInfo;