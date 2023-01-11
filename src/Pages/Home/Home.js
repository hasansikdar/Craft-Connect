import React from 'react';
import LeftNav from '../../Shared/LeftNav/LeftNav';
import RightBar from '../../Shared/Right-Side-Bar/RightBar/RightBar';
import PostBox from '../PostBox/PostBox';

const Home = () => {
    return (
        <div>
        
            <div className='hidden lg:block'>
                <RightBar></RightBar>
            </div> 
    </div>
    );
};

export default Home;