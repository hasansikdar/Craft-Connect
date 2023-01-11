import React from 'react';
import FriendsList from '../FriendsList/FriendsList';
import ProfileDetails from '../ProfileDetails/ProfileDetails';

const RightBar = () => {
    return (
        <div className='w-80 float-right bg-slate-100'>
            <ProfileDetails></ProfileDetails>
            <FriendsList></FriendsList>
            <FriendsList></FriendsList>
        </div>
    );
};

export default RightBar;