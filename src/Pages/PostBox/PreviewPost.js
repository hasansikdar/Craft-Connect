import React, { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
const PreviewPost = ({
  openPreviewPost,
  setOpenPreviewPost,
  postText,
  preview,
}) => {
  const cancelButtonRef = useRef(null);
  return (
    <>
      <Transition.Root show={openPreviewPost} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-100000"
          initialFocus={cancelButtonRef}
          onClose={() => setOpenPreviewPost(false)}
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
                      Preview of your post
                    </h1>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 cursor-pointer absolute right-[25px] top-[20px]"
                      onClick={() => {
                        setOpenPreviewPost(false);
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
                    <div>
                      <img src={preview} className="mb-2 rounded-lg" alt="" />
                      <p>{postText}</p>
                    </div>
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

export default PreviewPost;
