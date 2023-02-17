import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import PostCard from "../../Components/PostCard/PostCard";
import { Authcontext } from "../../Context/UserContext";
import Loading from "../../Shared/Loading/Loading";

const Posts = () => {
  const { user } = useContext(Authcontext);
  const [loading, setLoading] = useState(false);

  const {
    data: posts = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch(
        "https://craft-connect-server-blond.vercel.app/usersPost"
      );
      const data = res.json();
      return data;
    },
  });

  // delete post
  const handleDeletePost = (id) => {
    setLoading(true);
    fetch(`https://craft-connect-server-blond.vercel.app/usersPost/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Post Deleted");
          setLoading(false);
          refetch();
        }
      })
      .catch((error) => {
        toast.error(error.message);
        // console.log(error.message);
      });
  };

  const handelReaction = (id, imageLink, uniqueId) => {
    const reactionInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.displayURL,
      imageLink,
      uniqueId,
    };

    fetch(`https://craft-connect-server-blond.vercel.app/reactions`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reactionInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("liked");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (posts.length === 0) {
    return (
      <div>
        <h1 className="text-center text-2xl my-10">No Post Available</h1>
      </div>
    );
  }

  return (
    <div className="justify-center lg:py-10">
      {posts.map((post) => (
        <PostCard
          refetch={refetch}
          handelReaction={handelReaction}
          handleDeletePost={handleDeletePost}
          user={user}
          post={post}
        ></PostCard>
      ))}
    </div>
  );
};

export default Posts;
