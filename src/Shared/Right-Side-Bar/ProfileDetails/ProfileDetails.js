import React from 'react';
import { Link } from 'react-router-dom';
import { HiSpeakerphone } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";

const ProfileDetails = () => {
    return (
        <div>
            <div className="">
            <div className="card-body p-2 flex rounded-lg bg-white shadow-xl w-11/12 m-auto my-5 text-gray-500">
                <h1 className='ml-4 mt-4 text-black'>Your Profile</h1>
                <div className='flex items-center flex-col items-center'>
                    <img src="https://placeimg.com/192/192/people" alt="photoURL" className='w-16 rounded-full mt-4 mb-2'/>
                    <h1 className='text-gray-900 font-bold text-xl hidden lg:block'>Farhan Chowdhury</h1>
                    <p>Professional Artist</p>
                </div>
                <div>
                    <ul className="menu">
                        <li className='hover:bg-gray-100 duration-300 rounded-lg'><Link to="/" className='justify-between'>Edit Profile <FaEdit></FaEdit></Link></li>
                        <li className='hover:bg-gray-100 duration-300 rounded-lg'><Link to="/" className='justify-between'>Create Advertisement <HiSpeakerphone></HiSpeakerphone></Link></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProfileDetails;