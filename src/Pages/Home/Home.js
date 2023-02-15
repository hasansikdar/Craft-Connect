import React from "react";
import Posts from "../Posts/Posts";
import RightBar from "../../Shared/Right-Side-Bar/RightBar/RightBar";
import ProfileDetails from "../../Shared/LeftSideMenubar/ProfileDetails/ProfileDetails";
import Stories from "../Adevertisement/Stories";

const Home = () => {
  return (
    <div className="home mt-5 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="hidden lg:block">
          <ProfileDetails></ProfileDetails>
        </div>
        <div className="home w-11/12 m-auto col-span-2 overflow-scroll h-screen pb-20">
          <Stories></Stories>
          <Posts></Posts>
        </div>
        <div className="">
          <RightBar></RightBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
