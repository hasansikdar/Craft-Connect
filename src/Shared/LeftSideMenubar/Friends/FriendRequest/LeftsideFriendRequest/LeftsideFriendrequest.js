import React from "react";
import { BsPeopleFill } from "react-icons/bs";
const LeftsideFriendrequest = () => {
  return (
    <section className="flex flex-col justify-center items-center py-64 ">
      <div className="text-9xl ">
        <BsPeopleFill></BsPeopleFill>
      </div>
      <h2 className="font-bold">
        Select People's names to preview their profile
      </h2>
    </section>
  );
};

export default LeftsideFriendrequest;
