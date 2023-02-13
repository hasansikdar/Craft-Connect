import React from 'react';
import { Link } from 'react-router-dom';
import { BiLike, BiShareAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";

const BookMarkedCard = ({ post }) => {
    // console.log(post)
    return (
        <div className=''>
            <div>
                <div className="my-3">
                    <div className="w-full border border-[#FF3F4A] p-5 rounded-md shadow-md">
                        <div className="flex justify-between items-center text-black dark:text-white">
                            <div className="flex gap-3 items-center">
                                <img
                                    className="w-[50px] h-[50px] object-cover rounded-full"
                                    src={post?.userPhoto}
                                    alt=""
                                />
                                <div>
                                    <Link to={`/user/${post.userEmail}`}>
                                        <p>{post?.userName}</p>
                                    </Link>
                                    <p className="text-sm">{post?.currentDate}</p>
                                </div>
                            </div>
                            <div>
                                <div className="dropdown dropdown-bottom dropdown-end ">
                                    <label tabIndex={0} className="text-4xl cursor-pointer ">
                                        <BsThreeDots></BsThreeDots>
                                    </label>
                                    <ul
                                        tabIndex={0}
                                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 dark:bg-[#32205a]"
                                    >
                                        <li>
                                            <Link
                                                className="hover:bg-[#FF3F4A] hover:text-white"
                                                href="/"
                                            >
                                                Bookmark
                                            </Link>
                                        </li>
                                        <li>
                                            <Link
                                                className="hover:bg-[#FF3F4A] hover:text-white"
                                                href="/"
                                            >
                                                Save
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="pb-7">
                            <p className="py-4 text-black dark:text-white">
                                {post?.postText?.length > 100 ? (
                                    <>
                                        {post?.postText.slice(0, 100)}{" "}
                                        <Link className="font-bold" to="/">
                                            See More...
                                        </Link>
                                    </>
                                ) : (
                                    post?.postText
                                )}
                            </p>
                            <Link to={`/postDetails/${post?._id}`}>
                                <img
                                    className="w-full rounded-md mt-[5px]"
                                    src={post?.img}
                                    alt=""
                                />
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookMarkedCard;