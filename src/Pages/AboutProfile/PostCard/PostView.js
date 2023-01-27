import React from 'react';
import PostCards from './PostCards';
import ProfileLeft from './ProfileLeft';


const PostView = () => {
    return (
      <div className=" ">
        <div className="flex gap-4 justify-center">
          
          <ProfileLeft/>
          <div>
            <PostCards />
          </div>
          <div className="w-[251px] border hidden md:block">
            <p>Hello </p>
          </div>
        </div>
      </div>
    );
};

export default PostView;