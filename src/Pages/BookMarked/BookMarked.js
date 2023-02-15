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
      const res = await fetch(`http://localhost:5000/user/bookmarkPost/${user?.email}`);
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="h-screen flex flex-col  items-center mt-5 md:mt-5 overflow-y-auto w-full pb-32">
      <h1 className="sm:text-xl md:text-2xl pt-5 pb-3 font-semibold text-black">All your bookmarked posts are here!</h1>
      
      <div>
        {
          posts.map((post) => <BookMarkedCard
          key={post._id}
          post={post}
          refetch= {refetch}
          ></BookMarkedCard>)
        }
      </div>
    </div>
  );
};

export default BookMarked;
