import React from 'react';
import jinnahPagePic1 from '../../../assets/jinnahPagePic/jinnahPagePic1.jpg'
import jinnahPagePic2 from '../../../assets/jinnahPagePic/jinnahPagePic2.jpg'
import jinnahPagePic3 from '../../../assets/jinnahPagePic/jinnahPagePic3.jpg'
import jinnahPagePic4 from '../../../assets/jinnahPagePic/jinnahPagePic4.jpg'
const Bottom = () => {
    return (
        <div>
            <h1 className='text-lg font-semibold mb-4 rounded-br-lg'>Your shortcut</h1>
            <div>
                <div className='flex justify-start items-center gap-4 mb-4'>
                    <img src={jinnahPagePic1} alt='' className='w-12 h-12 rounded-full'/>
                    <h1 className='text-lg font-medium'>Reach Craft Products</h1>
                </div>
                <div className='flex justify-start items-center gap-4 mb-4'>
                    <img src={jinnahPagePic2} alt='' className='w-12 h-12 rounded-full'/>
                    <h1 className='text-lg font-medium'>Sugar Hit Handmade</h1>
                </div>
                <div className='flex justify-start items-center gap-4 mb-4'>
                    <img src={jinnahPagePic3} alt='' className='w-12 h-12 rounded-full'/>
                    <h1 className='text-lg font-medium'>The Craft Jar</h1>
                </div>
                <div className='flex justify-start items-center gap-4 mb-4'>
                    <img src={jinnahPagePic4} alt='' className='w-12 h-12 rounded-full'/>
                    <h1 className='text-lg font-medium'>Craft Kraft</h1>
                </div>
            </div>
        </div>
    );
};

export default Bottom;