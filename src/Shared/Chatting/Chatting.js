import React from 'react';
import Chat from './Chat/Chat';
import ChatBar from './ChatBar/ChatBar';
import Chats from './Chats/Chats';

const Chatting = () => {
    return (
        <div className='dark:bg-[#2C2048] bg-gray-50'>
        <Chats></Chats>
        </div>
    );
};

export default Chatting;