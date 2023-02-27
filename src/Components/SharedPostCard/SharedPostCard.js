import React from 'react';
import { Link } from 'react-router-dom';

const SharedPostCard = ({ post, refetch }) => {
    return (
        <div>
            <div className="my-3">
                <div className="w-full border border-[#FF3F4A]/50 p-5 rounded-md shadow-md dark:bg-black bg-[#ffffff]">
                    <div className="flex justify-between items-center text-black dark:text-white mb-8">
                        <div className="flex gap-3 items-center">
                            <img
                                className="w-[50px] h-[50px] object-cover rounded-full"
                                src={post?.sharedUserPhoto}
                                alt=""
                            />
                            <div>
                                <p><span className='text-lg font-medium'>{post?.sharedUserName}</span> Shared a post by <Link className='text-lg font-medium' to={`/user/${post.userEmail}`}>
                                    {post?.postUserName}
                                </Link></p>
                                <p className="text-sm">{post?.sharedUserDate}</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-md shadow-md'>
                        <div className="pb-5">
                            <Link>
                                <img
                                    className="w-full rounded-t-md mt-[5px]"
                                    src={post?.PostPhoto}
                                    alt=""
                                />
                            </Link>
                        </div>
                        <div className="text-black dark:text-white px-5">
                            <div className="flex gap-3 items-center">
                                <img
                                    className="w-[50px] h-[50px] object-cover rounded-full"
                                    src={post?.postUserPhoto}
                                    alt=""
                                />
                                <div>
                                    <Link to={`/user/${post.userEmail}`}>
                                        <p>{post?.postUserName}</p>
                                    </Link>
                                    <p className="text-sm">{post?.postTime}</p>
                                </div>
                            </div>
                            <p className="py-2 text-black dark:text-white">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SharedPostCard;