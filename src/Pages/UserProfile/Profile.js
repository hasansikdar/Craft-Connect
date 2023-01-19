import React, { useState } from 'react';
import coverImg from "../../assets/cover.jpg";
import profile from "../../assets/profile.jpg";
import img1 from "../../assets/profile.jpg";
import img2 from "../../assets/hasan.png";
import img3 from "../../assets/maruf.png";
import img4 from "../../assets/fearAllah.jpg";
import Navbar from '../Navbar/Navbar';
import LeftSideMobile from '../LeftSideBar/LeftSideMobile';
import { BsCameraFill } from "react-icons/bs";
import { FaPhotoVideo, FaUpload } from "react-icons/fa";


const Profile = () => {

    const [showCoverMenu, setShowCoverMenu] = useState(false);

    return (
      <div>
        <Navbar></Navbar>
        <div>
          <div className="mt-3">
            <LeftSideMobile></LeftSideMobile>
          </div>
          <div className="max-w-[945px] mx-auto mt-[60px]">
            <div className="relative h-[350px] w-[100%] rounded-b-lg bg-gray-600">
              <div className="absolute bottom-4 right-4">
                <div
                  onClick={() => setShowCoverMenu(!showCoverMenu)}
                  className="flex items-center bg-white py-[7px] px-[15px] gap-[10px]  font-bold text-xs text-black rounded-[10px] cursor-pointer"
                >
                  <BsCameraFill /> <p className="">Add Cover Photo</p>
                </div>
                {showCoverMenu && (
                  <div className="bg-white absolute right-0 p-[10px] w-[200px] rounded-[10px] shadow-md mt-1">
                    <div className="flex items-center gap-[10px] cursor-pointer text-xs font-bold text-black">
                      <FaPhotoVideo /> <p>Select a photo</p>
                    </div>
                    <div className="flex items-center gap-[10px] cursor-pointer text-xs font-bold text-black">
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

export default Profile;