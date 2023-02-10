import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import maruf from "../../assets/maruf.png";
import hasan from "../../assets/hasan.png";
import logo from "../../assets/logo.png";
import { FaExclamation, FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { FcNext, FcQuestions, FcExport } from "react-icons/fc";
import profileImg from "../../assets/profile.jpg";
import { AiFillSetting, AiOutlineDown } from "react-icons/ai";
import { Authcontext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
import GoogleMeeting from "../../Components/GoogleMeeting/GoogleMeeting";
import NavSearchField from "./NavSearchField";
import { useQuery } from "@tanstack/react-query";

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

  const { data: allusers = [] } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/allusers"
      );
      const data = await res.json();
      return data;
    },
    
  });

  

  return (
    <div>
      <div className="dark:bg-[#2C2048] fixed w-full top-0 z-[1000] h-[72px] ">
        <div className="flex justify-between items-center bg-zinc-800 py-2">
          <div className="pl-3">
            <Link
              to="/"
              class="text-2xl text-gray-900 font-semibold flex items-center active"
              href="/"
            >
              <img src={logo} className="w-14 d-block m-auto" alt="" />
              <p class="text-lg text-white ml-1.5 lg:ml-2.5">Craft Connect</p>
            </Link>
          </div>

          <div className="flex  gap-16 mr-5 items-center ">
            <div>
              {/* Search field for Mobile Device */}

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

              <NavSearchField allusers={allusers}></NavSearchField>
            </div>

            <div className="pr-3 flex gap-2 items-center justify-end">
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
                <Link to="/chats">
                  <TbMessageCircle className="text-xl md:text-2xl text-white"></TbMessageCircle>
                </Link>
              </button>

            <div className="dropdown dropdown-hover">
            <label tabIndex={0} className="m-1">
            <IoMdNotifications className="text-xl md:text-2xl text-white">
                {" "}
              </IoMdNotifications>
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link>Item 1</Link></li>
              <li><Link>Item 2</Link></li>
            </ul>
          </div>

            {/* <button
              onClick={() => setNotification(!notification)}
              className="md:btn md:btn-ghost md:btn-circle p-1 md:p-0 rounded-full bg-zinc-700 hover:bg-zinc-600"
            ></button> */}
          </div>
          <button
            className=" flex items-center gap-2 mr-10"
            onClick={() => setProfile(!profile)}
          >
            <img
              className="w-10 h-10 object-cover rounded-full"
              // src={`${
              //   user?.photoURL
              //     ? user?.photoURL
              //     : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
              // }`}
              src={user?.photoURL}
              alt=""
            />
          </button>
        </div>

        {/*-----------------------------------------Messanger Modal Start---------------------------------------------- */}
        {messageModal && (
          <div className="w-[80%] md:w-[30%] h-[500px] overflow-auto rounded-md absolute top-14 right-6 z-[999] dark:bg-[#18093a] bg-gray-100 mt-5">
            <div className="px-3 py-3">
              <div className="flex justify-between">
                <h3 className="text-2xl font-bold text-[#FF3F4A]">Chats</h3>
                <div
                  onClick={() => setMessageModal(false)}
                  className="btn btn-sm text-white hover:bg-[#99030a] bg-[#FF3F4A]"
                >
                  ✕
                </div>
              </div>
              <div className="hidden md:flex justify-center items-center mt-2  border border-zinc-600 rounded-full px-3 bg-white dark:bg-[#FF3F4A] hover:bg-[#FF3F4A]">
                <i className="">
                  <BiSearchAlt2></BiSearchAlt2>
                </i>
                <input
                  type="text"
                  placeholder="Search"
                  className="mx-2 md:mx-0 pl-3 py-1 text-white w-full bg-white dark:bg-[#FF3F4A] hover:bg-[#FF3F4A]"
                />
              </div>
              <div className="py-4">
                <div className="flex items-center hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white p-2 rounded-md cursor-pointer">
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
                <div className="flex items-center hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white0 p-2 rounded-md cursor-pointer">
                  <img className="w-16 rounded-full mr-2 " src={hasan} alt="" />
                  <div>
                    <p className="text-xl">Muhammad Hasan</p>
                    <p className="font-bold">Rahat sent you a message.</p>
                  </div>
                </div>
                <div className="flex items-center hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white0 p-2 rounded-md cursor-pointer">
                  <img className="w-16 rounded-full mr-2 " src={maruf} alt="" />
                  <div>
                    <p className="text-xl">Maruf Khan</p>
                    <p className="font-bold">
                      Muhammad Ali sent you a message.
                    </p>
                  </div>
                </div>
                <div className="flex items-center hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white p-2 rounded-md cursor-pointer">
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
                      Farhan Anjum sent you a message.
                    </p>
                  </div>
                </div>
                <div className="flex items-center hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white p-2 rounded-md cursor-pointer">
                  <img className="w-16 rounded-full mr-2 " src={hasan} alt="" />
                  <div>
                    <p className="text-xl">Muhammad Hasan</p>
                    <p className="font-bold">
                      Abdul Al Mamun sent you a Photo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {/*-----------------------------------------Messanger Modal End----------------------------------------------*/}

        {/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Notification Modal Start^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}
        {notification && (
          <div className="w-[80%] md:w-[30%] h-[500px] overflow-auto rounded-md absolute top-14 right-6 z-[999] dark:bg-[#18093a] bg-gray-100 mt-5">
            <div className="px-3 py-3">
              <div className="flex justify-between">
                <h3 className="text-2xl font-bold text-[#FF3F4A]">
                  Notifications
                </h3>
                <div
                  onClick={() => setNotification(false)}
                  className="btn btn-sm text-white hover:bg-[#99030a] bg-[#FF3F4A]"
                >
                  ✕
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                All Notifications
              </p>
              <div className="flex items-center hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white p-2 rounded-md cursor-pointer">
                <img className="w-16 rounded-full mr-2 " src={hasan} alt="" />
                <div>
                  <p className="">
                    <span className="font-bold">Muhammad Hasan</span> posted two
                    new videos about how to manage a group project.
                  </p>
                </div>
              </div>
              <div className="flex items-center hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white p-2 rounded-md cursor-pointer">
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
                    <span className="font-bold">Maruf Khan</span> tagged you in
                    a post including "Alhamdulliah after lots of sacrifice and
                    Hard work i got a ....."
                  </p>
                </div>
              </div>
              <div className="flex items-center hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white p-2 rounded-md cursor-pointer">
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
                    <span className="font-bold">Maruf Khan</span> tagged you in
                    a post including "Alhamdulliah after lots of sacrifice and
                    Hard work i got a ....."
                  </p>
                </div>
              </div>
              <div className="flex items-center hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white p-2 rounded-md cursor-pointer">
                <img className="w-16 rounded-full mr-2 " src={maruf} alt="" />
                <div>
                  <p className="">
                    <span className="font-bold">Mohammad Ali Jinnah</span>{" "}
                    posted posted in
                    <span className="font-bold">
                      {" "}
                      SCIC: Job Hunting Battlefield (Batch 6)
                    </span>{" "}
                    .
                  </p>
                </div>
              </div>
              <div className="flex items-center hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white p-2 rounded-md cursor-pointer">
                <img className="w-16 rounded-full mr-2 " src={hasan} alt="" />
                <div>
                  <p className="">
                    <span className="font-bold">Muhammad Hasan</span> commented
                    in your post .
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Notification Modal end^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}

        {/*#########################################Profile Modal Start####################################################*/}
        {profile && (
          <div className="w-[80%] md:w-[30%]  rounded-md absolute top-14 right-6 z-[999] dark:bg-[#18093a] bg-gray-100 mt-5 ">
            <div className="px-3 py-3">
              <div className="flex justify-between items-center mb-2 ">
                <Link
                  to="/feature/profile"
                  className="flex items-center cursor-pointer hover:bg-[#b4373e] dark:text-white text-black hover:text-white w-full p-2 rounded-md "
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
                  <h3 className="text-xl font-bold text-[#FF3F4A] hover:text-white">
                    {user?.displayName}
                  </h3>
                </Link>
                <div
                  className="btn btn-sm text-white hover:bg-[#99030a] bg-[#FF3F4A]"
                  onClick={() => setProfile(false)}
                >
                  ✕
                </div>
              </div>
              <div className=" border-t border-zinc-600"></div>
              <div className="py-4">
                <div className="flex justify-between items-center py-2 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white rounded-md cursor-pointer">
                  <div className="flex items-center">
                    <AiFillSetting className="text-4xl bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2" />
                    <p className="font-bold">Setting & Privacy</p>
                  </div>
                  <div>
                    <FcNext className="text-2xl mr-2" />
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white rounded-md cursor-pointer">
                  <div className="flex items-center">
                    <FcQuestions className="text-4xl bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2" />
                    <p className="font-bold">Help & Support</p>
                  </div>
                  <div>
                    <FcNext className="text-2xl mr-2" />
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white rounded-md cursor-pointer">
                  <div className="flex items-center">
                    <FaMoon className="text-4xl bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2 text-yellow-500" />
                    <p className="font-bold">Display & Accessibility</p>
                  </div>
                  <div>
                    <FcNext className="text-2xl mr-2" />
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white rounded-md cursor-pointer">
                  <div className="flex items-center">
                    <FaExclamation className="text-4xl bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2" />
                    <p className="font-bold">Give feedback</p>
                  </div>
                  <div>
                    <FcNext className="text-2xl mr-2" />
                  </div>
                </div>
                <div
                  onClick={handleLogout}
                  className="flex justify-between items-center py-2 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white rounded-md cursor-pointer"
                >
                  <div className="flex items-center">
                    <FcExport className="text-4xl text-white bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2" />
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

      {/*#########################################Profile Modal Start####################################################*/}
      {profile && (
        <div className="w-[80%] md:w-[30%]  rounded-md absolute top-14 right-6 z-[999] dark:bg-[#18093a] bg-gray-100 mt-5 ">
          <div className="px-3 py-3">
            <div className="flex justify-between items-center mb-2 ">
              <Link
                to="/feature/profile"
                className="flex items-center cursor-pointer hover:bg-[#b4373e] dark:text-white text-black hover:text-white w-full p-2 rounded-md "
              >
                <img
                  className="w-10 h-10 object-cover rounded-full mr-3"
                  src={`${
                    user?.photoURL
                      ? user?.photoURL
                      : "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                  }`}
                  alt=""
                />
                <h3 className="text-xl font-bold text-[#FF3F4A] hover:text-white">
                  {user?.displayName}
                </h3>
              </Link>
              <div
                className="btn btn-sm text-white hover:bg-[#99030a] bg-[#FF3F4A]"
                onClick={() => setProfile(false)}
              >
                ✕
              </div>
            </div>
            <div className=" border-t border-zinc-600"></div>
            <div className="py-4">
              <div className="flex justify-between items-center py-2 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white rounded-md cursor-pointer">
                <div className="flex items-center">
                  <AiFillSetting className="text-4xl bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2" />
                  <p className="font-bold">Setting & Privacy</p>
                </div>
                <div>
                  <FcNext className="text-2xl mr-2" />
                </div>
              </div>
              <div className="flex justify-between items-center py-2 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white rounded-md cursor-pointer">
                <div className="flex items-center">
                  <FcQuestions className="text-4xl bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2" />
                  <p className="font-bold">Help & Support</p>
                </div>
                <div>
                  <FcNext className="text-2xl mr-2" />
                </div>
              </div>
              <div className="flex justify-between items-center py-2 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white rounded-md cursor-pointer">
                <div className="flex items-center">
                  <FaMoon className="text-4xl bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2 text-yellow-500" />
                  <p className="font-bold">Display & Accessibility</p>
                </div>
                <div>
                  <FcNext className="text-2xl mr-2" />
                </div>
              </div>
              <div className="flex justify-between items-center py-2 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white rounded-md cursor-pointer">
                <div className="flex items-center">
                  <FaExclamation className="text-4xl bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2" />
                  <p className="font-bold">Give feedback</p>
                </div>
                <div>
                  <FcNext className="text-2xl mr-2" />
                </div>
              </div>
              <div
                onClick={handleLogout}
                className="flex justify-between items-center py-2 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white rounded-md cursor-pointer"
              >
                <div className="flex items-center">
                  <FcExport className="text-4xl text-white bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2" />
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
    </div>
  );
};

export default Navbar;