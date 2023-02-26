
import React, { useContext, useEffect, useState, useRef } from "react";
import { Authcontext } from "../../../Context/UserContext";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import logo from "../../../assets/logo.png";
import Message from "../Message/Message";

const Chats = () => {
  const { data: allusers = [] } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch("https://craft-connect-server-blond.vercel.app/allusers");
      const data = await res.json();
      return data;
    },
  });

  const { myPro, myProUpdate } = useContext(Authcontext);
  const [currentfrnd, setCurrentfrnd] = useState("");
  const [getMessage, setGetMessage] = useState();
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef();



  const inputHandle = (e) => {
    // if (e.key === 'Enter') {
    //   setNewMessage(e.target.value)
    // }
    setNewMessage(e.target.value)
  }

  const sendMessage = (e) => {
    e.preventDefault();
    const data = {
      senderId: myPro[0]?._id,
      senderName: myPro[0]?.displayName,
      // sendImg: user?.photoURL,
      recieverId: currentfrnd?._id,
      recieverName: currentfrnd?.displayName,
      recieverImg: currentfrnd?.photoURL,
      message: newMessage ? newMessage : "🧡"
    }
    console.log(newMessage)

    fetch("https://craft-connect-server-blond.vercel.app/send-messenger", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setNewMessage("");
          toast.success("message Added");
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }

  useEffect(() => {
    fetch(
      `https://craft-connect-server-blond.vercel.app/send-messenger/${currentfrnd?._id}/getMessage/${myPro[0]?._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setGetMessage(data);
        myProUpdate();
      });
  }, [currentfrnd, getMessage]);

  const emojiHnadler = (emoje) => {
    console.log(newMessage);
    setNewMessage(`${newMessage}` + emoje);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [getMessage, newMessage]);
  console.log(getMessage)

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center  ">
      <div className="flex h-screen antialiased text-gray-800 w-full">
        <div className="flex flex-row h-full w-full overflow-x-hidden">
          <div className="flex flex-col py-8 pl-6 pr-3 w-64 bg-[#2A2A2A] flex-shrink-0 w-[20%] border-r border-[#3F3F3F]/80 ">
            <div className="flex flex-row items-center justify-start h-12 w-full">
              <div
                className="flex items-center justify-start rounded-2xl h-10 w-10"
              >
                <img src={logo} className="w-36 md:w-14 d-block m-auto" alt="" />
              </div>
              <div className="ml-2 font-bold text-2xl">
                <Link to="/" className="font-bold text-2xl text-white">
                  Craft-Connect
                </Link>
              </div>
            </div>
            <div
              className="flex flex-col items-center bg-[#3F3F3F] text-white  shadow-lg shadow-[#9dffb333] mt-4 w-full py-6 px-4 rounded-lg"
            >
              <div className="relative max-[768px]:mx-auto flex-shrink-0 w-28 h-28">
                <div className="absolute w-28 h-28 shadow-[#9dffb3bd] rounded-full -bottom-[15px] -right-[5px] shadow-2xl scale-90"></div>
                <img
                  src={myPro[0]?.photoURL}
                  alt="photoURL"
                  className="w-28 h-28 object-cover rounded-full mt-4 mb-2 relative"
                />
              </div>
              <Link to="/feature/profile">
                <h1 className="dark:text-white mt-5  text-white text-center font-bold text-xl hidden lg:block">
                  {myPro[0]?.displayName}
                </h1>
              </Link>
              <Link to={`/feature/profile`} className="px-3 py-2 bg-[#1AA37A] shadow-md shadow-[#9dffb333] hover:bg-[#1aa37ac0] transition-all duration-300 rounded-lg mt-3">Your Profile</Link>
            </div>

            <div className="bg-[#3F3F3F] shadow-lg shadow-[#9dffb333] text-white mt-5 p-3 rounded-md">
              <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between text-xs ">
                  <span className="font-bold text-lg py-3">Active Conversations</span>
                </div>
                <div className="flex flex-col space-y-1 mt-4 -mx-2 h-56 overflow-y-auto">
                  {
                    allusers.map((chatusers) => (
                      <div key={chatusers._id} className="px-2">
                        <button className={currentfrnd._id === chatusers._id ? "flex flex-row items-center hover:bg-[#1AA37A] hover:text-white rounded-xl p-2 w-full active" : "flex flex-row items-center hover:bg-[#1AA37A] hover:text-white rounded-xl p-2 w-full"} onClick={() => setCurrentfrnd(chatusers)}>
                          <div className="h-10 w-10 rounded-full border overflow-hidden">
                            <img
                              src={chatusers.photoURL}
                              alt="photoURL"
                              className=""
                            />
                          </div>
                          <div className="ml-2 text-sm font-semibold">{chatusers.displayName}</div>
                        </button>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>

          </div>
          <div className="w-full  bg-[#2A2A2A]">
            {
              currentfrnd ? <>
                <Message
                  currentfrnd={currentfrnd}
                  inputHandle={inputHandle}
                  getMessage={getMessage}
                  newMessage={newMessage}
                  sendMessage={sendMessage}
                  emojiHnadler={emojiHnadler}
                  myPro={myPro}
                  scrollRef={scrollRef}
                  handleKeyDown={inputHandle}
                ></Message>
              </> :
                <>
                  <h1 className="text-5xl pt-[300px] pl-[50px] text-white">"Please Select Your Friend to start Chat"</h1>
                </>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
