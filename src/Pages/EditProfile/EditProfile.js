import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router";
import { Authcontext } from "../../Context/UserContext";
import Loading from "../../Shared/Loading/Loading";
import UpdateProfile from "./UpdateProfile";

const EditProfile = () => {
  const { myPro } = useContext(Authcontext);
  const { email, displayName, photoURL } = myPro[0];
  const [edit, setEdit] = useState(true);
  const [loading, setLoading] = useState(false);
  // console.log(myPro[0])

  // const handleUpdateProfile = () => {
  //   setLoading(true);
  //   const imageKey = "024d2a09e27feff54122f51afddbdfaf";
  //   const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
  //   const formData = new FormData();
  //   formData.append("image", updateProfileImage);
  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const imageLink = data?.data?.display_url;
  //       const userInfo = {
  //         displayName: updateName,
  //         photoURL: imageLink,
  //       };
  //       updateuserdata(userInfo)
  //         .then((res) => {
  //           toast.success("Profile Updated");
  //           setEdit(false);
  //           setLoading(false);
  //           refetch();
  //           navigate("/editprofile");
  //         })
  //         .catch((error) => {
  //           toast.error(error.message);
  //         });
  //     });

  //   fetch();
  // };

  return (
    // <div className="py-5">
    //   <h1 className="text-3xl text-center mt-5 text-[#FF3F4A] font-semibold">
    //     Edit Profile
    //   </h1>

    //   <div className="profileInfo p-3 mt-10 rounded text-center border border-white shadow h-[400px] overflow-scroll bg-gray-100 dark:bg-[#23124b] mx-2 text-black dark:text-white">
    //     <div className="text-right">
    //       <button
    //         onClick={() => setEdit(true)}
    //         className="btn btn-sm bg-[#FF3F4A] hover:bg-[#cb1f28] dark:text-white text-black hover:text-white"
    //       >
    //         Edit
    //       </button>
    //     </div>
    //     {loading ? (
    //       <Loading></Loading>
    //     ) : (
    //       <div>
    //         <div className="profile">
    //           <img
    //             className="w-20 h-20 rounded-full mx-auto"
    //             src={user?.photoURL}
    //             alt=""
    //           />
    //         </div>
    //         {edit ? (
    //           <div>
    //             <input
    //               onChange={(e) => setUpdateName(e.target.value)}
    //               className="input input-sm mb-3 text-black"
    //               defaultValue={user?.displayName}
    //               type="text"
    //             />
    //             <br></br>
    //             <input
    //               accept="image/*"
    //               onChange={(e) => setUpdateProfileImage(e.target.files[0])}
    //               type="file"
    //               className="file-input file-input-sm file-input-bordered text-black my-4 max-w-xs"
    //             />
    //             <br></br>
    //             <button
    //               onClick={handleUpdateProfile}
    //               className="btn btn-sm m-2"
    //             >
    //               Save
    //             </button>
    //             <button
    //               onClick={() => setEdit(false)}
    //               className="btn btn-sm m-2"
    //             >
    //               Cancel
    //             </button>
    //           </div>
    //         ) : (
    //           <h1 className="text-2xl text-[#FF3F4A] font-bold">
    //             {user?.displayName}
    //           </h1>
    //         )}
    //         <div className="othersProfileInfo mb-10 mt-4 bg-white dark:bg-[#341a70] lg:mx-[40%] rounded py-2">
    //           <h3>
    //             Email: <span className="text-blue-500">{user?.email}</span>
    //           </h3>
    //           <h3>Brithday Date: 14/10/2002</h3>
    //         </div>
    //       </div>
    //     )}
    //   </div>
    // </div>
    <>
      {edit ? (
        <section className="pt-10  dark:bg-[#2C2048] sm:py-16 lg:py-24">
          <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8 shadow-md pb-24 px-5 shadow-[#FF3F4A] rounded-md">
            <div className="flex justify-between items-center px-3 pt-5">
              <p className="text-2xl font-bold">My Profile</p>
              <p
                onClick={() => setEdit(false)}
                className="hover:cursor-pointer  mr-4 bg-red-200 hover:bg-red-300 transition-colors ease-linear duration-300 rounded-lg inline-block px-3 py-2 font-semibold text-red-900 leading-tight"
              >
                Edit
              </p>
            </div>
            <hr className="mt-2 mb-6 border border-[#FF3F4A]  px-3"></hr>
            <div className=" md:flex md:items-center md:space-x-14">
              <div className="relative max-[768px]:mx-auto flex-shrink-0 w-48 h-48">
                <div className="absolute  w-48 h-48 shadow-[#FF3F4A] rounded-full -bottom-1 -right-2 shadow-xl scale-90"></div>
                <img
                  className="relative object-cover w-48 h-48 rounded-full"
                  src={photoURL}
                  alt=""
                />
              </div>

              <div className="mt-[75px] md:mt-10">
                <label
                  className="font-bold  w-full dark:text-gray-100 text-slate-900"
                  htmlFor="Name"
                >
                  Full Name
                </label>
                <p className="text-lg  w-full dark:text-gray-200  text-black mb-2.5 text-slate-800">
                  {displayName}
                </p>
                <label
                  className="font-bold w-full  text-slate-900 dark:text-gray-100"
                  htmlFor="Name"
                >
                  Email Address
                </label>
                <p className="mt-1 text-base  w-full text-black text-slate-800 mb-2.5 dark:text-gray-200">
                  {email}
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <UpdateProfile setEdit={setEdit} />
      )}
    </>
  );
};

export default EditProfile;
