import React from 'react';
import { Link } from 'react-router-dom';

import GroupCard from './GroupCard/GroupCard';

const Groups = () => {
    return (
        // <div className='h-screen flex items-center justify-center'>
        //     <h1>This is a Groups page. Thanks</h1>
        // </div>
        <div className='flex mt-5'>
            <div>
                <GroupCard></GroupCard>
            </div>
            <div>
                <ul className="menu bg-slate-100 shadow-lg w-72 text-black p-2 rounded-box">
                    <p className="font-medium text-lg pl-3 my-1">Gropes</p>

                    <li className="hover-bordered"><Link>Your Feed</Link></li>
                    <li className="hover-bordered"><Link>Discover</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Groups;