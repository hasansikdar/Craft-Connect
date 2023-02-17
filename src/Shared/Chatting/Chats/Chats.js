import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { Authcontext } from "../../../Context/UserContext";
import { ChatContext } from "../../../Context/ChatContext";
import { db } from "../../../firebase/firebase.Config";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Frndschat from "../Frndschat/Frndschat";
import { messageSend } from "../../MessangerAction/MessangerAction";
import { toast } from "react-hot-toast";

const Chats = () => {
  const { data: allusers = [] } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allusers");
      const data = await res.json();
      return data;
    },
  });

  const { data: mssges = [], refetch, isLoading } = useQuery({
    queryKey: ["mssges"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/allmesseges");
      const data = await res.json();
      return data;
    },
  });

  const { user } = useContext(Authcontext);
  const [currentfrnd, setCurrentfrnd] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const inputHandle = (e) =>{
    setNewMessage(e.target.value)
  }
  console.log(newMessage)
  console.log(user)

  const sendMessage = (e) =>{
    e.preventDefault();
    const data ={
      senderId: user.uid,
      senderName: user.displayName,
      sendImg: user.photoURL,
      recieverId: currentfrnd._id,
      recieverName: currentfrnd.displayName,
      recieverImg: currentfrnd.photoURL,
      message : newMessage?newMessage : "🧡"
    }
    console.log(newMessage)

    fetch("http://localhost:5000/send-messenger", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("message Added");
            refetch();
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
  }

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
    <div className="flex h-screen antialiased text-gray-800 w-full">
    <div className="flex flex-row h-full w-full overflow-x-hidden">
      <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-gray-50 flex-shrink-0 w-[20%]">
        <div className="flex flex-row items-center justify-center h-12 w-full">
          <div
            className="flex items-center justify-center rounded-2xl text-indigo-700 bg-indigo-100 h-10 w-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
          </div>
          <div className="ml-2 font-bold text-2xl">
            <Link to="/">
              Craft-Connect
            </Link>  
          </div>
        </div>
        <div
          className="flex flex-col items-center bg-[#ff505a] text-white border border-gray-200 mt-4 w-full py-6 px-4 rounded-lg"
        >
          <div className="">
            <img
              src={user?.photoURL}
              alt="photoURL"
              className="w-16 h-16 object-cover rounded-full mt-4 mb-2"
            />
          </div>
          <Link to="/feature/profile">
            <h1 className="dark:text-white text-white font-bold text-xl hidden lg:block">
              {user?.displayName}
            </h1>
          </Link>
          <div className="text-xs text-gray-500">Lead UI/UX Designer</div>
        </div>

        <div className="bg-white mt-5 p-2 rounded-md">
          <div className="flex flex-col">
            <div className="flex flex-row items-center justify-between text-xs">
            <span className="font-bold">Active Conversations</span>
            <span
                className="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
                >{allusers.length}</span
            >
            </div>
            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-80 overflow-y-auto">
                  <div className="px-2">
                  <button className= "flex flex-row items-center hover:bg-[#ff505a] hover:text-white rounded-xl p-2 w-full active" onClick={()=>setCurrentfrnd(allusers)}>
                      <div className="ml-2 text-sm font-semibold">Start Chat</div>
                  </button>
                  </div>
            </div>
            </div>
        </div>
        
      </div>
      <div className="w-full">
        {
          currentfrnd?<Frndschat 
          currentfrnd = {currentfrnd}
          inputHandle = {inputHandle}
          newMessage = {newMessage}
          sendMessage = {sendMessage}
          mssges={mssges}
          ></Frndschat>:"Please Select Your Friend to start Chat"
        }
      </div>
    </div>
  </div>
</div>
  );
};

export default Chats;
