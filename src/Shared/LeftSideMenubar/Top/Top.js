import React from "react";
import { useState } from "react";
import { FaExclamation, FaMoon, FaHome, FaUserFriends } from "react-icons/fa";
import {
  FcNext,
  FcSettings,
  FcQuestions,
  FcExport,
  FcHome,
  FcAdvertising,
  FcBarChart,
  FcCollapse,
  FcExpand,
  FcSteam,
  FcClapperboard,
  FcConferenceCall,
  FcNews,
  FcBookmark,
  FcGrid,
} from "react-icons/fc";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Top = () => {
  const [isOpen, setIsOpen] = useState(false);

  const isOpenButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <div className='flex justify-start items-center gap-4 mb-4'>
                <p><FaHome className='h-8 w-8'></FaHome></p>
                <h1 className='text-lg font-medium'>Home</h1>
            </div> */}

      <Link to="/">
        <button className="flex justify-start items-center gap-4 mb-4">
          <p>
            <FaHome className="h-8 w-8"></FaHome>
          </p>
          <h1 className="text-lg font-medium">Home</h1>
        </button>
      </Link>
      <hr className="mb-4" />
      <button className="flex justify-start items-center gap-4 mb-4">
        <p>
          <FcNews className="h-8 w-8"></FcNews>
        </p>
        <h1 className="text-lg font-medium">Most Recent</h1>
      </button>
      <Link to="/friends">
        <button className="flex justify-start items-center gap-4 mb-4">
          <p>
            <FaUserFriends className="h-8 w-8 text-green-300"></FaUserFriends>
          </p>
          <h1 className="text-lg font-medium">Friends</h1>
        </button>
      </Link>
      <Link to="/feature/watch">
        <button className="flex justify-start items-center gap-4 mb-4">
          <p>
            <FcClapperboard className="h-8 w-8"></FcClapperboard>
          </p>
          <h1 className="text-lg font-medium">Watch</h1>
        </button>
      </Link>

      {/* <button className='flex justify-start items-center gap-4 mb-4'>
                <p><FcNews className='h-8 w-8'></FcNews></p>
                <h1 className='text-lg font-medium'>Most Recent</h1>
            </button> */}

      <Link to="/feature/groups">
        <button className="flex justify-start items-center gap-4 mb-4">
          <p>
            <FcConferenceCall className="h-8 w-8"></FcConferenceCall>
          </p>
          <h1 className="text-lg font-medium">Groups</h1>
        </button>
      </Link>
      <Link to="/feature/marketplace">
        <button className="flex justify-start items-center gap-4 mb-4">
          <p>
            <FcHome className="h-8 w-8"></FcHome>
          </p>
          <h1 className="text-lg font-medium">Marketplace</h1>
        </button>
      </Link>
      <div>
        {!isOpen && (
          <button
            onClick={isOpenButton}
            className="flex justify-start items-center gap-4 mb-4"
          >
            <p>
              <FcExpand className="h-8 w-8"></FcExpand>
            </p>
            <h1 className="text-lg font-semibold">See More</h1>
          </button>
        )}
        {isOpen && (
          <>
            <Link to="/feature/bookmarked">
              <button className="flex justify-start items-center gap-4 mb-4">
                <p>
                  <FcBookmark className="h-8 w-8"></FcBookmark>
                </p>
                <h1 className="text-lg font-medium">Bookmarked</h1>
              </button>
            </Link>
            <Link to="/feature/adcenter">
              <button className="flex justify-start items-center gap-4 mb-4">
                <p>
                  <FcAdvertising className="h-8 w-8"></FcAdvertising>
                </p>
                <h1 className="text-lg font-medium">Ad Center</h1>
              </button>
            </Link>
            <Link to="/feature/adsmanager">
              <button className="flex justify-start items-center gap-4 mb-4">
                <p>
                  <FcBarChart className="h-8 w-8"></FcBarChart>
                </p>
                <h1 className="text-lg font-medium">Ads Manager</h1>
              </button>
            </Link>
            <Link to="/feature/pages">
              <button className="flex justify-start items-center gap-4 mb-4">
                <p>
                  <FcGrid className="h-8 w-8"></FcGrid>
                </p>
                <h1 className="text-lg font-medium">Pages</h1>
              </button>
            </Link>
          </>
        )}
        {isOpen && (
          <button
            onClick={isOpenButton}
            className="flex justify-start items-center gap-4 mb-4"
          >
            <p>
              <FcCollapse className="h-8 w-8"></FcCollapse>
            </p>
            <h1 className="text-lg font-semibold">See Less</h1>
          </button>
        )}
      </div>
      <hr className="mb-4" />
    </div>
  );
};

export default Top;
