import React, { useRef, useState } from 'react';
import LeftSideMobile from "../LeftSideBar/LeftSideMobile";
import { BsCameraFill } from "react-icons/bs";
import { FaPhotoVideo, FaUpload } from "react-icons/fa";
import useClickOutside from '../../Components/helpers/clickOutside';

const Cover = () => {

    const [showCoverMenu, setShowCoverMenu] = useState(false);
    const menuRef = useRef(null);
    useClickOutside(menuRef, () => setShowCoverMenu(!showCoverMenu))

    return (
      <div>
        <div>
          <div className="mt-3">
            <LeftSideMobile></LeftSideMobile>
          </div>
          <div className="max-w-[945px] mx-auto mt-[60px]">
            <div className="relative h-[350px] w-[100%] rounded-b-lg bg-gray-600">
              <div className="absolute bottom-4 right-4">
                <div
                  onClick={() => setShowCoverMenu(!showCoverMenu)}
                  className="flex items-center bg-white py-[7px] px-[15px] gap-[10px]  font-bold text-xs text-black rounded-[10px] cursor-pointer hover:bg-gray-200"
                >
                  <BsCameraFill /> <p className="">Add Cover Photo</p>
                </div>
                {showCoverMenu && (
                  <div
                    className="bg-white absolute right-[40px] p-[10px] w-[200px] rounded-[10px] shadow-md mt-1"
                    ref={menuRef}
                  >
                    <div className="flex items-center gap-[10px] cursor-pointer text-xs font-bold text-black p-[10px] rounded-[10px] hover:bg-gray-200">
                      <FaPhotoVideo /> <p>Select a photo</p>
                    </div>
                    <div className="flex items-center gap-[10px] cursor-pointer text-xs font-bold text-black p-[10px] rounded-[10px] hover:bg-gray-200">
                      <FaUpload /> <p>Upload a photo</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cover;