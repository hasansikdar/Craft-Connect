import React from 'react';
import Bottom from '../Bottom/Bottom';
import Top from '../Top/Top';


const LeftSideBar = () => {
    return (
        <div className='hidden lg:block w-[300px] p-3 bg-slate-100 text-black ml-10 mt-5 rounded-lg'>
            <Top></Top>
            <Bottom></Bottom>
        </div>
    );
};

export default LeftSideBar;