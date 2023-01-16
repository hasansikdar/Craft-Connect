import React from 'react';
import Navbar from '../Navbar/Navbar';
import coverImg from '../../assets/cover.jpg'
import profile from '../../assets/profile.jpg'

const UserProfile = () => {
    return (
      <div className="">
        <Navbar></Navbar>
        <div className="max-w-[1440px] mx-auto">
          <div className="">
            <img
              className="w-[900px] h-[350px] rounded-b-lg mx-auto"
              src={coverImg}
              alt=""
            />
            <div className="absolute left-[280px] top-[390px]">
              <div>
                <img className="w-[12%] rounded-full" src={profile} alt="" />
              </div>
            </div>
            <div className="absolute left-[31%] top-[69%]">
              <h1 className="text-3xl">Rahat Kabir Ifty</h1>
              <p>700 friends</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserProfile;