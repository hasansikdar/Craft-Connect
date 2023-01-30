import React from "react";
import PostCards from "./PostCards";
import ProfileLeft from "./ProfileLeft";
import img1 from "../../../assets/ifty/last-phot11-large.webp";
import img2 from "../../../assets/ifty/last-phot12-large.webp";
import img3 from "../../../assets/ifty/last-phot13-large.webp";
import img4 from "../../../assets/ifty/last-phot14-large.webp";
import img5 from "../../../assets/ifty/last-phot15-large.webp";
import img6 from "../../../assets/ifty/last-phot17-large.webp";
import img7 from "../../../assets/ifty/last-phot18-large.webp";
import img8 from "../../../assets/ifty/photo-1503965830912-6d7b07921cd1.avif";
import img9 from "../../../assets/ifty/327271761_1333126427522949_1565944805079070089_n.jpg";

const PostView = () => {
  return (
    <div className=" ">
      <div className="flex gap-4 justify-center">
        <ProfileLeft />
        <div>
          <PostCards />
        </div>
        <div className="w-[251px] h-[290px] p-5 border hidden md:block rounded-md shadow-md">
          <div className="border-b">
            <p className="text-2xl font-bold">Latest Photos</p>
          </div>
          <div className="pt-5 grid grid-cols-3 gap-3">
            <div>
              <img className="w-[55px]" src={img1} alt="" />
            </div>
            <div>
              <img className="w-[55px]" src={img2} alt="" />
            </div>
            <div>
              <img className="w-[55px]" src={img3} alt="" />
            </div>
            <div>
              <img className="w-[55px]" src={img4} alt="" />
            </div>
            <div>
              <img className="w-[55px]" src={img9} alt="" />
            </div>
            <div>
              <img className="w-[55px]" src={img6} alt="" />
            </div>
            <div>
              <img className="w-[55px]" src={img7} alt="" />
            </div>
            <div>
              <img className="w-[55px]" src={img8} alt="" />
            </div>
            <div>
              <img className="w-[55px]" src={img5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostView;
