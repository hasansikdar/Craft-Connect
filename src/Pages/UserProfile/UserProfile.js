// import React, { useContext } from 'react';
// import Navbar from '../Navbar/Navbar';
// import coverImg from '../../assets/cover.jpg'
// import profile from '../../assets/profile.jpg'
// import img1 from '../../assets/profile.jpg';
// import img2 from '../../assets/hasan.png';
// import img3 from '../../assets/maruf.png';
// import img4 from '../../assets/fearAllah.jpg';
// import { BsCameraFill } from "react-icons/bs";
// import { Authcontext } from '../../Context/UserContext';

// const UserProfile = () => {
//   const {user} = useContext(Authcontext);

//     return (
//       <div className="">
//         <Navbar></Navbar>
//         <div className="w-[70%] mx-auto">
//           <div className="">
//             <img
//               className="w-[900px] h-[300px] rounded-b-lg mx-auto"
//               src={coverImg}
//               alt=""
//             />
//             <button className="bg-blue-600 px-2 py-1 rounded-lg text-white font-bold hover:bg-blue-500 absolute right-[20%] top-[49%]">
//               Edit profile
//             </button>
//             <button className="'btn-outline'>
//               <div className="ml-16 absolute top-[54%]">
//                 <div>
//                   <img className="w-[14%] rounded-full" src={profile} alt="" />
//                 </div>
//               </div>
//               <div className=" bg-gray-700 hover:bg-gray-600 p-2 absolute top-[71%] left-[28%] rounded-full">
//                 <BsCameraFill className="text-2xl text-white" />
//               </div>
//             </button>
//             <div className="absolute left-[32%] top-[59%]">
//               <h1 className="text-3xl">Rahat Kabir Ifty</h1>
//               <p className="py-1">700 friends</p>
//               <div className="flex gap-80">
//                 <div className="flex">
//                   <img className="w-8 rounded-full" src={img1} alt="" />
//                   <img className="w-8 rounded-full" src={img2} alt="" />
//                   <img className="w-8 rounded-full" src={img3} alt="" />
//                   <img className="w-8 rounded-full" src={img4} alt="" />
//                 </div>
//                 <div>
//                   <button className="mr-3 bg-blue-600 px-2 py-1 rounded-lg text-white font-bold hover:bg-blue-500">
//                     Add to story
//                   </button>
//                   <button className="bg-blue-600 px-2 py-1 rounded-lg text-white font-bold hover:bg-blue-500">
//                     Edit profile
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
// };

// export default UserProfile;
