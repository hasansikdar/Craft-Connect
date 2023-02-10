import React from 'react';
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const UpdateProfileImage = ({myProfile, openModal, setOpenModal}) => {
    console.log(myProfile);

    const cancelButtonRef = useRef(null);

    const handleUpdateCoverImg = (event) =>{
      event.preventDefault();
      const proImage = event.target.updateProfileImg.files[0];
      // console.log(coverImg);

      const imageKey = "024d2a09e27feff54122f51afddbdfaf";
      const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
      const formData = new FormData();
      // if (selectedFile) {
      formData.append("image", proImage);
      fetch(url, {
        method: "POST",
        body: formData,
      })
      .then(res => res.json())
      .then(data =>{
        const profileImage = data?.data?.display_url;
        const profileImg = {profileImage}
        setOpenModal(false);

          fetch(`https://craft-connect-server-blond.vercel.app/profileImg/${myProfile?._id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(profileImg),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                // alert("user updated");
                console.log(data);
              }
            });

      })
    }


    return (
      <>
        <Transition.Root show={openModal} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-100000"
            initialFocus={cancelButtonRef}
            onClose={() => setOpenModal(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 backdrop-blur-[6px] backdrop-brightness-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-[250px]  justify-center p-4 text-center  mt-12 sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-100"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-100"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-[#261b40] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <div className="bg-white dark:bg-[#261b40] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <h1 className="py-4 text-left text-sm font-bold text-black dark:text-white">
                        Choose You Photo
                      </h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 cursor-pointer absolute right-[25px] top-[20px]"
                        onClick={() => {
                          setOpenModal(false);
                        }}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      <>
                        <form onSubmit={handleUpdateCoverImg} className="">
                         
                          <input
                            type="file"
                            name="updateProfileImg"
                            className="file-input file-input-bordered w-full max-w-xs"
                          />
                          <div className="flex items-center space-x-2 rounded-b dark:border-gray-600 mt-2">
                            <button
                              type="submit"
                              className="disabled:cursor-not-allowed text-center w-full bg-[#FF3F4A] hover:bg-[#cc323b] focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-[#FF3F4A] text-sm font-medium px-5 py-2.5 dark:bg-[#2C2048] dark:text-gray-300 dark:border-[#FF3F4A] dark:hover:text-white"
                            >
                              Upload Image
                            </button>
                          </div>
                        </form>
                      </>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </>
    );
};

export default UpdateProfileImage;