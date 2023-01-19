import React from "react";
import Navbar from "../../../Pages/Navbar/Navbar";
import LeftSide from "./LeftSide/LeftSide";
import MainPage from "./MainPage/MainPage";

const Friends = () => {
  return (
    <section className="bg-white dark:bg-black">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-3 hidden lg:block ">
          <LeftSide></LeftSide>
        </div>
        <div className="col-span-9">
          <MainPage></MainPage>
        </div>
      </div>
    </section>
  );
};

export default Friends;
