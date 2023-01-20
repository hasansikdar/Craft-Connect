import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Authcontext } from '../../Context/UserContext';

const Comment = ({ comment, handleDelteComment, setUpdateComment, setEditComment, editComment, handleEditComment, refetch }) => {
    const { user } = useContext(Authcontext);
    const { commentText, userName, userEmail, uniqueId, userPhoto, _id, currentData } = comment;
    // const [editComment, setEditComment] = useState(false);
    // const [updateComment, setUpdateComment] = useState(commentText);





    return (
        <div>
            <div className="comments border rounded my-3">
                <div>
                    <div className="flex p-3">
                        <img className="w-7 mr-4 h-7 rounded-full" src={userPhoto} alt="" />
                        <div>
                            <a className="hover:underline text-blue-500" href="">
                                {userName}
                            </a>
                            {user?.email === userEmail ?
                                <>
                                    {editComment ?
                                        <textarea className='textarea textarea-bordered mt-2' onChange={e => setUpdateComment(e.target.value)} defaultValue={commentText} type="text"></textarea>
                                        :
                                        <p>{commentText}</p>
                                    }
                                    {editComment ?
                                        <div className="mt-3">
                                            <button onClick={() => handleEditComment(_id)} href="#" className="mr-2 btn btn-sm">
                                                Save
                                            </button>
                                            <button onClick={() => setEditComment(false)} href="#" className="btn btn-sm btn-error">
                                                Cancel
                                            </button>
                                        </div>
                                        :
                                        <div className="mt-3">
                                            <button onClick={() => setEditComment(true)} href="#" className="mr-2 btn btn-sm">
                                                Edit
                                            </button>
                                            <button onClick={() => handleDelteComment(_id)} href="#" className="btn btn-sm btn-error">
                                                Delete
                                            </button>
                                        </div>
                                    }
                                </>
                                :
                                <p>{commentText}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;