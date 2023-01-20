import React, { useState } from 'react';
import coverImg from "../../assets/cover.jpg";
import profile from "../../assets/profile.jpg";
import img1 from "../../assets/profile.jpg";
import img2 from "../../assets/hasan.png";
import img3 from "../../assets/maruf.png";
import img4 from "../../assets/fearAllah.jpg";
import Navbar from '../Navbar/Navbar';
import LeftSideMobile from '../LeftSideBar/LeftSideMobile';
import { BsCameraFill } from "react-icons/bs";
import { FaPhotoVideo, FaUpload } from "react-icons/fa";
import Cover from './Cover';
import ProfilePicture from './ProfilePicture';


const Profile = () => {

    

    return (
      <div>
        <Navbar></Navbar>
        <Cover></Cover>
        <ProfilePicture></ProfilePicture>
      </div>
    );
};

export default Profile;