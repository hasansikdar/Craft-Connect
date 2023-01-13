import React from "react";
import Bottom from "../Bottom/Bottom";
import Top from "../Top/Top";

const LeftSideBar = () => {
    return (
        <div className='hidden overflow-x-hidden h-screen lg:block w-[300px] p-3 bg-zinc-800 text-white   '>
            <Top></Top>
            <Bottom></Bottom>
        </div>
    );
};

export default LeftSideBar;
