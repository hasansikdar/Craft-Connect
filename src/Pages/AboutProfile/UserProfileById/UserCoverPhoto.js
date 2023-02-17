import React from 'react';
import cover from "../../../assets/cover.jpg";
import UserProfilePic from './UserProfilePic';


const UserCoverPhoto = ({userDetails}) => {
console.log(userDetails)
  

    return (
      <div>
        <div className="w-[1084px] mx-auto hidden md:block">
          <div
            style={{
              background: `URL(${userDetails?.coverPhoto})`,
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
          </div>

          <div className="">
            <div
              className="rounded-md mx-auto  md:hidden"
              style={{
                background: `linear-gradient(180deg, rgba(38,27,64,0.33657212885154064) 0%, rgba(11,8,19,1) 100%) ,url(${userDetails?.coverPhoto}`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                // backgroundRepeat:"no-repeat",
                width: "380px",
                height: "150px",
                marginTop: "50px",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
            ></div>
          </div>

          {/* <UserProfilePic userDetails={userDetails} /> */}
      </div>
    );
};

export default UserCoverPhoto;