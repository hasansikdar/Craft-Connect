import React from 'react';
const PostUserInfo = () => {
    return (
        <div className='flex justify-between'>
            {/* <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" /> */}
            <div>
                <a href='#'>Muhammad Hasan</a><br></br>
                <a href="#">5 Nov 2023</a>
                {/* The button to open modal */}
                <label htmlFor="my-modal-3" className="btn btn-sm pt-0 ml-3">o</label>
            </div>
            <div>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <label tabIndex={0} className="btn  btn-sm">...</label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
                <button className='btn btn-sm ml-2'>x</button>
            </div>
        </div>
    );
};

export default PostUserInfo;