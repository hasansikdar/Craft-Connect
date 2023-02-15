import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Authcontext } from '../../Context/UserContext';
import DeleteProductModal from './DeleteProductModal';

const YourProduct = () => {
    const [open, setOpen] = useState(false)

    const [productId, setProductId] = useState();

    const { user } = useContext(Authcontext);
    const url = `http://localhost:5000/allproducts?email=${user?.email}`;
    const { data: allProduct = [], refetch } = useQuery({
        queryKey: ["allProduct", user?.email],
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
                        Yours Product
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
                            {allProduct.map((allProduct, index) => {
                                const { userName, userPhotoURL, productName, productPrice, email, productImg, productDescription } = allProduct;
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
                                            <p className=''>{productPrice}৳</p>
                                        </td>
                                        <td className="p-3 px-5">
                                            <button type="button" onClick={() => { setOpen(true); setProductId(allProduct._id) }} className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                                        </td>
                                    </tr>
                                </>
                            })}


                        </tbody>
                    </table>
                </div>
            </div>
            <DeleteProductModal open={open} refetch={refetch} productId={productId} setProductId={setProductId} setOpen={setOpen} />
        </>
    );
};

export default YourProduct;
