import React, { useRef, useState, Fragment } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import useClickOutside from "../../Components/helpers/clickOutside";
import SearchModal from "./SearchModal";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
// import {} from "react";

const NavSearchField = ({ allusers }) => {
  const [filterData, setFilterData] = useState([]);
  console.log(filterData.length);

  // console.log(allusers?.PhotoURL);

  const cancelButtonRef = useRef(null);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  const handleFilter = (event) => {
    const searchWord = event?.target?.value;
    const newFilter = allusers?.filter((value) => {
      return value?.displayName?.toLowerCase()?.includes(searchWord.toLowerCase());
    });
    setFilterData(newFilter);
    console.log(searchWord);
  };

  return (
    <div>
      <div
        onClick={() => setOpenSearchModal(true)}
        className="hidden md:flex justify-center rounded-md items-center  border-zinc-600  bg-zinc-700 "
      >
        <input
          onChange={handleFilter}
          name='search'
          type="text"
          placeholder="Search"
          className="mx-2 md:mx-0 pl-4 pr-44 py-4 text-white w-full rounded-md bg-zinc-700"
        />
        <i className="pr-4">
          <BiSearchAlt2></BiSearchAlt2>
        </i>
      </div>

      {filterData.length !== 0 && (
        <>
          <Transition.Root show={openSearchModal} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-100000"
              initialFocus={cancelButtonRef}
              onClose={() => setOpenSearchModal(false)}
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
                <div className="fixed inset-0" />
              </Transition.Child>

              <div className="fixed inset-0 z-10 ">
                <div className="flex h-[450px] justify-center p-4 text-center overflow-hidden overflow-y-auto  mt-12 sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-100"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-100"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  >
                    <Dialog.Panel className="relative transform  bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                      <div className="bg-white rounded-md px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-6 h-6 cursor-pointer absolute right-[25px] top-[20px]"
                          onClick={() => {
                            setOpenSearchModal(false);
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
                          {filterData.map((allUser) => {
                            return (
                              <div>
                                <Link
                                  to={`/user/${allUser.email}`}
                                  className="flex items-center py-2 hover:bg-gray-300 rounded-md"
                                >
                                  <img
                                    className="w-[20px]"
                                    src={allUser?.PhotoURL}
                                    alt=""
                                  />
                                  <p>{allUser?.displayName}</p>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition.Root>
        </>
      )}
    </div>
  );
};

export default NavSearchField;
