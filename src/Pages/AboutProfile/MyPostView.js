import React from 'react';
import MyPostCard from './MyPostCard';
import DynamicPostCard from './PostCard/DynamicPostCard';
import ProfileLeft from './PostCard/ProfileLeft';

const MyPostView = ({myProfile}) => {


    return (
      <div className=" ">
        <div className="md:grid md:grid-cols-12 gap-5 justify-center ">
          <ProfileLeft />
          <div className="col-start-[5] col-end-[11] justify-center">
            <MyPostCard myProfile={myProfile}></MyPostCard>
          </div>
        </div>
      </div>
    );
};

export default MyPostView;