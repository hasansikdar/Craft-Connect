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
import { FcLike } from "react-icons/fc";
import UserContext, { Authcontext } from "../../Context/UserContext";
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

  const ownReaction = postReactions.map(
    (reactionItem) => reactionItem?.email === user?.email
  );

  // for like post

  const likedUser = (id) => {
    const hello = likeLength?.map((h) => h?.userId?.uid === user?.uid);
    // console.log(hello[0]);
    if (!hello[0]) {
      return handleLike();
    } else {
      return setLove(true);
    }
  };

  const handleLike = () => {
    setLove(true);
    const likeInfo = { userId: user, postId: post?._id };
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
        }
      });
  };

  return (
    <div>
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
                    <button
                      onClick={() => likedUser(user?.uid)}
                      disabled={liked === true}
                      className={
                        liked ? "text-[34px] text-blue-600" : "text-[34px]"
                      }
                    >
                      <BiLike />
                    </button>

                    <p className="text-3xl">{post?.likes?.length}</p>
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
