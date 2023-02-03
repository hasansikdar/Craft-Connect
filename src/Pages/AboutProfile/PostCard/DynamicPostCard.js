import React from 'react';
import profileImg from "../../../assets/profile.jpg";
import craftify from "../../../assets/jinnahPagePic/jinnahPagePic3.jpg";
import { BsThreeDots } from "react-icons/bs";
import { BiLike, BiShareAlt } from "react-icons/bi";
import { TfiCommentAlt } from "react-icons/tfi";

const DynamicPostCard = ({myPost}) => {

    const { userName, userPhoto, postText, currentData, img } = myPost;

    return (
      <div>
        <div className="w-[320px] ml-[44px] md:ml-0 md:w-[530px] border p-5 rounded-md shadow-md">
          <div className="flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img className="w-[50px] rounded-full" src={userPhoto} alt="" />
              <div>
                <p>{userName}</p>
                <p className="text-sm">{currentData}</p>
              </div>
            </div>
            <div>
              <p className="text-4xl cursor-pointer">
                <BsThreeDots />
              </p>
            </div>
          </div>
          <div className="pb-7">
            <p>
              {postText}
            </p>
            <img
              className="w-[488px] rounded-md mt-[5px]"
              src={img}
              alt=""
            />
          </div>
          <div className="border-t">
            <div className="flex justify-between items-center pt-3 mx-3">
              <div className="flex gap-8">
                <div className="flex items-center gap-1">
                  <button className="text-[34px]">
                    <BiLike />
                  </button>
                  <p>17</p>
                </div>
                <div className="flex items-center gap-1">
                  <button className="text-[27px]">
                    <TfiCommentAlt />
                  </button>
                  <p>07</p>
                </div>
              </div>
              <div>
                <button className="text-3xl">
                  <BiShareAlt />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default DynamicPostCard;