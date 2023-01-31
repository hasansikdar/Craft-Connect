
import React from 'react';
import profileImg from "../../../assets/profile.jpg";


const UserProfilePic = () => {
    return (
      <div>
        <div className="hidden md:block">
          <div className="absolute top-0 md:mt-[310px] md:mx-[490px]">
            <img
              className="w-[132px] h-[132px] rounded-full"
              src={profileImg}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default UserProfilePic;