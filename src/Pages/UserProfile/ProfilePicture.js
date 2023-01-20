import React from 'react';
import profile from "../../assets/profile.jpg";
import { BsCameraFill } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const ProfilePicture = () => {
    return (
      <div>
        <div className="flex gap-2 absolute right-[220px] top-[450px]">
          <button className="bg-blue-500 text-white text-xs font-bold py-[7px] px-[10px] rounded-[10px] flex items-center">
            <AiOutlinePlusCircle className="text-2xl" /> Add To Story
          </button>
          <button className="bg-gray-400 text-black text-xs font-bold py-[7px] px-[10px] rounded-[10px] flex items-center">
            <FiEdit className="text-2xl" /> <p>Edit profile</p>
          </button>
        </div>
        <div className="absolute left-[32%] top-[67%]">
          <h4 className="text-3xl">Rahat Kabir Ifty</h4>
          <p>750 friends</p>
        </div>
        <div>
          <div className="absolute top-[60%] left-[20%]">
            <div>
              <img
                className=" w-[150px] h-[150px]  rounded-full"
                src={profile}
                alt=""
              />
              <div className="absolute top-[66%] left-[79%]">
                <BsCameraFill className="text-4xl bg-gray-300 text-black rounded-full p-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfilePicture;