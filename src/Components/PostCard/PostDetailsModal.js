import React, { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from "@headlessui/react";
import { useQuery } from '@tanstack/react-query';
import { Authcontext } from '../../Context/UserContext';
import Loading from '../../Shared/Loading/Loading';
import CommentBox from '../CommentBox/CommentBox';
import PostUserInfo from './PostUserInfo/PostUserInfo';
import Comment from '../../Shared/Comment/Comment';
const PostDetailsModal = ({ open, setOpen, postId }) => {
    const [postDetails, setPostDetails] = useState({});
    const { userName, userEmail, userPhoto, currentData, postText, img } = postDetails;
    useEffect(() => {
        fetch(`https://craft-connect-server-blond.vercel.app/postDetails/${postId}`)
            .then(res => res.json())
            .then(data => setPostDetails(data))
    }, [postId, postDetails])
    const { user } = useContext(Authcontext);
    const [editComment, setEditComment] = useState(false);
    const [updateComment, setUpdateComment] = useState();
    // const [time, setTime] = useState()

    const {
        data: comments = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: [postDetails?.uniqueId],
        queryFn: async () => {
            const res = await fetch(
                `https://craft-connect-server-blond.vercel.app/comments/${postDetails?.uniqueId}`
            );
            const data = res.json();
            return data;
        },
    });

    const handleEditComment = (_id) => {
        fetch(
            `https://craft-connect-server-blond.vercel.app/editComment/${_id}?email=${user?.email}`,
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
                    setEditComment(false);
                    refetch();
                }
            })
            .catch((error) => {
                setEditComment(false);
            });
    };

    const handleDelteComment = (_id) => {
        fetch(
            `https://craft-connect-server-blond.vercel.app/deleteComment/${_id}?email=${user?.email}`,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data?.acknowledged) {
                    refetch();
                }
            })
            .catch((error) => {
            });
    };
    const cancelButtonRef = useRef(null);
    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-100000"
                    initialFocus={cancelButtonRef}
                    onClose={() => setOpen(false)}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-100"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 backdrop-blur-[3px] backdrop-brightness-75" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-hidden">
                        <div className="flex h-screen justify-center py-4  text-center  items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-100"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-100"
                                leaveFrom="opacity-1;00 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-[#261b40] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-white dark:bg-[#261b40]  pt-5 pb-4 ">
                                        <h1 className="py-1 pb-4  text-center border-b border-gray-50 text-sm font-bold text-black dark:text-white">
                                            {userName} Post
                                        </h1>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6 cursor-pointer  rounded-md  absolute right-[25px] top-[20px]"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                        <>
                                            <>
                                                <div className="h-[500px] pl-2 sm:pl-2 text-black dark:text-white overflow-y-auto overflow-x-hidden">
                                                    {postDetails?.img ? (
                                                        <div className="mt-2 flex flex-col-reverse w-full pt-5">
                                                            <div className="w-full ">
                                                                <img
                                                                    className="w-full h-[500px] object-cover rounded border border-black"
                                                                    src={postDetails?.img}
                                                                    alt=""
                                                                />
                                                            </div>
                                                            <div className="p-2  rounded w-full">
                                                                <PostUserInfo post={postDetails}></PostUserInfo>
                                                                <div className="">
                                                                    <p className="my-5">{postDetails?.postText}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <div className="p-2 pl-4 rounded w-full">
                                                            <PostUserInfo post={postDetails}></PostUserInfo>
                                                            <div className="">
                                                                <p className="mt-3 ">{postDetails?.postText}</p>
                                                            </div>
                                                            {/* <div className="mt-10">
                                                                <CommentBox
                                                                    refetch={refetch}
                                                                    uniqueId={postDetails?.uniqueId}
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
                                                            </div> */}
                                                        </div>
                                                    )}
                                                    <div className="mt-10">
                                                        <CommentBox
                                                            refetch={refetch}
                                                            uniqueId={postDetails?.uniqueId}
                                                        ></CommentBox>
                                                    </div>
                                                    <div className="h-[200px] overflow-y-auto removeScroll">
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
                                            </>
                                        </>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
};

export default PostDetailsModal;