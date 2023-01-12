import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import { BiSearchAlt2 } from "react-icons/bi";
import profileImage from '../../assets/fearAllah.jpg'

const Navbar = () => {

    const [messageModal, setMessageModal] = useState(false); 
    const [notification, setNotification] = useState(false); 
    const [profile, setProfile] = useState(false); 
    const [search, setSearch] = useState(false);

    return (
      <div>
        <div className="flex justify-between items-center bg-zinc-800 border-b-2 border-zinc-600 py-1">
          <div className="pl-3">
            <Link to="/" className="normal-case text-xl cursor-pointer">
              CRAFTIFY
            </Link>
          </div>
          <div>
            <div onClick={() => setSearch(!search)} className="flex md:hidden justify-center items-center  ml-3 border border-zinc-600 rounded-full px-3 bg-zinc-700 hover:bg-zinc-600">
              <i>
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
          </div>
          <div className="pr-3 flex gap-2 items-center justify-end">
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
            <div className="w-[17%]" onClick={() => setProfile(!profile)}>
              <img
                className="md:w-[60px] rounded-full"
                src={profileImage}
                alt=""
              />
            </div>
          </div>
        </div>

        {/*-----------------------------------------Messanger Modal Start---------------------------------------------- */}
        {messageModal && (
          <div className="w-[80%] md:w-[30%] rounded-md absolute top-14 right-6 z-[999] bg-zinc-800 mt-5">
            <div className="px-3 py-3">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold">Messanger Modal testing</h3>
                <div
                  onClick={() => setMessageModal(false)}
                  className="btn btn-ghost"
                >
                  ✕
                </div>
              </div>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
            </div>
          </div>
        )}
        {/*-----------------------------------------Messanger Modal End----------------------------------------------*/}

        {/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Notification Modal Start^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}
        {notification && (
          <div className="w-[80%] md:w-[30%]  rounded-md absolute top-14 right-6 z-[999] bg-zinc-800 mt-5">
            <div className="px-3 py-3">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold">
                  Notifications Modal testing
                </h3>
                <div
                  onClick={() => setNotification(false)}
                  className="btn btn-ghost"
                >
                  ✕
                </div>
              </div>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
            </div>
          </div>
        )}
        {/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^Notification Modal end^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/}

        {/*#########################################Profile Modal Start####################################################*/}
        {profile && (
          <div className="w-[80%] md:w-[30%]  rounded-md absolute top-14 right-6 z-[999] bg-zinc-800 mt-5">
            <div className="px-3 py-3">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold">Testing Profile Modal</h3>
                <div
                  onClick={() => setProfile(false)}
                  className="btn btn-ghost"
                >
                  ✕
                </div>
              </div>
              <p className="py-4">
                You've been selected for a chance to get one year of
                subscription to use Wikipedia for free!
              </p>
            </div>
          </div>
        )}
        {/*#########################################Profile Modal End####################################################*/}
      </div>
    );
};

export default Navbar;