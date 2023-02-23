import React from 'react';

const Loader = () => {
    return (
        <div className='h-96'>
            <div className='flex justify-center items-center h-full'>
                <div className='w-28 h-28 border-8 border-dashed rounded-full animate-spin mt-5 border-green-400'></div>
            </div>
        </div>
    );
};

export default Loader;