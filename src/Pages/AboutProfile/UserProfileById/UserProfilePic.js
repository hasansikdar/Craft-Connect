
import React from 'react';
import profileImg from "../../../assets/profile.jpg";


const UserProfilePic = ({userDetails}) => {
    return (
        <div className="">
          <div className="flex justify-center w-full relative]">
            <img
              className="w-[90px] h-[90px] md:w-[130px] md:h-[130px] rounded-full object-cover absolute translate-y-[-50%] shadow-lg"
              src={userDetails?.photoURL}
              alt=""
            />
          </div>
        </div>
    );
};

export default UserProfilePic;