// import React from "react";
// import { Outlet } from "react-router";
// import Navbar from "../Pages/Navbar/Navbar";
// import LeftSideBar from "../Shared/LeftSideMenubar/LeftSideBar/LeftSideBar";
// import ProfileDetails from "../Shared/LeftSideMenubar/ProfileDetails/ProfileDetails";
// import RightBar from "../Shared/Right-Side-Bar/RightBar/RightBar";

// const Main = () => {
//   return (
//     <div className="dark:bg-[#2C2048] bg-white overflow-hidden h-screen">
//       <Navbar></Navbar>
//       <div className="lg:flex">
//         {/* left site bar */}
//         <div>
//           <LeftSideBar></LeftSideBar>
//         </div>
//         <div>
//           <ProfileDetails></ProfileDetails>
//         </div>
//         <div className="lg:w-[600px] xl:mx-auto mt-[60px]">
//           <Outlet></Outlet>
//         </div>
//         <div className="lg:ml-auto rounded-lr-lg">
//           <RightBar></RightBar>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;


import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from "../Pages/Navbar/Navbar";
import LeftSideBar from '../Shared/LeftSideMenubar/LeftSideBar/LeftSideBar'

const Main = () => {
  return (
    <div className="dark:bg-[#2C2048] bg-white overflow-hidden h-screen">
      <Navbar></Navbar>

      <div className='lg:flex w-full'>
        <div className='w-[130px]'>
          <LeftSideBar></LeftSideBar>
        </div>

        <div className="w-full mt-[60px] m-auto">
          <Outlet></Outlet>
        </div>

      </div>
      
    </div>
  );
};

export default Main;