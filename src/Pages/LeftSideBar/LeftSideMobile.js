import React from 'react';
import { AiFillHome, AiFillShop } from "react-icons/ai";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

const LeftSideMobile = () => {
    return (
      <div>
        <div className='mx-2 fixed'>
          <AiFillHome className="text-3xl text-cyan-500 mt-10" />
          <AiFillShop className="text-3xl text-cyan-500 my-6" />
          <BsFillCollectionPlayFill className="text-3xl text-cyan-500 my-6" />
          <HiUserGroup className="text-3xl text-cyan-500"  />
        </div>
      </div>
    );
};

export default LeftSideMobile;