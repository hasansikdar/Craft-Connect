import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Authcontext } from "../../Context/UserContext";
import LeftSideMobile from "../LeftSideBar/LeftSideMobile";
import Navbar from "../Navbar/Navbar";
import CoverImg from "./CoverImg";
import CoverImgMobile from "./CoverImgMobile";
import PostView from "./PostCard/PostView";
import ProfileInfo from "./ProfileInfo";

const ProfileOfUser = () => {
  const { user } = useContext(Authcontext);
  // console.log(user);

  const url = `https://craft-connect-server-blond.vercel.app/allusers?email=${user?.email}`;
  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });

  // console.log(users);

  return (
    <>
      <div className="dark:bg-[#2C2048] overflow-y-auto h-screen grid justify-center ">
        <div className="pt-15 ">

          {
            users.map((myProfile) =>{

          return (
            <div>
              <div className=" md:w-[1084px] md:mx-auto md:shadow-md rounded-b-md">
                <CoverImg myProfile={myProfile}/>
                <CoverImgMobile />
                <ProfileInfo myProfile={myProfile}/>
              </div>
              <div className="md:w-[1084px] mx-auto mt-10">
                <PostView />
              </div>
            </div>
          );
            })
          }

        </div>
      </div>
    </>
  );
};

export default ProfileOfUser;
