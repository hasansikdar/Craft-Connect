import React from "react";
import { useContext } from "react";
import profileImg from "../../assets/profile.jpg";
import { Authcontext } from "../../Context/UserContext";

const ProfileImg = () => {
  const { user } = useContext(Authcontext);
  return (
    <div className="hidden md:block">
      <div className="md:mx-[490px]">
        <img
          className="w-[132px] h-[132px] rounded-full object-cover"
          src={profileImg}
          alt=""
        />
      </div>
    </div>
  );
};

export default ProfileImg;
