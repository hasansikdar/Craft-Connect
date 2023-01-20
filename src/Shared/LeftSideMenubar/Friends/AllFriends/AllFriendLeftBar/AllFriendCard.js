import React from "react";

const AllFriendCard = () => {
  return (
    <div className="mt-5">
      <div className="flex items-center justify-between gap-2 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded">
        <img
          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
          alt=""
          className="avatar h-14 w-14"
        />
        <div>
          <h2 className="font-bold text-base">Md Abdullah Al Mamun</h2>
          <small>100 mutual friend</small>
        </div>

        <button>...</button>
      </div>
    </div>
  );
};

export default AllFriendCard;
