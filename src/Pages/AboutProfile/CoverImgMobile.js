import React from "react";
import cover from "../../assets/cover.jpg";
import ProfileImgMobile from "./ProfileImgMobile";

const CoverImgMobile = () => {
  return (
    <div>
      <div className=" block md:hidden">
        <div
          style={{
            background: `URL(${cover})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "320px",
            height: "132px",
            // marginTop: "100px",
            marginLeft: "58px",
            marginRight: "",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          }}
        ></div>
        <ProfileImgMobile />
      </div>
    </div>
  );
};

export default CoverImgMobile;
