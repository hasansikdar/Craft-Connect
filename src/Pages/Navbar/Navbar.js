import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import maruf from "../../assets/maruf.png";
import hasan from "../../assets/hasan.png";
import { FaExclamation, FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { FcNext, FcQuestions, FcExport } from "react-icons/fc";

import { AiFillSetting } from "react-icons/ai";
import { Authcontext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
import GoogleMeeting from "../../Components/GoogleMeeting/GoogleMeeting";

const Navbar = () => {
  const { user, logout } = useContext(Authcontext);
  const [messageModal, setMessageModal] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const agree = window.confirm("Are you sure Logout ?");
    if (agree) {
      logout()
        .then((res) => {
          toast.success("Logt out");
          navigate("/login");
        })
        .catch((error) => console.log(error));
    }
  };

  // Dark and light theme by Mamun
  // const [theme, setTheme] = useState("light");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : ""
  );
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="dark:bg-[#2C2048] fixed top-0 z-[999] w-full">
      <div className="flex justify-between items-center bg-zinc-800 border-b-2 border-zinc-600 py-1">
        <div className="pl-3">
          <Link to="/" className="normal-case text-xl cursor-pointer font-bold">
            Craft-Connect
          </Link>
        </div>
        <div>
          <div
            onClick={() => setSearch(!search)}
            className="flex md:hidden justify-center  items-center  ml-3 border border-zinc-600 rounded-full px-3 bg-zinc-700"
          >
            <i className="">
              <BiSearchAlt2></BiSearchAlt2>
            </i>
            {search && (
              <input
                type="text"
                placeholder="Search"
                className="py-1 text-white  bg-zinc-700 hover:bg-zinc-600 w-[100px]"
              />
            )}
          </div>
          <div className="hidden md:flex justify-center items-center border border-zinc-600 rounded-full px-3 bg-zinc-700 hover:bg-zinc-600">
            <i className="">
              <BiSearchAlt2></BiSearchAlt2>
            </i>
            <input
              type="text"
              placeholder="Search"
              className="mx-2 md:mx-0 pl-3 py-1 text-white w-full bg-zinc-700 hover:bg-zinc-600"
            />
          </div>
        </div>

        <div className="pr-3 flex gap-2 items-center justify-end">
          <GoogleMeeting></GoogleMeeting>
          {/* <input
            onClick={handleThemeSwitch}
            type="checkbox"
            className="toggle"
          /> */}
          <button onClick={handleThemeSwitch} className="text-[20px]">
            {theme === "light" ? (
              <IoMdSunny className="text-white"></IoMdSunny>
            ) : (
              <FaMoon className="text-white"></FaMoon>
            )}
          </button>

          {/* <>
            {localStorage.getItem(
              "theme" === "light" ? (
                <IoIosSunny></IoIosSunny>
              ) : (
                <FaMoon></FaMoon>
              )
            )}
          </> */}

          <button
            onClick={() => setMessageModal(!messageModal)}
            className="md:btn md:btn-ghost md:btn-circle p-1 md:p-0 rounded-full bg-zinc-700 hover:bg-zinc-600"
          >
            <TbMessageCircle className="text-xl md:text-2xl text-white"></TbMessageCircle>
          </button>
          <button
            onClick={() => setNotification(!notification)}
            className="md:btn md:btn-ghost md:btn-circle p-1 md:p-0 rounded-full bg-zinc-700 hover:bg-zinc-600"
          >
            <IoMdNotifications className="text-xl md:text-2xl text-white">
              {" "}
            </IoMdNotifications>
          </button>
          <div className="" onClick={() => setProfile(!profile)}>
            <img
              className="w-10 h-10 rounded-full"
              src={`${
                user?.photoURL
                  ? user?.photoURL
                  : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
              }`}
              alt=""
            />
          </div>
        </div>
      </div>

      {/*-----------------------------------------Messanger Modal Start---------------------------------------------- */}
      {messageModal && (
        <div className="w-[80%] md:w-[30%] h-[500px] overflow-auto rounded-md absolute top-14 right-6 z-[999] bg-zinc-800 mt-5">
          <div className="px-3 py-3">
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold">Chats</h3>
              <div
                onClick={() => setMessageModal(false)}
                className="btn btn-ghost"
              >
                ✕
              </div>
            </div>
            <div className="hidden md:flex justify-center items-center  border border-zinc-600 rounded-full px-3 bg-zinc-700 hover:bg-zinc-600">
              <i className="">
                <BiSearchAlt2></BiSearchAlt2>
              </i>
              <input
                type="text"
                placeholder="Search"
                className="mx-2 md:mx-0 pl-3 py-1 text-white w-full bg-zinc-700 hover:bg-zinc-600"
              />
            </div>
            <div className="py-4">
              <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
                <img
                  className="w-16 rounded-full mr-2 "
                  src={`${
                    user?.photoURL
                      ? user?.photoURL
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                  }`}
                  alt=""
                />
                <div>
                  <p className="text-xl">{user?.displayName}</p>
                  <p className="font-bold">
                    Muhammad Hasan sent you a message.
                  </p>
                </div>
              </div>
              <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
                <img className="w-16 rounded-full mr-2 " src={hasan} alt="" />
                <div>
                  <p className="text-xl">Muhammad Hasan</p>
                  <p className="font-bold">Rahat sent you a message.</p>
                </div>
              </div>
              <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
                <img className="w-16 rounded-full mr-2 " src={maruf} alt="" />
                <div>
                  <p className="text-xl">Maruf Khan</p>
                  <p className="font-bold">Muhammad Ali sent you a message.</p>
                </div>
              </div>
              <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
                <img
                  className="w-16 rounded-full mr-2 "
                  src={`${
                    user?.photoURL
                      ? user?.photoURL
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                  }`}
                  alt=""
                />
                <div>
                  <p className="text-xl">{user?.displayName}</p>
                  <p className="font-bold">Farhan Anjum sent you a message.</p>
                </div>
              </div>
              <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
                <img className="w-16 rounded-full mr-2 " src={hasan} alt="" />
                <div>
                  <p className="text-xl">Muhammad Hasan</p>
                  <p className="font-bold">Abdul Al Mamun sent you a Photo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*-----------------------------------------Messanger Modal End----------------------------------------------*/}

      {/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Notification Modal Start^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}
      {notification && (
        <div className="w-[80%] md:w-[30%] h-[500px] overflow-auto rounded-md absolute top-14 right-6 z-[999] bg-zinc-800 mt-5">
          <div className="px-3 py-3">
            <div className="flex justify-between">
              <h3 className="text-2xl font-bold">Notifications</h3>
              <div
                onClick={() => setNotification(false)}
                className="btn btn-ghost"
              >
                ✕
              </div>
            </div>
            <p>All Notifications</p>
            <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
              <img className="w-16 rounded-full mr-2 " src={hasan} alt="" />
              <div>
                <p className="">
                  <span className="font-bold">Muhammad Hasan</span> posted two
                  new videos about how to manage a group project.
                </p>
              </div>
            </div>
            <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
              <img
                className="w-16 rounded-full mr-2 "
                src={`${
                  user?.photoURL
                    ? user?.photoURL
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                }`}
                alt=""
              />
              <div>
                <p className="">
                  <span className="font-bold">Maruf Khan</span> tagged you in a
                  post including "Alhamdulliah after lots of sacrifice and Hard
                  work i got a ....."
                </p>
              </div>
            </div>
            <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
              <img
                className="w-16 rounded-full mr-2 "
                src={`${
                  user?.photoURL
                    ? user?.photoURL
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                }`}
                alt=""
              />
              <div>
                <p className="">
                  <span className="font-bold">Maruf Khan</span> tagged you in a
                  post including "Alhamdulliah after lots of sacrifice and Hard
                  work i got a ....."
                </p>
              </div>
            </div>
            <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
              <img className="w-16 rounded-full mr-2 " src={maruf} alt="" />
              <div>
                <p className="">
                  <span className="font-bold">Mohammad Ali Jinnah</span> posted
                  posted in
                  <span className="font-bold">
                    {" "}
                    SCIC: Job Hunting Battlefield (Batch 6)
                  </span>{" "}
                  .
                </p>
              </div>
            </div>
            <div className="flex items-center hover:bg-zinc-600 p-2 rounded-md cursor-pointer">
              <img className="w-16 rounded-full mr-2 " src={hasan} alt="" />
              <div>
                <p className="">
                  <span className="font-bold">Muhammad Hasan</span> commented in
                  your post .
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Notification Modal end^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}

      {/*#########################################Profile Modal Start####################################################*/}
      {profile && (
        <div className="w-[80%] md:w-[30%]  rounded-md absolute top-14 right-6 z-[999] bg-zinc-800 mt-5  ">
          <div className="px-3 py-3">
            <div className="flex justify-between mb-2">
              <Link
                to="/feature/profile"
                className="flex items-center cursor-pointer hover:bg-zinc-600 w-full p-2 rounded-md "
              >
                <img
                  className="w-10 h-10  rounded-full mr-3"
                  src={`${
                    user?.photoURL
                      ? user?.photoURL
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                  }`}
                  alt=""
                />
                <h3 className="text-xl">{user?.displayName}</h3>
              </Link>
              <div onClick={() => setProfile(false)} className="btn btn-ghost">
                ✕
              </div>
            </div>
            <div className=" border-t border-zinc-600"></div>
            <div className="py-4">
              <div className="flex justify-between items-center py-2 hover:bg-zinc-600 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <AiFillSetting className="text-4xl bg-zinc-600 p-1 rounded-full mr-2" />
                  <p className="font-bold">Setting & Privacy</p>
                </div>
                <div>
                  <FcNext className="text-2xl mr-2" />
                </div>
              </div>
              <div className="flex justify-between items-center py-2 hover:bg-zinc-600 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <FcQuestions className="text-4xl bg-zinc-600 p-1 rounded-full mr-2" />
                  <p className="font-bold">Help & Support</p>
                </div>
                <div>
                  <FcNext className="text-2xl mr-2" />
                </div>
              </div>
              <div className="flex justify-between items-center py-2 hover:bg-zinc-600 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <FaMoon className="text-4xl bg-zinc-600 p-1 rounded-full mr-2 text-yellow-500" />
                  <p className="font-bold">Display & Accessibility</p>
                </div>
                <div>
                  <FcNext className="text-2xl mr-2" />
                </div>
              </div>
              <div className="flex justify-between items-center py-2 hover:bg-zinc-600 rounded-md cursor-pointer">
                <div className="flex items-center">
                  <FaExclamation className="text-4xl bg-zinc-600 p-1 rounded-full mr-2" />
                  <p className="font-bold">Give feedback</p>
                </div>
                <div>
                  <FcNext className="text-2xl mr-2" />
                </div>
              </div>
              <div
                onClick={handleLogout}
                className="flex justify-between items-center py-2 hover:bg-zinc-600 rounded-md cursor-pointer"
              >
                <div className="flex items-center">
                  <FcExport className="text-4xl bg-zinc-600 p-1 rounded-full mr-2" />
                  <p className="font-bold">Logout</p>
                </div>
                <div>
                  <FcNext className="text-2xl mr-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/*#########################################Profile Modal End####################################################*/}
    </div>
  );
};

export default Navbar;
