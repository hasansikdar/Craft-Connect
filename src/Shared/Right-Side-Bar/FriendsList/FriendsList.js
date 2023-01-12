import React from 'react';
import { Link } from 'react-router-dom';

const FriendsList = () => {
    return (
        <div>
            <ul className="menu p-2 py-5 flex rounded-lg bg-white shadow-xl w-11/12 m-auto my-5 text-gray-500">
                <h1 className='text-black ml-4 mb-2'>Contacts</h1>
                <li className='hover:bg-gray-100 duration-300 rounded-lg'> 
                    <Link>
                        <div className="w-8">
                            <img src="https://placeimg.com/192/192/people" className='rounded-full' alt='frnd'/>
                        </div> 
                        <p>Muhammad Hasan</p>
                    </Link>
                </li>
                <li className='hover:bg-gray-100 duration-300 rounded-lg'> 
                    <Link>
                        <div className="w-8">
                            <img src="https://placeimg.com/192/192/people" className='rounded-full' alt='frnd'/>
                        </div> 
                        <p>Maruf Rahman</p>
                    </Link>
                </li>
                <li className='hover:bg-gray-100 duration-300 rounded-lg'>  
                    <Link>
                        <div className="w-8">
                            <img src="https://placeimg.com/192/192/people" className='rounded-full' alt='frnd'/>
                        </div> 
                        <p>Rahat Kabir Ifty</p>
                    </Link>
                </li>
                <li className='hover:bg-gray-100 duration-300 rounded-lg'> 
                    <Link>
                        <div className="w-8">
                            <img src="https://placeimg.com/192/192/people" className='rounded-full' alt='frnd'/>
                        </div> 
                        <p>Md. Abdullah Al Mamun</p>
                    </Link>
                </li>
                <li className='hover:bg-gray-100 duration-300 rounded-lg'>  
                    <Link>
                        <div className="w-8">
                            <img src="https://placeimg.com/192/192/people" className='rounded-full' alt='frnd'/>
                        </div> 
                        <p>Mohammed Ali Jinnah</p>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default FriendsList;