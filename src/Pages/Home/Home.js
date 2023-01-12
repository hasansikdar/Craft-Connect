import React from 'react';
import PostCard from '../../Components/PostCard/PostCard';
import Posts from '../Posts/Posts';
import Stories from '../Stories/Stories';

const Home = () => {
    return (
        <div>
            <div className='mx-3'>
                
                <Stories />
                <Posts></Posts>
            </div> 
    </div>
    );
};

export default Home;