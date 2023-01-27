import React from 'react';
import LeftSideMobile from '../LeftSideBar/LeftSideMobile';
import Navbar from '../Navbar/Navbar';
import CoverImg from './CoverImg';
import CoverImgMobile from './CoverImgMobile';
import PostView from './PostCard/PostView';
import ProfileInfo from './ProfileInfo';

const ProfileOfUser = () => {
    return (
      <div>
        <Navbar />
        <div>
          <div>
            <LeftSideMobile />
          </div>
          <div className="pb-20">
            <div className="mt-[60px] md:w-[1084px] md:mx-auto md:shadow-md rounded-b-md">
              <CoverImg />
              <CoverImgMobile />
              <ProfileInfo />
            </div>
            <div className="md:w-[1084px] mx-auto mt-10">
              <PostView />
            </div>
          </div>
        </div>
      </div>
    );
};

export default ProfileOfUser;