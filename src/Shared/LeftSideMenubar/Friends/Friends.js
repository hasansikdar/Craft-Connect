import React from "react";
import Navbar from "../../../Pages/Navbar/Navbar";
import LeftSide from "./LeftSide/LeftSide";
import MainPage from "./MainPage/MainPage";

const Friends = () => {
  return (
    <section className="bg-white dark:bg-black">
      <Navbar></Navbar>
      <div className="grid grid-cols-12">
        <div className="col-span-4 hidden lg:block">
          <LeftSide></LeftSide>
        </div>
        <div className="col-span-8">
          <MainPage></MainPage>
        </div>
      </div>
    </section>
  );
};

export default Friends;
