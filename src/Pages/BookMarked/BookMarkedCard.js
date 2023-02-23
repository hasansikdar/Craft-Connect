import React from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import { toast } from "react-hot-toast";

const BookMarkedCard = ({ post, refetch }) => {
  const handelRemoveBookmarked = () => {
    const post_id = post._id;
    // console.log(post_id);
    fetch(`https://craft-connect-server-blond.vercel.app/user/bookmarkedPost/${post_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Bookmarked Successfully Deleted!");
        refetch();
      });
  };

  return (
    <div className="my-5">
      <div className="w-full border border-[#FF3F4A] p-5 rounded-md shadow-md">
        <div className="flex justify-between items-center text-black dark:text-white">
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
                    onClick={handelRemoveBookmarked}
                    className="hover:bg-[#FF3F4A] hover:text-white"
                    href="/"
                  >
                    Remove Bookmark
                  </Link>
                </li>
                {/* <li>
                                            <Link
                                                className="hover:bg-[#FF3F4A] hover:text-white"
                                                href="/"
                                            >
                                                Save
                                            </Link>
                                    </li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="pb-1">
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

          {/* <Link to={`/postDetails/${post?._id}`}> */}
          <img
            className="w-full rounded-md mt-[5px]"
            src={post?.PostPhoto}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default BookMarkedCard;
