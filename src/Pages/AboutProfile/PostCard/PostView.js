import React from "react";
import PostCards from "./PostCards";
import ProfileLeft from "./ProfileLeft";


const PostView = () => {
  return (
    <div className=" ">
      <div className="grid grid-cols-12 gap-5 justify-center ">
        <ProfileLeft />
        <div className="col-start-[5] col-end-[11] justify-cente">
          <PostCards />
        </div>
      </div>
    </div>
  );
};

export default PostView;
