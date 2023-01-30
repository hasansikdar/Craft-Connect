import React, { useContext } from "react";
import profileImg from "../../../assets/profile.jpg";
import craftify from "../../../assets/jinnahPagePic/jinnahPagePic3.jpg";
import { BsThreeDots } from "react-icons/bs";
import { BiLike, BiShareAlt } from "react-icons/bi";
import { TfiCommentAlt } from "react-icons/tfi";
import { Authcontext } from "../../../Context/UserContext";
import { useQuery } from "@tanstack/react-query";
import DynamicPostCard from "./DynamicPostCard";

const PostCards = () => {

  const { user } = useContext(Authcontext);
  console.log(user);

  const url = `http://localhost:5000/myposts?email=${user?.email}`;

  const { data: myPosts = [] } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });
  console.log(myPosts);

  return (
    <div>
      {
        myPosts.map((myPost) =><DynamicPostCard
        key={myPost._id}
        myPost={myPost}
        ></DynamicPostCard>)
      }
    </div>
  );
};

export default PostCards;
