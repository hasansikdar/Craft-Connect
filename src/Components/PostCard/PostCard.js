import React, { useContext, useEffect, useState } from "react";
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
  // const [likeLength, setLikeLength] = useState(post?.likes);
  const [allLike, setAllLike] = useState([]);

  const likeLength = post?.likes;
  // const { user: currentUser } = useContext(Authcontext);
  // const reactions = [
  //   {
  //     emojilink: "https://media.tenor.com/ebIp1YWRZs8AAAAC/thumbs-up-emoji.gif",
  //   },
  //   { emojilink: "https://media.tenor.com/4D53-zz8dAcAAAAM/love-cute.gif" },
  //   { emojilink: "https://media.tenor.com/o3BgAS-o0q4AAAAM/funny-emoji.gif" },
  //   { emojilink: "https://media.tenor.com/l5_u4JytFLYAAAAC/wow-emoji.gif" },
  //   {
  //     emojilink:
  //       "https://i.pinimg.com/originals/63/0d/77/630d77d1baeb4b29cd47eee5e5443bbe.gif",
  //   },
  //   {
  //     emojilink:
  //       "https://media.tenor.com/bZAnaVqOjlQAAAAC/loudly-crying-face-joypixels.gif",
  //   },
  // ];

  // console.log(post);

  // const { data: postreactions = [] } = useQuery({
  //   queryKey: [post?.uniqueId],
  //   queryFn: async () => {
  //     const res = await fetch(`https://craft-connect-server-blond.vercel.app/postReactions/${post?.uniqueId}`);
  //     const data = res.json();
  //     refetch()
  //     return data;
  //   }
  // })

  useEffect(() => {
    fetch(
      `https://craft-connect-server-blond.vercel.app/postReactions/${post?.uniqueId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReactions(data);
      });
  }, [post?.uniqueId]);

  // const ownReaction = postReactions.map(
  //   (reactionItem) => reactionItem?.email === user?.email
  // );

  // for like post

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

  return (
    <div>
      {/* Latest Design Post card  */}
      <div>
        <div className="my-4 bg-white dark:bg-[#261b40]">
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
                {/* <label
                  htmlFor="threeDots"
                  className="text-4xl cursor-pointer"
                ></label> */}
                <div className="dropdown dropdown-bottom dropdown-end ">
                  <label tabIndex={0} className="text-4xl cursor-pointer ">
                    <BsThreeDots></BsThreeDots>
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
                        Bookmark
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:bg-[#FF3F4A] hover:text-white"
                        href="/"
                      >
                        Save
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pb-5">
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
                  className="w-11/12 m-auto rounded-md mt-[5px]"
                  src={post?.img}
                  alt=""
                />
              </Link>
            </div>
            <div className="border-t border-black dark:border-white">
              <div className="flex justify-between items-center pt-3 mx-3 text-black dark:text-white">
                <div className="flex gap-8">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => likedUser(user?.uid)}
                      disabled={liked === true}
                      className={
                        liked ? "text-[25px] text-blue-600" : "text-[25px]"
                      }
                    >
                      <BiLike />
                    </button>

                    <p className="text-[25px]">{post?.likes?.length}</p>
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
                  <button className="text-[25px]">
                    <BiShareAlt />
                  </button>
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
