import React from "react";

const MainPageCard = () => {
  return (
    <div className="max-w-xs w-[219px] h-[370px] rounded-md bg-white text-black dark:bg-gray-900 dark:text-gray-100">
      <img
        src="https://source.unsplash.com/random/300x300/?2"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-52 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-4 space-y-2 bg-gray-100 dark:bg-gray-800 rounded-b-md">
        <div className="">
          <h2 className="text-[16px] font-semibold tracking-wide">
            Md Abdullah Al Mamun
          </h2>
          <p className="dark:text-gray-100">Curabitur luctus erat</p>
        </div>
        <button className="w-[185px] h-[36px] bg-[#2374E1] rounded text-white">
          Confirm
        </button>
        <button className="w-[185px] h-[36px] bg-gray-600 rounded text-white">
          Delete
        </button>
      </div>
    </div>
  );
};

export default MainPageCard;
