import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import FriendSuggestionCard from "../FriendSuggestionCard/FriendSuggestionCard";

const FriendSuggestionsLeftSide = () => {
  return (
    <div className="p-4">
      <div className="">
        <div className="flex items-center gap-4 ">
          <Link
            to="/friends"
            className="text-2xl hover:bg-gray-100 dark:hover:bg-gray-600  text-black rounded-full dark:text-white"
          >
            <BsArrowLeftShort></BsArrowLeftShort>
          </Link>
          <div className="leading-3">
            <small>Friends</small>
            <h2 className="text-2xl font-bold">Suggestions</h2>
          </div>
        </div>

        <h2 className=" font-medium pt-2">People You May Know</h2>
      </div>
      <div>
        <FriendSuggestionCard></FriendSuggestionCard>
      </div>
    </div>
  );
};

export default FriendSuggestionsLeftSide;
