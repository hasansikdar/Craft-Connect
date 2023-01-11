import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDetails = () => {
    return (
        <div>
            <div className=''>
            <div className="">
            <div className="card-body py-5 flex rounded-lg bg-white shadow-xl w-11/12 m-auto my-5">
                <div className='flex items-center flex-col items-center'>
                    <img src="https://placeimg.com/192/192/people" alt="photoURL" className='w-8 lg:w-20 rounded-full lg:m-5'/>
                    <h1 className='text-gray-900 font-bold text-xl hidden lg:block'>Here is Name</h1>
                    <p>Professional Artist</p>
                </div>
                <div>
                    <ul className="menu w-56">
                        <li><Link to="/">Edit Profile</Link></li>
                        <li><Link to="/">Create Advertisement</Link></li>
                    </ul>
                </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default ProfileDetails;