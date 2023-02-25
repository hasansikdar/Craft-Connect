import React, { useContext } from "react";
import { Authcontext } from "../../Context/UserContext";
import { FaLaugh } from "react-icons/fa";
import { toast } from "react-hot-toast";

const CommentBox = ({ uniqueId, refetch }) => {
  const { user } = useContext(Authcontext);
  let currentData = new Date();
  const dd = String(currentData.getDate()).padStart(2, "0");
  const mm = String(currentData.getMonth() + 1).padStart(2, "0");
  const yyyy = currentData.getFullYear();
  currentData = mm + "/" + dd + "/" + yyyy;

  const handleAddComment = (event) => {
    event.preventDefault();
    const commentText = event.target.commentText.value;

    const commentInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.photoURL,
      commentText,
      uniqueId,
      currentData,
    };

    fetch("https://craft-connect-server-blond.vercel.app/comment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Comment Added");
          refetch();
          event.target.reset();
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleAddComment}
        className="flex p-2 items-center border-b py-0 pb-3 border-white"
      >
        <img
          className="w-8 mr-4 h-8 rounded-full"
          src={user?.photoURL}
          alt=""
        />
        <div className="w-full input input-borderd flex items-center bg-gray-100 dark:bg-[#2A2A2A] border-white rounded-2xl input-sm">
          <input
            name="commentText"
            placeholder="What's on your mind ?"
            className="w-full bg-transparent"
            type="text"
          />
          <div className="ml-2">
            <div className="dropdown dropdown-left dropdown-top">
              <label tabIndex={0} className="m-1">
                <FaLaugh className="cursor-pointer"></FaLaugh>
              </label>
              <div
                tabIndex={0}
                className="dropdown-content menu bg-white text-black p-2 shadow dark:bg-base-100 rounded-box w-52"
              >
                <div className="grid grid-cols-5 justify-between gap-2">
                  <img
                    className="cursor-pointer"
                    src="https://media.tenor.com/4D53-zz8dAcAAAAM/love-cute.gif"
                    alt=""
                  />
                  <img
                    className="cursor-pointer"
                    src="https://media.tenor.com/o3BgAS-o0q4AAAAM/funny-emoji.gif"
                    alt=""
                  />
                  <img
                    className="cursor-pointer"
                    src="https://media.tenor.com/l5_u4JytFLYAAAAC/wow-emoji.gif"
                    alt=""
                  />
                  <img
                    className="cursor-pointer"
                    src="https://i.pinimg.com/originals/63/0d/77/630d77d1baeb4b29cd47eee5e5443bbe.gif"
                    alt=""
                  />
                  <img
                    className="cursor-pointer"
                    src="https://media.tenor.com/bZAnaVqOjlQAAAAC/loudly-crying-face-joypixels.gif"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CommentBox;
