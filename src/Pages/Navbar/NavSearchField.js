import React, { useRef, useState, Fragment } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import useClickOutside from "../../Components/helpers/clickOutside";
import SearchModal from "./SearchModal";
import { Dialog, Transition } from "@headlessui/react";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
// import {} from "react";

const NavSearchField = ({ allusers }) => {
  const [filterData, setFilterData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event?.target?.value;
    setWordEntered(searchWord);
    const newFilter = allusers?.filter((value) => {
      return value?.displayName
        ?.toLowerCase()
        ?.includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newFilter);
    }
  };
  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };

  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="w-full rounded-lg p-5 ">
          <div className="flex">
            <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
              <svg
                viewBox="0 0 20 20"
                aria-hidden="true"
                className="pointer-events-none absolute w-5 fill-gray-500 transition"
              >
                <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
              </svg>
            </div>
            <input
              type="text"
              className="w-full bg-white pl-2 text-base font-semibold outline-0 rounded-r-md pr-20 md:pr-0"
              onChange={handleFilter}
              value={wordEntered}
              placeholder=""
            />
          </div>
        </div>
      </div>

      {filterData.length !== 0 && (
        <div as="div" className="relative z-[999]">
          <div className="fixed inset-0 z-10 ">
            <div className="flex h-[450px] justify-center  text-center overflow-hidden overflow-y-auto  mt-12 sm:p-0">
              <div>
                <div className="relative transform rounded-md  bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white pb-4 sm:p-6 sm:pb-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavSearchField;
