import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar/Navbar';
import RightBar from '../Shared/Right-Side-Bar/RightBar/RightBar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='lg:flex'>
                {/* left site bar */}
                <div className='xl:mr-auto lg:w-[300px]'>
                    
                </div>
                <div className='lg:w-[600px] xl:mx-auto'>
                    <Outlet></Outlet>
                </div>
                <div className='lg:ml-auto bg-white'>
                    <RightBar></RightBar>
                </div>
            </div>
        </div>
    );
};

export default Main;