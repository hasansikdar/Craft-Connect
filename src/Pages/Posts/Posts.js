import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import PostCard from "../../Components/PostCard/PostCard";
import { Authcontext } from "../../Context/UserContext";

const Posts = () => {
  const { user } = useContext(Authcontext);
  const [loading, setLoading] = useState(false);






  const { data: posts = [], refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/usersPost');
      const data = res.json();
      return data;
    }
  })
  
  
  // delete post
  const handleDeletePost = id => {
    setLoading(true)
    fetch(`http://localhost:5000/usersPost/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Post Deleted')
          setLoading(false);
          refetch();
        }
      })
      .catch(error => {
        toast.error(error.message);
        console.log(error.message)
      })
  }

  

  const handelReaction = (id, imageLink, uniqueId) => {
    const reactionInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      userPhoto: user?.displayURL,
      imageLink,
      uniqueId,
    }

    fetch(`http://localhost:5000/reactions`, {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(reactionInfo)
    })
    .then(res => res.json())
    .then(data => {
        if(data.acknowledged){
          toast.success('liked')
          refetch();
        }
    })
  }

  return (
    <div className="justify-center py-10">
      {
        posts.map(post => <PostCard refetch={refetch} handelReaction={handelReaction} handleDeletePost={handleDeletePost} user={user} post={post}></PostCard>)
      }
    </div>
  );
};

export default Posts;
