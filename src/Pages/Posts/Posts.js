import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import PostCard from "../../Components/PostCard/PostCard";
import { Authcontext } from "../../Context/UserContext";

const Posts = () => {
  const { user } = useContext(Authcontext);

  const { data: posts = [], refetch } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await fetch('https://craft-connect-server.vercel.app/usersPost');
      const data = res.json();
      return data;
    }
  })


  return (
    <div className="justify-center py-10">
      {
        posts.map(post => <PostCard user={user} post={post}></PostCard>)
      }
    </div>
  );
};

export default Posts;
