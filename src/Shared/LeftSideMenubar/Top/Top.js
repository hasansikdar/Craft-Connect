import React from 'react';
import { useState } from 'react';
import { FaHome, FaUserFriends, FaTv, FaNewspaper, FaUsers, FaArrowCircleDown, FaArrowAltCircleUp, FaGamepad } from "react-icons/fa";
import { FcHome } from "react-icons/fc";
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosStats } from "react-icons/io";

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
                <p><FaUserFriends className='h-8 w-8'></FaUserFriends></p>
                <h1 className='text-lg font-semibold'>Friends</h1>
            </div>
            <div className='flex justify-start items-center gap-4 mb-4'>
                <p><FaTv className='h-8 w-8'></FaTv></p>
                <h1 className='text-lg font-semibold'>Watch</h1>
            </div>
            <div className='flex justify-start items-center gap-4 mb-4'>
                <p><FaNewspaper className='h-8 w-8'></FaNewspaper></p>
                <h1 className='text-lg font-semibold'>Most Recent</h1>
            </div>
            <div className='flex justify-start items-center gap-4 mb-4'>
                <p><FaUsers className='h-8 w-8'></FaUsers></p>
                <h1 className='text-lg font-semibold'>Groups</h1>
            </div>
            <div className='flex justify-start items-center gap-4 mb-4'>
                <p><FcHome className='h-8 w-8'></FcHome></p>
                <h1 className='text-lg font-semibold'>Marketplace</h1>
            </div>
            <div>
                {!isOpen &&
                    <button onClick={isOpenButton} className='flex justify-start items-center gap-4 mb-4'>
                        <p><FaArrowCircleDown className='h-8 w-8'></FaArrowCircleDown></p>
                        <h1 className='text-lg font-semibold'>See More</h1>
                    </button>}
                {isOpen &&
                    <>
                        <div className='flex justify-start items-center gap-4 mb-4'>
                            <p><FaGamepad className='h-8 w-8'></FaGamepad></p>
                            <h1 className='text-lg font-semibold'>Gaming</h1>
                        </div>
                        <div className='flex justify-start items-center gap-4 mb-4'>
                            <p><MdAddShoppingCart className='h-8 w-8'></MdAddShoppingCart></p>
                            <h1 className='text-lg font-semibold'>Ad Center</h1>
                        </div>
                        <div className='flex justify-start items-center gap-4 mb-4'>
                            <p><IoIosStats className='h-8 w-8'></IoIosStats></p>
                            <h1 className='text-lg font-semibold'>Ads Manager</h1>
                        </div>
                    </>
                }
                {isOpen &&
                    <button onClick={isOpenButton} className='flex justify-start items-center gap-4 mb-4'>
                        <p><FaArrowAltCircleUp className='h-8 w-8'></FaArrowAltCircleUp></p>
                        <h1 className='text-lg font-semibold'>See Less</h1>
                    </button>}
            </div>
            <hr className='mb-4'/>
        </div>
    );
};

export default Top;