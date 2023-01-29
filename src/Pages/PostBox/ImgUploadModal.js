import React, {
  Fragment,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";

const ImgUploadModal = ({ open, setOpen }) => {
  const cancelButtonRef = useRef(null);
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
                      Update Header Photo
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
                    <div className="flex justify-between items-center bg-white dark:bg-[#261b40] p-2 rounded">
                      <div className="flex items-center gap-3 ">
                        {/* image source is hardcode now */}
                        <img
                          src="https://avatars.githubusercontent.com/u/94055231?v=4"
                          className="h-12 w-12 rounded-full"
                          alt=""
                        />
                        <div className="">
                          <p className="text-xl font-medium dark:text-white text-black"></p>
                        </div>
                      </div>
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

export default ImgUploadModal;
