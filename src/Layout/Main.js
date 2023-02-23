import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../Pages/Navbar/Navbar";
import LeftSideBar from '../Shared/LeftSideMenubar/LeftSideBar/LeftSideBar'

const Main = () => {
  return (
    <div className="dark:bg-[#2C2048] bg-gray-50 overflow-hidden h-screen">
      <Navbar></Navbar>

      <div className='lg:flex w-full'>
        <div className='w-[100px] mt-[0px] lg:mt-[70px]'>
          <LeftSideBar></LeftSideBar>
        </div>

        <div className="w-full mt-[65px] m-auto">
          <Outlet></Outlet>
        </div>

      </div>
      
    </div>
  );
};

export default Main;
