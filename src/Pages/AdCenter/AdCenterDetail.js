import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AdCenterDetail = () => {
    const add = useLoaderData();
    const { userName, userPhoto, advertiseContent, advertiseBg, userEmail } = add;
    console.log(add, userName);
    return (
        <section className='h-screen gap-5 flex-col flex mt-12 justify-start w-full items-center overflow-y-auto'>
            <div>
                <div className="flex gap-3 items-center">
                    <img src={userPhoto} alt="userPhoto" className='w-[60px] h-[60px] rounded-full' />
                    <div className="text-left">
                        <p className='text-base'>{userName}</p>
                        <p className='text-xs text-gray-300'>{userEmail}</p>
                    </div>
                </div>
                <div>
                    <img src={advertiseBg} className='rounded-md shadow-md mt-2 w-full h-[500px]' alt="" />
                </div>
                <div>
                    <p className='mt-5 test-base'>{advertiseContent}</p>
                </div>
            </div>
        </section>
    );
};

export default AdCenterDetail;