import React from 'react';
import PostCards from './PostCards';


const PostView = () => {
    return (
      <div className=" ">
        <div className="flex gap-4 justify-center">
          <div className="w-[251px] border">
            <p>Hello </p>
          </div>
          <div>
            <PostCards/>
          </div>
          <div className="w-[251px] border">
            <p>Hello </p>
          </div>
        </div>
      </div>
    );
};

export default PostView;