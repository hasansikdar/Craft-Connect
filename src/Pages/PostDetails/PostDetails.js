import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import CommentBox from "../../Components/CommentBox/CommentBox";
import PostUserInfo from "../../Components/PostCard/PostUserInfo/PostUserInfo";
import { Authcontext } from "../../Context/UserContext";
import Comment from "../../Shared/Comment/Comment";
import Loading from "../../Shared/Loading/Loading";
import Navbar from "../Navbar/Navbar";

const PostDetails = () => {
  const postdetails = useLoaderData();
  const { user } = useContext(Authcontext);
  const [editComment, setEditComment] = useState(false);
  const [updateComment, setUpdateComment] = useState();
  // const [time, setTime] = useState()

  const {
    data: comments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [postdetails?.uniqueId],
    queryFn: async () => {
      const res = await fetch(
        `https://craft-connect-server.vercel.app/comments/${postdetails?.uniqueId}`
      );
      const data = res.json();
      return data;
    },
  });

  const handleEditComment = (_id) => {
    fetch(
      `https://craft-connect-server.vercel.app/editComment/${_id}?email=${user?.email}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ updateComment }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("Comment Updated");
          setEditComment(false);
          refetch();
        }
      })
      .catch((error) => {
        toast.error(error.message);
        setEditComment(false);
      });
  };

  const handleDelteComment = (_id) => {
    fetch(
      `https://craft-connect-server.vercel.app/deleteComment/${_id}?email=${user?.email}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data?.acknowledged) {
          toast.success("Delete Comment");
          refetch();
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div className="">
      <Navbar></Navbar>
      <div className="h-auto">
        <div className="my-10 flex w-11/12 mx-auto pt-10">
          <div className="w-[70%] ">
            <img
              className="w-full h-[500px] rounded"
              src={postdetails?.img}
              alt=""
            />
          </div>
          <div className="ml-5 p-2 pl-4 rounded border-l border-white w-[25%]">
            <PostUserInfo post={postdetails}></PostUserInfo>
            <div className="">
              <p className="my-5">{postdetails?.postText}</p>
            </div>
            <div className="mt-10">
              <CommentBox
                refetch={refetch}
                uniqueId={postdetails?.uniqueId}
              ></CommentBox>
            </div>
            <div className="h-[300px] overflow-scroll removeScroll">
              {comments.length > 0 ? (
                <div>
                  {isLoading ? (
                    <Loading></Loading>
                  ) : (
                    comments.map((comment) => (
                      <Comment
                        setUpdateComment={setUpdateComment}
                        handleDelteComment={handleDelteComment}
                        setEditComment={setEditComment}
                        editComment={editComment}
                        handleEditComment={handleEditComment}
                        refetch={refetch}
                        comment={comment}
                      ></Comment>
                    ))
                  )}
                </div>
              ) : (
                <h1 className="text-xl">No Comments</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
