import React, { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ImgUploadModal = ({ open, setOpen, setSelectedFile, selectedFile, preview, setPreview }) => {
  
  
  const [closeUploadPhotoBox, setCloseUploadPhotoBox] = useState(true);
  const cancelButtonRef = useRef(null);

  const handleClose = () => {
    setSelectedFile(undefined);
    setCloseUploadPhotoBox(true);
  };
  
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const selectedFIles = [];
    const targetFilesObject = [...selectedFile];
    targetFilesObject.map((file) => {
      return selectedFIles.push(URL.createObjectURL(file));
    });

    setPreview(selectedFIles);
    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(selectedFIles);
  }, [selectedFile]);

  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files?.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files);
  };

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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white dark:bg-[#3F3F3F] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white dark:bg-[#3F3F3F] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h1 className="py-4 text-left text-sm font-bold text-black dark:text-white">
                      Choose You Photo
                    </h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 cursor-pointer absolute right-[25px] top-[20px]"
                      onClick={() => {
                        setOpen(false);
                        handleClose();
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
                      <div className="">
                        <>
                          {selectedFile ? (
                            <div className="flex items-center justify-center w-full mb-3 relative z-[1]">
                              <div className="flex flex-wrap gap-4 mb-4 px-2 py-3 overflow-y-scroll w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600">
                                <label
                                  onClick={() => {
                                    setSelectedFile(undefined);
                                  }}
                                  className="absolute z-[10] right-0 top-[-12px] bg-[#3F3F3F] rounded-full cursor-pointer"
                                >
                                  ✕
                                </label>
                                {preview?.map((url) => {
                                  return (
                                    <div className="indicator">
                                      <img
                                        accept="image/*"
                                        src={url}
                                        className="w-52 rounded-md object-cover"
                                        alt="post"
                                      />
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          ) : (
                            <>
                              {closeUploadPhotoBox ? (
                                <div className="flex items-center justify-center w-full mb-3 relative">
                                  <label
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer dark:border-gray-600"
                                  >
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
                                      onChange={onSelectFile}
                                      className="hidden"
                                      multiple
                                    />
                                  </label>
                                </div>
                              ) : (
                                <></>
                              )}
                            </>
                          )}
                        </>
                      </div>
                      <div className="flex items-center space-x-2 rounded-b dark:border-gray-600">
                        <button
                          disabled={!selectedFile}
                          onClick={() => {
                            setOpen(false);
                          }}
                          className="disabled:cursor-not-allowed text-center w-full bg-[#FF3F4A] hover:bg-[#cc323b] focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-[#FF3F4A] text-sm font-medium px-5 py-2.5 dark:bg-[#2A2A2A] dark:text-gray-300 dark:border-[#FF3F4A] dark:hover:text-white"
                        >
                          Upload Image
                        </button>
                      </div>
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

export default ImgUploadModal;
