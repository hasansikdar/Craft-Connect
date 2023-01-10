import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import profile from '../../assets/fearAllah.jpg'

const Navbar = () => {

    const [messageModal, setMessageModal] = useState(false); 

    return (
      <div>
        <div className="flex justify-between bg-zinc-800 border-b-2 border-zinc-600 py-1">
          <div className="pl-3">
            <Link to="/" className=" btn btn-ghost normal-case text-xl">
              CRAFTIFY
            </Link>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="pl-3 rounded-full bg-zinc-700 hover:bg-zinc-600 text-white w-[45%]"
          />
          <div className="pr-3 flex gap-2 items-center">
            <div
              onClick={() => setMessageModal(!messageModal)}
              className="btn btn-ghost btn-circle bg-zinc-700 hover:bg-zinc-600"
            >
              <TbMessageCircle className="text-2xl text-white"></TbMessageCircle>
            </div>
            <button className="btn btn-ghost btn-circle bg-zinc-700 hover:bg-zinc-600">
              <IoMdNotifications className="text-2xl text-white"></IoMdNotifications>
            </button>
            <div>
              <img className="w-11 rounded-full" src={profile} alt="" />
            </div>
          </div>
        </div>

        {/*-----------------------------------------Messanger Modal Start----------------------------------------------*/}
        {messageModal && (
          <div className="w-[30%] rounded-md absolute top-14 right-6 z-[999] bg-zinc-800 mt-5">
            <div className="px-3 py-3">
              <div className="flex justify-between">
                <h3 className="text-lg font-bold">
                  Congratulations random Internet user!
                </h3>
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
      </div>
    );
};

export default Navbar;