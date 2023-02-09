import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AdCenterDetail = () => {
    const add = useLoaderData();
    const {userName} = add;
    console.log(add, userName);
    return (
        <div className='h-screen flex justify-center items-center'>
                     
        </div>
    );
};

export default AdCenterDetail;