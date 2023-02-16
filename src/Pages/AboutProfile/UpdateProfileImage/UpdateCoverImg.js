import { Fragment, useContext, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { Authcontext } from "../../../Context/UserContext";

const UpdateCoverImg = ({open, setOpen, myProfile}) => {
  // console.log(myProfile._id);
  const {myProUpdate} = useContext(Authcontext); 

    const cancelButtonRef = useRef(null);

    const handleUpdateCoverImg = (event) =>{
      event.preventDefault();
      const coverImg = event.target.updateCover.files[0];
      // console.log(coverImg);

      const imageKey = "024d2a09e27feff54122f51afddbdfaf";
      const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
      const formData = new FormData();
      // if (selectedFile) {
      formData.append("image", coverImg);
      fetch(url, {
        method: "POST",
        body: formData,
      })
      .then(res => res.json())
      .then(data =>{
        const coverImage = data?.data?.display_url;
        const cbrImg = {coverImage}
        // console.log(data?.data?.display_url);
        setOpen(false);

          fetch(`http://localhost:5000/users/${myProfile?._id}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(cbrImg),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.modifiedCount > 0) {
                myProUpdate();
                console.log(data);
              }
            });

      })



    }


    return (
      <>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-100000"
            initialFocus={cancelButtonRef}
            onClose={() => setOpen(false)}
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
                          setOpen(false);
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
                          {/* <form
                                onSubmit={handleUpdateCoverImg}
                                className="flex items-center justify-center w-full mb-3 relative"
                              >
                                <label
                                  htmlFor="dropzone-file"
                                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600"
                                >
                                  <>
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                      <svg
                                        aria-hidden="true"
                                        className="w-10 h-10 mb-3 text-gray-600"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                        ></path>
                                      </svg>
                                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">
                                          Click to upload
                                        </span>{" "}
                                        or drag and drop
                                      </p>
                                      <p className="text-xs text-gray-500 dark:text-gray-400">
                                        PNG, JPG or GIF
                                      </p>
                                    </div>
                                    <input
                                      id="dropzone-file"
                                      type="file"
                                      name="P"
                                      className="hidden"
                                      multiple
                                    />
                                  </>
                                </label>
                              </form> */}
                          <input
                            type="file"
                            name="updateCover"
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

export default UpdateCoverImg;