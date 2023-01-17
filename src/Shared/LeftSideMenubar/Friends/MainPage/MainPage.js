import React from "react";
import MainPageCard from "./MainPageCard/MainPageCard";

const MainPage = () => {
  return (
    <section className="p-10">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold dark:text-white text-black">
          Friend Requests
        </h2>
        <button className="text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 rounded">
          See All
        </button>
      </div>
      <MainPageCard></MainPageCard>
    </section>
  );
};

export default MainPage;
