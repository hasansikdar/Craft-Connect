import React from 'react';
import { BsStars } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import CreatePage from '../CreatePage';
import PageCard from '../PageCard/PageCard';

const DiscoverPage = () => {
    return (
        <div className='flex gap-8 items-start'>
            <div className='flex flex-col mt-10 gap-6'>
                <div className='flex flex-col bg-[#d9e4fc]  text-black p-5 w-60 rounded-sm'>
                    <Link to='/feature/pages'><button className='py-2 w-full px-5 mt-1 bg-[#FF3F4A] hover:bg-[#cc323b] text-white  rounded-lg'>Your feeds </button></Link>
                    <Link to='/feature/pages/discover'><button className='w-full py-2 px-5 mt-1 bg-[#FF3F4A] hover:bg-[#cc323b] text-white  rounded-lg'>Discover Pages </button></Link>
                </div>
                <div>
                    <CreatePage></CreatePage>
                </div>
            </div>
            <div className='mt-10'>
                <div className='h-[50px] rounded-lg mb-6 bg-[#e6edfc] flex items-center'>
                    <div className='w-14 bg-[#a6adbe] h-full rounded-l-lg flex justify-center items-center text-white'>
                        <BsStars className='text-2xl'></BsStars>
                    </div>
                    <h1 className='pl-8 text-gray-400'>Here you'll see all Pages!</h1>
                </div>
                <PageCard></PageCard>
            </div>
        </div>
    );
};

export default DiscoverPage;