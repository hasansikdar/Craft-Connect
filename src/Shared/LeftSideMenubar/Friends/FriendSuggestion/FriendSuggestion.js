import React from "react";
import Navbar from "../../../../Pages/Navbar/Navbar";
import FriendSuggestionsLeftSide from "./FriendSuggestionLeftSide/FriendSuggestionsLeftSide";
import SuggestionsProfile from "./SuggestionsProfile/SuggestionsProfile";

const FriendSuggestion = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 mt-[60px] bg-white dark:bg-black text-black dark:text-white max-w-screen-xl mx-auto">
        <div className="col-span-3 dark:bg-black h-screen bg-gray-100">
          <FriendSuggestionsLeftSide></FriendSuggestionsLeftSide>
        </div>
        <div className="col-span-9 bg-gray-400">
          <SuggestionsProfile></SuggestionsProfile>
        </div>
      </div>
    </section>
  );
};

export default FriendSuggestion;
