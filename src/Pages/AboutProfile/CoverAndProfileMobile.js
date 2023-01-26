import React from 'react';
import cover from "../../assets/cover.jpg";
import profileImg from "../../assets/profile.jpg";

const CoverAndProfileMobile = () => {
    return (
      <div>
        <div className=" block md:hidden">
          <div
            style={{
              background: `URL(${cover})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              width: "900px",
              height: "300px",
              marginTop: "100px",
              marginLeft: "auto",
              marginRight: "auto",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
            }}
          ></div>
          <div className="absolute top-0 mt-[290px] ml-[290px]">
            <img className="w-[150px] rounded-full" src={profileImg} alt="" />
          </div>
        </div>
      </div>
    );
};

export default CoverAndProfileMobile;