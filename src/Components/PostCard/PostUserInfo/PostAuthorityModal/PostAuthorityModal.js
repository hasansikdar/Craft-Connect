import React from 'react';
import publicicon from '../../../../assets/icons/Shared with Public.png';
import friends from '../../../../assets/icons/friends.png';

const PostAuthorityModal = () => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className='text-center text-2xl font-bold'>Select audience</h3>
                    <div className='mt-4'>
                        <div className="">
                            <label className="label cursor-pointer">
                                <div className=' border w-10 h-10 flex items-center justify-center rounded-full'>
                                    <img className='rounded-full' src='https://spng.pinpng.com/pngs/s/74-745697_facebook-notification-icon-png-earth-logo-vector-png.png' alt="" />
                                </div>
                                <span className="label-text mr-auto ml-4">Public</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                            </label>
                        </div>
                        <div className="">
                            <label className="label cursor-pointer">
                                <div className=' border w-10 h-10 flex items-center justify-center rounded-full'>
                                    <img className='' src={friends} alt="" />
                                </div>
                                <span className="label-text mr-auto ml-4">Friends</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                            </label>
                        </div>
                        <div className="">
                            <label className="label cursor-pointer">
                                <div className=' border w-10 h-10 flex items-center justify-center rounded-full'>
                                    <img className='' src={friends} alt="" />
                                </div>
                                <span className="label-text mr-auto ml-4">Special friends</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                            </label>
                        </div>
                        <div className="">
                            <label className="label cursor-pointer">
                                <div className=' border w-10 h-10 flex items-center justify-center rounded-full'>
                                    <img className='w-8 rounded-full' src='https://www.shutterstock.com/image-vector/padlock-icon-flat-vector-illustration-260nw-1726615381.jpg' alt="" />
                                </div>
                                <span className="label-text mr-auto ml-4">Only me</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                            </label>
                        </div>
                        <div className="">
                            <label className="label cursor-pointer">
                                <div className=' border w-10 h-10 flex items-center justify-center rounded-full'>
                                    <img className='' src={friends} alt="" />
                                </div>
                                <span className="label-text mr-auto ml-4">Custom</span>
                                <input type="radio" name="radio-10" className="radio checked:bg-red-500" checked />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PostAuthorityModal;