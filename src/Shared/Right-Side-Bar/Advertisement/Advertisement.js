import React from 'react';
import { Link } from 'react-router-dom';

const Advertisement = () => {
    return (
        <div>
            <ul className="menu p-2 py-5 flex rounded-lg bg-white shadow-xl w-11/12 m-auto my-5 text-gray-500">
                <h1 className='text-black ml-4 mb-2'>Sponsored</h1>
                <li className='hover:bg-gray-100 duration-300 rounded-lg'> 
                    <Link>
                        <div className="w-40">
                            <img src="https://placeimg.com/192/192/people" className='rounded' alt='frnd'/>
                        </div> 
                        <div>
                            <h1 className='text-black text-sm font-bold mb-2'>This is 1st Product</h1>
                            <p className='text-xs'>Where you can see our products details</p>
                        </div>
                    </Link>
                </li>
                <li className='hover:bg-gray-100 duration-300 rounded-lg'> 
                    <Link>
                        <div className="w-40">
                            <img src="https://placeimg.com/192/192/people" className='rounded' alt='frnd'/>
                        </div> 
                        <div>
                            <h1 className='text-black text-sm font-bold mb-2'>This is 2nd Product</h1>
                            <p className='text-xs'>Where you can see our products details</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Advertisement;