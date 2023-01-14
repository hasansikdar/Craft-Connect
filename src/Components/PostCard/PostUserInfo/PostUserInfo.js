import React from "react";
import { FaThumbtack, FaRegSave, FaCommentAlt, FaEdit } from "react-icons/fa";
const PostUserInfo = () => {
  return (
    <div className="flex">
      <img
        className="w-10 h-10 rounded-full"
        src="https://scontent.fdac5-2.fna.fbcdn.net/v/t39.30808-6/318630834_1301786737319944_3904799583444523390_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFjKxLtWVgY0EcruBuIVQC4QW8Nr8xSuHNBbw2vzFK4c37HruuJsS6Hhy1MU_2h_0URlH6e25P0qxtME-zNc4ri&_nc_ohc=rFDSVULP1gUAX_u9RLZ&_nc_ht=scontent.fdac5-2.fna&oh=00_AfDUyor27xgdIX_rgzNZH6VdvD1Pl-1HDtPeEPny2fepjw&oe=63C2B9A3"
        alt=""
      />
      <div className="ml-4">
        <a className="hover:underline" href="#">
          Muhammad Hasan
        </a>
        <br></br>
        <div className="flex items-center">
          <a className="hover:underline" href="#">
            5 Nov 2023
          </a>
          {/* The button to open modal */}
          <label htmlFor="my-modal-3" className="pt-0 ml-3">
            <img
              className="rounded-full w-4"
              src="https://spng.pinpng.com/pngs/s/74-745697_facebook-notification-icon-png-earth-logo-vector-png.png"
              alt=""
            />
          </label>
        </div>
      </div>
      <div className="ml-auto">
        <div className="dropdown dropdown-bottom dropdown-end">
          <label
            tabIndex={0}
            className="btn  btn-sm bg-gray-100 dark:bg-black text-black dark:text-white hover:text-white"
          >
            ...
          </label>
          <div
            tabIndex={0}
            className="dropdown-content  menu px-3 dark:bg-[black] shadow bg-gray-100 rounded-box w-52 py-5"
          >
            <div className="flex items-center pl-3 p-2 rounded dark:hover:bg-[#343434] cursor-pointer">
              <FaThumbtack className="mr-3"></FaThumbtack>
              Unpin
            </div>
            <div className="flex items-center pl-3 p-2 rounded dark:hover:bg-[#343434] cursor-pointer">
              <FaRegSave className="mr-3"></FaRegSave>
              Unsave
            </div>
            <div className="flex items-center pl-3 p-2 rounded dark:hover:bg-[#343434] cursor-pointer">
              <FaEdit className="mr-3"></FaEdit>
              Edit post
            </div>
            <div className="flex items-center pl-3 p-2 rounded dark:hover:bg-[#343434] cursor-pointer">
              <FaCommentAlt className="mr-3"></FaCommentAlt>
              Who can comment On your post
            </div>
          </div>
        </div>
        <button className="btn  btn-sm bg-gray-100 dark:bg-black text-black dark:text-white hover:text-white ml-2">
          x
        </button>
      </div>
    </div>
  );
};

export default PostUserInfo;
