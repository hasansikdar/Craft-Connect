import React from "react";
import { useContext } from "react";
import profileImg from "../../assets/profile.jpg";
import { Authcontext } from "../../Context/UserContext";

const ProfileImg = ({myProfile}) => {
  console.log(myProfile);
  // const { user } = useContext(Authcontext);
  return (
    <div className="hidden md:block">
      <div className="flex justify-center w-full relative">
        <img
          className="w-[130px] h-[130px] rounded-full object-cover absolute translate-y-[-50%] shadow-lg"
          src={myProfile?.photoURL?.profileImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfileImg;
