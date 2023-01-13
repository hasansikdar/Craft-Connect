import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar/Navbar';
import LeftSideBar from '../Shared/LeftSideMenubar/LeftSideBar/LeftSideBar';
import RightBar from '../Shared/Right-Side-Bar/RightBar/RightBar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:flex'>
                {/* left site bar */}
                <div className='xl:mr-auto lg:w-[300px]'>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className='lg:w-[600px] xl:mx-auto mt-5'>
                    <Outlet></Outlet>
                </div>
                <div className='lg:ml-auto mt-5 rounded-lg bg-white'>
                    <RightBar></RightBar>
                </div>
            </div>
        </div>
    );
};

export default Main;