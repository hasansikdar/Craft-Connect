import React from "react";
import { Link } from "react-router-dom";
import cover from "../../assets/cover.jpg";
import ProfileImg from "./ProfileImg";

const CoverImg = ({ myProfile }) => {



  return (
    <div>
    <div className=" md:w-[1084px] md:mx-auto ">
      <div
      className=" hidden md:block rounded-md  w-[300px]"
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
      </div>
      <div className="">
      <div
      className="rounded-md mx-auto md:hidden"
        style={{
          background: `linear-gradient(180deg, rgba(38,27,64,0.33657212885154064) 0%, rgba(11,8,19,1) 100%) ,url(${myProfile?.coverPhoto}`,
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
      <ProfileImg myProfile={myProfile} />
    </div>
  );
};

export default CoverImg;
