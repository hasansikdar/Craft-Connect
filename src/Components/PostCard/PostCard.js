import React, { useContext, useEffect, useState } from "react";
import PostAuthorityModal from "./PostUserInfo/PostAuthorityModal/PostAuthorityModal";
import PostUserInfo from "./PostUserInfo/PostUserInfo";
import likeicon from "../../assets/icons/like.png";
import {
  FaCommentAlt,
  FaLaughWink,
  FaLaugh,
  FaAngleDown,
  FaShare,
} from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

import { Authcontext } from "../../Context/UserContext";
import Reactions from "../../Shared/Reactions/Reactions";
import { useQuery } from "@tanstack/react-query";
import { TfiCommentAlt } from "react-icons/tfi";
import { BiLike, BiShareAlt } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";

const PostCard = ({
  refetch,
  post,
  handelReaction,
  handleDeletePost,
  user,
}) => {
  const [postReactions, setReactions] = useState([]);
  const [editPost, setEditPost] = useState(false);

  const reactions = [
    {
      emojilink: "https://media.tenor.com/ebIp1YWRZs8AAAAC/thumbs-up-emoji.gif",
    },
    { emojilink: "https://media.tenor.com/4D53-zz8dAcAAAAM/love-cute.gif" },
    { emojilink: "https://media.tenor.com/o3BgAS-o0q4AAAAM/funny-emoji.gif" },
    { emojilink: "https://media.tenor.com/l5_u4JytFLYAAAAC/wow-emoji.gif" },
    {
      emojilink:
        "https://i.pinimg.com/originals/63/0d/77/630d77d1baeb4b29cd47eee5e5443bbe.gif",
    },
    {
      emojilink:
        "https://media.tenor.com/bZAnaVqOjlQAAAAC/loudly-crying-face-joypixels.gif",
    },
  ];

  // const { data: postreactions = [] } = useQuery({
  //   queryKey: [post?.uniqueId],
  //   queryFn: async () => {
  //     const res = await fetch(`https://craft-connect-server.vercel.app/postReactions/${post?.uniqueId}`);
  //     const data = res.json();
  //     refetch()
  //     return data;
  //   }
  // })

  useEffect(() => {
    fetch(
      `https://craft-connect-server.vercel.app/postReactions/${post?.uniqueId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setReactions(data);
      });
  }, [post?.uniqueId]);

  const ownReaction = postReactions.map(
    (reactionItem) => reactionItem?.email === user?.email
  );

  return (
    <div>
      {/* <div className=" card md:w-[590px] my-3 dark:bg-base-100 bg-white text-black dark:text-white shadow-xl border border-white">
        <div className="card-body">
          <div>
            <PostUserInfo
              handleDeletePost={handleDeletePost}
              post={post}
            ></PostUserInfo>
          </div>
          <p>
            {post?.postText?.length > 100 ? (
              <>
                {post?.postText.slice(0, 100)}{" "}
                <Link className="font-bold" to="/">
                  See More..
                </Link>
              </>
            ) : (
              post?.postText
            )}
          </p>
        </div>
        <Link to={`/postDetails/${post?._id}`}>
          <img className="w-full" src={post?.img} alt="Shoes" />
        </Link>
        <div className="p-4">
          <div className="flex justify-between">
            <span className="flex">
              <img className="w-5 h-5 mr-2" src={likeicon} alt="" />
              <a className="hover:underline text-white" href="/">
                {postReactions?.length}
              </a>
            </span>
            <span>
              <a className="hover:underline" href="/">
                1 Comment
              </a>
            </span>
          </div>
          <div className="flex justify-between cursor-pointer mt-3 border-t py-4 border-white">
            <button className="flex btn bg-white hover:bg-white dropdown dropdown-top dropdown-hover  btn-outline btn-sm btn-info">
              {post?.emojiLink?.length ? (
                <img
                  className="w-8 h-7 bg-black rounded-full flex items-center justify-center"
                  src={post?.emojiLink}
                  alt=""
                />
              ) : (
                <>
                  <img className="w-5 h-5 mr-2" src={likeicon} alt="" />
                  <label
                    className="m-1 cursor-pointer dark:text-white text-black shadow-lg"
                    tabIndex={0}
                  >
                    {ownReaction}
                  </label>
                </>
              )}
              <div className="">
                <div
                  tabIndex={0}
                  className="dropdown-content -ml-10 bg-white text-black menu p-2 shadow rounded-box w-52"
                >
                  <div className="grid grid-cols-6">
                    {reactions.map((react) => (
                      <Reactions
                        post={post}
                        handelReaction={handelReaction}
                        id={post?._id}
                        react={react}
                      ></Reactions>
                    ))}
                  </div>
                </div>
              </div>
            </button>
            <button className="flex btn btn-outline shadow-lg btn-sm dark:text-white text-black dark:hover:text-black">
              <FaCommentAlt className="mr-2"></FaCommentAlt>
              Comment
            </button>
            <button className="flex btn btn-outline shadow-lg btn-sm dark:text-white text-black dark:hover:text-black">
              <FaShare className="mr-2"></FaShare>
              Share
            </button>
          </div>
        </div>
        <div className="mb-2 mx-2">
          <div className="flex justify-end hidden">
            <div className="dropdown dropdown-bottom  dropdown-end">
              <label
                tabIndex={0}
                className="m-1 cursor-pointer  flex items-center ml-auto"
              >
                Most Recenter <FaAngleDown className="ml-1"></FaAngleDown>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <PostAuthorityModal></PostAuthorityModal> */}

      {/* Latest Design Post card  */}
      <div>
        <div className="my-3">
          <div className="w-[320px] ml-[44px] md:ml-0 md:w-[590px] max-h-[560px] border p-5 rounded-md shadow-md">
            <div className="flex justify-between items-center text-black dark:text-white">
              <div className="flex gap-3 items-center">
                <img
                  className="w-[50px] h-[50px] object-cover rounded-full"
                  src={post?.userPhoto}
                  alt=""
                />
                <div>
                  <p>{post?.userName}</p>
                  <p className="text-sm">19 hours ago</p>
                </div>
              </div>
              <div>
                <p className="text-4xl cursor-pointer">
                  <BsThreeDots />
                </p>
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
                  className="w-full rounded-md mt-[5px] max-h-[300px]"
                  src={post?.img}
                  alt=""
                />
              </Link>
            </div>
            <div className="border-t border-black dark:border-white">
              <div className="flex justify-between items-center pt-3 mx-3 text-black dark:text-white">
                <div className="flex gap-8">
                  <div className="flex items-center gap-1">
                    <button className="text-[34px]">
                      <BiLike />
                    </button>
                    <p>17</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="text-[27px]">
                      <TfiCommentAlt />
                    </button>
                    <p>07</p>
                  </div>
                </div>
                <div>
                  <button className="text-3xl">
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
