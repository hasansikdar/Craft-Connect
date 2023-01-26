import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../../assets/cover.jpg';
import profileImg from '../../assets/profile.jpg';


const CoverImg = () => {
    return (
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
        <div className="absolute top-0 md:mt-[340px] md:mx-[490px]">
          <img className="w-[132px] rounded-full" src={profileImg} alt="" />
        </div>
        
      </div>
    );
};

export default CoverImg;