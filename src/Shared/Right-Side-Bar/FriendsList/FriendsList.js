import React, { useState } from "react";
import { Link } from "react-router-dom";
import pro1 from "../../../assets/rightbar/pro1.jpg";
import Chat from "../Chat/Chat";

const FriendsList = () => {
  const [chat, setChat] = useState(false);

  return (
    <div>
      <div>
        <ul className=" menu p-2 py-5 flex rounded-lg border-zinc-600 shadow-xl w-11/12 m-auto my-5 text-gray-500 dark:bg-[#261b40]">
          <h1 className="dark:text-white text-black ml-4 mb-2">Contacts</h1>
          <li className="hover:bg-zinc-600 duration-300 rounded-lg">
            <div className="cursor-pointer" onClick={() => setChat(!chat)}>
              <div className="w-8">
                <img src={pro1} className="rounded-full w-8 h-8" alt="friend" />
              </div>
              <p className="dark:text-white text-black">Muhammad Hasan vaiiii</p>
            </div>
          </li>
        </ul>
      </div>
      {chat && (
        <div className="w-1/4 rounded-md absolute bottom-5 right-4 z-[999] bg-gray-100 shadow-2xl">
          <div className="">
            <div className="flex justify-between mb-2 items-center px-3 py-3 shadow-lg">
              <div className="flex items-center text-black cursor-pointer hover:bg-zinc-200 w-4/6 p-1 rounded-md ">
                <div className="w-8 mr-2">
                  <img src={pro1} className="rounded-full w-8 h-8" alt="frnd" />
                </div>
                <h3 className="">Muhammad Hasan</h3>
              </div>
              <div
                onClick={() => setChat(false)}
                className="btn btn-sm p-2 btn-ghost rounded-full text-gray-400"
              >
                ✕
              </div>
            </div>
            <div>
              <Chat></Chat>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendsList;
