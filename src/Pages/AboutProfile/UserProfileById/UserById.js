import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftSideBar from '../../../Shared/LeftSideMenubar/LeftSideBar/LeftSideBar';
import Navbar from '../../Navbar/Navbar';
import PostView from '../PostCard/PostView';
import UserCoverMobile from './UserCoverMobile';
import UserCoverPhoto from './UserCoverPhoto';
import UserProfileInfo from './UserProfileInfo';

const UserById = () => {

  const userDetails = useLoaderData();
  // console.log(userDetails);

    return (
      <div>
        <div className="dark:bg-[#2C2048] mt-[65px] md:mt-[-42px] ">
          <div className="pb-20">
            <div className="md:w-[1084px] md:mx-auto md:shadow-md rounded-b-md">
              <UserCoverPhoto/>
              <UserCoverMobile/>
              <UserProfileInfo userDetails={userDetails}/>
            </div>
            <div className="md:w-[1084px] mx-auto mt-10">
              <PostView/>
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserById;