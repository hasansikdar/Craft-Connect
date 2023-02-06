import React from "react";
import CoverImg from "./CoverImg";
import CoverImgMobile from "./CoverImgMobile";
import PostView from "./PostCard/PostView";
import ProfileInfo from "./ProfileInfo";

const ProfileOfUser = () => {
  return (
    <>
      <div className="dark:bg-[#2C2048] overflow-y-auto h-screen grid justify-center ">
        <div className="pt-15 ">
          <div className=" md:w-[1084px] md:mx-auto md:shadow-md rounded-b-md">
            <CoverImg />
            <CoverImgMobile />
            <ProfileInfo />
          </div>
          <div className="md:w-[1084px] mx-auto mt-10">
            <PostView />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOfUser;
