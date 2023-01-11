import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import FriendsList from '../FriendsList/FriendsList';
import ProfileDetails from '../ProfileDetails/ProfileDetails';

const RightBar = () => {
    return (
        <div className='w-80 float-right bg-slate-100 h-full hidden lg:block'>
            <Advertisement></Advertisement>
            <ProfileDetails></ProfileDetails>
            <FriendsList></FriendsList>
        </div>
    );
};

export default RightBar;