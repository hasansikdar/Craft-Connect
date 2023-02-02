import React from "react";
import PostCard from "../../Components/PostCard/PostCard";
import LeftSideMobile from "../LeftSideBar/LeftSideMobile";
import Posts from "../Posts/Posts";
import Stories from "../Adevertisement/Stories";

const Home = () => {
  return (
    <div className="home overflow-scroll h-screen mt-10 pb-10">
      <div className="flex">
        <div className="w-[88%] md:w-full">
          <div className="mx-2">
            <Stories />
            <Posts></Posts>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
