import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import LeftSideBar from "../Shared/LeftSideMenubar/LeftSideBar/LeftSideBar";

const FeatureLayout = () => {
  return (
    <div className="dark:bg-[#2C2048] bg-white">
      <Navbar></Navbar>
      <div className="lg:flex">
        {/* left site bar */}
        <div className="xl:mr-auto lg:w-[300px] mt-[60px]">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="lg:w-[900px] xl:mx-auto">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default FeatureLayout;
