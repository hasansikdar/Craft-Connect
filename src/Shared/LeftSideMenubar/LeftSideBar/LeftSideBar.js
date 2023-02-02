
//         <div className="sidebar min-h-screen w-[3.35rem] overflow-hidden border-r hover:w-56 hover:bg-white hover:shadow-lg">








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
import { GiFamilyHouse } from "react-icons/gi";
import { IoBarChartOutline } from "react-icons/io5";
import { BsNewspaper, BsBookmark } from "react-icons/bs";
import { RiAdvertisementLine } from "react-icons/ri";
import { FaRegFlag } from "react-icons/fa";
import { FiHome, FiUsers } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png';

const LeftSideBar = () => {
  const menus = [
    { name: "Home", link: "/", icon: FiHome },
    { name: "Most Recent", link: "/", icon: BsNewspaper },
    { name: "Friends", link: "/", icon: FiUsers },
    { name: "Pages", link: "/", icon: FaRegFlag },
    { name: "Marketplace", link: "/", icon: GiFamilyHouse },
    { name: "Bookmarked", link: "/", icon: BsBookmark },
    { name: "Ad Center", link: "/", icon: RiAdvertisementLine },
    { name: "Ads Manager", link: "/", icon: IoBarChartOutline },
  ];
  const [open, setOpen] = useState(false);
  return (
    <section className="flex gap-6 ">
      <div
        className={`lg:bg-[#FAFBFD] dark:lg:bg-[#563f8e] dark:text-white min-h-screen ${open ? "w-72" : "w-[70px]"
          } duration-500 text-black  z-9999 fixed lg:shadow-xl`}
      >
        <div className="bg-zinc-800 h-[72px] p-0 hidden lg:block">
          <Link to='/'>
            <img src={logo} className="w-14 d-block m-auto" alt="" />
          </Link>
        </div>

        <div className="bg-zinc-800 h-[72px] p-0 lg:hidden">
          <img src={logo} onClick={() => setOpen(!open)} className="w-14 d-block m-auto" alt="" />
        </div>



        <div className="py-3 lg:flex px-4 justify-end  hidden">
          {open ?
            <RxCross1
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            /> :
            <HiMenuAlt3
              size={26}
              className="cursor-pointer"
              onClick={() => setOpen(!open)}
            />}
        </div>


        <div className="mt-2 lg:flex flex-col px-4 gap-4 relative  hidden">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-base  gap-3.5 font-medium p-2 hover:text-[#FF3F4A] 
                 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "25" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre text-black dark:text-white duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
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






        {/* {open && <div className="py-3 dark:bg-[#563f8e] flex px-4 justify-end  md:hidden">
          { open && 
          <RxCross1
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />}
        </div>}


        { open && <div className="mt-2 flex flex-col dark:bg-[#563f8e] duration-700 px-4 gap-4 relative  md:hidden">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${menu?.margin && "mt-5"
                } group flex items-center text-base   gap-3.5 font-medium p-2 hover:text-[#FF3F4A] 
                 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "25" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre text-black dark:text-white duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
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
        </div>} */}



        {open &&
          <div className="dark:bg-[#563f8e] h-screen bg-[#FAFBFD]">
            <div className="py-3 flex px-4 justify-end  md:hidden">
              {open &&
                <RxCross1
                  size={26}
                  className="cursor-pointer"
                  onClick={() => setOpen(!open)}
                />}
            </div>


            <div className="mt-2 flex flex-col duration-1000 px-4 gap-4 relative  md:hidden">
              {menus?.map((menu, i) => (
                <Link
                  to={menu?.link}
                  key={i}
                  className={` ${menu?.margin && "mt-5"
                    } group flex items-center text-base   gap-3.5 font-medium p-2 hover:text-[#FF3F4A] 
                 rounded-md`}
                >
                  <div>{React.createElement(menu?.icon, { size: "25" })}</div>
                  <h2
                    style={{
                      transitionDelay: `${i + 3}00ms`,
                    }}
                    className={`whitespace-pre text-black dark:text-white duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"
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
        }




      </div>
    </section>
  );
};

export default LeftSideBar;