import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Authcontext } from '../../Context/UserContext';
import DeleteAddedCart from './DeleteAddedCart';
import PaymentModal from './PaymentModal';



const AddedCart = () => {
    const { user } = useContext(Authcontext);
    const [open, setOpen] = useState(false);
    const [billingDetails, setBillingDetails] = useState();
    const [openPaymentModal, setOpenPaymentModal] = useState(false);
    const [addedCartId, setAddedCartId] = useState({ email: '', name: '', price: 0 });
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
                                <th className="text-left p-3 px-5">Index</th>
                                <th className="text-left p-3 px-5">Product Image</th>
                                <th className="text-left p-3 px-5">Product Info</th>
                                <th className="text-left p-3 px-5">Product Price</th>
                                <th className="text-left p-3 px-5">Action</th>
                            </tr>
                            {addedCart.map((addedCart, index) => {
                                const { buyerName, buyerEmail, productName, productPrice, email, productImg, productDescription } = addedCart;
                                return <>
                                    <tr key={index} className="border-b hover:bg-orange-100 text-gray-900">
                                        <td className="p-3 px-5">
                                            <p className='pl-3'>{index + 1}</p>
                                        </td>
                                        <td className="p-3 px-5">

                                            <div>
                                                <img className='w-12 h-12 rounded-md' src={productImg} alt="" />
                                            </div>
                                        </td>
                                        <td className="p-3 px-5 cursor-pointer">
                                            <div>
                                                <p className='text-base'>{productName.slice(0, 25)}...</p>
                                                <p className='text-sm'>{productDescription.slice(0, 50)}...</p>
                                            </div>
                                        </td>
                                        <td className="p-3 px-5">
                                            <p>{productPrice}৳</p>
                                        </td>
                                        <td className="p-3 px-5">
                                            <div className='flex gap-x-2 items-center'>
                                                <button onClick={() => { setOpenPaymentModal(true); setBillingDetails({ email: buyerEmail, name: buyerName, price: productPrice }) }} type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Pay</button>
                                                <button onClick={() => { setOpen(true); setAddedCartId(addedCart._id); }} type="button" className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
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
            <PaymentModal billingDetails={billingDetails} openPaymentModal={openPaymentModal} setOpenPaymentModal={setOpenPaymentModal} />
        </>
    );
};

export default AddedCart;