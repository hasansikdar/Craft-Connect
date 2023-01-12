import React from 'react';
import { useState } from 'react';
import { FaExclamation, FaMoon, FaHome, FaUserFriends } from "react-icons/fa";
import {FcNext, FcSettings, FcQuestions, FcExport, FcHome, FcAdvertising, FcBarChart, FcCollapse, FcExpand, FcSteam, FcClapperboard, FcConferenceCall, FcNews } from "react-icons/fc";
import { HiOutlineChevronRight } from "react-icons/hi";

const Top = () => {

    const [isOpen, setIsOpen] = useState(false)

    const isOpenButton = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <div className='flex justify-start items-center gap-4 mb-4'>
                <p><FaHome className='h-8 w-8'></FaHome></p>
                <h1 className='text-lg font-semibold'>Home</h1>
            </div>
            <hr className='mb-4'/>
            <div className='flex justify-start items-center gap-4 mb-4'>
                <p><FaUserFriends className='h-8 w-8 text-green-300'></FaUserFriends></p>
                <h1 className='text-lg font-semibold'>Friends</h1>
            </div>
            <div className='flex justify-start items-center gap-4 mb-4'>
                <p><FcClapperboard className='h-8 w-8'></FcClapperboard></p>
                <h1 className='text-lg font-semibold'>Watch</h1>
            </div>
            <div className='flex justify-start items-center gap-4 mb-4'>
                <p><FcNews className='h-8 w-8'></FcNews></p>
                <h1 className='text-lg font-semibold'>Most Recent</h1>
            </div>
            <div className='flex justify-start items-center gap-4 mb-4'>
                <p><FcConferenceCall className='h-8 w-8'></FcConferenceCall></p>
                <h1 className='text-lg font-semibold'>Groups</h1>
            </div>
            <div className='flex justify-start items-center gap-4 mb-4'>
                <p><FcHome className='h-8 w-8'></FcHome></p>
                <h1 className='text-lg font-semibold'>Marketplace</h1>
            </div>
            <div>
                {!isOpen &&
                    <button onClick={isOpenButton} className='flex justify-start items-center gap-4 mb-4'>
                        <p><FcExpand className='h-8 w-8'></FcExpand></p>
                        <h1 className='text-lg font-semibold'>See More</h1>
                    </button>}
                {isOpen &&
                    <>
                        <div className='flex justify-start items-center gap-4 mb-4'>
                            <p><FcSteam className='h-8 w-8'></FcSteam></p>
                            <h1 className='text-lg font-semibold'>Gaming</h1>
                        </div>
                        <div className='flex justify-start items-center gap-4 mb-4'>
                            <p><FcAdvertising className='h-8 w-8'></FcAdvertising></p>
                            <h1 className='text-lg font-semibold'>Ad Center</h1>
                        </div>
                        <div className='flex justify-start items-center gap-4 mb-4'>
                            <p><FcBarChart className='h-8 w-8'></FcBarChart></p>
                            <h1 className='text-lg font-semibold'>Ads Manager</h1>
                        </div>
                    </>
                }
                {isOpen &&
                    <button onClick={isOpenButton} className='flex justify-start items-center gap-4 mb-4'>
                        <p><FcCollapse className='h-8 w-8'></FcCollapse></p>
                        <h1 className='text-lg font-semibold'>See Less</h1>
                    </button>}
            </div>
            <hr className='mb-4'/>
        </div>
    );
};

export default Top;