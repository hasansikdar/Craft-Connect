import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Authcontext } from "../../Context/UserContext";
import BookMarkedCard from "./BookMarkedCard";

const BookMarked = () => {

  const { user } = useContext(Authcontext)

  const { data: posts = [], refetch } = useQuery({
    queryKey: [user?.email],
    // queryKey: ["posts" ,user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/user/bookmarkPost/:${user?.email}`);
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="h-screen flex flex-col  items-center mt-5 md:mt-10 ">
      <h1 className="text-xl font-semibold text-black">All your bookmarked posts are here!</h1>
      
      <div>
        {
          posts.map((post) => <BookMarkedCard
          key={post._id}
          ></BookMarkedCard>)
        }
      </div>
    </div>
  );
};

export default BookMarked;
