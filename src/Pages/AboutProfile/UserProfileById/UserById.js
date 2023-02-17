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
  console.log(userDetails);

    return (
      <div>
        <div className="dark:bg-[#2C2048] h-screen overflow-y-auto mt-[65px] md:mt-[-42px] ">
          <div className="pb-20">
            <div className="md:w-[1084px] md:mx-auto md:shadow-md ">
              <UserCoverPhoto userDetails={userDetails} />
              <UserProfileInfo userDetails={userDetails} />
            </div>
            <div className="w-full  md:w-[1084px] mx-auto mt-10">
              <PostView userDetails={userDetails} />
            </div>
          </div>
        </div>
      </div>
    );
};

export default UserById;