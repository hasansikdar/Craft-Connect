import React from 'react';
import Navbar from '../Navbar/Navbar';
import CoverImg from './CoverImg';

const ProfileOfUser = () => {
    return (
      <div>
        <Navbar />
        <div className="mt-[60px]">
            <CoverImg/>
        </div>
      </div>
    );
};

export default ProfileOfUser;