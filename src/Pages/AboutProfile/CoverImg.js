import React from "react";
import { Link } from "react-router-dom";
import cover from "../../assets/cover.jpg";
import ProfileImg from "./ProfileImg";

const CoverImg = ({myProfile}) => {



  return (
    <div className="w-[1084px] mx-auto hidden md:block">
      <div
        style={{
          background: `URL(${myProfile?.coverPhoto})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          // backgroundRepeat:"no-repeat",
          width: "1084px",
          height: "300px",
          marginTop: "100px",
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
