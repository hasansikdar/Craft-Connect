import React from "react";

const FriendSuggestionCard = () => {
  return (
    <div className="mt-5">
      <div className="flex gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
          className="avatar h-20 w-20"
        />
        <div>
          <h2 className="font-bold text-base">Md Abdullah Al Mamun</h2>
          <small>100 mutual friend</small>
          <div className="flex gap-2">
            <button className="w-[120px] h-[36px] bg-[#2374E1] rounded text-white">
              Add Friend
            </button>
            <button className="w-[120px] h-[36px] bg-gray-600 rounded text-white">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendSuggestionCard;
