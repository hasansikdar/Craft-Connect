import React, { useContext } from "react";
import profileImg from "../../../assets/profile.jpg";
import craftify from "../../../assets/jinnahPagePic/jinnahPagePic3.jpg";
import { BsThreeDots } from "react-icons/bs";
import { BiLike, BiShareAlt } from "react-icons/bi";
import { TfiCommentAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { Authcontext } from "../../../Context/UserContext";

const DynamicPostCard = ({ post }) => {
  // console.log(post);
  const { myPro } = useContext(Authcontext);
  const {
    userName,
    userPhoto,
    postText,
    currentDate,
    img,
    userEmail,
    _id,
    likes,
  } = post;

  return (
    <>
      <div className="my-3">
        <div className=" border p-5 rounded-md shadow-md ">
          <div className="flex justify-between items-center text-black dark:text-white">
            <div className="flex gap-3 items-center">
              <img
                className="w-[50px] h-[50px] object-cover rounded-full"
                src={myPro[0]?.photoURL}
                alt=""
              />
              <div>
                <Link to={`/user/${userEmail}`}>
                  <p>{userName}</p>
                </Link>
                <p className="text-sm">{currentDate}</p>
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
                    <a className="hover:bg-[#FF3F4A] hover:text-white" href="/">
                      Bookmark
                    </a>
                  </li>
                  <li>
                    <a className="hover:bg-[#FF3F4A] hover:text-white" href="/">
                      Save
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* post text and image  */}
          <div className="pb-7">
            <p className="py-4 text-black dark:text-white">
              {postText?.length > 100 ? (
                <>
                  {postText.slice(0, 100)}{" "}
                  <Link className="font-bold" to="/">
                    See More...
                  </Link>
                </>
              ) : (
                postText
              )}
            </p>
            <Link to={`/postDetails/${_id}`}>
              <img className="w-full rounded-md mt-[5px]" src={img} alt="" />
            </Link>
          </div>
          {/* like and comment  */}
          <div className="border-t border-black dark:border-white">
            <div className="flex justify-between items-center pt-3 mx-3 text-black dark:text-white">
              <div className="flex gap-8">
                <div className="flex items-center gap-1">
                  <button className="text-[34px] text-blue-600">
                    <BiLike />
                  </button>

                  <p className="text-3xl">{likes?.length}</p>
                </div>
                <div className="flex items-center gap-1">
                  <Link to={`/postDetails/${_id}`}>
                    <button className="text-[27px]">
                      <TfiCommentAlt />
                    </button>
                  </Link>
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
    </>
  );
};

export default DynamicPostCard;
