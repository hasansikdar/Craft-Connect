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
      return value?.displayName?.toLowerCase()?.includes(searchWord.toLowerCase());
    });

    if(searchWord === ''){
      setFilterData([])
    }
    else{
      setFilterData(newFilter);
    }
  };
  const clearInput = () => {
    setFilterData([]);
    setWordEntered("");
  };

  return (
    <div>
      <div className=" md:flex justify-center rounded-md items-center  border-zinc-600  bg-zinc-700 ">
        <input
          onChange={handleFilter}
          value={wordEntered}
          type="text"
          placeholder="Search"
          className="mx-2 md:mx-0 pl-4 md:pr-44 md:py-4 text-white w-full rounded-md bg-zinc-700"
        />
        <i className="pr-4">
          {filterData.length === 0 ? (
            <BiSearchAlt2></BiSearchAlt2>
          ) : (
              <RxCross2 onClick={clearInput}></RxCross2>
          )}
        </i>
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
