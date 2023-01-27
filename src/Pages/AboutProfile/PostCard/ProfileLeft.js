import React from 'react';
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";

const ProfileLeft = () => {
    return (
      <div className="w-[251px] p-5 border hidden md:block rounded-md shadow-md">
        <div className="border-b">
          <p className="text-2xl font-bold">Profile Intro</p>
        </div>
        <div className="pt-5">
          <p className="font-bold">About Me:</p>
          <p>
            Hi, I’m Khalid Bin Walid, I’m 36 and I work as a Digital Designer
            for the “Daydreams” Agency in Pier 56.
          </p>
        </div>
        <div className="pt-5">
          <p className="font-bold">Favorite Youtube Channel:</p>
          <p>
            Programming Hero Community, Learn With Sumit, The Flutter Way, Code
            with Mosh, Roman Just Codes.
          </p>
        </div>
        <div className="pt-5">
          <p className="font-bold">Other Social Networks:</p>
          <button className="flex items-center justify-center py-3 w-full rounded-md gap-2 bg-blue-500 mb-2">
            <BsFacebook className="text-white text-xl" />
            <p className="font-bold text-white">Facebook</p>
          </button>
          <button className="flex items-center justify-center py-3 w-full rounded-md gap-2 bg-gray-800 mb-2">
            <AiFillGithub className="text-white  text-xl" />
            <p className="font-bold text-white">Github</p>
          </button>
          <button className="flex items-center justify-center py-3 w-full rounded-md gap-2 bg-blue-500 mb-2">
            <BsLinkedin className="text-white  text-xl" />
            <p className="font-bold text-white">Linkedin</p>
          </button>
        </div>
      </div>
    );
};

export default ProfileLeft;