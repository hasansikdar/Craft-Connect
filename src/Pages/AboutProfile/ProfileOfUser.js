import React from 'react';
import LeftSideMobile from '../LeftSideBar/LeftSideMobile';
import Navbar from '../Navbar/Navbar';
import CoverAndProfileMobile from './CoverAndProfileMobile';
import CoverImg from './CoverImg';
import ProfileInfo from './ProfileInfo';

const ProfileOfUser = () => {
    return (
      <div>
        <Navbar />
        <div>
          <div>
            <LeftSideMobile />
          </div>
          <div className="mt-[60px] w-[1084px] mx-auto">
            <CoverImg/>
            <CoverAndProfileMobile/>
            <ProfileInfo />
          </div>
        </div>
      </div>
    );
};

export default ProfileOfUser;