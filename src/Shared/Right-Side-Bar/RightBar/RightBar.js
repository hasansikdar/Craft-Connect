import React from 'react';
import FriendsList from '../FriendsList/FriendsList';
import ProfileDetails from '../ProfileDetails/ProfileDetails';

const RightBar = () => {
    return (
        <div>
            <ProfileDetails></ProfileDetails>
            <FriendsList></FriendsList>
            <FriendsList></FriendsList>
        </div>
    );
};

export default RightBar;