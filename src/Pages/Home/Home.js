import React from 'react';
import RightBar from '../../Shared/Right-Side-Bar/RightBar/RightBar';
import PostBox from '../PostBox/PostBox';
import Stories from '../Stories/Stories';

const Home = () => {
    return (
        <div>
            <div className=''>
                <RightBar></RightBar>
                <Stories />
            </div> 
    </div>
    );
};

export default Home;