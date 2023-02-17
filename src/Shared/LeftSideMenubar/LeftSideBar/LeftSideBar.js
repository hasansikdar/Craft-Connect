import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { GiFamilyHouse } from "react-icons/gi";
import { IoBarChartOutline } from "react-icons/io5";
import {
  BsNewspaper,
  BsBookmark,
  BsFiles,
  BsFileImageFill,
} from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";
import { SiHomebridge } from "react-icons/si";
import { FiHome, FiUsers } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const LeftSideBar = () => {
  const menus = [
    { name: "Home", link: "/", icon: AiFillHome },
    { name: "Most Recent", link: "/", icon: BsFileImageFill },
    { name: "Friends", link: "/friends", icon: FiUsers },
    { name: "Pages", link: "/feature/pages", icon: BsFiles },
    { name: "Marketplace", link: "/feature/marketplace", icon: SiHomebridge },
    { name: "Bookmarked", link: "/feature/bookmarked", icon: BsBookmark },
    { name: "Ad Center", link: "/feature/adcenter", icon: RiAdvertisementLine },
    { name: "Ads Manager", link: "/", icon: IoBarChartOutline },
  ];
  const [open, setOpen] = useState(false);
  return (
    <section className="flex gap-6 ">
      <div
        className={`lg:bg-white dark:lg:bg-[#563f8e] dark:text-white min-h-screen ${
          open ? "w-72" : "w-[70px]"
        } duration-500 text-black  z-9999 fixed lg:shadow-xl`}
      >
        <div className=" h-[72px] p-0 lg:hidden">
          <img
            src={logo}
            onClick={() => setOpen(!open)}
            className="w-14 d-block m-auto"
            alt=""
          />
        </div>
        <div className="py-3 lg:flex px-4 justify-end  hidden">
          {open ? (
            <RxCross1
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />
          )}
        </div>

        <div className="mt-10 lg:flex flex-col px-4 gap-4 relative  hidden">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-base  gap-3.5 font-medium p-2 hover:text-[#FF3F4A] 
                 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "25" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre text-black dark:text-white duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-[#FF3F4A] font-semibold whitespace-pre text-white rounded drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>

        {/* code for mobile */}

        {open && (
          <div className="dark:bg-[#563f8e] h-screen bg-[#FAFBFD]">
            <div className="py-3 flex px-4 justify-end  md:hidden">
              {open && (
                <RxCross1
                  size={26}
                  className="cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              )}
            </div>
            <div className="mt-2 flex flex-col duration-1000 px-4 gap-4 relative  md:hidden">
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${
                    menu?.margin && "mt-5"
                  } group flex items-center text-base   gap-3.5 font-medium p-2 hover:text-[#FF3F4A] 
                 rounded-md`}
                >
                  <div>{React.createElement(menu?.icon, { size: "25" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre text-black dark:text-white duration-500 ${
                      !open && "opacity-0 translate-x-28 overflow-hidden"
                    }`}
                  >
                    {menu?.name}
                  </h2>
                  <h2
                    className={`${
                      open && "hidden"
                    } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                  >
                    {menu?.name}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LeftSideBar;