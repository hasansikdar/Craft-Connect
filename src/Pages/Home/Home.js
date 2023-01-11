import React from 'react';
import PostCard from '../../Components/PostCard/PostCard';
import RightBar from '../../Shared/Right-Side-Bar/RightBar/RightBar';
import Posts from '../Posts/Posts';
import Stories from '../Stories/Stories';

const Home = () => {
    return (
        <div>
            <div className=''>
                <RightBar></RightBar>
                <Stories />
                <Posts></Posts>
            </div> 
    </div>
    );
};

export default Home;