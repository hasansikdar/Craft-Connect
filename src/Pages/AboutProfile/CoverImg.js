import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../../assets/cover.jpg';
import profileImg from '../../assets/profile.jpg';
import { BsThreeDots } from "react-icons/bs";

const CoverImg = () => {
    return (
      <div className="w-[1084px] mx-auto">
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
        <div className="flex justify-evenly  items-center mt-[75px]">
          <div>
            <Link>Timeline</Link>
          </div>
          <div>
            <Link>About</Link>
          </div>
          <div>
            <Link>Friends</Link>
          </div>
          <div>
            <Link className="text-3xl hover:text-orange-600 duration-300">Rahat Kabir Ifty</Link>
          </div>
          <div>
            <Link>Photos</Link>
          </div>
          <div>
            <Link>Videos</Link>
          </div>
          <div>
            <Link className="text-3xl">
              <BsThreeDots />
            </Link>
          </div>
        </div>
      </div>
    );
};

export default CoverImg;