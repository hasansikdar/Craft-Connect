import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import FriendsList from '../FriendsList/FriendsList';
import ProfileDetails from '../ProfileDetails/ProfileDetails';

const RightBar = () => {
    return (
        <div className='lg:w-80 ml-auto bg-slate-100 h-full hidden xl:block'>
            <Advertisement></Advertisement>
            <ProfileDetails></ProfileDetails>
            <FriendsList></FriendsList>
        </div>
    );
};

export default RightBar;