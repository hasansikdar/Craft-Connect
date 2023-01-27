import React from 'react';
import profileImg from '../../../assets/profile.jpg';
import craftify from '../../../assets/jinnahPagePic/jinnahPagePic3.jpg'
import { BsThreeDots } from "react-icons/bs";

const PostView = () => {
    return (
      <div className=" ">
        <div className="flex gap-4 justify-center">
          <div className="w-[251px] border">
            <p>Hello </p>
          </div>
          <div>
            <div className="w-[530px] border p-5 rounded-md shadow-md">
              <div className='flex justify-between items-center'>
                <div className="flex gap-3 items-center">
                  <img
                    className="w-[50px] rounded-full"
                    src={profileImg}
                    alt=""
                  />
                  <div>
                    <p>Rahat Kabir Ifty</p>
                    <p className="text-sm">19 hours ago</p>
                  </div>
                </div>
                <div>
                    <p className='text-4xl cursor-pointer'><BsThreeDots/></p>
                </div>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt libero magni tempore officiis amet hic rerum harum
                  possimus eius, unde ea a accusantium saepe?
                </p>
                <img
                  className="w-[488px] rounded-md mt-[5px]"
                  src={craftify}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="w-[251px] border">
            <p>Hello </p>
          </div>
        </div>
      </div>
    );
};

export default PostView;