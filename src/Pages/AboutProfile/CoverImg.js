import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../../assets/cover.jpg';
import ProfileImg from './ProfileImg';


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
        <ProfileImg/>
      </div>
    );
};

export default CoverImg;