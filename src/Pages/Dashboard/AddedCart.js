import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Authcontext } from '../../Context/UserContext';
import DeleteAddedCart from './DeleteAddedCart';
import PaymentModal from './PaymentModal';



const AddedCart = () => {
    const { user } = useContext(Authcontext);
    const [open, setOpen] = useState(false);
    const [billingDetails, setBillingDetails] = useState({ email: '', name: '', price: 1, _id: '' });
    const [openPaymentModal, setOpenPaymentModal] = useState(false);
    const [addedCartId, setAddedCartId] = useState();
    const url = `http://localhost:5000/cartproduct/${user?.email}`;
    const { data: addedCart = [], refetch } = useQuery({
        queryKey: ["addedCart"],
        queryFn: async () => {
            const res = await fetch(url);
            const data = res.json();
            return data;
        },
    });
    return (
        <>
            <div className="text-gray-200">
                <div className="p-4 flex">
                    <h1 className="text-3xl">
                        Added Cart
                    </h1>
                </div>
                <div className="px-3 py-4 flex justify-center">
                    <table className="w-full text-md bg-white shadow-md rounded mb-4 overflow-x-auto">
                        <tbody>
                            <tr className="border-b text-gray-900">
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Index</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product Image</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product Info</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product Price</th>
                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Action</th>
                            </tr>
                            {addedCart.map((addedCart, index) => {
                                const {paid, buyerName, buyerEmail, productName, productPrice, email, productImg, productDescription } = addedCart;
                                return <>
                                    <tr key={index} className="border-b hover:bg-gray-50 text-gray-900">
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className='pl-3 whitespace-no-wrap'>{index + 1}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div>
                                                <img className='w-12 h-12 rounded-md' src={productImg} alt="" />
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm cursor-pointer">
                                            <div className='w-screen md:w-full'>
                                                <p className='text-gray-900'>{productName.slice(0, 25)}...</p>
                                                <p className='text-sm text-gray-700'>{productDescription.slice(0, 50)}...</p>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className='pl-3'>${productPrice}</p>
                                        </td>
                                        <td className="p-3 px-5">
                                            <div className='flex gap-x-2 items-center'>
                                                {paid ? 
                                                <button type="button" className="bg-green-200 hover:bg-green-300 transition-colors ease-linear duration-300 rounded-lg inline-block px-3 py-2 font-semibold text-green-900 leading-tight">Paid</button>
                                                :
                                                <button onClick={() => { setOpenPaymentModal(true); setBillingDetails({ email: buyerEmail, name: buyerName, price: productPrice, _id: addedCart._id }) }} type="button" className="bg-red-200 hover:bg-red-300 transition-colors ease-linear duration-300 rounded-lg inline-block px-3 py-2 font-semibold text-red-900 leading-tight">Pay</button>
                                                }
                                                
                                                <button onClick={() => { setOpen(true); setAddedCartId(addedCart._id); }} type="button" className="bg-red-200 hover:bg-red-300 transition-colors ease-linear duration-300 rounded-lg inline-block px-3 py-2 font-semibold text-red-900 leading-tight">Delete</button>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            })}


                        </tbody>
                    </table>
                </div>
            </div>
            <DeleteAddedCart open={open} refetch={refetch} addedCartId={addedCartId} setAddedCartId={setAddedCartId} setOpen={setOpen} />
            <PaymentModal billingDetails={billingDetails} openPaymentModal={openPaymentModal} setOpenPaymentModal={setOpenPaymentModal} refetch={refetch}/>
        </>
    );
};

export default AddedCart;