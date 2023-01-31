import React, { useContext } from "react";
import Cam from "../../../assets/chat/cam.png";
import Add from "../../../assets/chat/img.png";
import More from "../../../assets/chat/more.png";
import Messages from "../Messages/Messages";
import ChatInput from "../ChatInput/ChatInput";
import { ChatContext } from "../../../Context/ChatContext";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages></Messages>
      <ChatInput></ChatInput>
    </div>
  );
};

export default Chat;
