import React from "react";
import Posts from "../Posts/Posts";
import RightBar from "../../Shared/Right-Side-Bar/RightBar/RightBar";
import ProfileDetails from "../../Shared/LeftSideMenubar/ProfileDetails/ProfileDetails";

const Home = () => {
  return (
    <div className="home overflow-scroll h-screen mt-10 pb-10">
      <div className="flex">
        <div className="w-[88%] md:w-full">
          <div className="mx-2">
            <div className="flex">
              <Posts></Posts>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
