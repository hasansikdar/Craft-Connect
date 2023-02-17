import React, { useContext } from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import img1 from "../../../assets/ifty/last-phot11-large.webp";
import img2 from "../../../assets/ifty/last-phot12-large.webp";
import img3 from "../../../assets/ifty/last-phot13-large.webp";
import img4 from "../../../assets/ifty/last-phot14-large.webp";
import img5 from "../../../assets/ifty/last-phot15-large.webp";
import img6 from "../../../assets/ifty/last-phot17-large.webp";
import img7 from "../../../assets/ifty/last-phot18-large.webp";
import img8 from "../../../assets/ifty/photo-1503965830912-6d7b07921cd1.avif";
import img9 from "../../../assets/ifty/327271761_1333126427522949_1565944805079070089_n.jpg";
import { Authcontext } from "../../../Context/UserContext";
const ProfileLeft = () => {
  const { myPro } = useContext(Authcontext)
  return (
    <div className="w-full col-start-[1] col-end-[5] p-5 border border-slate-500/80 hidden md:block rounded-md shadow-md h-fit text-black dark:text-white">
      <div>
        <div className="border-b border-slate-500/80 pb-2 ">
          <p className="text-2xl font-bold">Profile Intro</p>
        </div>
        <div className="pt-5">
          <p className="font-bold">About Me:</p>
          <p>
            Hi, I'm Khalid Bin Walid, I'm 36 and I work as a Digital Designer
            for the “Daydreams” Agency in Pier 56.
          </p>
        </div>
        <div className="pt-5">
          <p className="font-bold">Favorite Youtube Channel:</p>
          <p>
            Programming Hero Community, Learn With Sumit, The Flutter Way, Code
            with Mosh, Roman Just Codes.
          </p>
        </div>
        <div className="pt-5">
          {
            myPro?.socialMedia ? <>
              <div className="divider m-0"></div>
              <div className="px-2">
                <p className="font-bold dark:text-white text-gray-700 ml-2 mb-2">
                  Social Networks:
                </p>
                <a target={'_blank'} href={myPro?.socialMedia[0]} className="flex items-center justify-center py-2 w-full rounded-md gap-2 bg-[#FF3F4A] mb-2 px-2">
                  <BsFacebook className="text-white text-xl" />
                  <p className="font-bold text-white">Facebook</p>
                </a>
                <a target={'_blank'} href={myPro?.socialMedia[1]} className="flex items-center justify-center py-2 w-full rounded-md gap-2 bg-[#FF3F4A] mb-2 px-2">
                  <BsLinkedin className="text-white  text-xl" />
                  <p className="font-bold text-white">Linkedin</p>
                </a>
              </div>
            </>
              :
              <>
                <p className='mt-2'>You Do not Have any social network</p>
              </>
          }
        </div>
      </div>
      <div className="w-full h-full py-5 hidden md:block rounded-md mt-5">
        <div className="">
          <p className="text-2xl font-bold">Latest Photos</p>
        </div>
        <div className="pr-2 mt-2 grid grid-cols-3 gap-3 grid-rows-auto overflow-y-auto h-[300px]">
          <div>
            <img
              className="w-full rounded-md h-full object-cover"
              src={img1}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full rounded-md h-full object-cover"
              src={img1}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full rounded-md h-full object-cover"
              src={img1}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full rounded-md h-full object-cover"
              src={img2}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full rounded-md h-full object-cover"
              src={img3}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full rounded-md h-full object-cover"
              src={img4}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full rounded-md h-full object-cover"
              src={img9}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full rounded-md h-full object-cover"
              src={img6}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full rounded-md h-full object-cover"
              src={img7}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full rounded-md h-full object-cover"
              src={img8}
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full rounded-md h-full object-cover"
              src={img5}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLeft;
