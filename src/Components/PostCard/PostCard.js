import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BiLike, BiShareAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { Authcontext } from "../../Context/UserContext";

const PostCard = ({
  refetch,
  post,
  handelReaction,
  handleDeletePost,
  user,
}) => {
  const [postReactions, setReactions] = useState([]);
  const [editPost, setEditPost] = useState(false);
  const [love, setLove] = useState(false);
  const [liked, setLiked] = useState(false);
  const { myPro } = useContext(Authcontext);

  const likeLength = post?.likes;
  const handleLike = (id) => {
    const postId = post?._id;
    const likedUser = id;
    const likedInfo = { likedUser, postId };
    fetch("http://localhost:5000/like", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(likedInfo),
    })
      .then((result) => result.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          setLiked(true);
          refetch();
        }
      });
  };

  const reportedPost = () => {
    const reportPost = {
      postAuthor: post?.userName,
      postId: post?._id,
      postAuthorEmail: post?.userEmail,
      postAuthorImg: post?.userPhoto,
      postImg: post?.img,
      postText: post?.postText,
      reporterName: user?.displayName,
      reporterEmail: user?.email,
      reporterImage: user?.photoURL,
    };

    fetch("http://localhost:5000/report-post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reportPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Post Reported");
        }
      })
      .catch((error) => {
        toast.error(error.message);
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
    };
    fetch("http://localhost:5000/user/bookmark", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookMarkedPost),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Bookmarked Successfully Done!");
      });
  };

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
                      <Link
                        onClick={handelAddBookmarked}
                        className="hover:bg-[#FF3F4A] hover:text-white"
                        href="/"
                      >
                        Bookmark
                      </Link>
                    </li>
                    <li>
                      <p
                        onClick={reportedPost}
                        className="hover:bg-[#FF3F4A] hover:text-white"
                      >
                        Report Post
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pb-7">
            <Link to={`/postDetails/${post?._id}`}>
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
              {post?.img ? (

                <img
                className="w-full rounded-md mt-[5px] h-96 object-cover"
                src={post?.img}
                alt=""
                />
              ): ""}
              </Link>
            </div>
            <div className="border-t border-black dark:border-white">
              <div className="flex justify-between items-center pt-3 mx-3 text-black dark:text-white">
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-1">
                    {/* onClick={() => likedUser(user?.uid)} */}
                    <button
                      onClick={() => handleLike(myPro[0]?._id)}
                      disabled={liked === true}
                      className={
                        liked === true
                          ? "text-[30px] text-blue-600"
                          : "text-[30px]"
                      }
                    >
                      <BiLike />
                    </button>

                    <p className="text-2xl">{likeLength.length}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Link to={`/postDetails/${post?._id}`}>
                      <button className="text-[27px] mt-3">
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
                      {/* <BiShareAlt></BiShareAlt> */}
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
    </div>
  );
};

export default PostCard;
