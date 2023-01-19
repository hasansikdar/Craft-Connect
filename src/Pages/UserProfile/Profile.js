import React from 'react';
import coverImg from "../../assets/cover.jpg";
import profile from "../../assets/profile.jpg";
import img1 from "../../assets/profile.jpg";
import img2 from "../../assets/hasan.png";
import img3 from "../../assets/maruf.png";
import img4 from "../../assets/fearAllah.jpg";
import Navbar from '../Navbar/Navbar';
import LeftSideMobile from '../LeftSideBar/LeftSideMobile';

const Profile = () => {
    return (
      <div>
        <Navbar></Navbar>
        <div>
          <div className="mt-3">
            <LeftSideMobile></LeftSideMobile>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    );
};

export default Profile;