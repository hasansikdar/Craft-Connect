import React from 'react';
import cover from "../../../assets/cover.jpg";
import UserProfilePic from './UserProfilePic';


const UserCoverPhoto = () => {
    return (
      <div>
        <div className="w-[1084px] mx-auto hidden md:block">
          <div
            style={{
              background: `URL(${cover})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "1084px",
              height: "300px",
              marginTop: "100px",
              marginLeft: "auto",
              marginRight: "auto",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
          ></div>
          <UserProfilePic/>
        </div>
      </div>
    );
};

export default UserCoverPhoto;