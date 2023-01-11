import React from 'react';
import { FaThumbtack, FaRegSave, FaCommentAlt, FaEdit, } from "react-icons/fa";
const PostUserInfo = () => {
    return (
        <div className='flex justify-between'>
            {/* <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" /> */}
            <div>
                <a className='hover:underline' href='#'>Muhammad Hasan</a><br></br>
                <div className='flex items-center'>
                    <a className='hover:underline' href="#">5 Nov 2023</a>
                    {/* The button to open modal */}
                    <label htmlFor="my-modal-3" className="pt-0 ml-3">
                        <img className='rounded-full w-4' src='https://spng.pinpng.com/pngs/s/74-745697_facebook-notification-icon-png-earth-logo-vector-png.png' alt="" />
                    </label>
                </div>
            </div>
            <div>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="btn  btn-sm">...</label>
                    <div tabIndex={0} className="dropdown-content  menu px-3 bg-[black] shadow bg-base-100 rounded-box w-52 py-5">
                        <div className='flex items-center pl-3 p-2 rounded hover:bg-[#343434] cursor-pointer'>
                            <FaThumbtack className='mr-3'></FaThumbtack>
                            Unpin
                        </div>
                        <div className='flex items-center pl-3 p-2 rounded hover:bg-[#343434] cursor-pointer'>
                            <FaRegSave className='mr-3'></FaRegSave>
                            Unsave
                        </div>
                        <div className='flex items-center pl-3 p-2 rounded hover:bg-[#343434] cursor-pointer'>
                            <FaEdit className='mr-3'></FaEdit>
                            Edit post
                        </div>
                        <div className='flex items-center pl-3 p-2 rounded hover:bg-[#343434] cursor-pointer'>
                            <FaCommentAlt className='mr-3'></FaCommentAlt>
                            Who can comment On your post
                        </div>
                    </div>
                </div>
                <button className='btn btn-sm ml-2'>x</button>
            </div>
        </div>
    );
};

export default PostUserInfo;