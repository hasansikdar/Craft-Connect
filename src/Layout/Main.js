import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Pages/Navbar/Navbar";
import LeftSideBar from "../Shared/LeftSideMenubar/LeftSideBar/LeftSideBar";
import RightBar from "../Shared/Right-Side-Bar/RightBar/RightBar";

const Main = () => {
  return (
    <div className="dark:bg-[#2C2048] bg-white overflow-hidden h-screen">
      <Navbar></Navbar>
      <div className="lg:flex">
        {/* left site bar */}
        <div className="xl:mr-auto lg:w-[300px] mt-[58px]">
          <LeftSideBar></LeftSideBar>
        </div>
        <div className="lg:w-[600px] xl:mx-auto mt-[60px]">
          <Outlet></Outlet>
        </div>
        <div className="lg:ml-auto bg-zinc-800 rounded-lr-lg mt-[60px]">
          <RightBar></RightBar>
        </div>
      </div>
    </div>
  );
};

export default Main;



