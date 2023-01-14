import React, { useContext } from 'react';
import { FaThumbtack, FaRegSave, FaCommentAlt, FaEdit, } from "react-icons/fa";
import { Authcontext } from '../../../Context/UserContext';

const PostUserInfo = ({ post, handleDeletePost }) => {
    const { _id } = post;
    return (
        <div className='flex'>
            <img className='w-10 h-10 rounded-full' src={post?.userPhoto} alt="" />
            <div className='ml-4'>
                <a className='hover:underline' href='#'>{post?.userName}</a><br></br>
                <div className='flex items-center'>
                    <a className='hover:underline' href="#">{post?.currentData}</a>
                    {/* The button to open modal */}
                    <label htmlFor="my-modal-3" className="pt-0 ml-3">
                        <img className='rounded-full w-4' src='https://spng.pinpng.com/pngs/s/74-745697_facebook-notification-icon-png-earth-logo-vector-png.png' alt="" />
                    </label>
                </div>
            </div>
            <div className='ml-auto'>
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
                <button onClick={() => handleDeletePost(_id)} className='btn btn-sm ml-2'>x</button>
            </div>
        </div>
    );
};

export default PostUserInfo;