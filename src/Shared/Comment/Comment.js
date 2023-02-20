import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { Authcontext } from "../../Context/UserContext";

const Comment = ({
  comment,
  handleDelteComment,
  setUpdateComment,
  setEditComment,
  editComment,
  handleEditComment,
  refetch,
}) => {
  const { user } = useContext(Authcontext);
  const {
    commentText,
    userName,
    userEmail,
    uniqueId,
    userPhoto,
    _id,
    currentData,
  } = comment;
  // const [editComment, setEditComment] = useState(false);
  // const [updateComment, setUpdateComment] = useState(commentText);

  return (
    <div>
      <div className="comments w-max-content border rounded-md border-gray-50/10 mt-5">
        <div>
          <div className="flex p-3">
            <img className="w-[32px] mr-4 h-[32px] object-cover rounded-full" src={userPhoto} alt="" />
            <div className="">
              <p className="hover:underline text-black dark:text-white text-sm" >
                {userName}
              </p>
              {user?.email === userEmail ? (
                <>
                  {editComment ? (
                    <textarea
                      className="textarea textarea-bordered mt-2 outline-none focus:border focus:border-gray-50/10 resize-none bg-transparent"
                      onChange={(e) => setUpdateComment(e.target.value)}
                      defaultValue={commentText}
                      type="text"
                    ></textarea>
                  ) : (
                    <p>{commentText}</p>
                  )}
                  {editComment ? (
                    <div className="mt-3">
                      <button
                        onClick={() => handleEditComment(_id)}
                        href="#"
                        className="bg-green-200 hover:bg-green-300 transition-colors ease-linear duration-300 rounded-lg inline-block px-2 py-1 mr-2 font-semibold text-green-900 leading-tight"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditComment(false)}
                        href="#"
                        className="bg-red-200 hover:bg-red-300 transition-colors ease-linear duration-300 rounded-lg inline-block px-2 py-1 font-semibold text-red-900 leading-tight"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <div className="mt-3">
                      <button
                        onClick={() => setEditComment(true)}
                        href="#"
                        className="bg-green-200 hover:bg-green-300 transition-colors ease-linear duration-300 rounded-lg inline-block px-2 py-1 mr-2 font-semibold text-green-900 leading-tight"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelteComment(_id)}
                        href="#"
                        className="bg-red-200 hover:bg-red-300 transition-colors ease-linear duration-300 rounded-lg inline-block px-2 py-1 font-semibold text-red-900 leading-tight"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <p className="hover:underline text-black dark:text-white text-sm" >
                {userName}
              </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
