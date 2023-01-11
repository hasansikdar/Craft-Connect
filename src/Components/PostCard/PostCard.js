import React from 'react';
import PostAuthorityModal from './PostUserInfo/PostAuthorityModal/PostAuthorityModal';
import PostUserInfo from './PostUserInfo/PostUserInfo';
import likeicon from '../../assets/icons/like.png';
import likegificon from '../../assets/icons/smiley.gif';
import { FaCommentAlt, FaLaughWink, FaLaugh, FaAngleDown, FaShare } from "react-icons/fa";
import { PhotoProvider, PhotoView } from 'react-photo-view';

const PostCard = () => {
    return (
        <div>
            <div className=" card md:w-[600px] bg-base-100 shadow-xl border border-white">
                <div className="card-body">
                    <div>
                        <PostUserInfo></PostUserInfo>
                    </div>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <PhotoProvider>
                    <PhotoView src="https://placeimg.com/400/225/arch">
                        <figure><img className='w-full' src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                    </PhotoView>
                </PhotoProvider>
                <div className='p-4'>
                    <div className='flex justify-between'>
                        <span className='flex'>
                            <img className='w-5 h-5 mr-2' src={likeicon} alt="" />
                            <a className='hover:underline' href='#'>Muhammad Hasan</a>
                        </span>
                        <span>
                            <a className='hover:underline' href="">1 Comment</a>
                        </span>
                    </div>
                    <div className='flex justify-between cursor-pointer mt-3 border-y py-4 border-white'>
                        <button className='flex btn dropdown dropdown-top dropdown-hover  btn-outline btn-sm btn-info'>
                            <img className='w-5 h-5 mr-2' src={likeicon} alt="" />
                            <div className="">
                                <label tabIndex={0} className="m-1 cursor-pointer">Like</label>
                                <div tabIndex={0} className="dropdown-content -ml-10 bg-white text-black menu p-2 shadow rounded-box w-52">
                                    <div className='grid grid-cols-6'>
                                        <img src={likegificon} alt="" />
                                        <img src="https://media.tenor.com/4D53-zz8dAcAAAAM/love-cute.gif" alt="" />
                                        <img src="https://media.tenor.com/o3BgAS-o0q4AAAAM/funny-emoji.gif" alt="" />
                                        <img src="https://media.tenor.com/l5_u4JytFLYAAAAC/wow-emoji.gif" alt="" />
                                        <img src="https://i.pinimg.com/originals/63/0d/77/630d77d1baeb4b29cd47eee5e5443bbe.gif" alt="" />
                                        <img src="https://media.tenor.com/bZAnaVqOjlQAAAAC/loudly-crying-face-joypixels.gif" alt="" />
                                    </div>
                                </div>
                            </div>
                        </button>
                        <button className='flex btn btn-outline btn-sm'>
                            <FaCommentAlt className='mr-2'></FaCommentAlt>
                            Comment
                        </button>
                        <button className='flex btn btn-outline btn-sm'>
                            <FaShare className='mr-2'></FaShare>
                            Share
                        </button>
                    </div>
                </div>
                <div className='mb-2 mx-2'>
                    <div className='flex justify-end hidden'>
                        <div className="dropdown dropdown-bottom  dropdown-end">
                            <label tabIndex={0} className="m-1 cursor-pointer  flex items-center ml-auto">Most Recenter <FaAngleDown className='ml-1'></FaAngleDown></label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='flex p-2 items-center border-b py-0 pb-3 border-white'>
                        <img className='w-8 mr-4 h-8 rounded-full' src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/318630834_1301786737319944_3904799583444523390_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFjKxLtWVgY0EcruBuIVQC4QW8Nr8xSuHNBbw2vzFK4c37HruuJsS6Hhy1MU_2h_0URlH6e25P0qxtME-zNc4ri&_nc_ohc=rFDSVULP1gUAX_u9RLZ&_nc_ht=scontent.fdac5-1.fna&oh=00_AfDy1lh9uuleGSlpxGDclERHtSRQs_X1OnjiP8Z5PvOaWQ&oe=63C2B9A3" alt="" />
                        <div className='w-full input input-borderd flex items-center border-white rounded-2xl input-sm'>
                            <input placeholder="What's on your mind ?" className='w-full bg-transparent' type="text" />
                            <div className='ml-2'>
                                <div className="dropdown dropdown-left dropdown-top">
                                    <label tabIndex={0} className="m-1"><FaLaugh className='cursor-pointer'></FaLaugh></label>
                                    <div tabIndex={0} className="dropdown-content menu bg-white text-black p-2 shadow bg-base-100 rounded-box w-52">
                                        <div className='grid grid-cols-5 justify-between gap-2'>
                                            <img className='cursor-pointer' src={likegificon} alt="" />
                                            <img className='cursor-pointer' src="https://media.tenor.com/4D53-zz8dAcAAAAM/love-cute.gif" alt="" />
                                            <img className='cursor-pointer' src="https://media.tenor.com/o3BgAS-o0q4AAAAM/funny-emoji.gif" alt="" />
                                            <img className='cursor-pointer' src="https://media.tenor.com/l5_u4JytFLYAAAAC/wow-emoji.gif" alt="" />
                                            <img className='cursor-pointer' src="https://i.pinimg.com/originals/63/0d/77/630d77d1baeb4b29cd47eee5e5443bbe.gif" alt="" />
                                            <img className='cursor-pointer' src="https://media.tenor.com/bZAnaVqOjlQAAAAC/loudly-crying-face-joypixels.gif" alt="" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='comments'>
                        <div>
                            <div className='flex p-3'>
                                <img className='w-7 mr-4 h-7 rounded-full' src="https://scontent.fdac5-1.fna.fbcdn.net/v/t39.30808-6/318630834_1301786737319944_3904799583444523390_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFjKxLtWVgY0EcruBuIVQC4QW8Nr8xSuHNBbw2vzFK4c37HruuJsS6Hhy1MU_2h_0URlH6e25P0qxtME-zNc4ri&_nc_ohc=rFDSVULP1gUAX_u9RLZ&_nc_ht=scontent.fdac5-1.fna&oh=00_AfDy1lh9uuleGSlpxGDclERHtSRQs_X1OnjiP8Z5PvOaWQ&oe=63C2B9A3" alt="" />
                                <div>
                                    <a className='hover:underline' href="">Muhammad Hasan</a>
                                    <p>Your Are Bad boy.Your Are Bad</p>
                                    <div className='mt-3'>
                                        <a href='#' className='mr-2 hover:underline'>Like</a>
                                        <a href='#' className='hover:underline'>Reply</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PostAuthorityModal></PostAuthorityModal>
        </div>
    );
};

export default PostCard;