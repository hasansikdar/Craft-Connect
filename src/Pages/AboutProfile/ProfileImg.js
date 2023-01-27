import React from 'react';
import profileImg from "../../assets/profile.jpg";

const ProfileImg = () => {
    return (
      <div className="hidden md:block">
        <div className="absolute top-0 md:mt-[340px] md:mx-[490px]">
          <img className="w-[132px] rounded-full" src={profileImg} alt="" />
        </div>
      </div>
    );
};

export default ProfileImg;