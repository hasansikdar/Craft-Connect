import React from "react";
import PostCards from "./PostCards";
import ProfileLeft from "./ProfileLeft";

const PostView = ({ userDetails }) => {
  return (
    <div className=" ">
      <div className="md:grid md:grid-cols-12 gap-5 justify-center ">
        <ProfileLeft />
        <div className="col-start-[5] col-end-[11] justify-center">
          <PostCards userDetails={userDetails} />
        </div>
      </div>
    </div>
  );
};

export default PostView;
