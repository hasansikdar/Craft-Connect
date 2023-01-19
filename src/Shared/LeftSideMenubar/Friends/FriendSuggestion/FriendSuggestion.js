import React from "react";
import Navbar from "../../../../Pages/Navbar/Navbar";
import FriendSuggestionsLeftSide from "./FriendSuggestionLeftSide/FriendSuggestionsLeftSide";
import SuggestionsProfile from "./SuggestionsProfile/SuggestionsProfile";

const FriendSuggestion = () => {
  return (
    <section>
      <Navbar></Navbar>
      <div className="grid grid-cols-12 mt-[60px] bg-white dark:bg-black text-black dark:text-white">
        <div className="col-span-3 border border-slate-600 bg-gray-50 dark:bg-black h-screen">
          <FriendSuggestionsLeftSide></FriendSuggestionsLeftSide>
        </div>
        <div className="col-span-9">
          <SuggestionsProfile></SuggestionsProfile>
        </div>
      </div>
    </section>
  );
};

export default FriendSuggestion;
