import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Authcontext } from "../../Context/UserContext";
import LeftSideMobile from "../LeftSideBar/LeftSideMobile";
import Navbar from "../Navbar/Navbar";
import CoverImg from "./CoverImg";
import CoverImgMobile from "./CoverImgMobile";
import MyPostView from "./MyPostView";
import PostView from "./PostCard/PostView";
import ProfileInfo from "./ProfileInfo";

const ProfileOfUser = () => {
  const { user, myPro } = useContext(Authcontext);
  // console.log(myPro)

  return (
    <>
      <div className="dark:bg-[#2A2A2A] overflow-y-auto h-screen grid justify-center ">
        <div className="pt-15 ">
          {myPro.map((myProfile) => {
            return (
              <div>
                <div className="md:w-[1084px] md:mx-auto md:shadow-md rounded-b-md">
                  <CoverImg myProfile={myProfile} />
                  {/* <CoverImgMobile /> */}
                  <ProfileInfo myProfile={myProfile} />
                </div>
                <div className="w-full md:w-[1084px] mx-auto mt-10">
                  <MyPostView myProfile={myProfile}></MyPostView>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProfileOfUser;
