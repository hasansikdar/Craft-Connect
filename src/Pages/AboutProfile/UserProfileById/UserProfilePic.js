
import React from 'react';
import profileImg from "../../../assets/profile.jpg";


const UserProfilePic = ({userDetails}) => {
    return (
      <div>
        <div className="hidden md:block">
          <div className="absolute top-0 md:mt-[310px] md:mx-[490px]">
            <img
              className="w-[130px] h-[130px] rounded-full object-cover absolute translate-y-[-50%] shadow-lg"
              src={userDetails?.photoURL}
              alt=""
            />
          </div>
        </div>
      </div>
    );
};

export default UserProfilePic;