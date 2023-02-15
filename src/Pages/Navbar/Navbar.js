import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TbLayoutDashboard, TbMessageCircle } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import maruf from "../../assets/maruf.png";
import hasan from "../../assets/hasan.png";
import logo from "../../assets/logo.png";
import { FaExclamation, FaMoon, FaUserTie } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { FcNext, FcQuestions, FcExport } from "react-icons/fc";
import { AiFillSetting } from "react-icons/ai";
import { Authcontext } from "../../Context/UserContext";
import { toast } from "react-hot-toast";
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
        "https://craft-connect-server-blond.vercel.app/allusers"
      );
      const data = await res.json();
      return data;
    },

  });

  const url = `https://craft-connect-server-blond.vercel.app/users?email=${user?.email}`;
  const { data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });

  console.log(users);

  

  return (
    <div className="dark:bg-[#2C2048] fixed w-full top-0 z-[1000] h-[72px] ">
      <div className="flex justify-between items-center backdrop-blur-lg bg-gradient-to-r dark:from-[#3a2e57] from-white to-[#2C2048] dark:to-[#2C2048] ">
        <div className="pl-3">
          <Link
            to="/"
            class="text-2xl text-gray-900 font-semibold flex items-center active"
            href="/"
          >
            <img src={logo} className="w-14 d-block m-auto" alt="" />
            <p class="text-lg text-[#FF3F4A] dark:text-white ml-1.5 lg:ml-2.5">
              Craft Connect
            </p>
          </Link>
        </div>
        <div>
          <div>
            {/* Search field for Mobile Device */}
            {/* <div
              onClick={() => setSearch(!search)}
              className="flex md:hidden justify-center  items-center  ml-3 border border-zinc-600 rounded-full px-3 bg-white"
            >
              <i className="">
                <BiSearchAlt2></BiSearchAlt2>
              </i>
              {search && (
                <input
                  type="text"
                  placeholder="Search"
                  className="py-1 text-white  bg-white  w-[100px]"
                />
              )}
            </div> */}

            {/* Search field for Desktop Device */}
            {/* <div className="hidden md:flex justify-center rounded-md items-center  border-zinc-600  bg-[#c5b5ed]">
              <input
                type="text"
                placeholder="Search"
                className="mx-2 md:mx-0 pl-4 pr-44 py-2 text-[#FF3F4A] w-full rounded-md bg-[#c5b5ed]"
              />
              <i className="pr-4 text-2xl text-white">
                <BiSearchAlt2></BiSearchAlt2>
              </i>
            </div> */}
          </div>

          <div className="flex  gap-16 mr-5 items-center ">
            <div>

              <NavSearchField allusers={allusers}></NavSearchField>
            </div>

            <div className="pr-3 flex gap-2 items-center justify-end">
              <button onClick={handleThemeSwitch} className="text-[20px]">
                {theme === "light" ? (
                  <IoMdSunny className="text-white"></IoMdSunny>
                ) : (
                  <FaMoon className="text-white"></FaMoon>
                )}
              </button>

              <button
                onClick={() => setMessageModal(!messageModal)}
                className="md:btn md:btn-ghost md:btn-circle p-1 md:p-0 rounded-full bg-zinc-700 hover:bg-zinc-600"
              >
                <Link to="/chats">
                  <TbMessageCircle className="text-xl md:text-2xl text-white"></TbMessageCircle>
                </Link>
              </button>

              {/* <div className="dropdown dropdown-hover">
                <label tabIndex={0} className="m-1">
                  <IoMdNotifications className="text-xl md:text-2xl text-white">
                    {" "}
                  </IoMdNotifications>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link>Item 1</Link>
                  </li>
                  <li>
                    <Link>Item 2</Link>
                  </li>
                </ul>
              </div> */}

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
                <Link
                  to="/dashboard"
                  className="flex justify-between items-center py-2 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white rounded-md cursor-pointer"
                >
                  <div className="flex items-center">
                    <TbLayoutDashboard className="text-4xl bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2 text-yellow-500" />
                    <p className="font-bold">Users Dashboard</p>
                  </div>
                  <div>
                    <FcNext className="text-2xl mr-2" />
                  </div>
                </Link>
                <Link
                  to="/admin"
                  className="flex justify-between items-center py-2 hover:bg-[#FF3F4A] dark:text-white text-black hover:text-white rounded-md cursor-pointer"
                >
                  <div className="flex items-center">
                    <FaUserTie className="text-4xl bg-gray-300 dark:bg-[#cb444b] p-1 rounded-full mr-2 text-yellow-500" />
                    <p className="font-bold">Admin Panel</p>
                  </div>
                  <div>
                    <FcNext className="text-2xl mr-2" />
                  </div>
                </Link>
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