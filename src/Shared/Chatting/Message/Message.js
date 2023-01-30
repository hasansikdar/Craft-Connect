import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../../Context/UserContext";
import { ChatContext } from "../../../Context/ChatContext";

const Message = ({ message }) => {
  const { user } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === user.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === user.uid
              ? user.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="" />}
      </div>
    </div>
  );
};

export default Message;
