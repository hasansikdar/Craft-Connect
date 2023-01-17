import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className='text-center'>
                <div className='lg:flex items-center justify-center mt-52'>
                    <h1 className='text-violet-700 text-6xl font-bold mb-3'>404</h1>
                    <div className='lg:ml-8'>
                        <h1 className='text-5xl mb-0 font-bold'>Page Not Found!</h1>
                        <p className='mt-3'>Sorry, we couldn't find the page you're looking for..</p>
                    </div>
                </div>
                <Link to='/'><button className='text-white bg-violet-600 border-none text-xl py-3 px-4 rounded-lg mt-5 hover:bg-blue-800'>Go Back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;