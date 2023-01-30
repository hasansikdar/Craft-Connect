// import React from "react";
// import Bottom from "../Bottom/Bottom";
// import Top from "../Top/Top";

// const LeftSideBar = () => {
//   return (
//     <div className="hidden overflow-x-hidden h-screen pb-20 lg:block w-[300px] p-3 dark:bg-zinc-800 dark:text-white bg-white text-black">
//       <Top></Top>
//       <Bottom></Bottom>
//     </div>
//   );
// };

// export default LeftSideBar;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const LeftSideBar = () => {
//   return (
//     <div className='flex '>
//       <div className="min-h-screen bg-gray-100 z-9999 fixed">
//         <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">
//           <div className="flex h-screen flex-col justify-between pt-2 pb-6">
//             <div>
//               <div className="w-max p-2.5">
//                 <img src="https://tailus.io/images/logo.svg" className="w-32" alt="" />
//               </div>
//               <ul className="mt-6 space-y-2 tracking-wide">
//                 <li className="min-w-max">
//                   <Link href="#" aria-label="dashboard" className="relative flex items-center space-x-4 bg-gradient-to-r from-sky-600 to-cyan-400 px-4 py-3 text-white">
//                     <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
//                       <path d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z" className="fill-current text-cyan-400 dark:fill-slate-600"></path>
//                       <path d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z" className="fill-current text-cyan-200 group-hover:text-cyan-300"></path>
//                       <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300"></path>
//                     </svg>
//                     <span className="-mr-1 font-medium">Dashboard</span>
//                   </Link>
//                 </li>
//                 <li className="min-w-max">
//                   <Link href="#" className="bg group flex items-center space-x-4 rounded-full px-4 py-3 text-gray-600">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                       <path className="fill-current text-gray-300 group-hover:text-cyan-300" fill-rule="evenodd" d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z" clip-rule="evenodd" />
//                       <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
//                     </svg>
//                     <span className="group-hover:text-gray-700">Categories</span>
//                   </Link>
//                 </li>
//                 <li className="min-w-max">
//                   <Link href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                       <path className="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clip-rule="evenodd" />
//                       <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
//                     </svg>
//                     <span className="group-hover:text-gray-700">Reports</span>
//                   </Link>
//                 </li>
//                 <li className="min-w-max">
//                   <Link href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                       <path className="fill-current text-gray-600 group-hover:text-cyan-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
//                       <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
//                     </svg>
//                     <span className="group-hover:text-gray-700">Other data</span>
//                   </Link>
//                 </li>
//                 <li className="min-w-max">
//                   <Link href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//                       <path className="fill-current text-gray-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
//                       <path className="fill-current text-gray-600 group-hover:text-cyan-600" fill-rule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clip-rule="evenodd" />
//                     </svg>
//                     <span className="group-hover:text-gray-700">Finance</span>
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//             <div className="w-max -mb-3">
//               <Link href="#" className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:fill-cyan-600" viewBox="0 0 20 20" fill="currentColor">
//                   <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
//                 </svg>
//                 <span className="group-hover:text-gray-700">Settings</span>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className='ml-20'>
//         <p>123456789Jinnah jinnah Jinnah jinnah v Jinnah jinnahJinnah jinnahJinnah jinnah</p>
//       </div>
//     </div>
//   );
// };

// export default LeftSideBar;


// import React from 'react';

// const LeftSideBar = () => {
//   return (
//     <div>

//     </div>
//   );
// };

// export default LeftSideBar;


import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsNewspaper } from "react-icons/bs";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
import { FiMessageSquare, FiFolder, FiShoppingCart, FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const menus = [
    { name: "Home", link: "/", icon: FiHome },
    { name: "Most Recent", link: "/", icon: BsNewspaper },
    { name: "messages", link: "/", icon: FiMessageSquare },
    { name: "analytics", link: "/", icon: TbReportAnalytics},
    { name: "File Manager", link: "/", icon: FiFolder },
    { name: "Cart", link: "/", icon: FiShoppingCart },
    { name: "Saved", link: "/", icon: AiOutlineHeart },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#FAFBFD] min-h-screen ${open ? "w-72" : "w-[76px]"
          } duration-500 text-black px-4 z-9999 fixed shadow-lg`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-base  gap-3.5 font-medium p-2 hover:text-[#FF3F4A] 
                 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "30" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                  
                }}
                className={`whitespace-pre text-black duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
                  }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${open && "hidden"
                  } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold ml-20">
        REACT TAILWIND
      </div>
    </section>
  );
};

export default LeftSideBar;