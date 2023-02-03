import React from "react";
import Posts from "../Posts/Posts";
import RightBar from "../../Shared/Right-Side-Bar/RightBar/RightBar";
import ProfileDetails from "../../Shared/LeftSideMenubar/ProfileDetails/ProfileDetails";
import Stories from "../Adevertisement/Stories";

const Home = () => {
  return (
    <div className="home mt-5 w-full">
      <div class="grid grid-cols-4 gap-8">
        <div class="">
          <ProfileDetails></ProfileDetails>
        </div>
        <div class="home col-span-2 overflow-scroll h-screen">
          <Stories></Stories>
          <Posts></Posts>
        </div>
        <div class="">
          <RightBar></RightBar>
        </div>
      </div>
    </div>
  );
};

export default Home;
