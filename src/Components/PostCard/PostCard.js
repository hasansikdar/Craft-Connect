import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
// import PostAuthorityModal from "./PostUserInfo/PostAuthorityModal/PostAuthorityModal";
// import PostUserInfo from "./PostUserInfo/PostUserInfo";
// import likeicon from "../../assets/icons/like.png";
// import {
//   FaCommentAlt,
//   FaLaughWink,
//   FaLaugh,
//   FaAngleDown,
//   FaShare,
// } from "react-icons/fa";
// import { PhotoProvider, PhotoView } from "react-photo-view";
// import { Link } from "react-router-dom";
// import { FcLike } from "react-icons/fc";
// import UserContext, { Authcontext } from "../../Context/UserContext";
// import Reactions from "../../Shared/Reactions/Reactions";
// import { useQuery } from "@tanstack/react-query";
// import { TfiCommentAlt } from "react-icons/tfi";
import { BiLike, BiShareAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import PostDetails from "../../Pages/PostDetails/PostDetails";
import PostDetailsModal from "./PostDetailsModal";

const PostCard = ({
  refetch,
  post,
  handelReaction,
  handleDeletePost,
  user,
}) => {
  const [postReactions, setReactions] = useState([]);
  const [open, setOpen] = useState(false);
  const [postId, setPostId] = useState('');
  const [editPost, setEditPost] = useState(false);
  const [love, setLove] = useState(false);
  const [liked, setLiked] = useState(false);
  // const [likeLength, setLikeLength] = useState(post?.likes);
  const [allLike, setAllLike] = useState([]);

  const likeLength = post?.likes;
  useEffect(() => {
    fetch(
      `https://craft-connect-server-blond.vercel.app/postReactions/${post?.uniqueId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReactions(data);
      });
  }, [post?.uniqueId]);

  const likedUser = (id) => {
    const hello = likeLength?.map((h) => h?.userId?.uid === user?.uid);
    console.log(hello);

    if (!hello[0]) {
      return handleLike();
    } else {
      return setLove(true);
    }
  };

  const handleLike = () => {
    setLove(true);
    const likeInfo = { userId: user, postId: post?._id };
    console.log(likeInfo);
    allLike.push(...likeLength, likeInfo);
    fetch(`http://localhost:5000/users/${post?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allLike),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          setLiked(true);
          refetch();
        }
      });
  };

  const handelAddBookmarked = () => {
    const bookMarkedPost = {
      bookmarkedUserEmail: user?.email,
      bookmarkedUserName: user?.displayName,
      postId: post?._id,
      postUserEmail: post?.userEmail,
      postUserName: post?.userName,
      postUserPhoto: post?.userPhoto,
      PostPhoto: post?.img,
      postTime: post?.currentDate,
      postText: post?.postText,
    }
    fetch("http://localhost:5000/user/bookmark", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookMarkedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Bookmarked Successfully Done!")
      });
  }

  return (
    <div>
      {/* Latest Design Post card  */}
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
                      <Link onClick={handelAddBookmarked}
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
            <div className="pb-7" onClick={() => { setOpen(true); setPostId(post?._id) }}>
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
              <div>
                <Link>
                  <img
                    className="w-full rounded-md mt-[5px]"
                    src={post?.img}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="border-t border-black dark:border-white">
              <div className="flex justify-between items-center pt-3 mx-3 text-black dark:text-white">
                <div className="flex gap-8">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => likedUser(user?.uid)}
                      disabled={liked === true}
                      className={
                        liked === true
                          ? "text-[34px] text-blue-600"
                          : "text-[34px]"
                      }
                    >
                      <BiLike />

                    </button>

                    <p className="text-3xl">{post?.likes?.length}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Link to={`/postDetails/${post?._id}`}>
                      <button className="text-[27px]">
                        <TfiCommentAlt />
                      </button>
                    </Link>
                    {/* <p>07</p> */}
                  </div>
                </div>
                <div>
                  {/* Share button and Dropdown  */}
                  <div className="dropdown dropdown-bottom dropdown-end ">
                    <label tabIndex={0} className="text-4xl cursor-pointer ">
                      <BiShareAlt></BiShareAlt>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 dark:bg-[#32205a]"
                    >
                      <li>
                        <a
                          className="hover:bg-[#FF3F4A] hover:text-white"
                          href="/"
                        >
                          Share Now (Public)
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:bg-[#FF3F4A] hover:text-white"
                          href="/"
                        >
                          Share To Your Feed
                        </a>
                      </li>
                      <li>
                        <a
                          className="hover:bg-[#FF3F4A] hover:text-white"
                          href="/"
                        >
                          Share To Your Story
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PostDetailsModal open={open} setOpen={setOpen} postId={postId} />

    </div>

  );
};

export default PostCard;
