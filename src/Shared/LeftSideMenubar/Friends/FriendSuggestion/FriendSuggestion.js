import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import Navbar from "../../../../Pages/Navbar/Navbar";
import FriendSuggestionCard from "./FriendSuggestionCard/FriendSuggestionCard";
import FriendSuggestionsLeftSide from "./FriendSuggestionLeftSide/FriendSuggestionsLeftSide";
import SuggestionsProfile from "./SuggestionsProfile/SuggestionsProfile";

const FriendSuggestion = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 mt-[60px] bg-white dark:bg-[#2C2048] text-black dark:text-white max-w-screen-xl">
        <div className="col-span-3 dark:bg-[#2C2048] h-screen w-full hidden lg:block">
          <FriendSuggestionsLeftSide></FriendSuggestionsLeftSide>
        </div>
        <div className="col-span-9 hidden lg:block">
          <SuggestionsProfile></SuggestionsProfile>
        </div>
      </div>

      {/* For Mobile device  */}
      <div className="max-w-xl h-screen">
        <div className="dark:text-white text-black flex items-center gap-2 px-4">
          <Link
            to="/friends"
            className="text-2xl hover:bg-gray-100 dark:hover:bg-gray-600  text-black rounded-full dark:text-white"
          >
            <BsArrowLeftShort></BsArrowLeftShort>
          </Link>
          <h2 className="text-xl font-bold">Suggestions</h2>
        </div>
        <hr className="mt-2" />

        <div className="px-2 flex flex-col gap-2">
          <span className="px-4 pt-2  text-black dark:text-white font-medium ">
            People You May Know
          </span>
          <FriendSuggestionCard></FriendSuggestionCard>
          <FriendSuggestionCard></FriendSuggestionCard>
          <FriendSuggestionCard></FriendSuggestionCard>
          <FriendSuggestionCard></FriendSuggestionCard>
        </div>
      </div>
    </section>
  );
};

export default FriendSuggestion;
