import React from 'react';
import { Link } from 'react-router-dom';
import { TbMessageCircle } from "react-icons/tb";
import { IoMdNotifications } from "react-icons/io";
import profile from '../../assets/fearAllah.jpg'

const Navbar = () => {
    return (
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
          <button className="btn btn-ghost btn-circle bg-zinc-700 hover:bg-zinc-600">
            <TbMessageCircle className="text-2xl text-white"></TbMessageCircle>
          </button>
          <button className="btn btn-ghost btn-circle bg-zinc-700 hover:bg-zinc-600">
            <IoMdNotifications className="text-2xl text-white"></IoMdNotifications>
          </button>
          <div>
            <img className="w-11 rounded-full" src={profile} alt="" />
          </div>
        </div>
      </div>
    );
};

export default Navbar;