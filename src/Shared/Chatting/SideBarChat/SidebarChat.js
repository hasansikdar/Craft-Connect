import React from "react";
import Chats from "../Chats/Chats"
import ChatBar from "../ChatBar/ChatBar";
import SearchChat from "../SearchChat/SearchChat";
import "../style.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ChatBar></ChatBar>
      <SearchChat></SearchChat>
      <Chats></Chats>
    </div>
  );
};

export default Sidebar;
