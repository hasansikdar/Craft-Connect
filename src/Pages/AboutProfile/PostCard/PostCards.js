import React, { useContext } from "react";
import profileImg from "../../../assets/profile.jpg";
import craftify from "../../../assets/jinnahPagePic/jinnahPagePic3.jpg";
import { BsThreeDots } from "react-icons/bs";
import { BiLike, BiShareAlt } from "react-icons/bi";
import { TfiCommentAlt } from "react-icons/tfi";
import { Authcontext } from "../../../Context/UserContext";
import { useQuery } from "@tanstack/react-query";
import DynamicPostCard from "./DynamicPostCard";
import UserPostInProfile from "../UserProfileById/UserPostInProfile";

const PostCards = ({ userDetails }) => {
  // const { user } = useContext(Authcontext);
  // console.log(userDetails.email);

  const url = `http://localhost:5000/users-post?email=${userDetails?.email}`;

  const { data: userPosts = [] } = useQuery({
    queryKey: ["products", userDetails?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = res.json();
      return data;
    },
  });
  console.log(userPosts);

  return (
    <>
      {
        userPosts.map((post) =><UserPostInProfile
        key={post._id}
        post={post}
        ></UserPostInProfile>)
      }
    </>
  );
};

export default PostCards;
