import React from "react";
import { Link } from "react-router-dom";
import cover from "../../assets/cover.jpg";
import ProfileImg from "./ProfileImg";

const CoverImg = ({ myProfile }) => {



  return (
    <div className="w-[1084px] mx-auto hidden md:block">
      <div
      className="rounded-md"
        style={{
          background: `linear-gradient(180deg, rgba(38,27,64,0.33657212885154064) 0%, rgba(11,8,19,1) 100%) ,url(${myProfile?.coverPhoto}`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          // backgroundRepeat:"no-repeat",
          width: "1084px",
          height: "300px",
          marginTop: "50px",
          marginLeft: "auto",
          marginRight: "auto",
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        }}
      ></div>
      <ProfileImg myProfile={myProfile} />
    </div>
  );
};

export default CoverImg;
